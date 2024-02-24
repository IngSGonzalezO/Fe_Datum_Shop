import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-common-helper-class',
  templateUrl: './common-helper-class.component.html',
  styleUrls: ['./common-helper-class.component.scss']
})
export class CommonHelperClassComponent implements OnInit {

  @Input() title: any;
  @Input() data: any;

  constructor() { }

  ngOnInit(): void {
  }

}
