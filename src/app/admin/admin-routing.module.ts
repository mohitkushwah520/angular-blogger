import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from '../auth/auth.guard';
import { ManageBlogsComponent } from './manage-blogs/manage-blogs.component';
import { ManageCategoriesComponent } from './manage-categories/manage-categories.component';
import { ManagePagesComponent } from './manage-pages/manage-pages.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { BlogsFormComponent } from './blogs-form/blogs-form.component';


const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
   canActivate: [AuthGuard],
    children: [
      {
      path: '',
      children: [
        { path: 'blogs', component: ManageBlogsComponent },
        { path: 'blogs/create' , component : BlogsFormComponent},
        { path: 'blogs/edit/:id' ,component : BlogsFormComponent },
        { path: 'categories', component: ManageCategoriesComponent },
        { path: 'pages', component: ManagePagesComponent },
        { path: '', component: AdminDashboardComponent }
      ],
    }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
