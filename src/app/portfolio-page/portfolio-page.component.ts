import {Component, OnInit} from '@angular/core';
import {CsvDownloadService} from '../services/csv-download.service';
import {PortfolioService} from '../services/portfolio.service';

@Component({
  selector: 'app-portfolio-page',
  templateUrl: './portfolio-page.component.html',
  styleUrls: ['./portfolio-page.component.css']
})
export class PortfolioPageComponent implements OnInit {

  constructor(
    public portfolioService: PortfolioService,
    public csvDownloadService: CsvDownloadService
  ) {
  }

  ngOnInit() {
  }

}
