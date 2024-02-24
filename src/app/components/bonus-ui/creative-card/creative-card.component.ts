import { Component, OnInit } from '@angular/core';
import * as data from '../../../shared/data/bonus-ui/creative-card'
@Component({
  selector: 'app-creative-card',
  templateUrl: './creative-card.component.html',
  styleUrls: ['./creative-card.component.scss']
})
export class CreativeCardComponent implements OnInit {

  public creativeCard = data.creativeCard
  constructor() { }
  
  ngOnInit(): void {
  }

}
