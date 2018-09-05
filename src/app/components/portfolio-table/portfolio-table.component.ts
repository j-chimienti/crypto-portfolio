import {Component, OnDestroy, OnInit} from '@angular/core';
import {PortfolioService} from '../../services/Portfolio.service';
import {SortedTable} from '../../classes/SortedTable';
import {CoinMarketCapService} from '../../services/CoinMarketCap.service';
import {Coin} from '../../classes/Coin';
import {CsvDownloaderService} from '../../services/CsvDownloader.service';

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

  private interval;

  public timeFrames = ['7', '24'];


  public sortBy = 'value';

  public ascending = false;


  public input = {
    currentTimeFrame: ''
  };


  constructor(public portfolioService: PortfolioService,
              public coinMarketCapService: CoinMarketCapService,
              public csvDownloadService: CsvDownloaderService,
  ) {


    super();

  }

  ngOnInit(): void {

    const tf = localStorage.getItem('@CURRENT_TIMEFRAME');

    if (!this.timeFrames.includes(tf)) {

      this.input.currentTimeFrame = '24';
    } else {

      this.input.currentTimeFrame = tf;
    }

    this.interval = setInterval(() => {
      this.getData();

    }, 1000 * 30);

    this.getData();


  }

  public setTimeFrame(ft) {

    this.input.currentTimeFrame = ft;

    console.log('set', ft, this.input.currentTimeFrame);
  }

  public getData(): void {

    this.coinMarketCapService.marketData().subscribe((coins: Coin[]) => {

      this.data = this.portfolioService.mergeMarketAndCoinData(coins);
    });

  }

  public get totalUSD(): number {
    return this.data.reduce((tot, cur) => tot + cur.value, 0);
  }

  public get totalBTC(): number {

    return this.data.reduce((tot, cur) => tot + cur.price_btc * cur.coins, 0);
  }


  ngOnDestroy() {

    clearInterval(this.interval);
  }


}
