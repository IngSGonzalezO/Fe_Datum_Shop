import { Component, HostBinding, OnInit } from "@angular/core";
import { LayoutService } from "src/app/shared/services/layout/layout.service";

@Component({
  selector: "app-color-picker",
  templateUrl: "./color-picker.component.html",
  styleUrls: ["./color-picker.component.scss"],
})
export class ColorPickerComponent implements OnInit {
  public MIXLayout: string = "default";
  @HostBinding("@.disabled")
  public selectedValue: any;
  public primary_color: string = "#24695c";
  public secondary_color: string = "#565656";

  constructor(public layout: LayoutService) { }

  ngOnInit(): void { }

  applyColor() {
    document.documentElement.style.setProperty("--theme-default", this.primary_color);
    document.documentElement.style.setProperty("--theme-secondary", this.secondary_color);
    this.layout.config.color.primary_color = this.primary_color;
    this.layout.config.color.secondary_color = this.secondary_color;
  }
  resetColor() {
    document.documentElement.style.setProperty("--theme-default", "#24695c");
    document.documentElement.style.setProperty("--theme-secondary", "#565656");
    (<HTMLInputElement>document.getElementById("ColorPicker1")).value = "#24695c";
    (<HTMLInputElement>document.getElementById("ColorPicker2")).value = "#565656";
    this.layout.config.color.primary_color = "#24695c";
    this.layout.config.color.secondary_color = "#565656";
  }

  customizeMixLayout(val: any) {
    this.MIXLayout = val;
    this.layout.config.settings.layout_version = val;
    document.body?.classList.remove("light-only", "dark-sidebar", "dark-only");
    if (val === "default") {
      document.body?.classList.add("light-only");
    } else if (val === "dark-sidebar") {
      document.body?.classList.add("dark-sidebar");
    } else {
      document.body?.classList.add("dark-only");
    }
  }
}
