import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {environment} from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  public cx: boolean = environment.cx;


  constructor() {


  }

  async ngOnInit() {



//      await this.router.navigate(['portfolio', 'add']);


  }

}
