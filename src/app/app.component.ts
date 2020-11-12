import { Component } from "@angular/core";

import { Platform, MenuController } from "@ionic/angular";
import { Router } from "@angular/router";
import { Plugins, Capacitor } from "@capacitor/core";
const { SplashScreen } = Plugins;
import { NotificationService } from "./shared/services/notification/notification.service";
import { DbService } from "./shared/services/db/db.service";
import { ThemeService } from './feature/theme/theme-service/theme.service';
import { ChatService } from "./feature/chat/chat-service/chat.service";
import { SurveyService } from "./feature/survey/survey.service";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent {
  skipTutorial: boolean;
  constructor(
    private platform: Platform,
    private menuController: MenuController,
    private router: Router,
    private notifications: NotificationService,
    private dbService: DbService,
    private chatService: ChatService,
    private themeService: ThemeService,
    private surveyService: SurveyService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.themeService.init();
    this.platform.ready().then(async () => {
      await this.surveyService.runSurvey("analytics");
      
      this.skipTutorial = true;
      this.dbService.init();
      this.menuController.enable(true, "main-side-menu");

      this.chatService.init(!Capacitor.isNative).subscribe();
      if (Capacitor.isNative) {
        SplashScreen.hide();
        this.notifications.init();
      }
    });
  }

  clickOnMenuItem(id: string) {
    this.menuController.close("main-side-menu");
    this.router.navigateByUrl("/" + id);
  }
}
