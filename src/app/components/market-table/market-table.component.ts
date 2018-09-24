import {Component, OnDestroy, OnInit} from '@angular/core';
import {CoinMarketCapService} from '../../services/CoinMarketCap.service';
import {SortedTable} from '../../classes/SortedTable';
import {PortfolioService} from '../../services/Portfolio.service';
import {Coin} from '../../classes/Coin';
import {interval, Observable, Subscription} from 'rxjs';


@Component({
  selector: 'app-market-table',
  templateUrl: './market-table.component.html',
  styleUrls: ['./market-table.component.css']
})
export class MarketTableComponent extends SortedTable implements OnInit, OnDestroy {


  private subscription: Subscription;

  public data$: Observable<Coin[]>;

  constructor(
    public coinMarketCapService: CoinMarketCapService,
    public portfolioService: PortfolioService
  ) {

    super();
  }

  ngOnInit() {

    this.subscription = interval(1000 * 10).subscribe(() => this.getData());
    this.getData();
  }

  getData() {

    this.data$ = this.coinMarketCapService.marketData();
  }


  ngOnDestroy() {

    this.subscription.unsubscribe();
  }


}
