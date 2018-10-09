import {Component, OnDestroy, OnInit} from '@angular/core';
import {environment} from '../environments/environment';
import {interval, observable, Observable, Subscription} from 'rxjs';
import {Coin} from './classes/Coin';
import {map, tap} from 'rxjs/operators';
import {PortfolioService} from './services/Portfolio.service';
import {CoinMarketCapService} from './services/CoinMarketCap.service';
import {CsvDownloaderService} from './services/CsvDownloader.service';
import {TitleService} from './services/title.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public cx: boolean = environment.cx;


  constructor() {


  }


}
