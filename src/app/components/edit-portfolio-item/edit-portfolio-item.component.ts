import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {PortfolioService} from '../../services/Portfolio.service';
import {Coin} from '../../classes/Coin';

const _coins = [
  {
    'id': 'bitcoin',
    'name': 'Bitcoin',
    'symbol': 'BTC'
  },
  {
    'id': 'ethereum',
    'name': 'Ethereum',
    'symbol': 'ETH'
  },
  {
    'id': 'ripple',
    'name': 'XRP',
    'symbol': 'XRP'
  },
  {
    'id': 'bitcoin-cash',
    'name': 'Bitcoin Cash',
    'symbol': 'BCH'
  },
  {
    'id': 'eos',
    'name': 'EOS',
    'symbol': 'EOS'
  },
  {
    'id': 'stellar',
    'name': 'Stellar',
    'symbol': 'XLM'
  },
  {
    'id': 'litecoin',
    'name': 'Litecoin',
    'symbol': 'LTC'
  },
  {
    'id': 'tether',
    'name': 'Tether',
    'symbol': 'USDT'
  },
  {
    'id': 'cardano',
    'name': 'Cardano',
    'symbol': 'ADA'
  },
  {
    'id': 'monero',
    'name': 'Monero',
    'symbol': 'XMR'
  },
  {
    'id': 'dash',
    'name': 'Dash',
    'symbol': 'DASH'
  },
  {
    'id': 'iota',
    'name': 'IOTA',
    'symbol': 'MIOTA'
  },
  {
    'id': 'tron',
    'name': 'TRON',
    'symbol': 'TRX'
  },
  {
    'id': 'neo',
    'name': 'NEO',
    'symbol': 'NEO'
  },
  {
    'id': 'ethereum-classic',
    'name': 'Ethereum Classic',
    'symbol': 'ETC'
  },
  {
    'id': 'binance-coin',
    'name': 'Binance Coin',
    'symbol': 'BNB'
  },
  {
    'id': 'tezos',
    'name': 'Tezos',
    'symbol': 'XTZ'
  },
  {
    'id': 'nem',
    'name': 'NEM',
    'symbol': 'XEM'
  },
  {
    'id': 'vechain',
    'name': 'VeChain',
    'symbol': 'VET'
  },
  {
    'id': 'dogecoin',
    'name': 'Dogecoin',
    'symbol': 'DOGE'
  },
  {
    'id': 'zcash',
    'name': 'Zcash',
    'symbol': 'ZEC'
  },
  {
    'id': 'omisego',
    'name': 'OmiseGO',
    'symbol': 'OMG'
  },
  {
    'id': 'bitcoin-gold',
    'name': 'Bitcoin Gold',
    'symbol': 'BTG'
  },
  {
    'id': 'lisk',
    'name': 'Lisk',
    'symbol': 'LSK'
  },
  {
    'id': 'ontology',
    'name': 'Ontology',
    'symbol': 'ONT'
  },
  {
    'id': 'bytecoin-bcn',
    'name': 'Bytecoin',
    'symbol': 'BCN'
  },
  {
    'id': 'qtum',
    'name': 'Qtum',
    'symbol': 'QTUM'
  },
  {
    'id': '0x',
    'name': '0x',
    'symbol': 'ZRX'
  },
  {
    'id': 'maker',
    'name': 'Maker',
    'symbol': 'MKR'
  },
  {
    'id': 'bitshares',
    'name': 'BitShares',
    'symbol': 'BTS'
  },
  {
    'id': 'decred',
    'name': 'Decred',
    'symbol': 'DCR'
  },
  {
    'id': 'nano',
    'name': 'Nano',
    'symbol': 'NANO'
  },
  {
    'id': 'bitcoin-diamond',
    'name': 'Bitcoin Diamond',
    'symbol': 'BCD'
  },
  {
    'id': 'zilliqa',
    'name': 'Zilliqa',
    'symbol': 'ZIL'
  },
  {
    'id': 'digibyte',
    'name': 'DigiByte',
    'symbol': 'DGB'
  },
  {
    'id': 'icon',
    'name': 'ICON',
    'symbol': 'ICX'
  },
  {
    'id': 'siacoin',
    'name': 'Siacoin',
    'symbol': 'SC'
  },
  {
    'id': 'steem',
    'name': 'Steem',
    'symbol': 'STEEM'
  },
  {
    'id': 'aeternity',
    'name': 'Aeternity',
    'symbol': 'AE'
  },
  {
    'id': 'verge',
    'name': 'Verge',
    'symbol': 'XVG'
  },
  {
    'id': 'waves',
    'name': 'Waves',
    'symbol': 'WAVES'
  },
  {
    'id': 'metaverse',
    'name': 'Metaverse ETP',
    'symbol': 'ETP'
  },
  {
    'id': 'bytom',
    'name': 'Bytom',
    'symbol': 'BTM'
  },
  {
    'id': 'basic-attention-token',
    'name': 'Basic Attention Token',
    'symbol': 'BAT'
  },
  {
    'id': 'pundi-x',
    'name': 'Pundi X',
    'symbol': 'NPXS'
  },
  {
    'id': 'stratis',
    'name': 'Stratis',
    'symbol': 'STRAT'
  },
  {
    'id': 'augur',
    'name': 'Augur',
    'symbol': 'REP'
  },
  {
    'id': 'holo',
    'name': 'Holo',
    'symbol': 'HOT'
  },
  {
    'id': 'status',
    'name': 'Status',
    'symbol': 'SNT'
  },
  {
    'id': 'golem-network-tokens',
    'name': 'Golem',
    'symbol': 'GNT'
  },
  {
    'id': 'komodo',
    'name': 'Komodo',
    'symbol': 'KMD'
  },
  {
    'id': 'waltonchain',
    'name': 'Waltonchain',
    'symbol': 'WTC'
  },
  {
    'id': 'rchain',
    'name': 'RChain',
    'symbol': 'RHOC'
  },
  {
    'id': 'moac',
    'name': 'MOAC',
    'symbol': 'MOAC'
  },
  {
    'id': 'chainlink',
    'name': 'Chainlink',
    'symbol': 'LINK'
  },
  {
    'id': 'populous',
    'name': 'Populous',
    'symbol': 'PPT'
  },
  {
    'id': 'cryptonex',
    'name': 'Cryptonex',
    'symbol': 'CNX'
  },
  {
    'id': 'maidsafecoin',
    'name': 'MaidSafeCoin',
    'symbol': 'MAID'
  },
  {
    'id': 'ardor',
    'name': 'Ardor',
    'symbol': 'ARDR'
  },
  {
    'id': 'electroneum',
    'name': 'Electroneum',
    'symbol': 'ETN'
  },
  {
    'id': 'mithril',
    'name': 'Mithril',
    'symbol': 'MITH'
  },
  {
    'id': 'iostoken',
    'name': 'IOST',
    'symbol': 'IOST'
  },
  {
    'id': 'wanchain',
    'name': 'Wanchain',
    'symbol': 'WAN'
  },
  {
    'id': 'hshare',
    'name': 'Hshare',
    'symbol': 'HSR'
  },
  {
    'id': 'kucoin-shares',
    'name': 'KuCoin Shares',
    'symbol': 'KCS'
  },
  {
    'id': 'aion',
    'name': 'Aion',
    'symbol': 'AION'
  },
  {
    'id': 'reddcoin',
    'name': 'ReddCoin',
    'symbol': 'RDD'
  },
  {
    'id': 'trueusd',
    'name': 'TrueUSD',
    'symbol': 'TUSD'
  },
  {
    'id': 'funfair',
    'name': 'FunFair',
    'symbol': 'FUN'
  },
  {
    'id': 'dentacoin',
    'name': 'Dentacoin',
    'symbol': 'DCN'
  },
  {
    'id': 'huobi-token',
    'name': 'Huobi Token',
    'symbol': 'HT'
  },
  {
    'id': 'aelf',
    'name': 'aelf',
    'symbol': 'ELF'
  },
  {
    'id': 'dropil',
    'name': 'Dropil',
    'symbol': 'DROP'
  },
  {
    'id': 'monacoin',
    'name': 'MonaCoin',
    'symbol': 'MONA'
  },
  {
    'id': 'bancor',
    'name': 'Bancor',
    'symbol': 'BNT'
  },
  {
    'id': 'decentraland',
    'name': 'Decentraland',
    'symbol': 'MANA'
  },
  {
    'id': 'zencash',
    'name': 'Horizen',
    'symbol': 'ZEN'
  },
  {
    'id': 'tenx',
    'name': 'TenX',
    'symbol': 'PAY'
  },
  {
    'id': 'digixdao',
    'name': 'DigixDAO',
    'symbol': 'DGD'
  },
  {
    'id': 'aurora',
    'name': 'Aurora',
    'symbol': 'AOA'
  },
  {
    'id': 'gxchain',
    'name': 'GXChain',
    'symbol': 'GXS'
  },
  {
    'id': 'ark',
    'name': 'Ark',
    'symbol': 'ARK'
  },
  {
    'id': 'qash',
    'name': 'QASH',
    'symbol': 'QASH'
  },
  {
    'id': 'nxt',
    'name': 'Nxt',
    'symbol': 'NXT'
  },
  {
    'id': 'power-ledger',
    'name': 'Power Ledger',
    'symbol': 'POWR'
  },
  {
    'id': 'crypto-com',
    'name': 'Crypto.com',
    'symbol': 'MCO'
  },
  {
    'id': 'wax',
    'name': 'WAX',
    'symbol': 'WAX'
  },
  {
    'id': 'nebulas-token',
    'name': 'Nebulas',
    'symbol': 'NAS'
  },
  {
    'id': 'cybermiles',
    'name': 'CyberMiles',
    'symbol': 'CMT'
  },
  {
    'id': 'theta-token',
    'name': 'Theta Token',
    'symbol': 'THETA'
  },
  {
    'id': 'bitcoin-private',
    'name': 'Bitcoin Private',
    'symbol': 'BTCP'
  },
  {
    'id': 'loopring',
    'name': 'Loopring',
    'symbol': 'LRC'
  },
  {
    'id': 'mixin',
    'name': 'Mixin',
    'symbol': 'XIN'
  },
  {
    'id': 'dragonchain',
    'name': 'Dragonchain',
    'symbol': 'DRGN'
  },
  {
    'id': 'kin',
    'name': 'Kin',
    'symbol': 'KIN'
  },
  {
    'id': 'elastos',
    'name': 'Elastos',
    'symbol': 'ELA'
  },
  {
    'id': 'pivx',
    'name': 'PIVX',
    'symbol': 'PIVX'
  },
  {
    'id': 'loom-network',
    'name': 'Loom Network',
    'symbol': 'LOOM'
  },
  {
    'id': 'gas',
    'name': 'Gas',
    'symbol': 'GAS'
  },
  {
    'id': 'emercoin',
    'name': 'Emercoin',
    'symbol': 'EMC'
  }
];

class Model {
  id: string;
  quantity: number;
}

@Component({
  selector: 'app-edit-portfolio-item',
  templateUrl: './edit-portfolio-item.component.html',
  styleUrls: ['./edit-portfolio-item.component.css']
})
export class EditPortfolioItemComponent implements OnInit {

  @Input('coin') public coin: Coin;

  public model: Model;

  public editMode = false;

  private coins: { name: string, symbol: string, id: string }[] = _coins;

  constructor(public portfolioService: PortfolioService) {
  }

  ngOnInit() {

    this.model = {
      id: this.coin.id,
      quantity: this.coin.quantity
    };
  }

  public mapNameToSymbol(name: string): string {

    const _coin = this.coins.find(coin => coin.id.toLowerCase() === name.toLowerCase());

    if (!_coin) {

      return '';

    }

    return _coin.symbol.toLowerCase();
  }

  public handleSubmit(id, quantity) {

    this.portfolioService.editCoin(id, quantity);
    this.editMode = false;
  }


}
