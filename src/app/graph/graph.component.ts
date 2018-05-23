import {Component, OnInit} from '@angular/core';
import {PortfolioService} from '../portfolio.service';
import {Coin} from '../coin';

import * as d3 from 'd3';

import * as c3 from 'c3';
import {Row} from '../coin-market-cap.service';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {


  keys = [
    'rank',
    'price_usd',
    'price_btc',
    '24h_volume_usd',
    'market_cap_usd',
    'available_supply',
    'total_supply',
    'max_supply',
    'percent_change_1h',
    'percent_change_24h',
    'percent_change_7d'
  ];

  public activeParam = this.keys[this.keys.length - 1];


  constructor(public portfolioService: PortfolioService) {
  }

  ngOnInit() {


    this.portfolioService.handleFetchCoins();

    this.updateGraph();

  }

   private mapToRow(coin: Coin): (string | number)[] {

    return [coin.id, coin[this.activeParam]];
  }


  public updateGraph() {

    const mapped = this.portfolioService.coins
      .sort((a, b) => b[this.activeParam] - a[this.activeParam])
      .map((c) => this.mapToRow(c));


    c3.generate({
      bindto: '#chart',
      data: {
        columns: mapped,
        type: 'bar'
      },
      bar: {
        width: {
          ratio: 0.5 // this makes bar width 50% of length between ticks
        }
        // or
        //width: 100 // this makes bar width 100px
      }
    });

  }
}
