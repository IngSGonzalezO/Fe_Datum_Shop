import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-image-two',
  templateUrl: './register-image-two.component.html',
  styleUrls: ['./register-image-two.component.scss']
})
export class RegisterImageTwoComponent implements OnInit {
  public show: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  showPassword() {
    this.show = !this.show;
  }

}
