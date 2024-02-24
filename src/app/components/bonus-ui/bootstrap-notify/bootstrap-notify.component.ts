import { Component, OnInit } from '@angular/core';
import * as BootstrapData from '../../../shared/data/bonus-ui/bootsrap-notify'
@Component({
  selector: 'app-bootstrap-notify',
  templateUrl: './bootstrap-notify.component.html',
  styleUrls: ['./bootstrap-notify.component.scss']
})
export class BootstrapNotifyComponent implements OnInit {

  public Bootstrap = BootstrapData.Bootstrap
  public btnNotify = BootstrapData.btnNotify
  public select = BootstrapData.select
  public icon = BootstrapData.icon

  constructor() { }

  ngOnInit(): void {
  }

}
