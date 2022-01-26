import { Stock } from "./stock";

export class Portfolio {
  constructor(
      public portfolioId:number,
      public portfolioName: string,
      public portfolioStocks: Stock[]
  ) {}
}