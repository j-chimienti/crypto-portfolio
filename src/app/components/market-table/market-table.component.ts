import {Component, OnDestroy, OnInit} from '@angular/core';
import {CoinMarketCapService} from '../../services/CoinMarketCap.service';
import {PortfolioService} from '../../services/Portfolio.service';
import {tap} from 'rxjs/operators';


@Component({
  selector: 'app-market-table',
  templateUrl: './market-table.component.html',
  styleUrls: ['./market-table.component.css']
})
export class MarketTableComponent implements OnInit, OnDestroy {

  public filterText: string;

  constructor(
    public coinMarketCapService: CoinMarketCapService,
    public portfolioService: PortfolioService
  ) {

  }

  ngOnInit() {

    return this.coinMarketCapService.marketData()
      .pipe(
        tap(marketData => {
          this.portfolioService.handleMarketData(marketData);
        }),
      ).subscribe(result => {

      });

  }

  public getMarketData() {

    const regex = new RegExp(this.filterText, 'gi');
    return this.portfolioService.marketData.filter(item => {
      return item.name.match(regex) || item.symbol.match(regex);
    });
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

  }


}
