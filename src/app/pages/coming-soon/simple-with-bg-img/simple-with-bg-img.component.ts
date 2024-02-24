import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-with-bg-img',
  templateUrl: './simple-with-bg-img.component.html',
  styleUrls: ['./simple-with-bg-img.component.scss']
})
export class SimpleWithBgImgComponent implements OnInit {
  seconds: number;
  interval:any

  constructor() {
    this.interval= setInterval(function(this: any){
      let countDown = new Date('Dec 30, 2022 00:00:00').getTime();
      let now = new Date().getTime();
      let distance = countDown - now;
      this.document.querySelectorAll('#days').forEach((element: any) => {
        element.innerHTML = Math.floor(distance / (1000 * 60 * 60 * 24));
      });
        
      this.document.querySelectorAll('#hours').forEach((element:any) => {
        element.innerHTML = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      });

      this.document.querySelectorAll('#minutes').forEach((element:any) => {
        element.innerHTML = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      });
      
      this.document.querySelectorAll('#seconds').forEach((element:any) => {
        element.innerHTML = Math.floor((distance % (1000 * 60)) / 1000);
      });
    }, this.seconds);
   }

   ngOnDestroy(){
    if (this.interval) {
        clearInterval(this.interval);
      }
  }

  ngOnInit(): void {
  }


}
