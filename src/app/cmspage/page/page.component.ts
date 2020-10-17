import { Component, OnInit } from '@angular/core';
import { PageService } from '../page.service';
import { ActivatedRoute, ParamMap  } from '@angular/router';
import { Pageclass } from '../pageclass';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  page : Pageclass
  constructor(private Pageservice : PageService , private activeroute : ActivatedRoute) { }
  ngOnInit(): void {
  this.activeroute.paramMap.pipe(
    switchMap((params : ParamMap) => this.Pageservice.getPage(params.get('slug')))
  ).subscribe((data : Pageclass) => this.page = data);

  // console.log(this.activeroute.paramMap.subscribe((data) => {
  //   this.Pageservice.getPage(data.get('slug')).subscribe(dataa => console.log(dataa))
  // }));

  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

}
