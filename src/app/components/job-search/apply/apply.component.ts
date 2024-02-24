import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.scss']
})
export class ApplyComponent implements OnInit {
  $index: number = 0
  date = new Array()
  year = new Array()
  constructor() { 
    for(let i =1;i <= 31; i++){
      this.date.push(i)   
    }

    for(let i = 1985; i <= 2019; i++){
      this.year.push(i)
    }

  }

  
  ngOnInit(): void {
  }

}
