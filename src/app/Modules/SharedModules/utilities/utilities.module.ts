import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from '../../../Components/SharedComponents/footer/footer.component';
import { HeaderComponent } from '../../../Components/SharedComponents/header/header.component';
import { SidenavComponent } from '../../../Components/SharedComponents/sidenav/sidenav.component';
import { MaterialModule } from '../material/material.module';
import { HomeComponent } from '../../../Components/SharedComponents/home/home.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { WelcomeComponent } from '../../../Components/SharedComponents/welcome/welcome.component';
import { SearchComponent } from '../../../Components/SharedComponents/search/search.component';
import { AuthenticationModule } from '../../UserModules/authentication/authentication.module';
import { DashboardModule } from '../dashboard/dashboard.module';
import { AboutUsComponent } from '../../../Components/SharedComponents/about-us/about-us.component';
import { PortfolioComponent } from '../../../Components/SharedComponents/portfolio/portfolio.component';
import { ContactComponent } from '../../../Components/SharedComponents/contact/contact.component';
import { ServicesOfferedComponent } from '../../../Components/SharedComponents/services-offered/services-offered.component';

const SharedComponents = [HeaderComponent, SidenavComponent,
  FooterComponent, HomeComponent, WelcomeComponent,
  AboutUsComponent, PortfolioComponent, ContactComponent,
  ServicesOfferedComponent, SearchComponent];

@NgModule({
  declarations: [SharedComponents],
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule,
    AuthenticationModule,
    DashboardModule
  ],
  exports: [
    SharedComponents
  ]
})
export class UtilitiesModule { }
