import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register/register.component';
import { ListComponent } from './components/list/list/list.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';



const routes: Routes = [


    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'list', component: ListComponent},
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
