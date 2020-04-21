import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JobListingComponent } from './Components/JobComponents/job-listing/job-listing.component';
import { JobOutletComponent } from './Components/JobComponents/job-outlet/job-outlet.component';
import { UploadJobComponent } from './Components/JobComponents/upload-job/upload-job.component';
import { VerifyJobPostComponent } from './Components/JobComponents/verify-job-post/verify-job-post.component';
import { HomeComponent } from './Components/SharedComponents/home/home.component';
import { SearchComponent } from './Components/SharedComponents/search/search.component';
import { WelcomeComponent } from './Components/SharedComponents/welcome/welcome.component';
import { LoginComponent } from './Components/UserComponents/AuthComponents/login/login.component';
import { ProfileComponent } from './Components/UserComponents/AuthComponents/profile/profile.component';
import { RegistrationComponent } from './Components/UserComponents/AuthComponents/registration/registration.component';
import { DashboardComponent } from './Components/UserComponents/UserDashboard/dashboard/dashboard.component';
import { AboutUsComponent } from './Components/SharedComponents/about-us/about-us.component';
import { ContactComponent } from './Components/SharedComponents/contact/contact.component';
import { PortfolioComponent } from './Components/SharedComponents/portfolio/portfolio.component';
import { ServicesOfferedComponent } from './Components/SharedComponents/services-offered/services-offered.component';
import { AgentSupportComponent } from './Components/SharedComponents/agent-support/agent-support.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      {
        path: '',
        component: WelcomeComponent
      },
      {
        path: 'about',
        component: AboutUsComponent
      },
      {
        path: 'ourServices',
        component: ServicesOfferedComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: 'portfolio',
        component: PortfolioComponent
      },
      {
        path: 'userAgent-support',
        component: AgentSupportComponent
      }
    ]
  },
  {
    path: 'user',
    component: HomeComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      }, {
        path: 'register',
        component: RegistrationComponent
      }, {
        path: 'search',
        component: SearchComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        children: [
          {
            path: 'profile/:id',
            component: ProfileComponent
          }
        ]
      },
      {
        path: 'job',
        component: JobOutletComponent,
        children: [
          {
            path: 'addJobPost',
            component: UploadJobComponent
          },
          {
            path: 'listing',
            component: JobListingComponent
          },
          {
            path: 'verify',
            component: VerifyJobPostComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
