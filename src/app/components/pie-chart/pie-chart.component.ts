import {Component, OnInit} from '@angular/core';

import {format as d3format} from 'd3';
import * as c3 from 'c3';
import {Coin} from '../../classes/Coin';
import {CoinMarketCapService} from '../../services/CoinMarketCap.service';
import {PortfolioService} from '../../services/Portfolio.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  public data$: Observable<Coin[]>;

  coins: Coin[] = [];

  constructor(private coinMarketCapService: CoinMarketCapService,
              private portfolioService: PortfolioService) {
  }

  ngOnInit() {


    this.data$ = this.coinMarketCapService.marketData();

    this.data$.subscribe((coins: Coin[]) => {

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
        type: 'donut', // 'pie',


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
      },
      tooltip: {
        format: {
          // title: function (d) {
          //   return 'Data ' + d;
          // },
          value: function (value, ratio, id) {
            return `${id} ${d3format('$')(value)}`;
          }
//            value: d3.format(',') // apply this format to both y and y2
        }
      },
//       donut: {
//         title: '',
//         label: {
//           // format: function (value, ratio, id) {
//           //   console.log('dontu', value);
//           //   return value;
//           // }
//         }
//       },
    });

  }

}
