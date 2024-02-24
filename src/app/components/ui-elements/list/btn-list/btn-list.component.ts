import { Component, OnInit } from '@angular/core';
import { listData } from 'src/app/shared/data/ui-kits/data';

@Component({
  selector: 'app-btn-list',
  templateUrl: './btn-list.component.html',
  styleUrls: ['./btn-list.component.scss']
})
export class BtnListComponent implements OnInit {

  public lists = listData;

  constructor() { }

  ngOnInit(): void {
  }

}
