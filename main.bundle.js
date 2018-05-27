webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".cx {\n    min-width: 600px;\n    overflow-x: scroll;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div\n    class=\"{{cx ? 'cx' : null}}\"\n>\n    <div class=\"container\">\n        <app-navigation></app-navigation>\n        <router-outlet></router-outlet>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__portfolio_service__ = __webpack_require__("./src/app/portfolio.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(portfolioService, router) {
        this.portfolioService = portfolioService;
        this.router = router;
        this.cx = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].cx;
    }
    AppComponent.prototype.ngOnInit = function () {
        var COINS = this.portfolioService.getCoins();
        if (!(COINS && Array.isArray(COINS) && COINS.length > 0)) {
            this.router.navigate(['edit']);
        }
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__portfolio_service__["a" /* PortfolioService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__portfolio_service__ = __webpack_require__("./src/app/portfolio.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__coin_market_cap_service__ = __webpack_require__("./src/app/coin-market-cap.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__portfolio_table_portfolio_table_component__ = __webpack_require__("./src/app/portfolio-table/portfolio-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__edit_portfolio_edit_portfolio_component__ = __webpack_require__("./src/app/edit-portfolio/edit-portfolio.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__local_storage_service__ = __webpack_require__("./src/app/local-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__graph_graph_component__ = __webpack_require__("./src/app/graph/graph.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__market_table_market_table_component__ = __webpack_require__("./src/app/market-table/market-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__navigation_navigation_component__ = __webpack_require__("./src/app/navigation/navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__csv_download_service__ = __webpack_require__("./src/app/csv-download.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var appRoutes = [
    {
        path: '',
        redirectTo: 'table',
        //component: AppComponent,
        pathMatch: 'full'
    },
    {
        path: 'graph',
        component: __WEBPACK_IMPORTED_MODULE_11__graph_graph_component__["a" /* GraphComponent */]
    },
    {
        path: 'table',
        component: __WEBPACK_IMPORTED_MODULE_6__portfolio_table_portfolio_table_component__["a" /* PortfolioTableComponent */],
    },
    {
        path: 'edit',
        component: __WEBPACK_IMPORTED_MODULE_7__edit_portfolio_edit_portfolio_component__["a" /* EditPortfolioComponent */]
    },
    {
        path: 'market',
        component: __WEBPACK_IMPORTED_MODULE_13__market_table_market_table_component__["a" /* MarketTableComponent */]
    },
    { path: '**', redirectTo: '' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__portfolio_table_portfolio_table_component__["a" /* PortfolioTableComponent */],
                __WEBPACK_IMPORTED_MODULE_7__edit_portfolio_edit_portfolio_component__["a" /* EditPortfolioComponent */],
                __WEBPACK_IMPORTED_MODULE_11__graph_graph_component__["a" /* GraphComponent */],
                __WEBPACK_IMPORTED_MODULE_13__market_table_market_table_component__["a" /* MarketTableComponent */],
                __WEBPACK_IMPORTED_MODULE_14__navigation_navigation_component__["a" /* NavigationComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_9__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_router__["b" /* RouterModule */].forRoot(appRoutes, { enableTracing: false } // <-- debugging purposes only
                )
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__portfolio_service__["a" /* PortfolioService */],
                __WEBPACK_IMPORTED_MODULE_4__coin_market_cap_service__["a" /* CoinMarketCapService */],
                __WEBPACK_IMPORTED_MODULE_10__local_storage_service__["a" /* LocalStorageService */],
                __WEBPACK_IMPORTED_MODULE_15__csv_download_service__["a" /* CsvDownloadService */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_8__angular_router__["b" /* RouterModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/coin-market-cap.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoinMarketCapService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_ErrorObservable__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/ErrorObservable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__coin__ = __webpack_require__("./src/app/coin.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CoinMarketCapService = /** @class */ (function () {
    function CoinMarketCapService(http) {
        this.http = http;
        this.url = 'https://api.coinmarketcap.com/v1/ticker/';
    }
    CoinMarketCapService_1 = CoinMarketCapService;
    CoinMarketCapService.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an ErrorObservable with a user-facing error message
        return new __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_ErrorObservable__["a" /* ErrorObservable */]('Something bad happened; please try again later.');
    };
    CoinMarketCapService.prototype.marketData = function () {
        return this.http.get(this.url)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["b" /* retry */])(3), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(CoinMarketCapService_1.handleError))
            .map(function (res) {
            return res.map(function (item) {
                return new __WEBPACK_IMPORTED_MODULE_4__coin__["a" /* Coin */](item.id, item.name, item.symbol, item.rank, item.price_usd, item.price_btc, item.market_cap_usd, item.available_supply, item.total_supply, item.max_supply, item.percent_change_1h, item.percent_change_24h, item.percent_change_7d, item.last_updated, item['24h_volume_usd']);
            });
        });
    };
    CoinMarketCapService = CoinMarketCapService_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], CoinMarketCapService);
    return CoinMarketCapService;
    var CoinMarketCapService_1;
}());



/***/ }),

/***/ "./src/app/coin.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Coin; });
var Coin = /** @class */ (function () {
    function Coin(id, name, symbol, rank, price_usd, price_btc, market_cap_usd, available_supply, total_supply, max_supply, percent_change_1h, percent_change_24h, percent_change_7d, last_updated, volume_usd_24, value, coins) {
        this.id = id;
        this.name = name;
        this.symbol = symbol;
        this.rank = rank;
        this.price_usd = price_usd;
        this.price_btc = price_btc;
        this.market_cap_usd = market_cap_usd;
        this.available_supply = available_supply;
        this.total_supply = total_supply;
        this.max_supply = max_supply;
        this.percent_change_1h = percent_change_1h;
        this.percent_change_24h = percent_change_24h;
        this.percent_change_7d = percent_change_7d;
        this.last_updated = last_updated;
        this.volume_usd_24 = volume_usd_24;
        this.value = value;
        this.coins = coins;
    }
    Coin.prototype.setValue = function (value_) {
        if (isFinite(value_)) {
            this.value = value_;
        }
    };
    Coin.prototype.setCoins = function (value_) {
        if (isFinite(value_)) {
            this.coins = value_;
        }
    };
    return Coin;
}());



/***/ }),

/***/ "./src/app/csv-download.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CsvDownloadService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__portfolio_service__ = __webpack_require__("./src/app/portfolio.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CsvDownloadService = /** @class */ (function () {
    function CsvDownloadService(portfolioService) {
        this.portfolioService = portfolioService;
    }
    CsvDownloadService.prototype.handleDownload = function () {
        var dater = new Date().toLocaleDateString().replace(new RegExp('\/', 'g'), '-');
        var fileName = 'portfolio-' + dater;
        this.JSONToCSVConvertor(this.portfolioService.coins, fileName, true);
    };
    CsvDownloadService.prototype.JSONToCSVConvertor = function (JSONData, ReportTitle, ShowLabel) {
        // If JSONData is not an object then JSON.parse will parse the JSON string in an Object
        var arrData = typeof JSONData !== 'object' ? JSON.parse(JSONData) : JSONData;
        var CSV = Object.keys(JSONData[0]).concat('@date@').join(',') + '\n';
        // Set Report title in first row or line
        var dater = new Date().toISOString();
        arrData.forEach(function (row) {
            row['@date@'] = dater;
            CSV += Object.values(row).join(',') + '\n';
        });
        if (CSV === '') {
            alert('Invalid data');
            return;
        }
        // Generate a file name
        var fileName = ReportTitle.replace(/ /g, '_');
        // Initialize file format you want csv or xls
        var uri = 'data:text/csv;charset=utf-8,' + encodeURIComponent(CSV);
        //  Now the little tricky part.
        //  you can use either>> window.open(uri);
        //  but this will not work in some browsers
        //  or you will not get the correct file extension
        // this trick will generate a temp <a /> tag
        var link = document.createElement('a');
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
    };
    CsvDownloadService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__portfolio_service__["a" /* PortfolioService */]])
    ], CsvDownloadService);
    return CsvDownloadService;
}());



/***/ }),

/***/ "./src/app/edit-portfolio/edit-portfolio.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/edit-portfolio/edit-portfolio.component.html":
/***/ (function(module, exports) {

module.exports = "<main>\n    <div class=\"card\">\n        <h3 class=\"card-header\">Edit Portfolio</h3>\n\n\n        <form (submit)=\"portfolioService.addCoin(coin_id.value, coin_hodl.value);\n    coin_id.value = '';\n    coin_hodl.value = '';\n    coin_id.focus();\n\n\">\n            <label>coin</label>\n            <input #coin_id class=\"form-control-sm\">\n\n\n            <label>hodl</label>\n            <input class=\"form-control-sm\" type=\"number\" [min]=\"0\" #coin_hodl>\n\n\n            <button type=\"submit\" class=\"btn btn-primary\">Save!</button>\n        </form>\n\n\n        <div class=\"card-body\">\n\n\n            <table class=\"table table-responsive\">\n                <thead>\n                <tr>\n                    <th>name</th>\n                    <th class=\"text-right\">hodl</th>\n                </tr>\n                </thead>\n\n                <tbody>\n                <tr *ngFor=\"let coin of portfolioService.getCoins()\">\n\n                    <td\n\n                    >{{coin[0]}}\n                    </td>\n                    <td class=\"text-right\">\n                        <form\n                            *ngIf=\"editMode\"\n                            (submit)=\"portfolioService.editCoin(coin[0], coinAge.value); editMode = false;\">\n                            <input\n                                #coinAge\n                                value=\"{{coin[1]}}\"\n                                class=\"form-control-inline\"\n                            >\n                            <button class=\"btn btn-sm btn-primary\" type=\"submit\">save!</button>\n                        </form>\n\n                        <span *ngIf=\"!editMode\" (click)=\"editMode = !editMode\" style=\"cursor: pointer;\">\n              {{coin[1] | number}}\n            </span>\n                    </td>\n\n                    <td>\n                        <button class=\"btn btn-sm btn-danger\" (click)=\"portfolioService.deleteCoin(coin[0])\">\n                            Delete\n                        </button>\n                    </td>\n\n                </tr>\n                </tbody>\n            </table>\n\n        </div>\n    </div>\n\n    <a\n        (click)=\"localStorageService.deleteCoins()\"\n        class=\"btn btn-danger\">Delete Portfolio</a>\n</main>\n"

/***/ }),

/***/ "./src/app/edit-portfolio/edit-portfolio.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditPortfolioComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__portfolio_service__ = __webpack_require__("./src/app/portfolio.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__local_storage_service__ = __webpack_require__("./src/app/local-storage.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditPortfolioComponent = /** @class */ (function () {
    function EditPortfolioComponent(portfolioService, localStorageService) {
        this.portfolioService = portfolioService;
        this.localStorageService = localStorageService;
        this.editMode = false;
    }
    EditPortfolioComponent.prototype.ngOnInit = function () {
    };
    EditPortfolioComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-edit-portfolio',
            template: __webpack_require__("./src/app/edit-portfolio/edit-portfolio.component.html"),
            styles: [__webpack_require__("./src/app/edit-portfolio/edit-portfolio.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__portfolio_service__["a" /* PortfolioService */], __WEBPACK_IMPORTED_MODULE_2__local_storage_service__["a" /* LocalStorageService */]])
    ], EditPortfolioComponent);
    return EditPortfolioComponent;
}());



/***/ }),

/***/ "./src/app/graph/graph.component.css":
/***/ (function(module, exports) {

module.exports = "#chart {\n\n    border-radius: 4px;\n    background: white;\n}\n\nform {\n\n    padding-right: 3%;\n}\n\n\n"

/***/ }),

/***/ "./src/app/graph/graph.component.html":
/***/ (function(module, exports) {

module.exports = "<main>\n\n    <h1>{{activeParam}} Graph</h1>\n\n    <div id=\"chart\"></div>\n\n    <br/>\n\n    <div class=\"row\">\n        <form>\n            <label>param</label>\n            <select class=\"form-control-sm\"\n                    #activeParamInput\n                    [value]=\"activeParam\"\n                    (change)=\"activeParam = activeParamInput.value; updateGraph();\"\n            >\n                <option *ngFor=\"let key of keys\" [value]=\"key\">{{key}}</option>\n            </select>\n        </form>\n\n        <button class=\"{{descending ? 'btn btn-danger' : 'btn btn-success'}}\" [disabled]=\"descending\"\n                (click)=\"toggleDescending()\">Top 10\n        </button>\n        <button class=\"{{descending ? 'btn btn-success' : 'btn btn-danger'}}\" [disabled]=\"!descending\"\n                (click)=\"toggleDescending()\">Bottom 10\n        </button>\n    </div>\n\n</main>\n"

/***/ }),

/***/ "./src/app/graph/graph.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraphComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__portfolio_service__ = __webpack_require__("./src/app/portfolio.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_c3__ = __webpack_require__("./node_modules/c3/c3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_c3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_c3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__coin_market_cap_service__ = __webpack_require__("./src/app/coin-market-cap.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GraphComponent = /** @class */ (function () {
    function GraphComponent(portfolioService, coinMarketCapService) {
        this.portfolioService = portfolioService;
        this.coinMarketCapService = coinMarketCapService;
        this.keys = [
            'rank',
            'price_usd',
            'price_btc',
            '24h_volume_usd',
            'market_cap_usd',
            'available_supply',
            'total_supply',
            'max_supply',
            'percent_change_1h',
            'percent_change_24h',
            'percent_change_7d'
        ];
        this.descending = true;
        this.activeParam = this.keys[this.keys.length - 1];
    }
    GraphComponent.prototype.ngOnInit = function () {
        this.updateGraph();
    };
    GraphComponent.prototype.mapToRow = function (coin) {
        return [coin.id, coin[this.activeParam]];
    };
    GraphComponent.prototype.toggleDescending = function () {
        this.descending = !this.descending;
        this.updateGraph();
    };
    GraphComponent.prototype.updateGraph = function () {
        var _this = this;
        this.coinMarketCapService.marketData().subscribe(function (coins) {
            var mapped = _this.portfolioService.mergeMarketAndCoinData(coins)
                .sort(function (a, b) { return _this.descending ? b[_this.activeParam] - a[_this.activeParam] : a[_this.activeParam] - b[_this.activeParam]; })
                .map(function (c) { return _this.mapToRow(c); });
            __WEBPACK_IMPORTED_MODULE_2_c3__["generate"]({
                bindto: '#chart',
                data: {
                    columns: mapped,
                    type: 'bar'
                },
                bar: {
                    width: {
                        ratio: 0.5 // this makes bar width 50% of length between ticks
                    }
                    // or
                    //width: 100 // this makes bar width 100px
                }
            });
        });
    };
    GraphComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-graph',
            template: __webpack_require__("./src/app/graph/graph.component.html"),
            styles: [__webpack_require__("./src/app/graph/graph.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__portfolio_service__["a" /* PortfolioService */], __WEBPACK_IMPORTED_MODULE_3__coin_market_cap_service__["a" /* CoinMarketCapService */]])
    ], GraphComponent);
    return GraphComponent;
}());



/***/ }),

/***/ "./src/app/local-storage.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalStorageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LocalStorageService = /** @class */ (function () {
    function LocalStorageService() {
        this.KEY = '@COINS@';
    }
    LocalStorageService.prototype.getCoins = function () {
        var rawJSON = localStorage.getItem(this.KEY);
        if (!rawJSON) {
            return [];
        }
        try {
            return JSON.parse(rawJSON);
        }
        catch (e) {
            console.error('error parsing');
            this.deleteCoins();
            return [];
        }
    };
    LocalStorageService.prototype.setCoins = function (coins) {
        localStorage.setItem(this.KEY, JSON.stringify(coins));
    };
    LocalStorageService.prototype.deleteCoins = function () {
        localStorage.clear();
    };
    LocalStorageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], LocalStorageService);
    return LocalStorageService;
}());



/***/ }),

/***/ "./src/app/market-table/market-table.component.css":
/***/ (function(module, exports) {

module.exports = "th {\n    cursor: pointer;\n}\n"

/***/ }),

/***/ "./src/app/market-table/market-table.component.html":
/***/ (function(module, exports) {

module.exports = "<main>\n    <h2>Market Data</h2>\n    <table class=\"table table-striped\">\n        <thead>\n        <tr>\n            <th\n                (click)=\"handleNewSort('rank')\"\n            >\n                name\n            </th>\n            <th class=\"text-right\"\n                (click)=\"handleNewSort('price_usd')\"\n            >Price (USD)\n            </th>\n            <th class=\"text-right\"\n                (click)=\"handleNewSort('price_btc')\"\n            >Price (BTC)\n            </th>\n            <th class=\"text-right\"\n                (click)=\"handleNewSort('available_supply')\"\n            >Available Supply\n            </th>\n            <th class=\"text-right\"\n                (click)=\"handleNewSort('percent_change_24h')\"\n            >24h %\n            </th>\n            <th class=\"text-right\"\n                (click)=\"handleNewSort('percent_change_7d')\"\n            >7d %\n            </th>\n\n        </tr>\n        </thead>\n        <tbody>\n        <tr *ngFor=\"let coin of sortedCoins()\">\n            <a href=\"{{'https://coinmarketcap.com/currencies/' + coin.id}}\" target=\"_blank\">\n                <td>\n                    {{coin.rank}}\n                    {{' '}}\n                    <img src=\"../../assets/icons/{{coin.id}}.png\" alt=\"\"/>\n                    {{coin.id}}\n                </td>\n            </a>\n            <td class=\"text-right\">{{coin.price_usd | currency}}</td>\n            <td class=\"text-right\">{{coin.price_btc | number: '1.3-6'}}</td>\n            <td class=\"text-right\">{{coin.available_supply | number: '1.0'}}</td>\n            <td class=\"text-right\">{{coin.percent_change_24h | number}}</td>\n            <td class=\"text-right\">{{coin.percent_change_7d | number }}</td>\n        </tr>\n        </tbody>\n    </table>\n</main>\n"

/***/ }),

/***/ "./src/app/market-table/market-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarketTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__coin_market_cap_service__ = __webpack_require__("./src/app/coin-market-cap.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sorted_table__ = __webpack_require__("./src/app/sorted-table.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MarketTableComponent = /** @class */ (function (_super) {
    __extends(MarketTableComponent, _super);
    function MarketTableComponent(coinMarketCapService) {
        var _this = _super.call(this) || this;
        _this.coinMarketCapService = coinMarketCapService;
        return _this;
    }
    MarketTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.interval = setInterval(function () { return _this.getCoins(); }, 1000 * 30);
        this.getCoins();
    };
    MarketTableComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.interval);
    };
    MarketTableComponent.prototype.getCoins = function () {
        var _this = this;
        return this.coinMarketCapService.marketData().subscribe(function (marketData) {
            _this.coins = marketData;
        });
    };
    MarketTableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-market-table',
            template: __webpack_require__("./src/app/market-table/market-table.component.html"),
            styles: [__webpack_require__("./src/app/market-table/market-table.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__coin_market_cap_service__["a" /* CoinMarketCapService */]])
    ], MarketTableComponent);
    return MarketTableComponent;
}(__WEBPACK_IMPORTED_MODULE_2__sorted_table__["a" /* SortedTable */]));



/***/ }),

/***/ "./src/app/navigation/navigation.component.css":
/***/ (function(module, exports) {

module.exports = "nav {\n\n    padding: 3%;\n}\n\n.flexer {\n\n    display: -webkit-box;\n\n    display: -ms-flexbox;\n\n    display: flex;\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n"

/***/ }),

/***/ "./src/app/navigation/navigation.component.html":
/***/ (function(module, exports) {

module.exports = "<nav>\n\n    <div class=\"flexer\">\n        <a routerLink=\"/table\" class=\"btn btn-primary\">Portfolio</a>\n        <a routerLink=\"/market\" class=\"btn btn-primary\">Market</a>\n        <a routerLink=\"/graph\" class=\"btn btn-primary\">Graphs</a>\n    </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/navigation/navigation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__csv_download_service__ = __webpack_require__("./src/app/csv-download.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(csvDownloadService) {
        this.csvDownloadService = csvDownloadService;
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navigation',
            template: __webpack_require__("./src/app/navigation/navigation.component.html"),
            styles: [__webpack_require__("./src/app/navigation/navigation.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__csv_download_service__["a" /* CsvDownloadService */]])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/portfolio-table/portfolio-table.component.css":
/***/ (function(module, exports) {

module.exports = ".loading {\n\n    height: 300px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    font-size: 1.3rem;\n}\n\nth {\n    cursor: pointer;\n}\n"

/***/ }),

/***/ "./src/app/portfolio-table/portfolio-table.component.html":
/***/ (function(module, exports) {

module.exports = "<main class=\"container\">\n\n    <h2>Portfolio</h2>\n    <div [ngSwitch]=\"portfolioService.coins.length > 0\">\n\n        <div *ngSwitchDefault class=\"loading\">\n\n\n            <h2>Loading...</h2>\n        </div>\n\n        <div *ngSwitchCase=\"true\">\n\n\n            <table id=\"portfolioTable\" class=\"table table-striped\">\n\n                <thead>\n                <tr>\n                    <th class=\"text-capitalize\">\n\n                    </th>\n                    <th class=\"text-capitalize text-right\"\n                        (click)=\"handleNewSort('value')\"\n                    >%\n                    </th>\n                    <th class=\"text-capitalize text-right\"\n                        (click)=\"handleNewSort('price_usd')\"\n                    >$\n                    </th>\n                    <th class=\"text-capitalize text-right\"\n                        (click)=\"handleNewSort('price_btc')\"\n                    >btc\n                    </th>\n                    <th class=\"text-capitalize text-right\"\n                        (click)=\"handleNewSort('coins')\"\n                    >hodl\n                    </th>\n                    <th class=\"text-capitalize text-right\"\n                        (click)=\"handleNewSort('value')\"\n                    >Value\n                    </th>\n                </tr>\n                </thead>\n                <tbody>\n                <tr *ngFor=\"let coin of sortedCoins()\">\n                    <a href=\"{{'https://coinmarketcap.com/currencies/' + coin.id}}\" target=\"_blank\">\n                        <td>\n                            <img src=\"../../assets/icons/{{coin.id}}.png\" alt=\"\"/>\n                            {{coin.id}}\n                        </td>\n                    </a>\n\n                    <td class=\"text-right\">{{(coin.value / total) | percent}}</td>\n                    <td class=\"text-right\">{{coin.price_usd | currency }}</td>\n                    <td class=\"text-right\">{{coin.price_btc | number: '1.3-6'}}</td>\n                    <td class=\"text-right\">{{coin.coins | number: '1.0-4'}}</td>\n                    <td\n                        [class]=\"min === coin.id ? 'text-danger text-right' : max === coin.id ? 'text-success text-right' : 'text-right' \"\n                    >{{coin.value | currency }}\n                    </td>\n                </tr>\n\n                <tr>\n                    <td colspan=\"3\"></td>\n                    <td class=\"text-center\"><b>Total:</b></td>\n                    <td class=\"text-right\">\n                        <b>\n                            {{portfolioService.totalBtc | number}} btc\n                        </b>\n                    </td>\n\n                    <td class=\"text-lg-right\">\n                        <b>\n\n                            {{portfolioService.total | currency}}\n                        </b>\n                    </td>\n\n                </tr>\n                </tbody>\n            </table>\n\n            <div class=\"row\">\n\n                <a routerLink=\"/edit\" class=\"btn btn-primary\">Edit Portfolio</a>\n\n                <a (click)=\"csvDownloadService.handleDownload()\" class=\"btn btn-primary\">Download</a>\n            </div>\n\n        </div>\n\n    </div>\n</main>\n\n"

/***/ }),

/***/ "./src/app/portfolio-table/portfolio-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortfolioTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__portfolio_service__ = __webpack_require__("./src/app/portfolio.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sorted_table__ = __webpack_require__("./src/app/sorted-table.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__coin_market_cap_service__ = __webpack_require__("./src/app/coin-market-cap.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PortfolioTableComponent = /** @class */ (function (_super) {
    __extends(PortfolioTableComponent, _super);
    function PortfolioTableComponent(portfolioService, coinMarketCapService) {
        var _this = _super.call(this) || this;
        _this.portfolioService = portfolioService;
        _this.coinMarketCapService = coinMarketCapService;
        return _this;
    }
    PortfolioTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.interval = setInterval(function () {
            _this.getCoins();
        }, 1000 * 30);
        this.getCoins();
    };
    PortfolioTableComponent.prototype.getCoins = function () {
        var _this = this;
        this.coinMarketCapService.marketData().subscribe(function (coins) {
            _this.coins = _this.portfolioService.mergeMarketAndCoinData(coins);
        });
    };
    PortfolioTableComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.interval);
    };
    PortfolioTableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-portfolio-table',
            template: __webpack_require__("./src/app/portfolio-table/portfolio-table.component.html"),
            styles: [__webpack_require__("./src/app/portfolio-table/portfolio-table.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__portfolio_service__["a" /* PortfolioService */], __WEBPACK_IMPORTED_MODULE_3__coin_market_cap_service__["a" /* CoinMarketCapService */]])
    ], PortfolioTableComponent);
    return PortfolioTableComponent;
}(__WEBPACK_IMPORTED_MODULE_2__sorted_table__["a" /* SortedTable */]));



/***/ }),

/***/ "./src/app/portfolio.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortfolioService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__coin_market_cap_service__ = __webpack_require__("./src/app/coin-market-cap.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__local_storage_service__ = __webpack_require__("./src/app/local-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_filter__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/filter.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PortfolioService = /** @class */ (function () {
    function PortfolioService(localStorageService, coinMarketCapService) {
        this.localStorageService = localStorageService;
        this.coinMarketCapService = coinMarketCapService;
        this.coins = [];
    }
    PortfolioService_1 = PortfolioService;
    PortfolioService.assertValid = function (coin) {
        return coin && coin.length === 2 && coin[0] && typeof coin[0] === 'string' && isFinite(+coin[1]);
    };
    PortfolioService.prototype.mergeMarketAndCoinData = function (marketData) {
        var COINS = this.getCoins();
        this.coins = marketData.filter(function (coin) { return COINS.find(function (COIN) { return COIN[0] === coin.id; }); })
            .map(function (coin) {
            var coins = COINS.find(function (COIN) { return COIN[0] === coin.id; });
            var value = +coins[1] * coin.price_usd;
            coin.setCoins(+coins[1]);
            coin.setValue(value);
            return coin;
        })
            .sort(function (a, b) { return b.value - a.value; });
        this.total = this.coins.reduce(function (tot, cur) { return tot + cur.value; }, 0);
        this.totalBtc = this.coins.reduce(function (tot, cur) { return tot + cur.price_btc * cur.coins; }, 0);
        // const dater = new Date().toLocaleDateString();
        //
        // const fileName = 'portfolio-' + dater;
        // localStorage.setItem(fileName, JSON.stringify(this.coins));
        // console.log('saved portfolio');
        return this.coins;
    };
    PortfolioService.prototype.editCoin = function (id, hodl) {
        var coins = this.localStorageService.getCoins();
        for (var _i = 0, coins_1 = coins; _i < coins_1.length; _i++) {
            var coin = coins_1[_i];
            if (coin[0] === id) {
                coin[1] = hodl;
                break;
            }
        }
        this.localStorageService.setCoins(coins);
    };
    PortfolioService.prototype.addCoin = function (id, coins) {
        var COINS = this.getCoins();
        var foundIndex = COINS.findIndex(function (coin) { return coin[0] === id; });
        if (foundIndex < 0) {
            COINS.push([id, coins]);
        }
        else {
            COINS[foundIndex][1] = coins;
        }
        this.localStorageService.setCoins(COINS);
    };
    PortfolioService.prototype.getCoins = function () {
        return this.localStorageService.getCoins()
            .filter(function (coin) { return PortfolioService_1.assertValid(coin); });
    };
    PortfolioService.prototype.deleteCoin = function (id) {
        var COINS = this.getCoins();
        var index = COINS.findIndex(function (coin_) { return coin_[0] === id; });
        if (index) {
            delete COINS[index];
            this.localStorageService.setCoins(COINS);
        }
    };
    PortfolioService = PortfolioService_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__local_storage_service__["a" /* LocalStorageService */],
            __WEBPACK_IMPORTED_MODULE_1__coin_market_cap_service__["a" /* CoinMarketCapService */]])
    ], PortfolioService);
    return PortfolioService;
    var PortfolioService_1;
}());



/***/ }),

/***/ "./src/app/sorted-table.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortedTable; });
var SortedTable = /** @class */ (function () {
    function SortedTable() {
        this.sortBy = 'rank';
        this.ascending = true;
        this.coins = [];
    }
    SortedTable.prototype.handleNewSort = function (param) {
        this.ascending = !this.ascending;
        this.sortBy = param;
    };
    SortedTable.prototype.sortedCoins = function () {
        var _this = this;
        return this.coins.sort(function (a, b) {
            return _this.ascending ? a[_this.sortBy] - b[_this.sortBy] : b[_this.sortBy] - a[_this.sortBy];
        });
    };
    return SortedTable;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    cx: false,
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map