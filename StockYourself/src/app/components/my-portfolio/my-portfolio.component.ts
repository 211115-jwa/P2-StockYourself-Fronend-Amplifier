import { Component, OnInit } from '@angular/core';
import { Portfolio } from 'src/app/models/portfolio';
import { User } from 'src/app/models/user';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-my-portfolio',
  templateUrl: './my-portfolio.component.html',
  styleUrls: ['./my-portfolio.component.css']
})
export class MyPortfolioComponent implements OnInit {
  portfolio: Portfolio;
  user: User;

  constructor(private userServ: UserService) { }

  ngOnInit(): void {
    this.userServ.checkLogin().then(resp => {
      this.user = this.userServ.loggedInUser;
      this.portfolio = this.userServ.loggedInUser.portfolio;
    });
  }

}
