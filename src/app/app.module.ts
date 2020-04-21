import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { FormsModule } from '@angular/forms';

import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DashboardModule } from './Modules/SharedModules/dashboard/dashboard.module';
import { JobModule } from './Modules/SharedModules/job/job.module';
import { MaterialModule } from './Modules/SharedModules/material/material.module';
import { UtilitiesModule } from './Modules/SharedModules/utilities/utilities.module';
import { AuthenticationModule } from './Modules/UserModules/authentication/authentication.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    UtilitiesModule,
    DashboardModule,
    MaterialModule,
    JobModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
