import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-common-avatars',
  templateUrl: './common-avatars.component.html',
  styleUrls: ['./common-avatars.component.scss']
})
export class CommonAvatarsComponent implements OnInit {

  @Input() title: any;
  @Input() data: any;

  constructor() { }

  ngOnInit(): void {
  }

}
