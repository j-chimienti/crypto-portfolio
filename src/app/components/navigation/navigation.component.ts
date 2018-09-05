import { Component, OnInit } from '@angular/core';
import {CsvDownloaderService} from '../../services/CsvDownloader.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(public csvDownloadService: CsvDownloaderService) { }

  ngOnInit() {
  }

}
