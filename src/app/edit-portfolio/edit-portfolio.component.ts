import {Component, OnInit} from '@angular/core';
import {PortfolioService} from '../portfolio.service';

@Component({
    selector: 'app-edit-portfolio',
    templateUrl: './edit-portfolio.component.html',
    styleUrls: ['./edit-portfolio.component.css']
})
export class EditPortfolioComponent implements OnInit {


    public editMode = false;

    constructor(public portfolioService: PortfolioService) {
    }

    ngOnInit() {




    }


}
