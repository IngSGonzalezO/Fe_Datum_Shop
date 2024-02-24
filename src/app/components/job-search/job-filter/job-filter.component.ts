import { Component, OnInit } from '@angular/core';
import * as filterData from '../../../shared/data/job-search/job-serach'
@Component({
  selector: 'app-job-filter',
  templateUrl: './job-filter.component.html',
  styleUrls: ['./job-filter.component.scss']
})
export class JobFilterComponent implements OnInit {

  public filter = filterData.filter
  public filterChackBox = filterData.filterChackBox
  public isCollapsed = false;
  public isCollapsed2 = false;
  public isCollapsed3 = false;
  public isCollapsed4 = false;
  OpenFilter: boolean = false

  constructor() { 
 
    
  }
  openFilter(){
    this.OpenFilter = !this.OpenFilter
  }
  ngOnInit(): void {
  }

}
