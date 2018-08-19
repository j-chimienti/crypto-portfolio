import {Injectable} from '@angular/core';

@Injectable()
export class LocalStorageService {


  private KEY = '@COINS@';


  constructor() {


  }


  public getCoins(): (string | number)[][] {

    const rawJSON = localStorage.getItem(this.KEY);


    if (!rawJSON) {

      return [];

    }


    try {

      return JSON.parse(rawJSON);


    } catch (e) {

      console.error('error parsing');

      this.deleteCoins();

      return [];
    }


  }

  public setCoins(coins: (string | number)[][]): void {


    localStorage.setItem(this.KEY, JSON.stringify(coins));

  }

  public deleteCoins(): void {

    localStorage.clear();

  }

}
