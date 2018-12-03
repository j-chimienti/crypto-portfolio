import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Coin, ICoinCoinMarketCap} from '../classes/Coin';

import {Observable} from 'rxjs';
import {map, retry} from 'rxjs/operators';


export class MarketResponse {
  data: Coin[];
  metadata: { error: any, num_cryptocurrencies: number, timestamp: number };
}

@Injectable()
export class CoinMarketCapService {


  private static version = 'v1';
  private static url = `https://api.coinmarketcap.com/${CoinMarketCapService.version}/ticker/?limit=LIMIT&start=START`;


  constructor(private http: HttpClient) {
  }


  public marketData({limit = 100, start = 0} = {}): Observable<Coin[]> {

    const url = CoinMarketCapService.url
      .replace('LIMIT', limit.toString())
      .replace('START', start.toString());

    return this.http.get<Coin[]>(url)
      .pipe(
        retry(3)
      );

  }

}
