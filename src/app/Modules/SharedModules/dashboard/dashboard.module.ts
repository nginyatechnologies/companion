import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from 'src/app/Components/UserComponents/UserDashboard/dashboard/dashboard.component';
import { UpdateProfileComponent } from 'src/app/Components/UserComponents/UserDashboard/update-profile/update-profile.component';
import { UserAnalyticsComponent } from 'src/app/Components/UserComponents/UserDashboard/user-analytics/user-analytics.component';
import { UserActivitiesComponent } from 'src/app/Components/UserComponents/UserDashboard/user-activities/user-activities.component';

import { MaterialModule } from '../material/material.module';
import { DashboardSidenavComponent } from '../../../Components/UserComponents/UserDashboard/dashboard-sidenav/dashboard-sidenav.component';
import { ProfileToolbarComponent } from '../../../Components/UserComponents/UserDashboard/profile-toolbar/profile-toolbar.component';

import { DashboardRoutingModule } from './dashboard-routing.module';

const dashboardComponents = [
  DashboardComponent, UpdateProfileComponent,
  UserAnalyticsComponent, UserActivitiesComponent, ProfileToolbarComponent, DashboardSidenavComponent
];

@NgModule({
  declarations: [dashboardComponents],
  imports: [
    CommonModule,
    MaterialModule,
    DashboardRoutingModule,
  ],
  exports: [
    dashboardComponents
  ]
})
export class DashboardModule { }
