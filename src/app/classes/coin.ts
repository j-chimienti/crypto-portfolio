export interface ICoinBase {

  'id': string;
  'name': string;
  'symbol': string;
  'rank': number;
  'price_usd': number;
  'price_btc': number;
  '24h_volume_usd'?: number;
  volume_usd_24?: number;
  'market_cap_usd': number;
  'available_supply': number;
  'total_supply': number;
  'max_supply': number;
  'percent_change_1h': number;
  'percent_change_24h': number;
  'percent_change_7d': number;
  'last_updated': any;
}

export interface ICoinCoinMarketCap extends ICoinBase {

  '24h_volume_usd': number;
  volume_usd_24?: number;
}

export interface ICoin extends ICoinBase {
  '24h_volume_usd'?: number;
  volume_usd_24: number;

}

export class Coin implements ICoin {

  constructor(public id: string,
              public name: string,
              public symbol: string,
              public rank: number,
              public price_usd: number,
              public price_btc: number,
              public market_cap_usd: number,
              public available_supply: number,
              public total_supply: number,
              public max_supply: number,
              public percent_change_1h: number,
              public percent_change_24h: number,
              public percent_change_7d: number,
              public last_updated: number | string,
              public volume_usd_24: number,
              public value?: number,
              public coins?: number) {

  }

}
