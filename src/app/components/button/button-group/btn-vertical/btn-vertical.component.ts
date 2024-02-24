import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn-vertical',
  templateUrl: './btn-vertical.component.html',
  styleUrls: ['./btn-vertical.component.scss']
})
export class BtnVerticalComponent implements OnInit {
  public show: boolean = false;
  public show2: boolean = false;
  public show3: boolean = false;

  constructor() { }

  openMenu(){
    this.show = !this.show
  }
  openMenu2(){
    this.show2 = !this.show2
  }
  openMenu3(){
    this.show3 = !this.show3
  }
  
  ngOnInit(): void {
  }

}
