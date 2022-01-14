import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FetchService } from './services/fetch.service';

import { UserService } from './services/user.service';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    FetchService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
