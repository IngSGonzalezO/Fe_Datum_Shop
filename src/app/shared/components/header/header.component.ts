import { Component, OnInit } from '@angular/core';
import { NavService } from 'src/app/shared/services/nav/nav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  collapseSidebar: boolean = true;
  constructor(private navServices: NavService) { }
  open = false;

  sidebarToggle() {
    this.navServices.collapseSidebar = !this.navServices.collapseSidebar;
  }
  logoutFunc() {
    // this.authService.SignOut();
  }
  ngOnInit(): void { 
  }
  // menu open
  openMenu(){
    this.open = !this.open
  }

  languageToggle() {
    this.navServices.language = !this.navServices.language;
  }

}
