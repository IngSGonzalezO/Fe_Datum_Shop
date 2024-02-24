import { Component, OnInit } from '@angular/core';
import { buttonGroup } from '../../../../shared/data/button/button';

@Component({
  selector: 'app-square-btn-group',
  templateUrl: './square-btn-group.component.html',
  styleUrls: ['./square-btn-group.component.scss']
})
export class SquareBtnGroupComponent implements OnInit {
  groupBtn = buttonGroup.buttonsGroup

  constructor() { }

  ngOnInit(): void {
  }

}
