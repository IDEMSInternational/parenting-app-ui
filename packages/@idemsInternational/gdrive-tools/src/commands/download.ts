#!/usr/bin/env node
import chalk from "chalk";
import * as fs from "fs-extra";
import logUpdate from "log-update";
import path from "path";
import PQueue from "p-queue";
import { drive_v3 } from "googleapis";
import { GaxiosResponse, GaxiosOptions } from "gaxios";

import {
  GDRIVE_OFFICE_MAPPING,
  MIMETYPE_EXTENSIONS,
  logError,
  listGdriveFolder,
  generateFolderFlatMapStats,
  ILocalFileWithStats,
  getGDriveFileById,
} from "../utils";

const GOOGLE_FOLDER_MIMETYPE = "application/vnd.google-apps.folder";

/***************************************************************************************
 * CLI
 * @example download
 *************************************************************************************/
interface IProgramOptions {
  folderId: string;
  fileEntry64?: string;
  outputPath: string;
  cachePath: string;
  credentialsPath: string;
  authTokenPath: string;
}

import { Command } from "commander";
import { authorizeGDrive } from "./authorize";
import { PATHS } from "../paths";
const program = new Command("download");
export default program
  .description("Get active deployment")
  .requiredOption("-id --folder-id <string>", "Unique ID of folder to download (gdrive url suffix)")
  .option(
    "-f --file-entry-64 <base64>",
    "base64 encoded metadata of single file to download (read from cache entry). Default downloads all"
  )
  .requiredOption(
    "-o --output-path <string>",
    "Output path for downloaded files (default ./output)",
    PATHS.DEFAULT_OUTPUT_FOLDER
  )
  .requiredOption(
    "-cache --cache-path <string>",
    "Cache path for downloaded files (default ./cache)",
    PATHS.DEFAULT_CACHE_FOLDER
  )
  .requiredOption(
    "-c --credentials-path <string>",
    "Path to credentials JSON",
    PATHS.DEFAULT_CREDENTIALS
  )
  .requiredOption("-a --auth-token-path <string>", "Path to token JSON", PATHS.DEFAULT_TOKEN)
  .action(async (options: IProgramOptions) => {
    new GDriveDownloader(options).run();
  });

// Run if called directly from Node
if (require.main === module) {
  if (!process.argv.slice(2).length) {
    console.log(chalk.yellow("No command specified. See help below:"));
    program.outputHelp();
    process.exit(0);
  }
  program.parse(process.argv);
}

/***************************************************************************************
 * Main Methods
 *************************************************************************************/

class GDriveDownloader {
  private drive: drive_v3.Drive;

  constructor(private options: IProgramOptions) {
    const { outputPath, cachePath } = this.options;
    // prepare folders
    fs.ensureDirSync(outputPath);
    fs.ensureDirSync(cachePath);
    fs.ensureDirSync(PATHS.LOGS_DIR);
    fs.emptyDirSync(outputPath);
    console.log(chalk.yellow("Downloading GDrive Data"));
  }

  public async run() {
    const { fileEntry64, folderId, authTokenPath, credentialsPath } = this.options;
    this.drive = await authorizeGDrive({ authTokenPath, credentialsPath });
    // Handle case of single or full download
    if (fileEntry64) {
      const cachedEntry: IGDriveFileWithFolder = JSON.parse(
        Buffer.from(fileEntry64, "base64").toString()
      );
      return this.processSingleFileDownload(cachedEntry);
    } else {
      return this.processFullFolderDownload(folderId);
    }
  }

  /**
   * Sync a single file, bypassing cache
   * Note - requires a previous cache entry so that the full folder subpath of the file is
   * known (otherwise would need recursive parents search)
   */
  private async processSingleFileDownload(cachedEntry: IGDriveFileWithFolder) {
    const serverEntry = await getGDriveFileById(this.drive, cachedEntry.id);
    const newEntry = { ...cachedEntry, ...serverEntry };
    await this.processSyncActions({ ...SYNC_ACTIONS_EMPTY, new: [newEntry] });
    this.updateCacheContentsFile(newEntry);
    console.log(chalk.green("Download Complete"));
  }
  /** Download a full folder */
  private async processFullFolderDownload(folderId: string) {
    console.log(chalk.yellow("Retrieving list of files"));
    const files = await this.listGdriveFilesRecursively(folderId);
    // Generate list of files to download
    const actions = this.prepareSyncActionsList(files);
    await this.processSyncActions(actions);
    this.writeCacheContentsFile(files);
    console.log(chalk.green("Download Complete"));
  }

  private writeCacheContentsFile(files: IGDriveFileWithFolder[]) {
    const { cachePath } = this.options;
    const contents = JSON.stringify(files, null, 2);
    const contentsPath = path.resolve(cachePath, "_drive_contents.json");
    fs.writeFileSync(contentsPath, contents);
  }
  private updateCacheContentsFile(file: IGDriveFileWithFolder) {
    const { cachePath } = this.options;
    const contentsPath = path.resolve(cachePath, "_drive_contents.json");
    const contents: IGDriveFileWithFolder[] = fs.readJSONSync(contentsPath);
    const updateIndex = contents.findIndex((entry) => entry.id === file.id);
    console.log("update contents", contents[updateIndex], file);
    if (updateIndex > -1) {
      contents[updateIndex] = file;
    }
    return this.writeCacheContentsFile(contents);
  }

  /**
   * Download all files from google drive server to local, checking via cache
   * for files that already exist, or have been modified/deleted etc.
   */
  private async processSyncActions(actions: ISyncActions) {
    const { cachePath } = this.options;
    // Handle Deleted
    for (const { folderPath } of actions.deleted) {
      fs.removeSync(path.resolve(cachePath, folderPath));
    }
    // Handle New and Updated
    const fileDownloads = [...actions.new, ...actions.updated];
    const queue = new PQueue({ autoStart: false });
    for (const file of fileDownloads) {
      queue.add(async () => {
        const { folderPath } = file;
        let targetFilename = file.name;
        // assign correct file extension if exporting
        if (GDRIVE_OFFICE_MAPPING[file.mimeType]) {
          targetFilename += `.${MIMETYPE_EXTENSIONS[file.mimeType]}`;
        }
        const cacheTargetPath = path.resolve(cachePath, folderPath, targetFilename);
        fs.ensureDirSync(path.dirname(cacheTargetPath));
        await this.downloadGdriveFile(cacheTargetPath, file);
      });
    }
    const total = fileDownloads.length;
    queue.on("next", () => {
      logUpdate(chalk.blue(`${total - queue.pending}/${total} downloaded`));
    });
    logUpdate.done();
    queue.start();
    await queue.onIdle();
  }

  /**
   * Compare list of server files with local cache to determine new/updated/same/deleted
   */
  private prepareSyncActionsList(serverFiles: IGDriveFileWithFolder[]) {
    const { cachePath } = this.options;
    const output: ISyncActions = { new: [], updated: [], same: [], deleted: [], ignored: [] };

    // generate hashmaps for easier lookup and compare of server and local files
    const localFilesHashmap = generateFolderFlatMapStats(cachePath);
    const serverFilesHashmap: { [relative_path: string]: IGDriveFileWithFolder } = {};

    // Compare server with local
    for (const serverFile of serverFiles) {
      (() => {
        const { folderPath, mimeType } = serverFile;
        let targetFilename = serverFile.name;
        // assign correct file extension if exporting
        if (GDRIVE_OFFICE_MAPPING[mimeType]) {
          targetFilename += `.${MIMETYPE_EXTENSIONS[mimeType]}`;
        }

        // run a regex test for anything ending .abc(d)
        // gdrive keeps duplicate open office formats of gsheets without extension
        // if uploaded as excel files, so these will be omitted (duplicate of converted export)
        const hasExtension = /\.([a-z0-9]){3,4}$/gi.test(targetFilename);
        if (!hasExtension) {
          output.ignored.push(serverFile);
          return;
        }
        // add to hashmap for use in local-server comparison
        const cacheRelativePath = folderPath ? `${folderPath}/${targetFilename}` : targetFilename;
        serverFilesHashmap[cacheRelativePath] = serverFile;

        const cacheFile = localFilesHashmap[cacheRelativePath];
        if (cacheFile) {
          // compare with modified times instead of checksums
          const isSame = this.isServerFileSameAsLocalFile(serverFile, cacheFile);

          if (isSame) {
            output.same.push(serverFile);
          } else {
            output.updated.push(serverFile);
          }
        } else {
          output.new.push(serverFile);
        }
      })();
    }
    // compare local with server to check for delete
    Object.keys(localFilesHashmap).forEach((relativePath) => {
      if (!serverFilesHashmap[relativePath]) output.deleted.push({ folderPath: relativePath });
    });
    // generate summary
    const summary = {} as any;
    Object.entries(output).forEach(([key, value]) => (summary[key] = value.length));
    output.summary = summary;
    console.log(summary);
    return output;
  }

  /**
   * Compare google drive server and local files, using md5 checksums if exist or modified
   * times if not (google sheets/docs don't retain md5 checksum)
   */
  private isServerFileSameAsLocalFile(
    serverFile: IGDriveFileWithFolder,
    localFile: ILocalFileWithStats
  ) {
    if (serverFile.md5Checksum) {
      return serverFile.md5Checksum === localFile.checksum;
    } else {
      return serverFile.modifiedTime === localFile.mtime.toISOString();
    }
  }

  /**
   * List all the files in a google drive folder recursively
   *
   * NOTE - as drive api only allows search for a single folder at a time need to run
   * recursively for any subfolders found
   * https://issuetracker.google.com/issues?q=status:open%20componentid:191650%2B%20ancestors
   * @param baseFolderId google-api folder id
   */
  private async listGdriveFilesRecursively(baseFolderId: string) {
    // Create queue for processing requests in parallel
    const queue = new PQueue({ autoStart: false, concurrency: 10 });
    const allFolders = [];
    const allFiles: IGDriveFileWithFolder[] = [];
    const [startTime] = process.hrtime();
    // Define recursive function
    const listRecursively = (folderId: string, folderPath = "") => {
      queue.add(async () => {
        const folderContents = await listGdriveFolder(this.drive, folderId);
        const folderFiles = folderContents.filter(
          (file) => file.mimeType !== GOOGLE_FOLDER_MIMETYPE
        );
        folderFiles.forEach((f) => {
          allFiles.push({ ...f, folderPath });
        });
        const subFolders = folderContents.filter(
          (file) => file.mimeType === GOOGLE_FOLDER_MIMETYPE
        );
        for (let subfolder of subFolders) {
          allFolders.push(subfolder);
          const subfolderPath = folderPath ? `${folderPath}/${subfolder.name}` : subfolder.name;
          listRecursively(subfolder.id, subfolderPath);
        }
      });
    };
    // Start queue, handle logging and wait for complete
    queue.add(() => listRecursively(baseFolderId, ``));
    queue.on("next", (e) => {
      logUpdate(chalk.blue(`Scanning: ${allFolders.length + 1} folders, ${allFiles.length} files`));
    });
    queue.start();
    await queue.onIdle();
    logUpdate.done();
    const [endTime] = process.hrtime();
    console.log(chalk.blue(`Scan complete in ${endTime - startTime}s`));
    return allFiles;
  }

  /** Export a file from google drive, converting from drive files types to office where required */
  private downloadGdriveFile(localTargetPath: string, file: IGDriveFileWithFolder) {
    return new Promise<void>((resolve, reject) => {
      // Handle the export/download
      fs.createFileSync(localTargetPath);
      const dest = fs.createWriteStream(localTargetPath);
      // assign mimetype for conversion from google file formats to office format
      const mimeType = GDRIVE_OFFICE_MAPPING[file.mimeType] || file.mimeType;
      dest.on("close", () => {
        // assign the same modified time to the file as google drive file
        const mtime = new Date(file.modifiedTime);
        fs.utimesSync(localTargetPath, mtime, mtime);
        resolve();
      });
      const params = { fileId: file.id, mimeType, alt: "media" };
      const options: GaxiosOptions = { responseType: "stream", timeout: 30000 };
      // export gsheet/doc to office format
      if (GDRIVE_OFFICE_MAPPING[file.mimeType]) {
        this.drive.files.export(params, options, (err, res: GaxiosResponse) => {
          if (err) handleFileDownloadError(err, file, localTargetPath);
          else res.data.pipe(dest);
        });
      }
      // download other files without conversion
      else {
        this.drive.files.get(params, options, (err, res: GaxiosResponse<any>) => {
          if (err) handleFileDownloadError(err, file, localTargetPath);
          else res.data.pipe(dest);
        });
      }
    });
  }
}

function handleFileDownloadError(err: Error, file: IGDriveFileWithFolder, localTargetPath: string) {
  fs.removeSync(localTargetPath);
  let response = (err as any).response;
  const msg2 = response?.statusText || err.message || "";
  logError({
    msg1: `failed to download file: ${file.folderPath}/${file.name}`,
    msg2,
    logOnly: true,
  });
}

interface IGDriveFileWithFolder extends drive_v3.Schema$File {
  /** list of parent folders to file */
  folderPath: string;
}
interface ISyncActions {
  new: IGDriveFileWithFolder[];
  deleted: { folderPath: string }[];
  updated: IGDriveFileWithFolder[];
  same: IGDriveFileWithFolder[];
  ignored: IGDriveFileWithFolder[];
  summary?: {
    new: number;
    updated: number;
    same: number;
    ignored: number;
  };
}
const SYNC_ACTIONS_EMPTY: ISyncActions = {
  new: [],
  deleted: [],
  updated: [],
  same: [],
  ignored: [],
};

interface IFileCompareItem {
  file: IGDriveFileWithFolder;
  cacheTargetPath: "";
}
