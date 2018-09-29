import {Injectable} from '@angular/core';
import {PortfolioService} from './Portfolio.service';

@Injectable({
  providedIn: 'root'
})
export class TitleService {


  public titleElem: HTMLElement = document.getElementById('title');

  public title: string;

  constructor(private portfolioService: PortfolioService) {
  }


  public setTitle(): void {
    this.title = `${this.portfolioService.totalUSD.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD'
    })} | ${this.portfolioService.totalBTC.toFixed(3)} BTC | ${new Date().toLocaleTimeString()}`;

    this.titleElem.innerText = this.title;
  }


}
