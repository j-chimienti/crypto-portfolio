import { Component, OnInit } from '@angular/core';
import {CsvDownloadService} from '../../services/csv-download.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(public csvDownloadService: CsvDownloadService) { }

  ngOnInit() {
  }

}
