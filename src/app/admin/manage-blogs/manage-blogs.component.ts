import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Blogpost } from '../../blogpost/blogpost';

@Component({
  selector: 'app-manage-blogs',
  templateUrl: './manage-blogs.component.html',
  styleUrls: ['./manage-blogs.component.css']
})
export class ManageBlogsComponent implements OnInit {

  constructor(private service : AdminService) { }

  serverData : Blogpost;
  ngOnInit(): void {
    this.service.blogs().subscribe(
      (data : Blogpost) => this.serverData = data,
       err => console.log(err)
    )
  }
  onDelete(id: number) {
    if (confirm('Are you sure want to delete id = ' + id)) {
      this.service.deleteBlog(id).subscribe(
        res => {
          console.log(res);
          this.ngOnInit();
        },
        error => console.log(error)
      );
    }
  }
}
