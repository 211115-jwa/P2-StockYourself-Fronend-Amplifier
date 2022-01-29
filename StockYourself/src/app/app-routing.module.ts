import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MyPortfolioComponent } from './components/my-portfolio/my-portfolio.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { PortfoliosComponent } from './components/portfolios/portfolios.component';
import { PostComponent } from './components/post/post.component';
import { PostsComponent } from './components/posts/posts.component';
import { RegisterComponent } from './components/register/register.component';
import { StocksComponent } from './components/stocks/stocks.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home', 
    pathMatch: 'full'
  },
  {
    path: 'home', 
  component: HomeComponent
  },
  {
    path: 'login', 
  component: LoginComponent
  },
  {
    path: 'register', 
  component: RegisterComponent
  },
  {
    path: 'portfolio', 
  component: PortfolioComponent
  },
  {
    path: 'portfolios',
    component: PortfoliosComponent
  },
  {
    path: 'my-portfolio',
    component: MyPortfolioComponent
  },
  {
    path: 'post',
    component: PostComponent
  },
  {
    path: 'posts', 
  component: PostsComponent
  },
  {
    path: 'stocks', 
  component: StocksComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
