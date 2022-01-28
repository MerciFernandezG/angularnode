import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list/list.component';
import { RegisterComponent } from './components/register/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ViewComponent } from './components/view/view.component';
import { HomeComponent } from './components/home/home.component'
@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    RegisterComponent,
    NavbarComponent,
    ViewComponent,
    HomeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [], 
  bootstrap: [AppComponent]
})
export class AppModule { }
