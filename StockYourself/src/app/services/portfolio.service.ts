import { Injectable } from '@angular/core';
import { Portfolio } from '../models/portfolio';
import { FetchService } from './fetch.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private fetch: FetchService) { }

  async getAllPortfolios(): Promise <Portfolio[]> {
    let resp = await fetch(this.fetch.url + 'portfolios/');

    if(resp.status===200) {
      return await resp.json();
    }
  }
}
