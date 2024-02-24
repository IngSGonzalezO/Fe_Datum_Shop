import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsControlsRoutingModule } from './forms-controls-routing.module';
import { ValidationComponent } from './validation/validation.component';
import { InputsComponent } from './inputs/inputs.component';
import { CheckboxRadioComponent } from './checkbox-radio/checkbox-radio.component';
import { InputGroupsComponent } from './input-groups/input-groups.component';
import { MegaOptionsComponent } from './mega-options/mega-options.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CustomRadioComponent } from './checkbox-radio/custom-radio/custom-radio.component';
import { CustomCheckboxComponent } from './checkbox-radio/custom-checkbox/custom-checkbox.component';
import { AnimatedRadioBtnComponent } from './checkbox-radio/animated-radio-btn/animated-radio-btn.component';
import { SquareCheckboxComponent } from './checkbox-radio/square-checkbox/square-checkbox.component';
import { AnimatedCheckboxBtnComponent } from './checkbox-radio/animated-checkbox-btn/animated-checkbox-btn.component';
import { BasicInputGroupsComponent } from './input-groups/basic-input-groups/basic-input-groups.component';
import { BasicInputGroups2Component } from './input-groups/basic-input-groups2/basic-input-groups2.component';
import { BasicFormControlComponent } from './inputs/basic-form-control/basic-form-control.component';
import { BasicHtmlInputControlComponent } from './inputs/basic-html-input-control/basic-html-input-control.component';
import { EdgesInputStyleComponent } from './inputs/edges-input-style/edges-input-style.component';
import { FlatInputStyleComponent } from './inputs/flat-input-style/flat-input-style.component';
import { RaiseInputStyleComponent } from './inputs/raise-input-style/raise-input-style.component';
import { SolidInputStyleComponent } from './inputs/solid-input-style/solid-input-style.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { CustomControlsComponent } from './inputs/custom-controls/custom-controls.component';
import { InputSizingComponent } from './inputs/input-sizing/input-sizing.component';
import { DefaultStyleComponent } from './mega-options/default-style/default-style.component';
import { NoBorderComponent } from './mega-options/no-border/no-border.component';
import { SolidBorderStyleComponent } from './mega-options/solid-border-style/solid-border-style.component';
import { OfferBorderStyleComponent } from './mega-options/offer-border-style/offer-border-style.component';
import { InlineStyleComponent } from './mega-options/inline-style/inline-style.component';
import { VerticalStyleComponent } from './mega-options/vertical-style/vertical-style.component';
import { BrowserDefaultsComponent } from './validation/browser-defaults/browser-defaults.component';
import { CustomStylesComponent } from './validation/custom-styles/custom-styles.component';
import { SupportedElementsComponent } from './validation/supported-elements/supported-elements.component';

@NgModule({
  declarations: [
    ValidationComponent,
    InputsComponent,
    CheckboxRadioComponent,
    InputGroupsComponent,
    MegaOptionsComponent,
    CustomRadioComponent,
    CustomCheckboxComponent,
    AnimatedRadioBtnComponent,
    SquareCheckboxComponent,
    AnimatedCheckboxBtnComponent,
    BasicInputGroupsComponent,
    BasicInputGroups2Component,
    BasicFormControlComponent,
    BasicHtmlInputControlComponent,
    EdgesInputStyleComponent,
    FlatInputStyleComponent,
    RaiseInputStyleComponent,
    SolidInputStyleComponent,
    CustomControlsComponent,
    InputSizingComponent,
    DefaultStyleComponent,
    NoBorderComponent,
    SolidBorderStyleComponent,
    OfferBorderStyleComponent,
    InlineStyleComponent,
    VerticalStyleComponent,
    BrowserDefaultsComponent,
    CustomStylesComponent,
    SupportedElementsComponent
  ],
  imports: [
    CommonModule,
    FormsControlsRoutingModule,
    SharedModule,
    NgSelectModule,
    FormsModule
  ]
})
export class FormsControlsModule { }
