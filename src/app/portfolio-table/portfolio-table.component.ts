import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {PortfolioService} from '../portfolio.service';
import {Router} from '@angular/router';
import {Row} from '../coin-market-cap.service';
import {Observable} from 'rxjs/Observable';
import {Coin} from '../coin';
//import 'rxjs/operator/filter';
//import 'rxjs/operator/map';

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

      this.interval = setInterval(() => this.portfolioService.handleFetchCoins(), 1000 * 30);

  }


  ngOnDestroy() {

    clearInterval(this.interval);
  }


}
