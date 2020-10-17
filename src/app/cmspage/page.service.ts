import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders, HttpBackend } from '@angular/common/http';
import { Pageclass } from './pageclass';
import { ContactClass } from './contact-class';

@Injectable({
  providedIn: 'root'
})
export class PageService {


private http: HttpClient;

constructor(handler: HttpBackend) {
    this.http = new HttpClient(handler);
}


  public url = 'http://localhost/demoproject/blogger/';

  httpOption ={
    headers : new HttpHeaders({'content-type' : 'json'})
  };

  getPage(slug : string){
    return this.http.get<Pageclass>(this.url + 'api/page/' + slug);
  }
  contactForm(formdata : ContactClass){
    return this.http.post<ContactClass>(this.url + 'api/contact' , formdata , this.httpOption)
  }
}
