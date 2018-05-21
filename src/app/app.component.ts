import {Component, OnInit} from '@angular/core';
import {PortfolioService} from './portfolio.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  constructor(private portfolioService: PortfolioService,
              private router: Router) {


  }

  ngOnInit() {


    const COINS = this.portfolioService.getCoins();

    if (!(COINS && Array.isArray(COINS) && COINS.length > 0)) {


      this.router.navigate(['edit']);
    }
  }

}
