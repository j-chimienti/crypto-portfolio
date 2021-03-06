import {Injectable} from '@angular/core';

import {Coin} from '../classes/Coin';


@Injectable()
export class PortfolioService {

  private localStorageKeys = {
    COINS: '@COINS@',
  };

  public colors = {
    'adc': '#3CB0E5',
    'aeon': '#164450',
    'amp': '#048DD2',
    'anc': '#000',
    'arch': '#002652',
    'ardr': '#002652',
    'aur': '#136c5e',
    'banx': '#225BA6',
    'bat': '#9e1f63',
    'bay': '#584ba1',
    'bc': '#202121',
    'bcc': '#F7931A',
    'bcn': '#964F51',
    'bft': '#4fc3f7',
    'brk': '#194fa0',
    'brx': '#a8c300',
    'bsd': '#1186E7',
    'bta': '#210094',
    'btc': '#F7931A',
    'btcd': '#2A72DC',
    'bts': '#03A9E0',
    'clam': '#D6AB31',
    'cloak': '#DF3F1E',
    'dao': '#FF3B3B',
    'dash': '#1c75bc',
    'dcr': '#3b7cfb',
    'dct': '#008770',
    'dgb': '#d8a24a',
    'dgx': '#d8a24a',
    'dmd': '#5497b2',
    'doge': '#ba9f33',
    'emc': '#674c8c',
    'eos': '#19191a',
    'erc': '#101e84',
    'etc': '#669073',
    'eth': '#282828',
    'fc2': '#040405',
    'fct': '#2175bb',
    'flo': '#2175bb',
    'frk': '#0633cd',
    'ftc': '#679ef1',
    'game': '#ed1b24',
    'gdc': '#e9a226',
    'gemz': '#e86060',
    'gld': '#e8be24',
    'gno': '#00a6c4',
    'gnt': '#00d6e3',
    'golos': '#2670b7',
    'grc': '#88a13c',
    'grs': '#648fa0',
    'heat': '#ff5606',
    'icn': '#4c6f8c',
    'ifc': '#ed272d',
    'incnt': '#f2932f',
    'ioc': '#2fa3de',
    'iota': '#000',
    'jbs': '#1a8bcd',
    'kmd': '#326464',
    'kobo': '#80c342',
    'kore': '#df4124',
    'lbc': '#015c47',
    'ldoge': '#ffcc00',
    'lisk': '#1a6896',
    'lsk': '#1a6896',
    'ltc': '#838383',
    'maid': '#5492d6',
    'mco': '#0d3459',
    'mint': '#006835',
    'mona': '#a99364',
    'mrc': '#4279bd',
    'msc': '#1d4983',
    'mtr': '#b92429',
    'mue': '#f5a10e',
    'nbt': '#ffc93d',
    'neo': '#58bf00',
    'neos': '#1d1d1b',
    'neu': '#2983c0',
    'nlg': '#003e7e',
    'nmc': '#6787b7',
    'note': '#42daff',
    'nvc': '#ecab41',
    'nxt': '#008fbb',
    'ok': '#0165a4',
    'omg': '#1a53f0',
    'omni': '#18347e',
    'opal': '#7193aa',
    'part': '#05d5a3',
    'piggy': '#f27a7a',
    'pink': '#ed31ca',
    'pivx': '#3b2f4d',
    'pot': '#105b2f',
    'ppc': '#3fa30c',
    'qrk': '#22aabf',
    'rads': '#924cea',
    'rbies': '#c62436',
    'rbt': '#0d4982',
    'rby': '#d31f26',
    'rdd': '#ed1c24',
    'rep': '#40a2cb',
    'rise': '#43cea2',
    'sar': '#1b72b8',
    'scot': '#3498db',
    'sdc': '#981d2d',
    'sia': '#00cba0',
    'sjcx': '#003366',
    'slg': '#5a6875',
    'sls': '#1eb549',
    'snrg': '#160363',
    'start': '#01aef0',
    'steem': '#1a5099',
    'str': '#08b5e5',
    'strat': '#2398dd',
    'swift': '#428bca',
    'sync': '#008dd2',
    'sys': '#0098da',
    'trig': '#1fbff4',
    'tx': '#1f8bcc',
    'ubq': '#00ec8d',
    'unity': '#ed8527',
    'usdt': '#2ca07a',
    'vior': '#1f52a4',
    'vnl': '#404249',
    'vpn': '#589700',
    'vrc': '#418bca',
    'vtc': '#1b5c2e',
    'waves': '#24aad6',
    'xai': '#2ef99f',
    'xbs': '#d3261d',
    'xcp': '#ec1550',
    'xem': '#41bf76',
    'xmr': '#ff6600',
    'xpm': '#e5b625',
    'xrp': '#346aa9',
    'xtz': '#a6df00',
    'xvg': '#42afb2',
    'ybc': '#d6c154',
    'zec': '#e5a93d',
    'zeit': '#acacac'
  };


  public coins: Array<Coin> = [];

  public marketData: Coin[] = [];

  get portfolio(): Coin[] {


    try {

      return JSON.parse(localStorage.getItem(this.localStorageKeys.COINS)).map(item => new Coin(
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
        item.volume_usd_24,
        item.value,
        item.quantity)).filter(Boolean);

    } catch (e) {

      return [];
    }

  }


  public handleMarketData(result: Coin[]): Coin[] {

    this.marketData = result.slice();

    const port = this.portfolio.slice();

    const foundCoins = result.filter((coin: Coin) => port.find(COIN => COIN.id === coin.id));

    this.coins = foundCoins.map((coin: Coin) => {

      const _coin: Coin = port.find(COIN => COIN.id === coin.id);

      const value: number = +_coin.quantity * coin.price_usd;

      return Object.assign({}, _coin, coin, {quantity: +_coin.quantity, value});

    });


    return this.coins;

  }

  get totalUSD() {

    return this.coins.reduce((acc, coin) => acc + coin.value, 0);
  }

  get totalBTC() {

    const coinBtcValue = this.coins.map(
      coin => coin.price_btc * coin.quantity
    );
    return coinBtcValue.reduce((acc, value) => acc + value, 0);
  }


  public editCoin(id: string, quantity: number): void {
    const rawCoins: Coin[] = this.portfolio;
    for (const coin of rawCoins) {
      if (coin.id.toLowerCase() === id.toLowerCase()) {
        coin.quantity = quantity;
        break;
      }
    }
    localStorage.setItem(this.localStorageKeys.COINS, JSON.stringify(rawCoins));

  }

  public addCoin(coin: Coin): void {


    const COINS: Coin[] = this.portfolio;

    const foundIndex = COINS.findIndex(_coin => _coin.id === coin.id);

    if (foundIndex < 0) {

      COINS.push(coin);
    } else {

      COINS[foundIndex] = coin;


    }
    localStorage.setItem(this.localStorageKeys.COINS, JSON.stringify(COINS));

  }

  public handleAddCoin(coin: Coin): void {
    this.addCoin(coin);
    this.handleMarketData(this.marketData);
  }


  public deleteCoin(id: string): void {

    const COINS: Coin[] = this.portfolio;
    const _COINS = COINS.filter(coin_ => coin_.id !== id);
    localStorage.setItem(this.localStorageKeys.COINS, JSON.stringify(_COINS));
    this.coins = this.portfolio;


  }

  public deleteCoins(): void {

    localStorage.removeItem(this.localStorageKeys.COINS);
  }


}
