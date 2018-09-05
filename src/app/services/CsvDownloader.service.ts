import { Injectable } from '@angular/core';
import {PortfolioService} from './Portfolio.service';

@Injectable()
export class CsvDownloaderService {

  constructor(public portfolioService: PortfolioService) { }


    handleDownload() {

        const dater: string = new Date().toLocaleDateString().replace(new RegExp('\/', 'g'), '-');

        const fileName: string = 'portfolio-' + dater;

        this.JSONToCSVConvertor(this.portfolioService.coins, fileName, true);
    }

    JSONToCSVConvertor(JSONData, ReportTitle, ShowLabel) {
        // If JSONData is not an object then JSON.parse will parse the JSON string in an Object
        const arrData = typeof JSONData !== 'object' ? JSON.parse(JSONData) : JSONData;


        let CSV = Object.keys(JSONData[0]).concat('@date@').join(',') + '\n';
        // Set Report title in first row or line

        const dater = new Date().toISOString();

        arrData.forEach(row => {

            row['@date@'] = dater;

            CSV += Object.values(row).join(',') + '\n';
        });

        if (CSV === '') {
            alert('Invalid data');
            return;
        }

        // Generate a file name
        const fileName = ReportTitle.replace(/ /g, '_');

        // Initialize file format you want csv or xls
        const uri = 'data:text/csv;charset=utf-8,' + encodeURIComponent(CSV);

        //  Now the little tricky part.
        //  you can use either>> window.open(uri);
        //  but this will not work in some browsers
        //  or you will not get the correct file extension

        // this trick will generate a temp <a /> tag
        const link = document.createElement('a');
        link.href = uri;

        // set the visibility hidden so it will not effect on your web-layout

        Object.assign(link, {
            style: 'visibility: hidden',
            download: fileName + '.csv',
        });

        // this part will append the anchor tag and remove it after automatic click
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }



}
