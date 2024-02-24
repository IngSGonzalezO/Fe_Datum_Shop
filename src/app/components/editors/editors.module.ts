import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditorsRoutingModule } from './editors-routing.module';
import { MdeEditorsComponent } from './mde-editors/mde-editors.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { FormsModule } from '@angular/forms';
import { NgxEditorsComponent } from './ngx-editors/ngx-editors.component';
import { NgxEditorModule } from 'ngx-editor';


@NgModule({
  declarations: [
    NgxEditorsComponent,
    MdeEditorsComponent,
  ],
  imports: [
    CommonModule,
    EditorsRoutingModule,
    SharedModule,
    AngularEditorModule,
    NgxEditorModule,
    FormsModule
  ]
})
export class EditorsModule { }
