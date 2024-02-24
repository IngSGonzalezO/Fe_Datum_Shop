import { Component, OnInit } from '@angular/core';

// declare var require: any;
// let Knob = require('knob'); // browserify require


@Component({
  selector: 'app-ecommerce',
  templateUrl: './ecommerce.component.html',
  styleUrls: ['./ecommerce.component.scss']
})
export class EcommerceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // let profitKnob = Knob({
    //   value: 60,
    //   angleOffset: 0,
    //   className: 'review',
    //   thickness: 0.3,
    //   width: 100,
    //   height: 100,
    //   font: 14,
    //   fgColor: '#565656',
    //   bgColor: '#eeeeee',
    //   lineCap: 'round',
    //   readOnly: true
    // });

    // document.getElementById('profit')?.append(profitKnob);

    // let incomeKnob = Knob({
    //   value: 60,
    //   angleOffset: 0,
    //   className: 'review',
    //   thickness: 0.3,
    //   width: 100,
    //   height: 100,
    //   fgColor: '#24695c',
    //   bgColor: '#eeeeee',
    //   lineCap: 'round',
    //   readOnly: true
    // });

    // document.getElementById('incomeKnob')?.append(incomeKnob);
  }

}
