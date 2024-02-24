import { Component, OnInit } from '@angular/core';
import { EmployeeStatusData } from 'src/app/shared/data/widgets/data';

@Component({
  selector: 'app-employee-status',
  templateUrl: './employee-status.component.html',
  styleUrls: ['./employee-status.component.scss']
})
export class EmployeeStatusComponent implements OnInit {

  public EmployeeStatusData = EmployeeStatusData;

  constructor() { }

  ngOnInit(): void {
  }

}
