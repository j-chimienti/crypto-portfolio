import {Injectable} from '@angular/core';
import {Coin} from './coin';
import {Row} from './coin-market-cap.service';
import 'rxjs/add/observable/of';
import {LocalStorageService} from './local-storage.service';


@Injectable()
export class PortfolioService {


  constructor(private localStorageService: LocalStorageService) {


  }


  public handleMarketData(coins_: Row[]) {


    const coins = [];

    this.localStorageService.COINS.forEach(coin => {

      const [id, hodl] = coin;

      const findCoin = coins_.find(row => row.id === id);

      if (findCoin) {

        const {price_usd, price_btc, percent_change_7d} = findCoin;

        const p = new Coin(String(id), +hodl, +price_usd, +price_btc, +price_usd * +hodl, +percent_change_7d);

        coins.push(p);


      } else {

        console.log('no found coin', coin);
      }
    });


    return coins.sort((a, b) => b.value - a.value);


  }

  public editCoins(coins: (string | number)[][]): (string | number)[][] {


    const coins_ = coins.map(item => [String(item[0]), Number(item[1])]);


    this.localStorageService.setCoins(coins_);


    return coins_;


  }


}
