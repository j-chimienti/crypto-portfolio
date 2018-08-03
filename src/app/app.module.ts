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
import {Pie} from 'd3-shape';
import {PortfolioPageComponent} from './portfolio-page/portfolio-page.component';


const appRoutes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'portfolio'
    },
    {
        path: 'graph',
        component: GraphComponent
    },
    {

        path: 'portfolio',
        component: PortfolioPageComponent,
        children: [
            {
                path: '',
                component: PortfolioTableComponent
            },
            {
                path: 'edit',
                component: EditPortfolioComponent
            },
            {
                path: 'table',
                component: PortfolioTableComponent
            }
        ]
    },
    {
        path: 'market',
        component: MarketTableComponent
    },
    {
        path: 'pie-chart',
        component: PieChartComponent
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
    ],
    imports: [
        CommonModule,
        BrowserModule,
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




