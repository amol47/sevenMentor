import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { JavaComponent } from './java/java.component';


@NgModule({
  declarations: [JavaComponent],
  imports: [
    CommonModule,
    CoursesRoutingModule
  ]
})
export class CoursesModule { 
  constructor() {
    console.log("course module callled...");
  }
}
