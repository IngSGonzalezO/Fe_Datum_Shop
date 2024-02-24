import { Component, OnInit } from '@angular/core';
import { listData } from 'src/app/shared/data/ui-kits/data';

@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.scss']
})
export class ClassListComponent implements OnInit {

  public lists = listData;

  constructor() { }

  ngOnInit(): void {
  }

}
