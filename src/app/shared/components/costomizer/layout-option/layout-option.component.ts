import { Component, HostListener, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutService } from 'src/app/shared/services/layout/layout.service';

@Component({
  selector: 'app-layout-option',
  templateUrl: './layout-option.component.html',
  styleUrls: ['./layout-option.component.scss']
})

export class LayoutOptionComponent implements OnInit {
  public layoutType: string = 'ltr';
  public sidebarType: string = 'compact-wrapper';
  public screenwidth: any = window.innerWidth;
  public selectedValue: any

  constructor(public layout:LayoutService) { }

  ngOnInit(): void {
  }
  // Customize Layout Type
  customizeLayoutType(val: any) {
    this.layoutType = val;
    this.layout.config.settings.layout_type = val;
    if(val == 'rtl') {
      document.getElementsByTagName('html')[0].setAttribute('dir', val);
      document.body.className = 'rtl';
    }else if(val == 'box-layout') {
      document.getElementsByTagName('html')[0].setAttribute('dir', val);
      document.body.className = 'box-layout';
    } else {
      document.getElementsByTagName('html')[0].removeAttribute('dir');
      document.body.className = '';
    }
  }
  customizeSidebarType(val: any) {
    this.sidebarType = val;
    this.layout.config.settings.sidebar_type = val
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenwidth = event.target.innerWidth;
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  getAnimation(){
    if(this.selectedValue){
      localStorage.setItem("animate", (this.selectedValue || localStorage.getItem("animate")));
      window.location.reload()
    }
  }
}
