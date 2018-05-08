import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError, retry} from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';
import {ErrorObservable} from 'rxjs/observable/ErrorObservable';


export interface Row {

  'id': string;
  'name': string;
  'symbol': string;
  'rank': number;
  'price_usd': number;
  'price_btc': number;
  '24h_volume_usd': number;
  'market_cap_usd': number;
  'available_supply': number;
  'total_supply': number;
  'max_supply': number;
  'percent_change_1h': number;
  'percent_change_24h': number;
  'percent_change_7d': number;
  'last_updated': any;
}


@Injectable()
export class CoinMarketCapService {


  url = 'https://api.coinmarketcap.com/v1/ticker/';

  constructor(private http: HttpClient) {
  }


  private handleError(error: HttpErrorResponse) {
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
    return new ErrorObservable(
      'Something bad happened; please try again later.');
  };

  public marketData(): Observable<Row[]> {

    return this.http.get<Row[]>(this.url)
      .pipe(
        retry(3),
        catchError(this.handleError)
      );

  }

}
