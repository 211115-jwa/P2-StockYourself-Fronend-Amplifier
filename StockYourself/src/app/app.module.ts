import { AppComponent } from './app.component';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MyPortfolioComponent } from './components/my-portfolio/my-portfolio.component';
import { NavComponent } from './components/nav/nav.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { PortfoliosComponent } from './components/portfolios/portfolios.component';
import { PostComponent } from './components/post/post.component';
import { PostsComponent } from './components/posts/posts.component';
import { RegisterComponent } from './components/register/register.component';
import { StocksComponent } from './components/stocks/stocks.component';

import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FetchService } from './services/fetch.service';
import { UserService } from './services/user.service';
import { CreatepostComponent } from './components/createpost/createpost.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    MyPortfolioComponent,
    NavComponent,
    PortfolioComponent,
    PortfoliosComponent,
    PostComponent,
    PostsComponent,
    RegisterComponent,
    StocksComponent,
    CreatepostComponent
  ],

  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    NgbModule
  ],

  providers: [
    FetchService,
    UserService
  ],

  exports: [
    NavComponent
  ],

  bootstrap: [AppComponent]
})

export class AppModule { }