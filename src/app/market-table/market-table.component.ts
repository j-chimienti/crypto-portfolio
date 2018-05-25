import {Component, OnDestroy, OnInit} from '@angular/core';
import {CoinMarketCapService} from '../coin-market-cap.service';
import {Coin} from '../coin';

@Component({
    selector: 'app-market-table',
    templateUrl: './market-table.component.html',
    styleUrls: ['./market-table.component.css']
})
export class MarketTableComponent implements OnInit, OnDestroy {


    public coins: Coin[] = [];

    private interval;

    constructor(public coinMarketCapService: CoinMarketCapService) {
    }

    ngOnInit() {

        this.getCoins();

        this.interval = setInterval(() => this.getCoins(), 1000 * 30);
    }

    ngOnDestroy() {

        clearInterval(this.interval);
    }

    getCoins() {

        return this.coinMarketCapService.marketData().subscribe((marketData: Coin[]) => {

            this.coins = marketData;
        });
    }


}
