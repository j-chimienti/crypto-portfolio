import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Coin, ICoinCoinMarketCap} from '../classes/coin';

import {Observable, Subject, ReplaySubject, from, of, range, ErrorObserver} from 'rxjs';
import {map, filter, switchMap, retry, catchError} from 'rxjs/operators';





@Injectable()
export class CoinMarketCapService {


  url = 'https://api.coinmarketcap.com/v1/ticker/';

  constructor(private http: HttpClient) {
  }


  private static handleError(error: HttpErrorResponse): Error {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an ErrorObservable with a user-facing error message
    return new Error(
      'Something bad happened; please try again later.');
  }


  public marketData(): Observable<Coin[]> {

    return this.http.get<ICoinCoinMarketCap[]>(this.url)
      .pipe(
        retry(3),
        //catchError(CoinMarketCapService.handleError),
        map((res: ICoinCoinMarketCap[]) => res.map(item => new Coin(
          item.id,
          item.name,
          item.symbol,
          item.rank,
          item.price_usd,
          item.price_btc,
          item.market_cap_usd,
          item.available_supply,
          item.total_supply,
          item.max_supply,
          item.percent_change_1h,
          item.percent_change_24h,
          item.percent_change_7d,
          item.last_updated,
          item['24h_volume_usd'],
        )))
      );

  }

}
