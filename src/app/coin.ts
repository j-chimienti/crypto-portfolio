export class Coin {


  constructor(public id: string,
              public coins: number,
              public price_usd?: number,
              public price_btc?: number,
              public value?: number,
              public percent_change_7d?: number) {
  }
}
