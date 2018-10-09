import {Component, OnInit} from '@angular/core';
import {PortfolioService} from '../../services/Portfolio.service';
import {Coin} from '../../classes/Coin';

@Component({
  selector: 'app-edit-portfolio',
  templateUrl: './edit-portfolio.component.html',
  styleUrls: ['./edit-portfolio.component.css']
})
export class EditPortfolioComponent implements OnInit {

  public portfolio: Coin[] = [];

  constructor(public portfolioService: PortfolioService) {
  }


  ngOnInit() {


    this.portfolio = this.portfolioService.portfolio;
  }


}
