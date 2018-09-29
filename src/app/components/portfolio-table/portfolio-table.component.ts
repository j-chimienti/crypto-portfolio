import {Component, OnDestroy, OnInit} from '@angular/core';
import {PortfolioService} from '../../services/Portfolio.service';
import {CoinMarketCapService} from '../../services/CoinMarketCap.service';
import {CsvDownloaderService} from '../../services/CsvDownloader.service';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-portfolio-table',
  templateUrl: './portfolio-table.component.html',
  styleUrls: ['./portfolio-table.component.css'],
  // animations: [
  //   trigger(
  //     'enterAnimation', [
  //       transition(':enter', [
  //         style({ opacity: 0}),
  //         animate('500ms', style({ opacity: 1}))
  //       ]),
  //       transition(':leave', [
  //         style({opacity: 1}),
  //         animate('500ms', style({opacity: 0}))
  //       ])
  //     ]
  //   )
  // ],
})
export class PortfolioTableComponent implements OnInit, OnDestroy {

  constructor(
    public portfolioService: PortfolioService,
    public coinMarketCapService: CoinMarketCapService,
    public csvDownloadService: CsvDownloaderService,
  ) {


  }

  ngOnInit(): void {


  }


  ngOnDestroy() {

  }

  public getKlass({value, row, column}) {

    return {
      'text-success': 0 < value,
      'text-danger': value <= 0,
      'text-right': true,
      mono: true,
    };

  }


}
