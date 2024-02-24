import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coming-soon-simple',
  templateUrl: './coming-soon-simple.component.html',
  styleUrls: ['./coming-soon-simple.component.scss']
})
export class ComingSoonSimpleComponent implements OnInit {

 public seconds: number;
  public interval;
  document: { querySelectorAll: (arg0: string) => []; };

  constructor() {
    this.interval = setInterval(() => {
      let countDown = new Date('Dec 30, 2022 00:00:00').getTime();
      let now = new Date().getTime();
      let distance = countDown - now;
      this.document.querySelectorAll('#days').forEach((element: { innerHTML: number; }) => {
        element.innerHTML = Math.floor(distance / (1000 * 60 * 60 * 24));
      });

      this.document.querySelectorAll('#hours').forEach((element: { innerHTML: number; }) => {
        element.innerHTML = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      });

      this.document.querySelectorAll('#minutes').forEach((element: { innerHTML: number; }) => {
        element.innerHTML = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      });

      this.document.querySelectorAll('#seconds').forEach((element: { innerHTML: number; }) => {
        element.innerHTML = Math.floor((distance % (1000 * 60)) / 1000);
      });
    }, this.seconds);
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

}
