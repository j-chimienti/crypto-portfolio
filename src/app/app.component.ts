import {Component, OnInit} from '@angular/core';
import {PortfolioService} from './portfolio.service';
import {CoinMarketCapService, Row} from './coin-market-cap.service';
import {Coin} from './coin';
import {Observable} from 'rxjs/Observable';
import {LocalStorageService} from './local-storage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  constructor() {
  }

  ngOnInit() {


  }


}
