import {Component, Input, OnInit} from '@angular/core';
import {PortfolioService} from '../services/Portfolio.service';
import {Coin} from '../classes/Coin';

@Component({
  selector: 'app-coin-icon',
  templateUrl: './coin-icon.component.html',
  styleUrls: ['./coin-icon.component.css']
})
export class CoinIconComponent implements OnInit {

  @Input() symbol: string;

  constructor(public portfolioService: PortfolioService) {
  }

  ngOnInit() {
  }

}
