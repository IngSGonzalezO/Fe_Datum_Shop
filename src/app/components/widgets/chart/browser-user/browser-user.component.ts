import { Component, OnInit } from '@angular/core';
import * as chartData from '../../../../shared/data/widgets/chart';

@Component({
  selector: 'app-browser-user',
  templateUrl: './browser-user.component.html',
  styleUrls: ['./browser-user.component.scss']
})
export class BrowserUserComponent implements OnInit {

  public browserUser = chartData.BrowserUses;

  constructor() { }

  ngOnInit(): void {
  }

}
