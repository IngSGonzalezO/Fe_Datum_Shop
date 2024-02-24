import { Component, OnInit } from '@angular/core';
import { buttonGroup } from '../../../../shared/data/button/button';

@Component({
  selector: 'app-round-btn-group',
  templateUrl: './round-btn-group.component.html',
  styleUrls: ['./round-btn-group.component.scss']
})
export class RoundBtnGroupComponent implements OnInit {

  buttonSize = buttonGroup.buttonSize

  constructor() { }

  ngOnInit(): void {
  }

}
