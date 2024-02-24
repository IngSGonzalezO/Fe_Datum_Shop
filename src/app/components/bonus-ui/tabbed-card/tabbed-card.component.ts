import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabbed-card',
  templateUrl: './tabbed-card.component.html',
  styleUrls: ['./tabbed-card.component.scss']
})
export class TabbedCardComponent implements OnInit {
  public active = 1;
  public materialSuccess = "success"
  public materialSecondary = "secondary"

  constructor() { }

  ngOnInit(): void {
  }

}
