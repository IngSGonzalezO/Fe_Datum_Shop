import  { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailAppComponent } from './email-app/email-app.component';
import { EmailComposeComponent } from './email-compose/email-compose.component';
import { ReadMailComponent } from './read-mail/read-mail.component';


var routingAnimation = localStorage.getItem('animate')

 const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'email-app',
        component: EmailAppComponent,
        data: {
          title: 'Email App',
          breadcrumb: 'Email App',
          animation: [routingAnimation]
          
        }
       
      },
      {
        path: 'email-compose',
        component: EmailComposeComponent,
        data: {
          title: 'email Compose',
          breadcrumb: 'email Compose',
          animation: [routingAnimation]
        }
       
      },
      {
        path: 'read-mail',
        component: ReadMailComponent,
        data: {
          title: 'Read Mail',
          breadcrumb: 'Read Mail',
          animation: [routingAnimation]
        }
       
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmailRoutingModule { }
