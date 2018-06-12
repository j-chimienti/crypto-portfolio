import {Component, OnInit} from '@angular/core';
import {PortfolioService} from '../portfolio.service';
import {Coin} from '../coin';

import * as d3 from 'd3';

import * as c3 from 'c3';
import {CoinMarketCapService, Row} from '../coin-market-cap.service';
import {Subscriber} from 'rxjs/Subscriber';

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

    public descending = true;

    public activeParam = this.keys[this.keys.length - 1];


    constructor(public portfolioService: PortfolioService,
                public coinMarketCapService: CoinMarketCapService) {


    }

    ngOnInit() {

        this.updateGraph();


    }

    private mapToRow(coin: Coin): (string | number)[] {

        return [coin.id, coin[this.activeParam]];
    }

    public toggleDescending() {

        this.descending = !this.descending;

        this.updateGraph();
    }


    public updateGraph(): void {


        this.coinMarketCapService.marketData().subscribe((coins: Coin[]) => {

            const mapped = coins
                .sort((a, b) => this.descending ? b[this.activeParam] - a[this.activeParam] : a[this.activeParam] - b[this.activeParam])
                .slice(0, 10)
                .map((c) => this.mapToRow(c));

            console.log(mapped);


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

        });


    }
}
