import {Component, OnDestroy, OnInit} from '@angular/core';
import {PortfolioService} from '../../services/Portfolio.service';
import {CoinMarketCapService} from '../../services/CoinMarketCap.service';
import {Coin} from '../../classes/Coin';
import {CsvDownloaderService} from '../../services/CsvDownloader.service';
import {Subscription, interval, Observable} from 'rxjs';
import {map} from 'rxjs/operators';


@Component({
  selector: 'app-portfolio-table',
  templateUrl: './portfolio-table.component.html',
  styleUrls: ['./portfolio-table.component.css']
})
export class PortfolioTableComponent implements OnInit, OnDestroy {

  private subscriptions: Subscription;
  public sortBy = 'value';
  public ascending = false;

  public input = {
    currentTimeFrame: '24h',
  };

  public title: HTMLElement = document.getElementById('title');

  public data$: Observable<Coin[]>;

  public data: Coin[] = [];

  public totalUSD: number;
  public totalBTC: number;


  constructor(public portfolioService: PortfolioService,
              public coinMarketCapService: CoinMarketCapService,
              public csvDownloadService: CsvDownloaderService,
  ) {


  }

  ngOnInit(): void {

    const intervals = {
      data: interval(1000 * 30),
    };

    this.subscriptions = intervals.data.subscribe(() => this.getData());

    this.getData();

    this.data$.subscribe((result: Coin[]) => {

      this.data = result;
      this.totalUSD = result.reduce((acc, coin) => acc + coin.value, 0);

      this.totalBTC = result.map(
        coin => coin.price_btc * coin.coins
      )
        .reduce((acc, value) => acc + value, 0);

      this.title.innerText = `${this.totalUSD.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
      })} | ${this.totalBTC} BTC`;
    });

  }


  public getData(): void {

    this.data$ = this.coinMarketCapService.marketData()
      .pipe(map(result => this.portfolioService.mapMarketDataToPortfolio(result))
      );


  }


  ngOnDestroy() {

    this.subscriptions.unsubscribe();
  }


}
