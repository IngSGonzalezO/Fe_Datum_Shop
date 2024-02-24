import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-sweetalert',
  templateUrl: './login-sweetalert.component.html',
  styleUrls: ['./login-sweetalert.component.scss']
})
export class LoginSweetalertComponent implements OnInit {

  public show: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  showPassword() {
    this.show = !this.show;
  }
}
