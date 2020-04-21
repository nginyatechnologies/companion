import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from 'src/app/app-routing.module';

import { MaterialModule } from '../material/material.module';
import { JobListingComponent } from '../../../Components/JobComponents/job-listing/job-listing.component';
import { JobOutletComponent } from '../../../Components/JobComponents/job-outlet/job-outlet.component';
import { UploadJobComponent } from '../../../Components/JobComponents/upload-job/upload-job.component';
import { VerifyJobPostComponent } from '../../../Components/JobComponents/verify-job-post/verify-job-post.component';

const jobComponents = [
  UploadJobComponent, JobListingComponent, VerifyJobPostComponent, JobOutletComponent
];

@NgModule({
  declarations: [jobComponents],
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule
  ],
  exports: [jobComponents]
})
export class JobModule { }
