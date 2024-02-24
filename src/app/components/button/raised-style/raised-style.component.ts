import { Component, OnInit } from '@angular/core';
import { buttonsPill } from '../../../shared/data/button/button';

@Component({
  selector: 'app-raised-style',
  templateUrl: './raised-style.component.html',
  styleUrls: ['./raised-style.component.scss']
})
export class RaisedStyleComponent implements OnInit {
  buttons = buttonsPill.defaultButtons
  buttonsOnline = buttonsPill.buttonOnline
  constructor() { }

  ngOnInit(): void {
  }

}
