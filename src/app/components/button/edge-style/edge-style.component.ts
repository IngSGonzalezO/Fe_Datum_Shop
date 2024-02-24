import { Component, OnInit } from '@angular/core';
import { buttonsPill } from '../../../shared/data/button/button';

@Component({
  selector: 'app-edge-style',
  templateUrl: './edge-style.component.html',
  styleUrls: ['./edge-style.component.scss']
})
export class EdgeStyleComponent implements OnInit {
  buttons = buttonsPill.defaultButtons
  buttonsOnline = buttonsPill.buttonOnline
  constructor() { }

  ngOnInit(): void {
  }

}
