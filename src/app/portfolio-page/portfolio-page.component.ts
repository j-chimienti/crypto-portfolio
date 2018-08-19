import {Component, OnInit} from '@angular/core';
import {CsvDownloadService} from '../services/csv-download.service';
import {LocalStorageService} from '../services/local-storage.service';

@Component({
    selector: 'app-portfolio-page',
    templateUrl: './portfolio-page.component.html',
    styleUrls: ['./portfolio-page.component.css']
})
export class PortfolioPageComponent implements OnInit {

    constructor(public csvDownloadService: CsvDownloadService, public localStorageService: LocalStorageService) {
    }

    ngOnInit() {
    }

}
