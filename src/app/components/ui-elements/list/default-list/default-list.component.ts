import { Component, OnInit } from '@angular/core';
import { listData } from 'src/app/shared/data/ui-kits/data';

@Component({
  selector: 'app-default-list',
  templateUrl: './default-list.component.html',
  styleUrls: ['./default-list.component.scss']
})
export class DefaultListComponent implements OnInit {

  public lists = listData;

  constructor() { }

  ngOnInit(): void {
  }

}
