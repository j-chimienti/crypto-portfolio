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
import {FormsModule} from '@angular/forms';
import {MarketTableComponent} from './market-table/market-table.component';
import {NavigationComponent} from './navigation/navigation.component';
import {CsvDownloadService} from './csv-download.service';
import {PieChartComponent} from './pie-chart/pie-chart.component';
import {PortfolioPageComponent} from './portfolio-page/portfolio-page.component';
import {AddCoinComponent} from './add-coin/add-coin.component';
import {PortfolioSummaryComponent} from './portfolio-summary/portfolio-summary.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MarketPageComponent} from './market-page/market-page.component';

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
        GraphComponent,
        MarketTableComponent,
        NavigationComponent,
        PieChartComponent,
        PortfolioPageComponent,
        AddCoinComponent,
        PortfolioSummaryComponent,
        MarketPageComponent,
    ],
    imports: [
        // NgbModule.forRoot(),
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
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
        CsvDownloadService,
    ],
    exports: [
        RouterModule,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}




