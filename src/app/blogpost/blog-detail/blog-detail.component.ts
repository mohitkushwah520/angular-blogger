import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,ParamMap } from '@angular/router';
import { BlogpostService } from '../blogpost.service';
import { switchMap } from 'rxjs/operators'
import { Observable } from 'rxjs';
import { Blog } from '../blog';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {
   blogpost$ : Observable<Blog>
  constructor(private blogpostservice : BlogpostService,private route : ActivatedRoute ){
   }

  ngOnInit(): void {
    // let id = this.route.snapshot.paramMap.get('id');
    //   this.blogpostservice.getblog(id).subscribe(data => this.data.push(data));
    this.blogpost$ = this.route.paramMap.pipe(
      switchMap((params : ParamMap) => this.blogpostservice.getblog(+ params.get('id')))
    )
    // this.blogpostservice.getblog(2).subscribe(data => this.blog.push(data));
  }

}
