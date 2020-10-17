import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BlogpostService } from '../blogpost.service';
import { Blogpost} from '../blogpost';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  public title = "Blog";
  public blogdata : Blogpost;

  constructor(
    private Title : Title,
    private blogpostservice : BlogpostService
    ) { }

  ngOnInit(): void {
    this.blogpostservice.getBlogs().subscribe((data : Blogpost) => this.blogdata = data);
  }

}
