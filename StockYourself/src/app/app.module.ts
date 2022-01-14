import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { AppComponent } from './app.component';
import { FetchService } from './services/fetch.service';
import { YahooAPIService } from './services/yahoo-api.service';
import { UserService } from './services/user.service';
import { PostComponent } from './models/post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule
  ],
  providers: [
    FetchService,
    YahooAPIService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
