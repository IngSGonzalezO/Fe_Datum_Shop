import { Component, OnInit } from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  openSidebar: boolean = false
  value2: number = 100;
  maxvalue: number = 70; 

  constructor() { }

  owlcarousel1ptions = {
    items :1,
    margin:30,
    loop : true,
    pagination:true,
    dots:false,
    nav: true,
  }

  options: Options = {
    floor: 0,
    ceil: 200
  };

  ngOnInit(): void {
  }

  sidebarToggle(){
    this.openSidebar = !this.openSidebar    
  }

  
}
