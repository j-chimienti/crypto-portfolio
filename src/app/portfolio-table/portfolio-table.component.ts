import {Component, Input, OnInit} from '@angular/core';
import {Coin} from '../coin';
import {PortfolioService} from '../portfolio.service';
import {CoinMarketCapService, Row} from '../coin-market-cap.service';
import {Observable} from 'rxjs/Observable';
import {LocalStorageService} from '../local-storage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-portfolio-table',
  templateUrl: './portfolio-table.component.html',
  styleUrls: ['./portfolio-table.component.css']
})
export class PortfolioTableComponent implements OnInit {

  public coins: Coin[];

  public total: number;


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


      this.coinMarketCapService.marketData().subscribe(
        (coins: Row[]) => {


          this.coins = this.portfolioService.handleMarketData(coins);


          this.total = this.coins.reduce((tot, cur) => tot + cur.value, 0);


        });

    }

  }


}
