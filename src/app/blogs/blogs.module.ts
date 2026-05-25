import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogsRoutingModule } from './blogs-routing.module';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { BlogCardComponent } from './components/blog-card/blog-card.component';
import { BlogDetailComponent } from './components/blog-detail/blog-detail.component';
import { BlogService } from './services/blog.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [    
    BlogListComponent,
    BlogCardComponent,
    BlogDetailComponent,
],
  imports: [
    FormsModule,
    CommonModule,
    BlogsRoutingModule
  ],
  providers: [BlogService],
  exports: [BlogListComponent]
})
export class BlogsModule { }
