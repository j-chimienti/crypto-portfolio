import {Component, OnChanges, OnInit} from '@angular/core';

import {format as d3format} from 'd3';
import * as c3 from 'c3';
import {Coin} from '../../classes/Coin';
import {PortfolioService} from '../../services/Portfolio.service';
import {interval, Observable} from 'rxjs';
import {filter, take, takeUntil, takeWhile} from 'rxjs/operators';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {


  constructor(
    private portfolioService: PortfolioService
  ) {
  }

  ngOnInit() {


    interval(100)
      .pipe(
        filter(() => 0 < this.portfolioService.totalBTC),
        take(1)
      )
      .subscribe(this.generatePieChart.bind(this));

  }


  private generatePieChart() {


    function mapToChart(coin) {

      return [coin.symbol.toLowerCase(), coin.value];
    }

    const columns = this.portfolioService.coins.map(mapToChart);

    c3.generate({
      bindto: '#pie-chart',
      data: {
        // iris data from R
        columns,
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
            return `${d3format('$,.2f')(value)}`;
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
