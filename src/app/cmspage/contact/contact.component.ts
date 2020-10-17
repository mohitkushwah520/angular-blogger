import { Component, OnInit } from '@angular/core';
import { PageService } from '../page.service';
import { ContactClass } from '../contact-class';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private pageservice : PageService , private router : Router) { }

  modal = new ContactClass();
  submit = false;

  ngOnInit(): void {
  }

  onSubmit(){
    this.submit = true;
    // console.log(this.modal)
    return this.pageservice.contactForm(this.modal).subscribe(
      data => this.modal = data
    )
  }

    goToHome(){
      return this.router.navigate(['/']);
    }
}
