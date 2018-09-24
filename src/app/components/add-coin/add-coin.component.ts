import {Component, OnInit} from '@angular/core';
import {PortfolioService} from '../../services/Portfolio.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CoinMarketCapService} from '../../services/CoinMarketCap.service';
import {Coin} from '../../classes/Coin';

@Component({
  selector: 'app-add-coin',
  templateUrl: './add-coin.component.html',
  styleUrls: ['./add-coin.component.css']
})
export class AddCoinComponent implements OnInit {

  public model = {
    name: '',
    hodl: 0
  };

  public coins: {id: string, name: string, symbol: string}[];

  constructor(public portfolioService: PortfolioService, private coinMarketCapService: CoinMarketCapService) {
  }

  ngOnInit() {

    this.coinMarketCapService.marketData().subscribe(coins => {
      this.coins = coins.map(({id, name, symbol}) => ({id, name, symbol}));
    });


  }

  handleSubmit() {

    this.portfolioService.addCoin(this.model.name, this.model.hodl);

  }
}
