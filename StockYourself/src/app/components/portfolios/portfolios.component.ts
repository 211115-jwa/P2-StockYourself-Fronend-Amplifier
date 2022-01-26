import { Component, OnInit } from '@angular/core';
import { Portfolio } from 'src/app/models/portfolio';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-portfolios',
  templateUrl: './portfolios.component.html',
  styleUrls: ['./portfolios.component.css']
})
export class PortfoliosComponent implements OnInit {
  portfolios: Portfolio[];

  constructor(private portfolioServ: PortfolioService) { }

  async ngOnInit(): Promise <void> {
    this.portfolios = await this.portfolioServ.getAllPortfolios();
  }

}
