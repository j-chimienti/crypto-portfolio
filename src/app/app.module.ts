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
import {FormsModule} from '@angular/forms';
import {CsvDownloaderService} from './services/CsvDownloader.service';
import {PieChartComponent} from './components/pie-chart/pie-chart.component';
import {PortfolioPageComponent} from './pages/portfolio-page/portfolio-page.component';
import {AddCoinComponent} from './components/add-coin/add-coin.component';
import {PortfolioSummaryComponent} from './pages/portfolio-summary/portfolio-summary.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MarketPageComponent} from './pages/market-page/market-page.component';
import {LgNumPipePipe} from './pipes/lg-num-pipe.pipe';
import {PrecisionPipe} from './pipes/precision.pipe';
import {MarketTableComponent} from './components/market-table/market-table.component';
import {CoinIconComponent} from './components/coin-icon/coin-icon.component';
import {CoinDetailsComponent} from './components/coin-details/coin-details.component';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {LoadingComponent} from './loading/loading.component';
import {EditPortfolioItemComponent} from './components/edit-portfolio-item/edit-portfolio-item.component';
import {NavigationComponent} from './components/navigation/navigation.component';


const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/portfolio',
    pathMatch: 'full'
  },
  {
    path: 'portfolio',
    component: PortfolioPageComponent,
    children: [
      {
        path: '',
        component: PortfolioSummaryComponent
      },
      {
        path: 'details',
        component: PortfolioSummaryComponent,
      },
      {
        path: 'edit',
        component: EditPortfolioComponent
      },
      {
        path: 'add',
        component: AddCoinComponent
      },
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
    PieChartComponent,
    PortfolioPageComponent,
    AddCoinComponent,
    PortfolioSummaryComponent,
    MarketPageComponent,
    LgNumPipePipe,
    PrecisionPipe,
    CoinIconComponent,
    CoinDetailsComponent,
    LoadingComponent,
    EditPortfolioItemComponent,
    NavigationComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    NgxDatatableModule,
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




