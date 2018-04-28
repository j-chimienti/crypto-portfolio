import {Component, OnInit} from '@angular/core';
import {PortfolioService} from '../portfolio.service';
import {Observable} from 'rxjs/Observable';
import {Coin} from '../coin';
import {LocalStorageService} from '../local-storage.service';

@Component({
  selector: 'app-edit-portfolio',
  templateUrl: './edit-portfolio.component.html',
  styleUrls: ['./edit-portfolio.component.css']
})
export class EditPortfolioComponent implements OnInit {

  public coinsJson: string;

  public defaultPortfolio = [
    ['monero', 17.81623304],
    ['ethereum-classic', 400],
    ['bitcoin', 2.02],
    ['ethereum', 1.01],
    ['litecoin', 6],
    ['zcash', 6],
    ['dash', 0.3]
  ];

  public defaultPortfolioDisplay = JSON.stringify(this.defaultPortfolio);


  constructor(private portfolioService: PortfolioService, public localStorageService: LocalStorageService) {
  }

  ngOnInit() {

    console.log(this.localStorageService.COINS);

    this.coinsJson = JSON.stringify(this.localStorageService.COINS) || '';


  }

  submitDefault() {

    const coins = this.portfolioService.editCoins(this.defaultPortfolio);

    this.coinsJson = JSON.stringify(coins);
  }

  public handleSubmit(newPortfolio: string): void {


    const coins = this.portfolioService.editCoins(JSON.parse(newPortfolio));


    this.coinsJson = JSON.stringify(coins);
  }

  public handleDelete() {

    this.localStorageService.deleteCoins();


    this.coinsJson = '';


  }


}
