import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../../../Components/UserComponents/AuthComponents/login/login.component';
import { RegistrationComponent } from '../../../Components/UserComponents/AuthComponents/registration/registration.component';
import { LogOutComponent } from '../../../Components/UserComponents/AuthComponents/log-out/log-out.component';
import { ConfirmAccountComponent } from '../../../Components/UserComponents/AuthComponents/confirm-account/confirm-account.component';
import { RecoverAccountComponent } from '../../../Components/UserComponents/AuthComponents/recover-account/recover-account.component';
import { ProfileComponent } from '../../../Components/UserComponents/AuthComponents/profile/profile.component';
import { MaterialModule } from '../../SharedModules/material/material.module';
import { DashboardModule } from '../../SharedModules/dashboard/dashboard.module';
import { DashboardRoutingModule } from '../../SharedModules/dashboard/dashboard-routing.module';

const authComponents = [
  LoginComponent,
  RegistrationComponent, LogOutComponent,
  ConfirmAccountComponent, RecoverAccountComponent, ProfileComponent
];

@NgModule({
  declarations: [authComponents],
  imports: [
    CommonModule,
    MaterialModule,
    DashboardModule,
    DashboardRoutingModule
  ],
  exports: [
    authComponents
  ]
})
export class AuthenticationModule { }
