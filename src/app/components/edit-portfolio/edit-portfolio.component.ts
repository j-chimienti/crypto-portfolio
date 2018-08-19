import {Component, OnInit} from '@angular/core';
import {PortfolioService} from '../../services/portfolio.service';
import {LocalStorageService} from '../../services/local-storage.service';

@Component({
    selector: 'app-edit-portfolio',
    templateUrl: './edit-portfolio.component.html',
    styleUrls: ['./edit-portfolio.component.css']
})
export class EditPortfolioComponent implements OnInit {


    public editMode = false;



    constructor(public portfolioService: PortfolioService, public localStorageService: LocalStorageService) {
    }

    ngOnInit() {


    }




}
