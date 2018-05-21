import {Component, OnInit} from '@angular/core';
import {PortfolioService} from '../portfolio.service';


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
    'id',
    'name',
    'symbol',
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
    'percent_change_7d',
    'last_updated'
  ];

  activeParam = 'percent_change_7d';

  coins: Row[] = [];


  constructor(public portfolioService: PortfolioService) {
  }

  ngOnInit() {


    this.generate();

  }

  mapToRow(coin: Row): [string | number] {

    return [coin.id, coin[this.activeParam]];
  }

  public generate() {


    this.portfolioService.fetchCoins().subscribe(
      (coins_: Row[]) => {


        const COINS: [string | number][] = this.portfolioService.getCoins();

        this.coins = coins_.filter(coin => COINS.find(COIN => COIN[0] === coin.id));


        this.updateGraph();


      });


  }


  public updateGraph() {


    const coins = this.coins;


    const mapped = coins
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
