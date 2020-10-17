import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CmspageRoutingModule } from './cmspage-routing.module';
import { ContactComponent } from './contact/contact.component';
import { PageComponent } from './page/page.component';


@NgModule({
  declarations: [ContactComponent, PageComponent],
  imports: [
    CommonModule,
    FormsModule,
    CmspageRoutingModule
  ],
  exports : [ContactComponent, PageComponent]
})
export class CmspageModule { }
