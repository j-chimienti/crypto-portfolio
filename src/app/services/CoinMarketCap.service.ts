import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Coin, ICoinCoinMarketCap} from '../classes/Coin';

import {Observable} from 'rxjs';
import {map, retry} from 'rxjs/operators';


@Injectable()
export class CoinMarketCapService {


  private static url = 'https://api.coinmarketcap.com/v1/ticker/';


  constructor(private http: HttpClient) {
  }


  public marketData(): Observable<Coin[]> {

    return this.http.get<Coin[]>(CoinMarketCapService.url)
      .pipe(
        retry(3)
      );

  }

}
