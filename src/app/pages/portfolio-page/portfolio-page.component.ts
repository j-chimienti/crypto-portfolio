import {Component, OnDestroy, OnInit} from '@angular/core';
import {CsvDownloaderService} from '../../services/CsvDownloader.service';
import {PortfolioService} from '../../services/Portfolio.service';
import {interval, Observable, Subscription} from 'rxjs';
import {Coin} from '../../classes/Coin';
import {tap} from 'rxjs/operators';
import {CoinMarketCapService} from '../../services/CoinMarketCap.service';
import {TitleService} from '../../services/title.service';

@Component({
  selector: 'app-portfolio-page',
  templateUrl: './portfolio-page.component.html',
  styleUrls: ['./portfolio-page.component.css']
})
export class PortfolioPageComponent implements OnInit , OnDestroy {

  private subscriptions: Subscription;

  constructor(
    public portfolioService: PortfolioService,
    public csvDownloadService: CsvDownloaderService,
    public titleService: TitleService,
    public coinMarketCapService: CoinMarketCapService
  ) {
  }

  ngOnInit() {

    this.getData().subscribe(() => {
      this.titleService.setTitle();
    }, err => {
      console.error(err);

    });

    const intervalObservable = interval(1000 * 10);

    this.subscriptions = intervalObservable.subscribe(() => {
      this.getData().subscribe(() => this.titleService.setTitle());
    });
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
