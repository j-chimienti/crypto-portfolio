import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {PortfolioService} from './services/Portfolio.service';
import {CoinMarketCapService} from './services/CoinMarketCap.service';
import {HttpClientModule} from '@angular/common/http';
import {PortfolioTableComponent} from './components/portfolio-table/portfolio-table.component';
import {EditPortfolioComponent} from './components/edit-portfolio/edit-portfolio.component';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {GraphComponent} from './components/graph/graph.component';
import {FormsModule} from '@angular/forms';
import {NavigationComponent} from './components/navigation/navigation.component';
import {CsvDownloaderService} from './services/CsvDownloader.service';
import {PieChartComponent} from './components/pie-chart/pie-chart.component';
import {PortfolioPageComponent} from './pages/portfolio-page/portfolio-page.component';
import {AddCoinComponent} from './components/add-coin/add-coin.component';
import {PortfolioSummaryComponent} from './components/portfolio-summary/portfolio-summary.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MarketPageComponent} from './components/market-page/market-page.component';
import { LgNumPipePipe } from './pipes/lg-num-pipe.pipe';
import { PrecisionPipe } from './precision.pipe';
import {MarketTableComponent} from './components/market-table/market-table.component';

const appRoutes: Routes = [
  {

    path: '',
    component: PortfolioPageComponent,
    children: [
      {
        path: '',
        component: PortfolioSummaryComponent,

      },
      {
        path: 'portfolio',
        redirectTo: 'portfolio/details'
      },
      {
        path: 'portfolio/details',
        component: PortfolioSummaryComponent,
      },
      {
        path: 'portfolio/edit',
        component: EditPortfolioComponent
      },
      {
        path: 'portfolio/add',
        component: AddCoinComponent
      }
    ]
  },
  {
    path: 'market',
    component: MarketPageComponent,

  },
  {path: '**', redirectTo: ''}
];

@NgModule({
  declarations: [
    AppComponent,
    PortfolioTableComponent,
    EditPortfolioComponent,
    MarketTableComponent,
    GraphComponent,
    NavigationComponent,
    PieChartComponent,
    PortfolioPageComponent,
    AddCoinComponent,
    PortfolioSummaryComponent,
    MarketPageComponent,
    LgNumPipePipe,
    PrecisionPipe,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: false} // <-- debugging purposes only
    ),
  ],
  providers: [
    PortfolioService,
    CoinMarketCapService,
    CsvDownloaderService,
  ],
  exports: [
    RouterModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}




