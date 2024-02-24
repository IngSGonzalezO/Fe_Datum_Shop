import { Component, OnInit } from '@angular/core';
import { buttons2 } from '../../../shared/data/button/button';

@Component({
  selector: 'app-flat-style',
  templateUrl: './flat-style.component.html',
  styleUrls: ['./flat-style.component.scss']
})
export class FlatStyleComponent implements OnInit {
  buttons = buttons2.defaultButtons2
  buttonsOnline = buttons2.buttonOnline2
  constructor() { }

  ngOnInit(): void {
  }

}
