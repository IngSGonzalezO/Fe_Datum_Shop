import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { SimpleComponent } from './simple/simple.component';
import { ImageOneComponent } from './image-one/image-one.component';
import { ImageTwoComponent } from './image-two/image-two.component';
import { ValidationComponent } from './validation/validation.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { LoginSweetalertComponent } from './login-sweetalert/login-sweetalert.component';
import { RegisterSimpleComponent } from './register-simple/register-simple.component';
import { RegisterImageOneComponent } from './register-image-one/register-image-one.component';
import { RegisterImageTwoComponent } from './register-image-two/register-image-two.component';
import { UnlockUserComponent } from './unlock-user/unlock-user.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    SimpleComponent,
    ImageOneComponent,
    ImageTwoComponent,
    ValidationComponent,
    TooltipComponent,
    LoginSweetalertComponent,
    RegisterSimpleComponent,
    RegisterImageOneComponent,
    RegisterImageTwoComponent,
    UnlockUserComponent,
    ForgotPasswordComponent,
    MaintenanceComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    SharedModule
  ]
})
export class AuthenticationModule { }
