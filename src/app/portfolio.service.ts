import {Injectable} from '@angular/core';
import {CoinMarketCapService, Row} from './coin-market-cap.service';
import 'rxjs/add/observable/of';
import {LocalStorageService} from './local-storage.service';


@Injectable()
export class PortfolioService {


  constructor(public localStorageService: LocalStorageService,
              public coinMarketCapService: CoinMarketCapService) {


  }

  public editCoins(coins: [string | number][]): void {


    this.localStorageService.setCoins(coins);


  }

  public addCoin(id: string, coins: number): void {


    this.editCoins(this.getCoins().concat([id, coins]));
  }

  public deleteCoins(): void {

    this.localStorageService.deleteCoins();
  }

  public getCoins(): [string | number][] {

    return this.localStorageService.getCoins();

  }


  public fetchCoins() {


    return this.coinMarketCapService.marketData();


  }


  public deleteCoin(id: string): void {

    // const c = this.localStorageService.getCoins().filter((coin: [string, number][]) => coin[0] !== id);
    //
    // this.localStorageService.setCoins(c);
  }


}
