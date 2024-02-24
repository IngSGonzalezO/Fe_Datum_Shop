import { Component, OnInit } from '@angular/core';
import { buttons } from '../../../shared/data/button/button';

@Component({
  selector: 'app-default-style',
  templateUrl: './default-style.component.html',
  styleUrls: ['./default-style.component.scss']
})
export class DefaultStyleComponent implements OnInit {
  buttons = buttons.defaultButtons
  buttonsOnline = buttons.buttonOnline

  constructor() { }

  ngOnInit(): void {
  }

}
