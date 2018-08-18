import {Component, OnInit} from '@angular/core';
import {PortfolioService} from '../portfolio.service';

@Component({
    selector: 'app-add-coin',
    templateUrl: './add-coin.component.html',
    styleUrls: ['./add-coin.component.css']
})
export class AddCoinComponent implements OnInit {

    public model = {
        name: '',
        hodl: 0
    };


    constructor(public portfolioService: PortfolioService) {
    }

    ngOnInit() {
    }

    handleSubmit() {

        this.portfolioService.addCoin(this.model.name, this.model.hodl);

    }
}
