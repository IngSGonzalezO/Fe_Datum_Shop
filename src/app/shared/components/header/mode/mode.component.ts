import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/shared/services/layout/layout.service';

@Component({
  selector: 'app-mode',
  templateUrl: './mode.component.html',
  styleUrls: ['./mode.component.scss'],
})
export class ModeComponent implements OnInit {
  public dark: boolean =
    this.layout.config.settings.layout_version == 'dark-only' ? true : false;

  constructor(public layout: LayoutService) {}

  layoutToggle() {
    this.dark = !this.dark;
    this.dark
      ? document.body.classList.add('dark-only')
      : document.body.classList.remove('dark-only');
    this.layout.config.settings.layout_version = this.dark
      ? 'dark-only'
      : 'light-only';
  }

  ngOnInit(): void {}
}
