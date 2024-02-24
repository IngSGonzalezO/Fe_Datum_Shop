import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-one',
  templateUrl: './image-one.component.html',
  styleUrls: ['./image-one.component.scss']
})
export class ImageOneComponent implements OnInit {

  public show: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  
  showPassword() {
    this.show = !this.show;
  }

}
