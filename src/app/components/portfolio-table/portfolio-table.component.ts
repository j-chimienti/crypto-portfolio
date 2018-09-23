import {Component, OnDestroy, OnInit} from '@angular/core';
import {PortfolioService} from '../../services/Portfolio.service';
import {SortedTable} from '../../classes/SortedTable';
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
export class PortfolioTableComponent extends SortedTable implements OnInit, OnDestroy {

  private subscriptions: Subscription;
  public sortBy = 'value';
  public ascending = false;

  public title: HTMLElement = document.getElementById('title');

  public data: Observable<Coin[]>;


  public totalUSD: number;
  public totalBTC: number;


  constructor(public portfolioService: PortfolioService,
              public coinMarketCapService: CoinMarketCapService,
              public csvDownloadService: CsvDownloaderService,
  ) {


    super();

  }

  ngOnInit(): void {

    const intervals = {
      data: interval(1000 * 30),
      title: interval(1000 * 2)
    };

    this.subscriptions = intervals.data.subscribe(this.getData);

    const titleSub = intervals.title.subscribe(() => {
      this.title.innerText = `${this.totalUSD.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
      })} | ${this.totalBTC} BTC`;
    });

    this.subscriptions.add(titleSub);

    this.getData();

    this.data.subscribe((result: Coin[]) => {
      this.getTotals(result);
    });

  }

  private getTotals(result: Coin[]) {


    this.totalUSD = result.reduce((acc, coin) => acc + coin.value, 0);

    this.totalBTC = result.map(
      coin => coin.price_btc * coin.coins
    )
      .reduce((acc, value) => acc + value, 0);
  }


  public getData(): void {

    this.data = this.coinMarketCapService.marketData()
      .pipe(map(result => this.portfolioService.mapMarketDataToPortfolio(result))
      );


  }


  ngOnDestroy() {

    this.subscriptions.unsubscribe();
  }


}
