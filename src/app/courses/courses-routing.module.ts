import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './course/course.component';
import { JavaComponent } from './java/java.component';

const routes: Routes = [
{
  path: '', 
  component: CourseComponent,
  children: [
    { path: 'java', component: JavaComponent }
  ]
}  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
