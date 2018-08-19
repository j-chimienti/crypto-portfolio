import {Component, OnDestroy, OnInit} from '@angular/core';
import {PortfolioService} from '../../services/portfolio.service';
import {SortedTable} from '../../sorted-table';
import {CoinMarketCapService} from '../../services/coin-market-cap.service';
import {Coin} from '../../coin';
import {CsvDownloadService} from '../../services/csv-download.service';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-portfolio-table',
  templateUrl: './portfolio-table.component.html',
  styleUrls: ['./portfolio-table.component.css'],


  animations: [
    trigger('loadedState', [
      state('true', style({
        color: 'green',
        height: '0px',
        opacity: '0',
      })),
      state('false', style({
        color: 'red',
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ]),
    trigger('showState', [
      state('true', style({})),
      state('false', style({
        opacity: '0',
        height: '0',
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
})
export class PortfolioTableComponent extends SortedTable implements OnInit, OnDestroy {

  public interval;


  constructor(public portfolioService: PortfolioService,
              public coinMarketCapService: CoinMarketCapService,
              public csvDownloadService: CsvDownloadService) {


    super();
  }

  ngOnInit() {

    this.sortBy = 'value';

    this.ascending = false;


    this.interval = setInterval(() => {
      this.getData();

    }, 1000 * 30);

    this.getData();


  }

  public getData() {

    this.coinMarketCapService.marketData().subscribe((coins: Coin[]) => {

      this.data = this.portfolioService.mergeMarketAndCoinData(coins);
    });

  }


  ngOnDestroy() {

    clearInterval(this.interval);
  }


}
