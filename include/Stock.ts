export type prices = number[];

interface StockInterface{
  getCurPrice: () => number;
  getStockHistory: () => prices;
  getStockName: () => string;
  getStockTicker: () => string;
  toString: () => string;
}

export class Stock implements StockInterface{
  name: string;
  ticker: string;
  stockHistory: prices; //ordered from least to most recent

  constructor(name: string, ticker: string, priceHistory: prices){
    this.name = name;
    this.ticker = ticker;
    this.stockHistory = priceHistory;
  }

  getCurPrice(){
    return this.stockHistory[this.stockHistory.length - 1];
  }

  getStockHistory(){
    return this.stockHistory;
  }

  getStockName(){
    return this.name;
  }

  getStockTicker(){
    return this.ticker
  }

  
  toString(){
    return this.name + " (" + this.ticker + "): $" + this.getCurPrice().toFixed(2)
  }
}
