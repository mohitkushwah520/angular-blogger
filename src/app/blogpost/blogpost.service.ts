import { Injectable } from '@angular/core';
import { Blogpost } from './blogpost';
import { Blog } from './blog';
import { HttpClient ,HttpBackend } from '@angular/common/http';
import { Categories } from './categories';


@Injectable({
  providedIn: 'root'
})
export class BlogpostService {

  public url = 'http://localhost/demoproject/blogger/';


private http: HttpClient;

constructor(handler: HttpBackend) {
    this.http = new HttpClient(handler);
}


  getBlogs(){
    return this.http.get<Blogpost>(this.url + 'api/blogs');
  }
  getfeatured_blogs(){
    return this.http.get<Blogpost>(this.url + 'api/featured_blogs');
  }
  getblog(id){
    return this.http.get<Blog>(this.url + 'api/blog/' + id);
  }
  getrecent_blogs(){
    return this.http.get<Blogpost>(this.url + 'api/recent_blogs');
  }
  categories(){
    return this.http.get<Categories>(this.url + 'api/categories');
  }
}
