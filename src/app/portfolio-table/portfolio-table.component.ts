import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {PortfolioService} from '../portfolio.service';
import {Router} from '@angular/router';
import {Row} from '../coin-market-cap.service';
import {Observable} from 'rxjs/Observable';
import {Coin} from '../coin';
//import 'rxjs/operator/filter';
//import 'rxjs/operator/map';

@Component({
  selector: 'app-portfolio-table',
  templateUrl: './portfolio-table.component.html',
  styleUrls: ['./portfolio-table.component.css']
})
export class PortfolioTableComponent implements OnInit, OnDestroy {

  public coins: Array<Coin> = [];

  public total: number;
  public totalBtc: number;

  public interval: any;

  public max: string;

  public min: string;


  constructor(private portfolioService: PortfolioService,
              private router: Router) {


  }

  ngOnInit() {


    const COINS: (string | number)[][] = this.portfolioService.getCoins();

    if (!(COINS && Array.isArray(COINS) && COINS.length > 0)) {


      this.router.navigate(['edit']);
    } else {


      this.fetchCoins();


      this.interval = setInterval(() => this.fetchCoins(), 1000 * 30);
    }

  }


  ngOnDestroy() {

    clearInterval(this.interval);
  }

  public fetchCoins(): void {

    const COINS: [string | number][] = this.portfolioService.getCoins();

    this.portfolioService.fetchCoins()

      .subscribe((coins_: Coin[]) => {


        this.coins = coins_.filter((coin: Coin) => COINS.find(COIN => COIN[0] === coin.id))
          .map(coin => {


            const coins: [string | number] = COINS.find(COIN => COIN[0] === coin.id);

            const value: number = +coins[1] * coin.price_usd;

            coin.setCoins(+coins[1]);

            coin.setValue(value);

            return coin;

          })
          .sort((a, b) => b.value - a.value);


        this.total = this.coins.reduce((tot, cur) => tot + cur.value, 0);

        this.totalBtc = this.coins.reduce((tot, cur) => tot + cur.price_btc * cur.coins, 0);
      });


  }


}
