import { Component, OnInit } from '@angular/core';
import * as data from '../../../shared/data/ui-kits/progress'

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {

  public progressBars = data.progressBars
  public smallProgressBars = data.smallProgressBars
  public customProgressBars = data.customProgressBars
  
  constructor() { }

  ngOnInit(): void {
  }

}
