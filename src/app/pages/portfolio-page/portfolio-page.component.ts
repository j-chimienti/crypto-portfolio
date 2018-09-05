import {Component, OnInit} from '@angular/core';
import {CsvDownloaderService} from '../../services/CsvDownloader.service';
import {PortfolioService} from '../../services/Portfolio.service';

@Component({
  selector: 'app-portfolio-page',
  templateUrl: './portfolio-page.component.html',
  styleUrls: ['./portfolio-page.component.css']
})
export class PortfolioPageComponent implements OnInit {

  constructor(
    public portfolioService: PortfolioService,
    public csvDownloadService: CsvDownloaderService
  ) {
  }

  ngOnInit() {
  }

}
