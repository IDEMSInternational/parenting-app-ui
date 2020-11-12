import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { RemindersService } from 'src/app/feature/reminders/services/reminders.service';
import { LocalStorageService } from 'src/app/shared/services/local-storage/local-storage.service';
import { toolboxTopicNames } from 'src/app/shared/services/toolbox/toolbox-topic-metadata';
import { ToolboxTopicType } from 'src/app/shared/services/toolbox/toolbox.model';
import { ToolboxService } from 'src/app/shared/services/toolbox/toolbox.service';
import { URLParts } from '../message.converter';
import { ChatAction } from './chat-actions';

@Injectable({
  providedIn: 'root'
})
export class ChatActionService {

  constructor(private toolboxService: ToolboxService, private router: Router, private localStorageService: LocalStorageService,
    private remindersService: RemindersService) { }

  public async executeChatAction(action: ChatAction) {
    switch (action.type) {
      case "UNLOCK_TOOLBOX_TOPIC": return this.unlockToolboxTopic(action.params);
      case "NAVIGATE": return this.navigate(action.params as any);
      case "FINISH_WELCOME": return this.localStorageService.setBoolean("welcome_finished", true);
      case "CREATE_REMINDER": return this.createReminder(action.params);
      default: return;
    }
  }

  private unlockToolboxTopic(paramMap: { [key: string]: string}) {
    if (paramMap.topic) {
      let matchingTopic = toolboxTopicNames.find((topic) => topic.type === paramMap.topic);
      if (matchingTopic) {
        this.toolboxService.unlockTopic(paramMap.topic as ToolboxTopicType);
      }
    }
  }

  private createReminder(paramMap: { [key: string]: string}) {
    const now = new Date();

    // If no due parameter set to 24 hours from now
    let due = new Date(now.getTime() + 24 * 3600000);
    if (paramMap["due"]) {
      due = new Date(paramMap["due"]);
    }
    const reminder = {
      _created: now.toISOString(),
      _modified: now.toISOString(),
      due: due.toISOString(),
      type: paramMap["type"],
      complete: false,
      data: {},
      notify: paramMap["notify"] === "true",
      repeats: null,
      notifications: [],
    };
    this.remindersService.setReminder(reminder as any);
  }

  private navigate(urlParts: URLParts) {
    console.log("NAVIGATE??", urlParts);
    let url = urlParts.path;
    if (urlParts.query) {
      url += "?" + urlParts.query;
    }
    this.router.navigateByUrl(url);
  }
}
