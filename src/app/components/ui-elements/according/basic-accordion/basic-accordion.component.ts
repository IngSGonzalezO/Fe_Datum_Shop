import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-accordion',
  templateUrl: './basic-accordion.component.html',
  styleUrls: ['./basic-accordion.component.scss']
})

export class BasicAccordionComponent implements OnInit {

  public items = ['First', 'Second', 'Third'];

  constructor() { }

  ngOnInit(): void {
  }

}
