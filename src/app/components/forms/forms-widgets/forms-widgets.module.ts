import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { ClipboardModule } from 'ngx-clipboard';
import { SharedModule } from 'src/app/shared/shared.module';
import { ClipboardComponent } from './clipboard/clipboard.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { FormsWidgetsRoutingModule } from './forms-widgets-routing.module';
import { ColorVariantComponent } from './select2/color-variant/color-variant.component';
import { FullColorVariantComponent } from './select2/full-color-variant/full-color-variant.component';
import { Select2Component } from './select2/select2.component';
import { BasicColorComponent } from './switch/basic-color/basic-color.component';
import { BasicSwitchComponent } from './switch/basic-switch/basic-switch.component';
import { SwitchOutlineComponent } from './switch/switch-outline/switch-outline.component';
import { SwitchSizingComponent } from './switch/switch-sizing/switch-sizing.component';
import { SwitchUncheckedOutlineComponent } from './switch/switch-unchecked-outline/switch-unchecked-outline.component';
import { SwitchWithColorComponent } from './switch/switch-with-color/switch-with-color.component';
import { SwitchWithIconComponent } from './switch/switch-with-icon/switch-with-icon.component';
import { SwitchComponent } from './switch/switch.component';
import { TouchspinComponent } from './touchspin/touchspin.component';
import { TypeaheadComponent } from './typeahead/typeahead.component';

@NgModule({
  declarations: [
    DatepickerComponent,
    TouchspinComponent,
    Select2Component,
    SwitchComponent,
    TypeaheadComponent,
    ClipboardComponent,
    ColorVariantComponent,
    FullColorVariantComponent,
    BasicColorComponent,
    BasicSwitchComponent,
    SwitchOutlineComponent,
    SwitchSizingComponent,
    SwitchUncheckedOutlineComponent,
    SwitchWithColorComponent,
    SwitchWithIconComponent,
  ],
  imports: [
    CommonModule,
    FormsWidgetsRoutingModule,
    FormsModule,
    NgbModule,
    SharedModule,
    NgSelectModule,
    ClipboardModule,
    ReactiveFormsModule,
  ]
})
export class FormsWidgetsModule { }
