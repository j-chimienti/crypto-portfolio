import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError, retry, retryWhen, zip} from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';
import {ErrorObservable} from 'rxjs/observable/ErrorObservable';
import {Coin} from './coin';
import {map} from 'rxjs/operator/map';
import {timer} from 'rxjs/observable/timer';
import {mergeMap} from 'rxjs/operator/mergeMap';
import {range} from 'rxjs/observable/range';


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


    private static handleError(error: HttpErrorResponse) {
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
    }


    public marketData(): Observable<Coin[]> {

        return this.http.get<Row[]>(this.url)
            // .pipe(
            //     this.backoff(3, 250),
            //     catchError(CoinMarketCapService.handleError)
            // )
            .pipe(
                retry(3),
                catchError(CoinMarketCapService.handleError)
            )

            .map(res => {

                return res.map(item => {

                    return new Coin(
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
                    );
                });
            });

    }

}
