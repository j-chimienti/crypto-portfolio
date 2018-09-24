import {Component, OnDestroy, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {CoinMarketCapService} from '../../services/CoinMarketCap.service';
import {PortfolioService} from '../../services/Portfolio.service';
import {Coin} from '../../classes/Coin';
import {interval, Observable, Subscription} from 'rxjs';
import {map} from 'rxjs/operators';


@Component({
  selector: 'app-market-table',
  templateUrl: './market-table.component.html',
  styleUrls: ['./market-table.component.css']
})
export class MarketTableComponent implements OnInit, OnDestroy {


  private subscription: Subscription;

  public data$: Observable<Coin[]>;

  public loading: boolean;


  constructor(
    public coinMarketCapService: CoinMarketCapService,
    public portfolioService: PortfolioService
  ) {

  }

  ngOnInit() {

    this.subscription = interval(1000 * 30).subscribe(() => {
      this.getData();
    });
    this.getData();
  }

  getData() {

    this.data$ = this.coinMarketCapService.marketData();

    this.loading = false;
  }

  public getKlass({value, row, column}) {

    return {
      'text-success': 0 < value,
      'text-danger': value <= 0,
      'text-right': true,
      mono: true,
    };

  }


  ngOnDestroy() {

    this.subscription.unsubscribe();
  }


}
