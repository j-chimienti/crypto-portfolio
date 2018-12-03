import {Component, OnDestroy, OnInit} from '@angular/core';
import {environment} from '../environments/environment';
import {interval, observable, Observable, Subscription} from 'rxjs';
import {Coin} from './classes/Coin';
import {tap} from 'rxjs/operators';
import {PortfolioService} from './services/Portfolio.service';
import {CoinMarketCapService} from './services/CoinMarketCap.service';
import {CsvDownloaderService} from './services/CsvDownloader.service';
import {TitleService} from './services/title.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public cx: boolean = environment.cx;

  private subscriptions: Subscription;

  constructor(
    public portfolioService: PortfolioService,
    public csvDownloadService: CsvDownloaderService,
    public titleService: TitleService,
    public coinMarketCapService: CoinMarketCapService,
    public router: Router
  ) {


  }


  async defaultToMarket() {

    if (!this.portfolioService.portfolio.length) {
      return this.router.navigateByUrl('/market');
    }

  }

  async ngOnInit() {


    this.getData().subscribe(() => {
      this.titleService.setTitle();
    }, err => {
      console.error(err);
    });

    const intervalObservable = interval(1000 * 10);

    this.subscriptions = intervalObservable.subscribe(() => {
      this.getData().subscribe(() => this.titleService.setTitle());
    });
    await this.defaultToMarket();
  }

  public getData(): Observable<Coin[]> {

    return this.coinMarketCapService.marketData()
      .pipe(
        tap(marketData => {
          this.portfolioService.handleMarketData(marketData);
        }),
      );

  }


}
