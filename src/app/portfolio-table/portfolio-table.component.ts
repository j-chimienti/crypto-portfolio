import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Coin} from '../coin';
import {PortfolioService} from '../portfolio.service';
import {CoinMarketCapService, Row} from '../coin-market-cap.service';
import {LocalStorageService} from '../local-storage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-portfolio-table',
  templateUrl: './portfolio-table.component.html',
  styleUrls: ['./portfolio-table.component.css']
})
export class PortfolioTableComponent implements OnInit, OnDestroy {

  public coins: Coin[];

  public total: number;

  public interval;

  public max: string;

  public min: string;


  constructor(private portfolioService: PortfolioService,
              private coinMarketCapService: CoinMarketCapService,
              private localStorageService: LocalStorageService,
              private router: Router) {


  }

  ngOnInit() {


    const {COINS} = this.localStorageService;


    if (!(COINS && Array.isArray(COINS) && COINS.length > 0)) {


      this.router.navigate(['edit']);
    } else {


      this.fetchCoins();


      this.interval = setInterval(this.fetchCoins, 1000 * 60);
    }

  }


  ngOnDestroy() {

    clearInterval(this.interval);
  }

  private fetchCoins() {

    this.coinMarketCapService.marketData()
      .subscribe(
        (coins: Row[]) => {


          this.coins = this.portfolioService.handleMarketData(coins);


          let maxP = 0;
          let minP = 100;

          this.max = '';
          this.min = '';

          this.coins.forEach(coin => {

            if (+coin.percent_change_7d > maxP) {

              this.max = coin.id;

              maxP = +coin.percent_change_7d;
            }

            if (+coin.percent_change_7d < minP) {

              this.min = coin.id;
              minP = +coin.percent_change_7d;
            }
          });


          this.total = this.coins.reduce((tot, cur) => tot + cur.value, 0);


        });

  }


}
