import {Component, OnDestroy, OnInit} from '@angular/core';
import {PortfolioService} from '../portfolio.service';
import {SortedTable} from '../sorted-table';
import {CoinMarketCapService} from '../coin-market-cap.service';
import {Coin} from '../coin';

@Component({
    selector: 'app-portfolio-table',
    templateUrl: './portfolio-table.component.html',
    styleUrls: ['./portfolio-table.component.css']
})
export class PortfolioTableComponent extends SortedTable implements OnInit, OnDestroy {

    public interval;


    constructor(public portfolioService: PortfolioService, public coinMarketCapService: CoinMarketCapService) {

        super();

    }

    ngOnInit() {

        this.sortBy = 'value';

        this.ascending = false;


        this.interval = setInterval(() => {
            this.getCoins();

        }, 1000 * 30);

        this.getCoins();


    }

    private getCoins() {

        this.coinMarketCapService.marketData().subscribe((coins: Coin[]) => {

            this.coins = this.portfolioService.mergeMarketAndCoinData(coins);
        });

    }


    ngOnDestroy() {

        clearInterval(this.interval);
    }


}
