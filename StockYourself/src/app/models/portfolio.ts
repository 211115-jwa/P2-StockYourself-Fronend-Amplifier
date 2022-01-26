import { Stock } from "./stock";

export class Portfolio {
  constructor(
      public id:number,
      public name: string,
      public portfolioStocks: Stock[]
  ) {}
}