import {Component, OnDestroy, OnInit} from '@angular/core';
import {CoinMarketCapService} from '../../services/CoinMarketCap.service';
import {SortedTable} from '../../classes/SortedTable';
import {PortfolioService} from '../../services/Portfolio.service';
import {Coin} from '../../classes/Coin';


@Component({
  selector: 'app-market-table',
  templateUrl: './market-table.component.html',
  styleUrls: ['./market-table.component.css']
})
export class MarketTableComponent extends SortedTable implements OnInit, OnDestroy {


  private interval;


  constructor(public coinMarketCapService: CoinMarketCapService, public portfolioService: PortfolioService) {

    super();
  }

  ngOnInit() {

    this.interval = setInterval(() => this.getData(), 1000 * 30);
    this.getData();
  }

  getData() {

    return this.coinMarketCapService.marketData().subscribe((marketData: Coin[]) => {

      this.data = marketData;
    });
  }


  ngOnDestroy() {

    clearInterval(this.interval);
  }


}
