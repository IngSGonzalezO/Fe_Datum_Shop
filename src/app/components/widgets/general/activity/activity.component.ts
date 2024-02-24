import { Component, OnInit } from '@angular/core';
import { RecentActivityData } from 'src/app/shared/data/widgets/data';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {

  public recentActivityData = RecentActivityData;

  constructor() { }

  ngOnInit(): void {
  }

}
