import { Component, OnInit } from '@angular/core';
import {PortfolioService} from '../../services/Portfolio.service';

@Component({
  selector: 'app-portfolio-summary',
  templateUrl: './portfolio-summary.component.html',
  styleUrls: ['./portfolio-summary.component.css']
})
export class PortfolioSummaryComponent implements OnInit {

  constructor(public portfolioService: PortfolioService) { }

  ngOnInit() {
  }

}
