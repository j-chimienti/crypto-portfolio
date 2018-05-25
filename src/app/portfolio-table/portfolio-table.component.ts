import {Component, OnDestroy, OnInit} from '@angular/core';
import {PortfolioService} from '../portfolio.service';

@Component({
  selector: 'app-portfolio-table',
  templateUrl: './portfolio-table.component.html',
  styleUrls: ['./portfolio-table.component.css']
})
export class PortfolioTableComponent implements OnInit, OnDestroy {

  public interval;


  constructor(public portfolioService: PortfolioService) {


  }

  ngOnInit() {

    this.portfolioService.handleFetchCoins();

    this.interval = setInterval(() => {
      this.portfolioService.handleFetchCoins();


    }, 1000 * 30);


  }


  ngOnDestroy() {

    clearInterval(this.interval);
  }


}
