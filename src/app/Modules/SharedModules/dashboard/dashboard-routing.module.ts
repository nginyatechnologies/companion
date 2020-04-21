import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from 'src/app/Components/UserComponents/UserDashboard/dashboard/dashboard.component';
import { ProfileComponent } from 'src/app/Components/UserComponents/AuthComponents/profile/profile.component';


const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
