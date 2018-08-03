import {Component, OnInit} from '@angular/core';
import {CsvDownloadService} from '../csv-download.service';

@Component({
    selector: 'app-portfolio-page',
    templateUrl: './portfolio-page.component.html',
    styleUrls: ['./portfolio-page.component.css']
})
export class PortfolioPageComponent implements OnInit {

    constructor(public csvDownloadService: CsvDownloadService) {
    }

    ngOnInit() {
    }

}
