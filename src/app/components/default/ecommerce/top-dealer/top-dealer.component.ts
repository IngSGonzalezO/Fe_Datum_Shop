import { Component, OnInit } from '@angular/core';
import { TopDealer } from 'src/app/shared/data/dashboard/data';

@Component({
  selector: 'app-top-dealer',
  templateUrl: './top-dealer.component.html',
  styleUrls: ['./top-dealer.component.scss']
})
export class TopDealerComponent implements OnInit {

  public Sliders = TopDealer;

  public customOptions = {
    items: 4,
    lazyLoad: true,
    autoWidth: true,
    nav: false,
    dots:false,
    margin: 10,
    responsive: {
      0: {
        items: 2,
        mergeFit: true
      },
      400: {
        items: 3,
        mergeFit: true
      },
      768: {
        items: 4,
        mergeFit: true
      },
      1000: {
        items: 3,
        mergeFit: true
      }
    }
  }

  public customOptions1 = {
    items: 4,
    lazyLoad: true,
    autoWidth: true,
    nav: false,
    margin: 10,
    responsive: {
      0: {
        items: 2,
        mergeFit: true
      },
      400: {
        items: 3,
        mergeFit: true
      },
      768: {
        items: 4,
        mergeFit: true
      },
      1000: {
        items: 3,
        mergeFit: true
      }
    }
  }


  constructor() { }

  ngOnInit(): void {
  }

}
