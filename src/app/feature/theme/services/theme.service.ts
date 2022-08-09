import { Injectable } from "@angular/core";
import { IpcService } from "src/app/shared/services/ipc/ipc.service";
import { LocalStorageService } from "src/app/shared/services/local-storage/local-storage.service";
import { BASE_THEME, BUILT_IN_EDITABLE_THEMES } from "../built-in-themes";
import { AppTheme } from "../theme.model";

@Injectable({
  providedIn: "root",
})
export class ThemeService {
  static THEME_UPDATE_CHANNEL = "THEME_UPDATE_CHANNEL";

  currentTheme: AppTheme;

  constructor(private ipcService: IpcService, private localStorageService: LocalStorageService) {}

  /** Calculate all custom properties inherited for a particular element */
  public calculateElCustomProperties(el: Element) {
    const props = {};
    const customProps = this.listAllCssCustomProperties();
    const computedStyles = window.getComputedStyle(el);
    for (const prop of Object.keys(customProps)) {
      props[prop] = computedStyles.getPropertyValue(prop).trim();
    }
    return props;
  }

  /**
   * Iterate through all style sheets on a page to extract a list of custom css properties
   * @returns hashmap containing all properties and value corresponding to latest-processed sheet
   *
   * Adapted from https://css-tricks.com/how-to-get-all-custom-properties-on-a-page-in-javascript/
   */
  private listAllCssCustomProperties() {
    const customPropsHashmap = {};
    for (const styleSheet of Array.from(document.styleSheets)) {
      if (this.isSameDomain(styleSheet)) {
        for (const rule of Array.from(styleSheet.cssRules)) {
          if (rule instanceof CSSStyleRule) {
            const customStyleProps = Array.from(rule.style).filter((prop) => prop.startsWith("--"));
            for (const prop of customStyleProps) {
              customPropsHashmap[prop] = rule.style.getPropertyValue(prop).trim();
            }
          }
        }
      }
    }
    return customPropsHashmap;
  }

  /** Determine if style is local styleblock or from stylesheet on same domain */
  private isSameDomain = (styleSheet: CSSStyleSheet) =>
    styleSheet.href ? styleSheet.href.startsWith(location.origin) : true;

  /*********************************************************************************
   *  LEGACY CODE (2022-08-07) - To be reviewed
   *  Removals: 2022-08-09 PR 1471
   *********************************************************************************/

  init() {
    // Listens on IPC for updates to current theme
    this.ipcService.listen(ThemeService.THEME_UPDATE_CHANNEL).subscribe((themeName: string) => {
      let themeMap = this.getThemeMap();
      this.currentTheme = themeMap[themeName];
    });

    this.currentTheme = this.getCurrentTheme();
    this.applyTheme(this.currentTheme.name);
  }

  public applyTheme(themeName: string) {
    document.body.dataset.theme = themeName;
  }

  private getThemeMap(): { [themeName: string]: AppTheme } {
    let editableThemeMap = this.localStorageService.getJSON("editableThemes");
    if (!editableThemeMap || Object.keys(editableThemeMap).length < 1) {
      editableThemeMap = {};
      BUILT_IN_EDITABLE_THEMES.forEach((theme) => {
        editableThemeMap[theme.name] = this.populateWithDefaults(theme);
      });
      this.localStorageService.setJSON("editableThemes", editableThemeMap);
    }
    return editableThemeMap;
  }

  private saveThemeMap(themeMap: { [themeName: string]: AppTheme }) {
    this.localStorageService.setJSON("editableThemes", themeMap);
  }

  public getCurrentTheme(): AppTheme {
    const themeMap = this.getThemeMap();
    const currentThemeName = this.localStorageService.getString("currentThemeName");
    if (currentThemeName) {
      this.currentTheme = themeMap[currentThemeName];
    } else {
      this.currentTheme = { ...BASE_THEME };
    }

    return this.currentTheme;
  }

  public setCurrentTheme(themeName: string) {
    let themeMap = this.getThemeMap();
    if (themeMap[themeName]) {
      this.currentTheme = themeMap[themeName];
    } else {
      this.currentTheme = BASE_THEME;
    }
    this.applyTheme(this.currentTheme.name);
    this.localStorageService.setString("currentThemeName", this.currentTheme.name);
    this.ipcService.send(ThemeService.THEME_UPDATE_CHANNEL, themeName);
  }

  public createNewTheme(themeName: string) {
    let themeMap = this.getThemeMap();
    let newTheme: AppTheme = { ...BASE_THEME, name: themeName, editable: true };
    themeMap[newTheme.name] = newTheme;
    this.saveThemeMap(themeMap);
  }

  public updateTheme(theme: AppTheme) {
    let themeMap = this.getThemeMap();
    themeMap[theme.name] = theme;
    this.saveThemeMap(themeMap);
    if (theme.name === this.currentTheme.name) {
      this.currentTheme = theme;
      this.localStorageService.setJSON("currentTheme", theme);
    }
    this.ipcService.send(ThemeService.THEME_UPDATE_CHANNEL, theme.name);
  }

  public populateWithDefaults(theme: AppTheme): AppTheme {
    let newTheme = { ...theme };
    Object.keys(BASE_THEME.colors).forEach((colorId) => {
      if (!newTheme.colors[colorId]) {
        newTheme.colors[colorId] = BASE_THEME.colors[colorId];
      }
      if (newTheme.colors[colorId].lightValue && !newTheme.colors[colorId].darkValue) {
        newTheme.colors[colorId].darkValue = newTheme.colors[colorId].lightValue;
      }
      if (newTheme.colors[colorId].darkValue && !newTheme.colors[colorId].lightValue) {
        newTheme.colors[colorId].lightValue = newTheme.colors[colorId].darkValue;
      }
    });
    return newTheme;
  }

  public getThemes(): AppTheme[] {
    const themeMap = this.getThemeMap();
    const populatedThemes = Object.keys(themeMap).map((themeName) => {
      return this.populateWithDefaults(themeMap[themeName]);
    });
    return populatedThemes;
  }
}
