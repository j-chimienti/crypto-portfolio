import {Component, OnInit} from '@angular/core';

import * as c3 from 'c3';
import {Coin} from '../../classes/Coin';
import {CoinMarketCapService} from '../../services/CoinMarketCap.service';
import {PortfolioService} from '../../services/Portfolio.service';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {


  coins: Coin[] = [];

  constructor(private coinMarketCapService: CoinMarketCapService,
              private portfolioService: PortfolioService) {
  }

  ngOnInit() {

    this.getCoins();

  }


  private getCoins() {


    this.coinMarketCapService.marketData().subscribe((coins: Coin[]) => {

      this.coins = this.portfolioService.mapMarketDataToPortfolio(coins);

      this.generatePieChart();
    });
  }


  private generatePieChart() {


    function mapToChart(coin) {

      return [coin.symbol.toLowerCase(), coin.value];
    }

    c3.generate({
      bindto: '#pie-chart',
      data: {
        // iris data from R
        columns: this.coins.map(mapToChart),
        type: 'pie',

        colors: this.portfolioService.colors,
        // onclick: function (d, i) {
        //     console.log('onclick', d, i);
        // },
        // onmouseover: function (d, i) {
        //     console.log('onmouseover', d, i);
        // },
        // onmouseout: function (d, i) {
        //     console.log('onmouseout', d, i);
        // }
      }
    });

  }

}
