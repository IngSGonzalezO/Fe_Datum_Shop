import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-js-list',
  templateUrl: './js-list.component.html',
  styleUrls: ['./js-list.component.scss']
})
export class JsListComponent implements OnInit {

  public active = 1;

  constructor() { }

  ngOnInit(): void {
  }

}
