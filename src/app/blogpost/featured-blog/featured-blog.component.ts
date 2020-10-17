import { Component, OnInit } from '@angular/core';
import { BlogpostService } from '../blogpost.service';
import { Blogpost } from '../blogpost';

@Component({
  selector: 'app-featured-blog',
  templateUrl: './featured-blog.component.html',
  styleUrls: ['./featured-blog.component.css']
})
export class FeaturedBlogComponent implements OnInit {
  public featuredblog : Blogpost

  constructor(private blogpostservice : BlogpostService) { }

  ngOnInit(): void {
    this.blogpostservice.getfeatured_blogs().subscribe((data : Blogpost) => this.featuredblog = data)
  }

}
