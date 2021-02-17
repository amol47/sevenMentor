import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DetailsComponent } from './details/details.component';
import { LoginComponent } from './login/login.component';
import { OverviewComponent } from './overview/overview.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';
import { StudentsComponent } from './students/students.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { UsersComponent } from './users/users.component';
// import { UserGaurd } from "./UserGaurd";

const routes: Routes = [

  { path: '', redirectTo: 'user', pathMatch: 'full' },
  { path: 'user', component: UsersComponent },
  { path: 'user/:id', component: UserdetailsComponent },
  { path: 'products', component: ProductsComponent },
  {
    path: 'product/:id', component: ProductComponent,
    children: [
      { path: 'overview', component: OverviewComponent },
      { path: 'details', component: DetailsComponent },
    ]
  },
  { path: 'student', component: StudentsComponent },


  // { path: '', component: ProductsComponent },
  // {
  //   path: 'course', 
  //   loadChildren: () => import('./courses/courses.module').then(m => m.CoursesModule)
  // },
  // { path: 'about', component: AboutComponent },
  // { path: 'login', component: LoginComponent },

  // {
  //   path: 'product/:id', component: ProductComponent,
  //   children: [
  //     { path: 'overview', component: OverviewComponent },
  //     { path: 'details', component: DetailsComponent },
  //   ]
  // },
  // { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
