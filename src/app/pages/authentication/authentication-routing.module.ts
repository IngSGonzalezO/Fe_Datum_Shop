import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ImageOneComponent } from './image-one/image-one.component';
import { ImageTwoComponent } from './image-two/image-two.component';
import { LoginSweetalertComponent } from './login-sweetalert/login-sweetalert.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { RegisterImageOneComponent } from './register-image-one/register-image-one.component';
import { RegisterImageTwoComponent } from './register-image-two/register-image-two.component';
import { RegisterSimpleComponent } from './register-simple/register-simple.component';
import { SimpleComponent } from './simple/simple.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { UnlockUserComponent } from './unlock-user/unlock-user.component';
import { ValidationComponent } from './validation/validation.component';

var routingAnimation = localStorage.getItem('animate')

 const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'simple',
        component: SimpleComponent
      },
      {
        path: 'image-one',
        component: ImageOneComponent
      },
      {
        path: 'image-two',
        component: ImageTwoComponent
      },
      {
        path: 'validation',
        component: ValidationComponent
      },
      {
        path: 'tooltip',
        component: TooltipComponent
      },
      {
        path: 'login-sweetalert',
        component: LoginSweetalertComponent
      },
      {
        path: 'register-simple',
        component: RegisterSimpleComponent
      },
      {
        path: 'register-image-one',
        component: RegisterImageOneComponent
      },
      {
        path: 'register-image-two',
        component: RegisterImageTwoComponent
      },
      {
        path: 'unlock-user',
        component: UnlockUserComponent
      },
      {
        path: 'forgot-password',
        component: ForgotPasswordComponent
      },
      {
        path: 'maintenance',
        component: MaintenanceComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
