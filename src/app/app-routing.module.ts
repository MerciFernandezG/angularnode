import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register/register.component';
import { ListComponent } from './components/list/list/list.component';
import { AppComponent } from './app.component';



const routes: Routes = [


    {path: '', component: RegisterComponent},
    // {path: 'register', component: RegisterComponent},
    {path: 'list', component: ListComponent},
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
