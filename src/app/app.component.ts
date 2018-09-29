import {Component, OnDestroy, OnInit} from '@angular/core';
import {environment} from '../environments/environment';
import {interval, observable, Observable, Subscription} from 'rxjs';
import {Coin} from './classes/Coin';
import {map, tap} from 'rxjs/operators';
import {PortfolioService} from './services/Portfolio.service';
import {CoinMarketCapService} from './services/CoinMarketCap.service';
import {CsvDownloaderService} from './services/CsvDownloader.service';
import {TitleService} from './services/title.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  public cx: boolean = environment.cx;

  private subscriptions: Subscription;

  public title: HTMLElement = document.getElementById('title');

  constructor(
    public portfolioService: PortfolioService,
    public coinMarketCapService: CoinMarketCapService,
    public csvDownloadService: CsvDownloaderService,
    private titleService: TitleService
  ) {


  }

  ngOnInit() {


    this.getData().subscribe(() => {
      this.portfolioService.initalLoading = false;
      this.update();
    }, err => {
      console.error(err);

    }, () => {
      this.portfolioService.initalLoading = false;
    });

    const intervalObservable = interval(1000 * 10);

    this.subscriptions = intervalObservable.subscribe(() => {
      this.getData().subscribe(() => this.update());
    });

  }

  public update() {

    this.titleService.setTitle();
  }


  public getData(): Observable<Coin[]> {

    return this.coinMarketCapService.marketData()
      .pipe(
        tap(marketData => {
          this.portfolioService.handleMarketData(marketData);
        }),
      );

  }


  ngOnDestroy() {

    this.subscriptions.unsubscribe();
  }


}
