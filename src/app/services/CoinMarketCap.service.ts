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

    return this.http.get<ICoinCoinMarketCap[]>(CoinMarketCapService.url)
      .pipe(
        retry(3),
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
