import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmailRoutingModule } from './email-routing.module';

import { EmailAppComponent } from './email-app/email-app.component';
import { ReadMailComponent } from './read-mail/read-mail.component';
import { EmailComposeComponent } from './email-compose/email-compose.component';

import { MailFilterComponent } from './mail-filter/mail-filter.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { FormsModule } from '@angular/forms';
import { NgxEditorModule } from 'ngx-editor';

@NgModule({
  declarations: [
    EmailAppComponent,
    ReadMailComponent,
    EmailComposeComponent,
    MailFilterComponent
  ],
  imports: [
    CommonModule,
    EmailRoutingModule,
    RouterModule,
    SharedModule,
    NgxDropzoneModule,
    NgxEditorModule,
    FormsModule
  ],
})
export class EmailModule { }
