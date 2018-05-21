import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {PortfolioService} from './portfolio.service';
import {CoinMarketCapService} from './coin-market-cap.service';
import {HttpClientModule} from '@angular/common/http';
import {PortfolioTableComponent} from './portfolio-table/portfolio-table.component';
import {EditPortfolioComponent} from './edit-portfolio/edit-portfolio.component';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {LocalStorageService} from './local-storage.service';
import {GraphComponent} from './graph/graph.component';


const appRoutes: Routes = [

  {
    path: '',
    redirectTo: 'table',
    //component: AppComponent,
    pathMatch: 'full'
  },
  {
    path: 'graph',

    component: GraphComponent
  },
  {
    path: 'table',
    component: PortfolioTableComponent,
  },
  {
    path: 'edit',
    component: EditPortfolioComponent
  }
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PortfolioTableComponent,
    EditPortfolioComponent,
    GraphComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: false} // <-- debugging purposes only
    )
  ],
  providers: [
    PortfolioService,
    CoinMarketCapService,
    LocalStorageService,
  ],
  exports: [
    RouterModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}




