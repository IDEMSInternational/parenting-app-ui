import { Test, TestingModule } from "@nestjs/testing";
import { INestApplication } from "@nestjs/common";
import * as request from "supertest";
import { AppModule } from "./../src/app.module";
import { randomUUID } from "crypto";
import { bootstrapTestDB, DBQuery } from "./test.utils";

describe("AppController (e2e)", () => {
  let app: INestApplication;

  beforeAll(async () => await bootstrapTestDB());

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it("/status (GET)", () => {
    return request(app.getHttpServer()).get("/status").expect(200).expect("[test_e2e] API Up");
  });

  it("Creates new user", async () => {
    const app_user_id = randomUUID();
    const endpoint = `/app_users/${app_user_id}`;
    const payload = mockPostUser(app_user_id);
    const { status, body } = await request(app.getHttpServer()).post(endpoint).send(payload);
    console.log({ status, body });
    expect(status).toEqual(201);
    expect(body.app_user_id).toEqual(app_user_id);
  });

  it("Creates user on custom DB", async () => {
    const deploymentDBName = `test_e2e_${generateTestID()}`;
    const app_user_id = randomUUID();
    const endpoint = `/app_users/${app_user_id}`;
    const { status, body } = await request(app.getHttpServer())
      .post(endpoint)
      .set("x-deployment-db-name", deploymentDBName)
      .send(mockPostUser(app_user_id));

    expect(status).toEqual(201);
    expect(body.app_user_id).toEqual(app_user_id);
    const { rowCount } = await DBQuery("SELECT * from app_users", deploymentDBName);
    expect(rowCount).toEqual(1);
  });

  it("Handles multiple near-concurrent requests to different dbs", async () => {
    const dbNameBase = `test_e2e_${generateTestID()}`;
    const deploymentDBNames = new Array(5).fill(0).map((_, i) => `${dbNameBase}_${i}`);
    const userIdBase = randomUUID();
    const requests = deploymentDBNames.map(async (deploymentDBName, i) => {
      // Set 500ms delay between requests
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve(true);
        }, 500 * i)
      );
      const app_user_id = `${userIdBase}_${i}`;
      const { status, body } = await requestUserPost(app, deploymentDBName, app_user_id);
      return { status, body, deploymentDBName };
    });
    const responses = await Promise.all(requests);
    console.log(JSON.stringify(responses, null, 2));
    const rowCounts: number[] = [];
    for (const deploymentDBName of deploymentDBNames) {
      const { rowCount, rows } = await DBQuery("SELECT * from app_users", deploymentDBName);
      console.log({ deploymentDBName, rowCount, rows });
      rowCounts.push(rowCount);
    }
    expect(rowCounts).toEqual([1, 1, 1, 1, 1]);
  });

  // TODO - appears to be issue related to model creation and possibly object memory allocation
  // (sequelize model retains wrong db connection)

  /**
   * Doesn't work - seems to be strange memory management issue when creating/injecting requests
   * Often 1 request gets dropped or 2 may go into same db
   */
  it("Handles multiple concurrent requests to different dbs", async () => {
    const dbNameBase = `test_e2e_${generateTestID()}`;
    const deploymentDBNames = new Array(5).fill(0).map((_, i) => `${dbNameBase}_${i}`);

    // HACK - parallel requests appear to only
    const setupRequests = deploymentDBNames.map(async (deploymentDBName) => {
      const { status } = await requestDBSetup(app, deploymentDBName);
      return status;
    });
    const setupResponses = await Promise.all(setupRequests);

    console.log({ setupResponses });
    console.log("\x1b===========================================\x1b[0m");
    // Expect 200 status code for each db name setup
    expect(setupResponses).toEqual(deploymentDBNames.map(() => 200));

    const userIdBase = randomUUID();
    const requests = deploymentDBNames.map(async (deploymentDBName, i) => {
      const app_user_id = `${userIdBase}_${i}`;
      const { status, body } = await requestUserPost(app, deploymentDBName, app_user_id);
      return { status, body, deploymentDBName };
    });
    const responses = await Promise.all(requests);
    console.log(JSON.stringify(responses, null, 2));

    const rowCounts: number[] = [];
    for (const deploymentDBName of deploymentDBNames) {
      const { rowCount, rows } = await DBQuery("SELECT * from app_users", deploymentDBName);
      console.log({ deploymentDBName, rowCount, rows });
      rowCounts.push(rowCount);
    }
    // Expect 1 db row per endpoint
    expect(rowCounts).toEqual(deploymentDBNames.map(() => 1));
  });
});

async function requestUserPost(app: INestApplication, dbName: string, app_user_id) {
  const endpoint = `/app_users/${app_user_id}`;
  const payload = mockPostUser(app_user_id);
  return request(app.getHttpServer())
    .post(endpoint)
    .set("x-deployment-db-name", dbName)
    .send(payload);
}

async function requestDBSetup(app: INestApplication, dbName: string) {
  const endpoint = `/status`;
  return request(app.getHttpServer()).get(endpoint).set("x-deployment-db-name", dbName);
}

function mockPostUser(app_user_id: string) {
  return {
    app_user_id,
    app_deployment_name: "test",
    app_version: "0.0.0",
    contact_fields: {},
    device_info: {},
  };
}

/** Generate a random 6-character id for testing */
function generateTestID() {
  return randomUUID().substring(0, 6);
}

async function _wait(ms = 1000) {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(true);
    }, ms)
  );
}
