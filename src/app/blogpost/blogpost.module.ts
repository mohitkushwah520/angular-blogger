import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogpostRoutingModule } from './blogpost-routing.module';
import { BlogListComponent } from './blog-list/blog-list.component';
import { FeaturedBlogComponent } from './featured-blog/featured-blog.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { RecentBlogComponent } from './recent-blog/recent-blog.component';
import { CategoriesComponent } from './categories/categories.component';


@NgModule({
  declarations: [BlogListComponent, FeaturedBlogComponent, BlogDetailComponent, RecentBlogComponent, CategoriesComponent],
  imports: [
    CommonModule,
    BlogpostRoutingModule
  ],
  exports : [BlogListComponent, FeaturedBlogComponent, BlogDetailComponent, RecentBlogComponent, CategoriesComponent]
})
export class BlogpostModule { }
