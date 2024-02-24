import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsComponent } from './contacts.component';
import { ContactsFilterComponent } from './contacts-filter/contacts-filter.component';
import { PersonalComponent } from './personal/personal.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { OrganizationComponent } from './organization/organization.component';
import { NewContactComponent } from './new-contact/new-contact.component';
import { AddressContentComponent } from './personal/edit-from/address-content/address-content.component';
import { PersonalContentComponent } from './personal/edit-from/personal-content/personal-content.component';
import { GeneralComponent } from './personal/edit-from/general/general.component';
import { PrintComponent } from './personal/print/print.component';


@NgModule({
  declarations: [
    ContactsComponent,
    ContactsFilterComponent,
    PersonalComponent,
    OrganizationComponent,
    NewContactComponent,
    AddressContentComponent,
    PersonalContentComponent,
    GeneralComponent,
    PrintComponent,
  
  ],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    SharedModule
  ]
})
export class ContactsModule { }
