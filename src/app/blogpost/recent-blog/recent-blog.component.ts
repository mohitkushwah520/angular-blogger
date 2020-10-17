import { Component, OnInit } from '@angular/core';
import { BlogpostService } from '../blogpost.service'
import { Blogpost } from '../blogpost';

@Component({
  selector: 'app-recent-blog',
  templateUrl: './recent-blog.component.html',
  styleUrls: ['./recent-blog.component.css']
})
export class RecentBlogComponent implements OnInit {
  public recentblog : Blogpost
  constructor(private blogpostservice : BlogpostService) { }

  ngOnInit(): void {
    this.blogpostservice.getrecent_blogs().subscribe((data : Blogpost) => this.recentblog= data);
  }

}
