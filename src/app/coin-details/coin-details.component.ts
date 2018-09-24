import {Component, Input, OnInit} from '@angular/core';
import {Coin} from '../classes/Coin';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {PortfolioService} from '../services/Portfolio.service';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {CoinMarketCapService} from '../services/CoinMarketCap.service';


@Component({
  selector: 'app-coin-details',
  templateUrl: './coin-details.component.html',
  styleUrls: ['./coin-details.component.css']
})
export class CoinDetailsComponent implements OnInit {

  public coin: Coin;
  public data: Coin[];
  public data$: Observable<Coin[]>;


  constructor(private coinMarketCapService: CoinMarketCapService, private route: ActivatedRoute, private location: Location, private portfolioService: PortfolioService) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    this.data$ = this.coinMarketCapService.marketData()
      .pipe(map(result => this.portfolioService.mapMarketDataToPortfolio(result))
      );

    this.data$.subscribe(coins => {

      this.data = coins;
      const _coin = coins.find(coin => coin.id === id);


      if (!_coin) {

        throw new Error('invalid coin');
      }

      this.coin = _coin;

    });
  }

  getSrc(coin) {

    return `https://coinlib.io/coin/ + ${coin.symbol.toUpperCase()}$ + /#historical-chart`;
  }


}
