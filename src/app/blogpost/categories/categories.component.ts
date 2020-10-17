import { Component, OnInit } from '@angular/core';
import { BlogpostService } from '../blogpost.service';
import { Categories } from '../categories';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(private blogpostservice : BlogpostService) { }
  public categories : Categories;

  ngOnInit(): void {
    this.blogpostservice.categories().subscribe((data : Categories) => this.categories = data);
  }

}
