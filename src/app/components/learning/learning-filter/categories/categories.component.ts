import { Component, OnInit } from '@angular/core';
import * as filterData from '../../../../shared/data/learning/learning'

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  public isCollapsed = false;

  public Categories = filterData.Categories

  constructor() { }

  ngOnInit(): void {
  }

}
