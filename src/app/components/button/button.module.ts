import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonRoutingModule } from './button-routing.module';
import { ButtonComponent } from './button.component';
import { DefaultStyleComponent } from './default-style/default-style.component';
import { FlatStyleComponent } from './flat-style/flat-style.component';
import { EdgeStyleComponent } from './edge-style/edge-style.component';
import { RaisedStyleComponent } from './raised-style/raised-style.component';
import { ButtonGroupComponent } from './button-group/button-group.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BtnVerticalComponent } from './button-group/btn-vertical/btn-vertical.component';
import { BtnNestingComponent } from './button-group/btn-nesting/btn-nesting.component';
import { CheckBoxBtnGroupComponent } from './button-group/check-box-btn-group/check-box-btn-group.component';
import { RadioBtnGroupComponent } from './button-group/radio-btn-group/radio-btn-group.component';
import { OutlineFlatButtonComponent } from './button-group/outline-flat-button/outline-flat-button.component';
import { OutlineEdgesBtnComponent } from './button-group/outline-edges-btn/outline-edges-btn.component';
import { OutlineButtonGroupComponent } from './button-group/outline-button-group/outline-button-group.component';
import { OutlineCustomBtnGroupComponent } from './button-group/outline-custom-btn-group/outline-custom-btn-group.component';
import { OutlineCustomBtnGroup2Component } from './button-group/outline-custom-btn-group2/outline-custom-btn-group2.component';
import { SquareBtnGroupComponent } from './button-group/square-btn-group/square-btn-group.component';
import { RoundBtnGroupComponent } from './button-group/round-btn-group/round-btn-group.component';


@NgModule({
  declarations: [
    ButtonComponent,
    DefaultStyleComponent,
    FlatStyleComponent,
    EdgeStyleComponent,
    RaisedStyleComponent,
    ButtonGroupComponent,
    BtnVerticalComponent,
    BtnNestingComponent,
    CheckBoxBtnGroupComponent,
    RadioBtnGroupComponent,
    OutlineFlatButtonComponent,
    OutlineEdgesBtnComponent,
    OutlineButtonGroupComponent,
    OutlineCustomBtnGroupComponent,
    OutlineCustomBtnGroup2Component,
    SquareBtnGroupComponent,
    RoundBtnGroupComponent
  ],
  imports: [
    CommonModule,
    ButtonRoutingModule,
    SharedModule
  ]
})
export class ButtonModule { }
