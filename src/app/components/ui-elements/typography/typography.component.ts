import { Component, OnInit } from '@angular/core';
import * as data from '../../../shared/data/ui-kits/typography '
@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.scss']
})
export class TypographyComponent implements OnInit {

  public typography = data.typography
  public textColor = data.textColor
  constructor() { }

  ngOnInit() { }

}
