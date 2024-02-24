import { Component, OnInit } from '@angular/core';
import * as BootstrapData from '../../../../shared/data/bonus-ui/bootsrap-notify'

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  public Bootstrap = BootstrapData.Bootstrap
  public select = BootstrapData.select
  public icon = BootstrapData.icon
  constructor() { }

  ngOnInit(): void {
  }

}
