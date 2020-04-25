import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogListingComponent } from './Components/BlogComponents/blog-listing/blog-listing.component';
import { BlogOutletComponent } from './Components/BlogComponents/blog-outlet/blog-outlet.component';
import { UploadBlogComponent } from './Components/BlogComponents/upload-blog/upload-blog.component';
import { VerifyBlogPostComponent } from './Components/BlogComponents/verify-blog-post/verify-blog-post.component';
import { AboutUsComponent } from './Components/SharedComponents/about-us/about-us.component';
import { AgentSupportComponent } from './Components/SharedComponents/agent-support/agent-support.component';
import { ContactComponent } from './Components/SharedComponents/contact/contact.component';
import { HomeComponent } from './Components/SharedComponents/home/home.component';
import { PortfolioComponent } from './Components/SharedComponents/portfolio/portfolio.component';
import { SearchComponent } from './Components/SharedComponents/search/search.component';
import { ServicesOfferedComponent } from './Components/SharedComponents/services-offered/services-offered.component';
import { WelcomeComponent } from './Components/SharedComponents/welcome/welcome.component';
import { LoginComponent } from './Components/UserComponents/AuthComponents/login/login.component';
import { ProfileComponent } from './Components/UserComponents/AuthComponents/profile/profile.component';
import { RegistrationComponent } from './Components/UserComponents/AuthComponents/registration/registration.component';
import { DashboardComponent } from './Components/UserComponents/UserDashboard/dashboard/dashboard.component';


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
        component: BlogOutletComponent,
        children: [
          {
            path: 'addJobPost',
            component: UploadBlogComponent
          },
          {
            path: 'listing',
            component: BlogListingComponent
          },
          {
            path: 'verify',
            component: VerifyBlogPostComponent
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
