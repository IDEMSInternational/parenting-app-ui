import { Injectable } from "@angular/core";
import { addDays } from "@fullcalendar/angular";
import { addHours, addMinutes } from "date-fns";
import { FlowTypes } from "src/app/shared/model";
import { DataEvaluationService } from "src/app/shared/services/data/data-evaluation.service";
import { DATA_LIST } from "src/app/shared/services/data/data.service";
type ICampaigns = { [campaign_id: string]: FlowTypes.Campaign_listRow[] };
@Injectable({ providedIn: "root" })
export class CampaignService {
  campaigns: ICampaigns;

  constructor(private dataEvaluationService: DataEvaluationService) {
    this.loadCampaigns();
  }

  public async getNextCampaignRow(campaign_id: string) {
    // TODO - decide best way to handle keeping data fresh
    await this.dataEvaluationService.refreshDBCache();

    if (!this.campaigns[campaign_id]) {
      console.error("no data exists for campaign", campaign_id);
      return null;
    }
    const campaignRows = this.campaigns[campaign_id];
    const evaluatedRows = [];
    for (const row of campaignRows) {
      const evaluatedRow = await this.evaluateCampaignRow(row);
      evaluatedRows.push(evaluatedRow);
      if (evaluatedRow._active) {
        console.log("[Campaign] - next row", { campaign_id, evaluatedRow, evaluatedRows });
        return evaluatedRow;
      }
    }
    console.log("[Campaign] - none active", { campaign_id, evaluatedRows });
    return null;
  }

  private loadCampaigns() {
    // merge all campaign_row data lists
    const allCampaignRows: FlowTypes.Campaign_listRow[] = [].concat.apply(
      [],
      DATA_LIST.filter((list) => list.flow_subtype === "campaign_rows").map((list) => list.rows)
    );
    const allCampaignRowsByPriority = allCampaignRows.sort(
      (a, b) => (b.priority || 0) - (a.priority || 0)
    );
    const campaignsById: ICampaigns = {};
    allCampaignRowsByPriority.forEach((row) => {
      const campaign_list = row.campaign_list || [];
      campaign_list.forEach((campaign_id) => {
        if (!campaignsById[campaign_id]) {
          campaignsById[campaign_id] = [];
        }
        campaignsById[campaign_id].push(row);
      });
    });
    this.campaigns = campaignsById;
  }

  public async evaluateCampaignRow(row: FlowTypes.Campaign_listRow) {
    const deactivation_condition_list = row.deactivation_condition_list || [];
    row.deactivation_condition_list = await Promise.all(
      deactivation_condition_list.map(async (condition) => {
        const _satisfied = await this.evaluateCondition(condition);
        return { ...condition, _satisfied };
      })
    );
    const activation_condition_list = row.activation_condition_list || [];
    row.activation_condition_list = await Promise.all(
      activation_condition_list.map(async (condition) => {
        const _satisfied = await this.evaluateCondition(condition);
        return { ...condition, _satisfied };
      })
    );
    if (row.notification_schedule) {
      row.notification_schedule = this.evaluateCampaignNotification(row.notification_schedule);
    }
    // assume active if all activation criteria met and no deactivation criteria satisfied
    row._active =
      row.activation_condition_list.every((c) => c._satisfied === true) &&
      !row.deactivation_condition_list.find((c) => c._satisfied === true);
    return row;
  }

  private evaluateCampaignNotification(schedule: FlowTypes.Campaign_notificationSchedule) {
    const { time, delay } = schedule;
    let d = new Date();
    if (time) {
      d.setHours(Number(time.hour || d.getHours()));
      d.setMinutes(Number(time.minute || d.getMinutes()));
    }
    if (delay) {
      d = addDays(d, Number(delay.days || 0));
      d = addHours(d, Number(delay.hours || 0));
      d = addMinutes(d, Number(delay.minutes || 0));
    }
    schedule._schedule_at = d;
    return schedule;
  }

  private evaluateCondition(condition: FlowTypes.DataEvaluationCondition) {
    return this.dataEvaluationService.evaluateReminderCondition(condition);
  }
}
