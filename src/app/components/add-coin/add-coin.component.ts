import {Component, OnInit} from '@angular/core';
import {PortfolioService} from '../../services/Portfolio.service';
import {AbstractControl, FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import {CoinMarketCapService} from '../../services/CoinMarketCap.service';
import {Coin} from '../../classes/Coin';

class Model {

  public quantity: number;
  public id: string;

  constructor() {

  }
}


@Component({
  selector: 'app-add-coin',
  templateUrl: './add-coin.component.html',
  styleUrls: ['./add-coin.component.css']
})


export class AddCoinComponent implements OnInit {


  public model: Model = new Model();

  public coins: Coin[];

  constructor(
    public portfolioService: PortfolioService,
    private coinMarketCapService: CoinMarketCapService) {
  }

  public validName(_id: string): { success: boolean, payload: Coin | null } {

    const found = this.coins.find(coin => coin.id.toLowerCase() === _id.toLowerCase());

    if (found) {

      return {
        success: true,
        payload: Object.assign({}, found, this.model)

      };
    } else {
      return {
        success: false,
        payload: null,
      };
    }

  }

  ngOnInit() {

    this.coinMarketCapService.marketData().subscribe(coins => {
      this.coins = coins;
    });


  }

  handleSubmit($event) {

    $event.preventDefault();

    const _valid = this.validName(this.model.id);

    if (_valid.success) {

      this.portfolioService.addCoin(_valid.payload);

    } else {

      alert('Invalid request ' + JSON.stringify(_valid));
    }

  }
}
