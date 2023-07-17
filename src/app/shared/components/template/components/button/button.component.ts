import { Component, ElementRef, OnInit } from "@angular/core";
import {
  getStringParamFromTemplateRow,
  getBooleanParamFromTemplateRow,
} from "src/app/shared/utils";
import { TemplateBaseComponent } from "../base";

interface IButtonParams {
  /** TEMPLATE PARAMETER: "variant" */
  variant:
    | "alternative"
    | "card"
    | "card-portrait"
    | "flexible"
    | "full"
    | "information"
    | "medium"
    | "navigation"
    | "short"
    | "standard"
    | "tall";
  /** TEMPLATE PARAMETER: "style". Legacy, use "variant" instead. */
  style: string;
  /** TEMPLATE PARAMETER: "disabled". If true, button is disabled and greyed out */
  disabled: boolean;
  /** TEMPLATE PARAMETER: "text_align" */
  textAlign: "left" | "centre" | "right";
  /** TEMPLATE PARAMETER: "button_align" */
  buttonAlign: "left" | "centre" | "right";
  /** TEMPLATE PARAMETER: "icon". The path to an icon asset */
  icon: string;
  /** TEMPLATE PARAMETER: "image". The path to an image asset */
  image: string;
}

/**
 * A general-purpose button component
 */
@Component({
  selector: "plh-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.scss"],
})
export class TmplButtonComponent extends TemplateBaseComponent implements OnInit {
  /** TEMPLATE PARAMETER: "variant" */
  variant: IButtonParams["variant"] = "information";
  /** TEMPLATE PARAMETER: "style". Legacy, use "variant" instead. */
  style: IButtonParams["style"];
  /** TEMPLATE PARAMETER: "disabled". If true, button is disabled and greyed out */
  disabled: IButtonParams["disabled"] = false;
  /** TEMPLATE PARAMETER: "text_align" */
  textAlign: IButtonParams["textAlign"] = "left";
  /** TEMPLATE PARAMETER: "button_align" */
  buttonAlign: IButtonParams["buttonAlign"] = "centre";
  /** TEMPLATE PARAMETER: "icon". The path to an icon asset */
  icon: IButtonParams["icon"];
  /** TEMPLATE PARAMETER: "image". The path to an image asset */
  image: IButtonParams["image"];
  /** @ignore */
  isCardPortrait: boolean = false;

  /** @ignore */
  constructor(private elRef: ElementRef) {
    super();
  }

  ngOnInit() {
    this.getParams();
  }

  private getParams() {
    this.style = `${getStringParamFromTemplateRow(this._row, "style", "information")} ${
      this.isTwoColumns() ? "two_columns" : ""
    }` as any;
    this.variant = getStringParamFromTemplateRow(this._row, "variant", "")
      .split(",")
      .join(" ") as IButtonParams["variant"];
    this.isCardPortrait = this.variant.split(" ").includes("card-portrait");
    this.disabled = getBooleanParamFromTemplateRow(this._row, "disabled", false);
    this.image = getStringParamFromTemplateRow(this._row, "image", null);
    if (this._row.disabled) {
      this.disabled = true;
    }
    this.textAlign = getStringParamFromTemplateRow(this._row, "text_align", null) as any;
    this.buttonAlign = getStringParamFromTemplateRow(this._row, "button_align", "center") as any;
    this.icon = getStringParamFromTemplateRow(this._row, "icon", null);
  }

  /** Determine if the button is inside a display group with the style "two_columns" */
  private isTwoColumns(): boolean {
    const displayGroupElement = this.elRef.nativeElement.closest(".display-group-wrapper");
    if (displayGroupElement) {
      return displayGroupElement.classList.contains("two_columns");
    } else {
      return false;
    }
  }
}
