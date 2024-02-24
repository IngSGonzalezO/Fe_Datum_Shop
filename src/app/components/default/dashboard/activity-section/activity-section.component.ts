import { Component, OnInit } from '@angular/core';
import { LatestActivity } from 'src/app/shared/data/dashboard/data';
import * as chartData from '../../../../shared/data/dashboard/chartData';


@Component({
  selector: 'app-activity-section',
  templateUrl: './activity-section.component.html',
  styleUrls: ['./activity-section.component.scss']
})
export class ActivitySectionComponent implements OnInit {

  public latestActivity = LatestActivity;
  
  public bar = chartData.bar;
  public growthChart = chartData.growthChart;

  constructor() { }

  ngOnInit(): void {
  }

}
