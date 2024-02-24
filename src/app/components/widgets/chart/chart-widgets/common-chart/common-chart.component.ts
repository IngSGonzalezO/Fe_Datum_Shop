import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-common-chart',
  templateUrl: './common-chart.component.html',
  styleUrls: ['./common-chart.component.scss']
})
export class CommonChartComponent implements OnInit {

  @Input() data : any;

  constructor() { }

  ngOnInit(): void {
  }

}
