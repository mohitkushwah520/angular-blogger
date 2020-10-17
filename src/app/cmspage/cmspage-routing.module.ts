import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { PageComponent } from './page/page.component';


const routes: Routes = [
  {path : 'contact' , component : ContactComponent},
  {path : 'page/:slug' , component : PageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CmspageRoutingModule { }
