import {Injectable} from '@angular/core';


import {Coin} from '../coin';

@Injectable()
export class PortfolioService {

  private localStorageKeys = {
    COINS: '@COINS@',
  };

  public coins: Array<Coin> = [];

  constructor() {

  }

  get _raw(): (string | number)[][] {


    try {

      return JSON.parse(localStorage.getItem(this.localStorageKeys.COINS)).filter(PortfolioService.assertValid);

    } catch (e) {

      return [];
    }

  }

  static assertValid(coin: (string | number)[]): boolean | (string | number)[] {


    return coin && coin.length === 2 && coin[0] && typeof coin[0] === 'string' && isFinite(+coin[1]);
  }

  public mergeMarketAndCoinData(marketData: Coin[]): Coin[] {

    const COINS: (string | number)[][] = this._raw;

    this.coins = marketData.filter((coin: Coin) => COINS.find(COIN => COIN[0] === coin.id))
      .map((coin: Coin) => {

        const coins: (string | number)[] = COINS.find(COIN => COIN[0] === coin.id);

        const value: number = +coins[1] * coin.price_usd;

        coin.setCoins(+coins[1]);

        coin.setValue(value);

        return coin;

      });


    return this.coins;


  }


  public editCoin(id: string, hodl: number): void {
    const rawCoins: (string | number)[][] = this._raw;
    for (const coin of rawCoins) {
      if (coin[0] === id) {
        coin[1] = hodl;
        break;
      }
    }
    localStorage.setItem(this.localStorageKeys.COINS, JSON.stringify(rawCoins));

  }

  public addCoin(id: string, coins: number): void {


    const COINS: (string | number)[][] = this._raw;

    const foundIndex = COINS.findIndex(coin => coin[0] === id);

    if (foundIndex < 0) {

      COINS.push([id, coins]);
    } else {

      COINS[foundIndex][1] = coins;


    }
    localStorage.setItem(this.localStorageKeys.COINS, JSON.stringify(COINS));

  }


  public deleteCoin(id: string): void {

    const COINS: (string | number)[][] = this._raw;
    const _COINS = COINS.filter(coin_ => coin_[0] !== id);
    localStorage.setItem(this.localStorageKeys.COINS, JSON.stringify(_COINS));


  }

  public deleteCoins() : void {

    localStorage.removeItem(this.localStorageKeys.COINS);
  }


}
