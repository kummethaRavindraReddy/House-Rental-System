import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { StudentListComponent } from './student-list/student-list.component';
import {DataTablesModule} from 'angular-datatables';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    LoginComponent,
    StudentListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
