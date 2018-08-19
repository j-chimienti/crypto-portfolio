import {Component, OnDestroy, OnInit} from '@angular/core';
import {CoinMarketCapService} from '../../services/coin-market-cap.service';
import {Coin} from '../../coin';
import {SortedTable} from '../../sorted-table';


@Component({
    selector: 'app-market-table',
    templateUrl: './market-table.component.html',
    styleUrls: ['./market-table.component.css']
})
export class MarketTableComponent extends SortedTable implements OnInit, OnDestroy {


    private interval;


    constructor(public coinMarketCapService: CoinMarketCapService) {

        super();
    }

    ngOnInit() {

        this.interval = setInterval(() => this.getCoins(), 1000 * 30);
        this.getCoins();
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
