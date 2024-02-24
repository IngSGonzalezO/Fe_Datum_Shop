import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn-nesting',
  templateUrl: './btn-nesting.component.html',
  styleUrls: ['./btn-nesting.component.scss']
})
export class BtnNestingComponent implements OnInit {
  public show: boolean = false;

  constructor() { }

  openMenu(){
    this.show = !this.show
  }

  ngOnInit(): void {
  }
  
}
