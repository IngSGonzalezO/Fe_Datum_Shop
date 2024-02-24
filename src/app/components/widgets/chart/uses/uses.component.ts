import { Component, OnInit } from '@angular/core';
import * as chartData from '../../../../shared/data/widgets/chart';

@Component({
  selector: 'app-uses',
  templateUrl: './uses.component.html',
  styleUrls: ['./uses.component.scss']
})
export class UsesComponent implements OnInit {

  public uses = chartData.WidgetsUserChart;

  constructor() { }

  ngOnInit(): void {
  }

}
