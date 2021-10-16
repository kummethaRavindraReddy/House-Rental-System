import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path:'Home',component:HomeComponent},
  {path:'contact',component:ContactComponent},
  {path:'about',component:AboutComponent},
  {path:'login',component:LoginComponent},


  { path: '', redirectTo: 'view-student', pathMatch: 'full' },
  //{ path: 'view-student', component: StudentListComponent },
  //{ path: 'add-student', component: AddStudentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
