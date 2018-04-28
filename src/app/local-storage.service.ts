import {Injectable} from '@angular/core';
import {Coin} from './coin';

@Injectable()
export class LocalStorageService {


  private KEY = '@COINS@';

  public COINS: (string | number)[][];


  constructor() {

    this.COINS = this.getCoins();


  }

  public getCoins() {

    const rawJSON = localStorage.getItem(this.KEY);

    let parsed = [];

    if (rawJSON) {


      try {

        parsed = JSON.parse(rawJSON)
          .map(item => [String(item[0]), Number(item[1])]);

      } catch (e) {

        console.error('error parsing');

        this.deleteCoins();

        parsed = [];
      }


    }
    return parsed;
  }

  public setCoins(coins: (string | number)[][]): void {


    this.COINS = coins;

    localStorage.setItem(this.KEY, JSON.stringify(this.COINS));

    this.COINS = this.getCoins();

  }

  public deleteCoins(): void {

    localStorage.clear();

    this.COINS = this.getCoins();
  }

}
