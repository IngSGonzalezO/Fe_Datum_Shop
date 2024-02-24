import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsLayoutRoutingModule } from './forms-layout-routing.module';
import { DefaultFormsComponent } from './default-forms/default-forms.component';
import { DefaultFormLayoutComponent } from './default-forms/default-form-layout/default-form-layout.component';
import { HorizontalFormLayoutComponent } from './default-forms/horizontal-form-layout/horizontal-form-layout.component';
import { InlineFormComponent } from './default-forms/inline-form/inline-form.component';
import { MegaFormComponent } from './default-forms/mega-form/mega-form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    DefaultFormsComponent,
    DefaultFormLayoutComponent,
    HorizontalFormLayoutComponent,
    InlineFormComponent,
    MegaFormComponent
  ],
  imports: [
    CommonModule,
    FormsLayoutRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    NgbModule,
  ]
})
export class FormsLayoutModule { }
