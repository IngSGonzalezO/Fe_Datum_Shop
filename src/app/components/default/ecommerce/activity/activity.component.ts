import { Component, OnInit } from '@angular/core';
import * as chartData from '../../../../shared/data/dashboard/chartData';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {

  public activityChart = chartData.activityChart
  constructor() { }

  ngOnInit(): void {
  }

}
