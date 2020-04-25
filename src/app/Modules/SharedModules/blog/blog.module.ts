import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from 'src/app/app-routing.module';

import { MaterialModule } from '../material/material.module';
import { BlogListingComponent } from '../../../Components/BlogComponents/blog-listing/blog-listing.component';
import { BlogOutletComponent } from '../../../Components/BlogComponents/blog-outlet/blog-outlet.component';
import { UploadBlogComponent } from '../../../Components/BlogComponents/upload-blog/upload-blog.component';
import { VerifyBlogPostComponent } from '../../../Components/BlogComponents/verify-blog-post/verify-blog-post.component';

const jobComponents = [
  UploadBlogComponent, BlogListingComponent, VerifyBlogPostComponent, BlogOutletComponent
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
export class BlogModule { }
