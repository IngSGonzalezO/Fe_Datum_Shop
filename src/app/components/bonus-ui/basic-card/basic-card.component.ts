import { Component, OnInit } from '@angular/core';
import * as data from '../../../shared/data/bonus-ui/basic-card'
@Component({
  selector: 'app-basic-card',
  templateUrl: './basic-card.component.html',
  styleUrls: ['./basic-card.component.scss']
})
export class BasicCardComponent implements OnInit {

  public cards = data.cards
  constructor() { }

  ngOnInit(): void {
  }

  

}
