import {Injectable} from '@angular/core';
import {CoinMarketCapService, Row} from './coin-market-cap.service';
import {LocalStorageService} from './local-storage.service';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import {Coin} from './coin';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';

@Injectable()
export class PortfolioService {

    public coins: Array<Coin> = [];

    public total: number;

    public totalBtc: number;

    constructor(public localStorageService: LocalStorageService,
                public coinMarketCapService: CoinMarketCapService) {

    }

    static assertValid(coin: (string | number)[]): boolean | (string | number)[] {


        return coin && coin.length === 2 && coin[0] && typeof coin[0] === 'string' && isFinite(+coin[1]);
    }

    mergeMarketAndCoinData(marketData: Coin[]): Coin[] {

        const COINS: (string | number)[][] = this.getCoins();


        this.coins = marketData.filter((coin: Coin) => COINS.find(COIN => COIN[0] === coin.id))
            .map((coin: Coin) => {

                const coins: (string | number)[] = COINS.find(COIN => COIN[0] === coin.id);

                const value: number = +coins[1] * coin.price_usd;

                coin.setCoins(+coins[1]);

                coin.setValue(value);

                return coin;

            })
            .sort((a, b) => b.value - a.value);

        this.total = this.coins.reduce((tot, cur) => tot + cur.value, 0);

        this.totalBtc = this.coins.reduce((tot, cur) => tot + cur.price_btc * cur.coins, 0);


        // const dater = new Date().toLocaleDateString();
        //
        // const fileName = 'portfolio-' + dater;

        // localStorage.setItem(fileName, JSON.stringify(this.coins));

        // console.log('saved portfolio');

        return this.coins;


    }


    public editCoin(id: string, hodl: number): void {


        const coins: (string | number)[][] = this.localStorageService.getCoins();

        for (const coin of coins) {


            if (coin[0] === id) {

                coin[1] = hodl;
                break;
            }
        }

        this.editCoins(coins);


    }

    public addCoin(id: string, coins: number): void {


        const COINS: (string | number)[][] = this.getCoins();

        const foundIndex = COINS.findIndex(coin => coin[0] === id);

        if (foundIndex < 0) {

            COINS.push([id, coins]);
        } else {

            COINS[foundIndex][1] = coins;


        }
        this.localStorageService.setCoins(COINS);

    }


    public getCoins(): (string | number)[][] {

        return this.localStorageService.getCoins()
            .filter(coin => PortfolioService.assertValid(coin));

    }


    public deleteCoin(id: string): void {

        const COINS: (string | number)[][] = this.getCoins();

        const index = COINS.findIndex(coin_ => coin_[0] === id);

        if (index) {

            delete COINS[index];

            this.localStorageService.setCoins(COINS);

        }


    }


}
