import { Component, OnInit } from '@angular/core';
import { EarningData } from 'src/app/shared/data/widgets/data';

@Component({
  selector: 'app-earning-data',
  templateUrl: './earning-data.component.html',
  styleUrls: ['./earning-data.component.scss']
})
export class EarningDataComponent implements OnInit {

  public earningData = EarningData;

  constructor() { }

  ngOnInit(): void {
  }

}
