import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-nav',
  templateUrl: './sub-nav.component.html',
  styleUrls: ['./sub-nav.component.scss'],
})
export class SubNavComponent implements OnInit {
  public open: boolean = true;
  public open1: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  subMenu() {
    this.open = !this.open;
  }
  subMenu1() {
    this.open1 = !this.open1;
  }
}
