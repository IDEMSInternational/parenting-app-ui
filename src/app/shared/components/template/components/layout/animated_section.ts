import { Component } from "@angular/core";
import { TemplateBaseComponent } from "../base";

@Component({
  selector: "plh-tmpl-animated-section",
  template: `<div class="animated-section">
    <plh-template-component
      *ngFor="let childRow of _row.rows; index as i"
      [row]="childRow"
      [parent]="parent"
      [uid]="uid + '_' + i"
    ></plh-template-component>
  </div>`,
  styles: [
    `
      :host {
        width: 100%;
      }
    `,
  ],
})
export class AnimatedSectionComponent extends TemplateBaseComponent {}
