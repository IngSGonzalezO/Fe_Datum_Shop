declare let require: any;
let Knob = require('angular2-knob');

let primary_color = localStorage.getItem('primary_color') || '#7366ff';

export let knob1 = Knob({
    value: 29,
    angleOffset: 90,
    thickness: 0.1,
    width: 200,
    cursor: true,
    fgColor: primary_color,
    readOnly: true,
    bgColor: '#f6f7fb',
    lineCap: 'round',
    displayPrevious: false,
    skin: "tron",

})