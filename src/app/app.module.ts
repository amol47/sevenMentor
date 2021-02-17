import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { OverviewComponent } from './overview/overview.component';
import { DetailsComponent } from './details/details.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { UsersComponent } from './users/users.component';
import { UserService } from './services/user.service';
import { UsertablecolumnkeyPipe } from './pipes/usertablecolumnkey.pipe';
import { NgxPaginationModule } from "ngx-pagination";
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { StudentsComponent } from './students/students.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    LoginComponent,
    PagenotfoundComponent,
    ProductsComponent,
    ProductComponent,
    OverviewComponent,
    DetailsComponent,
    HeaderComponent,
    FooterComponent,
    UsersComponent,
    UsertablecolumnkeyPipe,
    UserdetailsComponent,
    StudentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
