import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from 'src/app/Components/UserComponents/UserDashboard/dashboard/dashboard.component';
import { UpdateProfileComponent } from 'src/app/Components/UserComponents/UserDashboard/update-profile/update-profile.component';
import { JobActivitiesComponent } from 'src/app/Components/UserComponents/UserDashboard/job-activities/job-activities.component';
import { CvActivitiesComponent } from 'src/app/Components/UserComponents/UserDashboard/cv-activities/cv-activities.component';
import { ProfileToolbarComponent } from '../../../Components/UserComponents/UserDashboard/profile-toolbar/profile-toolbar.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MaterialModule } from '../material/material.module';
import { DashboardSidenavComponent } from '../../../Components/UserComponents/UserDashboard/dashboard-sidenav/dashboard-sidenav.component';

const dashboardComponents = [
  DashboardComponent, UpdateProfileComponent,
  JobActivitiesComponent, CvActivitiesComponent, ProfileToolbarComponent, DashboardSidenavComponent
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
