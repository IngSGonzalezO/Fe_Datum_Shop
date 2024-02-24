import { Component, OnInit } from '@angular/core';
import * as data from '../../../shared/data/table/tableData'
import * as tableData from '../../../shared/data/table/sizing-tables'
import * as borderData from '../../../shared/data/table/border-tables'

@Component({
  selector: 'app-bootstrap-tables',
  templateUrl: './bootstrap-tables.component.html',
  styleUrls: ['./bootstrap-tables.component.scss']
})
export class BootstrapTablesComponent implements OnInit {

  public contextual = data.contextual
  public textOrBgUtilities = data.textOrBgUtilities
  public table2 = data.table2
  public table = data.table
  public tablesXl = tableData.sizingTablesXl
  public borderTableHorizontal = borderData.borderTableHorizontal

  constructor() { }

  ngOnInit(): void {
  }

}
