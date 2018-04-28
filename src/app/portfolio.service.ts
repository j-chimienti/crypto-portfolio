import {Injectable} from '@angular/core';
import {Coin} from './coin';
import {CoinMarketCapService, Row} from './coin-market-cap.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {LocalStorageService} from './local-storage.service';


@Injectable()
export class PortfolioService {


  public COINS: Coin[];

  public coins_: (string | number)[][];

  public marketData: Row[];

  constructor(private localStorageService: LocalStorageService) {

    this.coins_ = localStorageService.COINS;

  }


  public handleMarketData(coins: Row[]): Coin[] {


    this.marketData = coins;

    return this.mapMarketDataToCoins();


  }

  public editCoins(coins: (string | number)[][]): (string | number)[][] {


    this.coins_ = coins.map(item => [String(item[0]), Number(item[1])]);


    this.localStorageService.setCoins(this.coins_);


    return this.coins_;


  }

  private mapMarketDataToCoins(): Coin[] {


    this.COINS = [];

    this.coins_.forEach(coin => {

      const [id, hodl] = coin;

      const findCoin = this.marketData.find(row => row.id === id);

      if (findCoin) {

        const {price_usd, price_btc} = findCoin;

        const p = new Coin(String(id), +hodl, +price_usd, +price_btc, +price_usd * +hodl);

        this.COINS.push(p);


      } else {

        console.log('no found coin', coin);
      }
    });


    return this.COINS.sort((a, b) => b.value - a.value);


  }


}
