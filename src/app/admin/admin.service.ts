import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Blogpost } from '../blogpost/blogpost';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http : HttpClient) { }

  baseUrl = "http://localhost/demoproject/blogger/";

  blogs(){
    return this.http.get<Blogpost>(this.baseUrl + 'api/adminBlogs');
  }

  adminBlog(id:number){
    return this.http.get<any>(this.baseUrl + 'api/adminBlog/' + id);
  }
  addBlogs(blogdetail){
    return this.http.post<any>(this.baseUrl + 'api/createBlog',blogdetail);
  }

  updateBlog(blogdetail,id:number){
    return this.http.post<any>(this.baseUrl+'api/updateBlog/'+id,blogdetail);
  }

  deleteBlog(id){
    return this.http.delete<any>(this.baseUrl + 'api/deleteBlog/'+id);
  }

}
