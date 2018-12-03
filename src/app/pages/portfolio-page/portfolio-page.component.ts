import {Component, OnDestroy, OnInit} from '@angular/core';
import {CsvDownloaderService} from '../../services/CsvDownloader.service';
import {PortfolioService} from '../../services/Portfolio.service';
import {interval, Observable, Subscription} from 'rxjs';
import {Coin} from '../../classes/Coin';
import {tap} from 'rxjs/operators';
import {CoinMarketCapService} from '../../services/CoinMarketCap.service';
import {TitleService} from '../../services/title.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-portfolio-page',
  templateUrl: './portfolio-page.component.html',
  styleUrls: ['./portfolio-page.component.css']
})
export class PortfolioPageComponent implements OnInit {


  constructor(public csvDownloadService: CsvDownloaderService, public portfolioService: PortfolioService, public router: Router) {

  }

  ngOnInit() {
    if (!this.portfolioService.portfolio.length) {

      return this.router.navigateByUrl('/portfolio/add');
    }

  }
}
