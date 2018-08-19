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

    ngOnInit() {


        const COINS = this.portfolioService.getCoins();

        if (!(COINS && Array.isArray(COINS) && COINS.length > 0)) {

            this.router.navigate(['edit']);
        }
    }

}
