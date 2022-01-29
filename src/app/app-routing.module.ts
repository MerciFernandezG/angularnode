import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register/register.component';
import { ListComponent } from './components/list/list/list.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ViewComponent } from './components/view/view.component';



const routes: Routes = [


    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'list', component: ListComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'ver', component: ViewComponent},
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
