import {Component, OnInit} from '@angular/core';
import {PortfolioService} from './services/portfolio.service';
import {Router} from '@angular/router';

import {environment} from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  public cx: boolean = environment.cx;

  constructor(private portfolioService: PortfolioService,
              private router: Router) {


  }

  async ngOnInit() {


    const COINS = this.portfolioService._raw;

    console.log('COINS', COINS);

    if (!(COINS && Array.isArray(COINS) && 0 < COINS.length)) {

      await this.router.navigate(['edit']);
    }
  }

}
