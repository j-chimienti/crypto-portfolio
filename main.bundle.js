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

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <nav>\n    <a tabindex=\"-1\" routerLink=\"/\" class=\"navbar-brand\">\n      <h1>CoinLib</h1>\n    </a>\n  </nav>\n\n  <router-outlet></router-outlet>\n\n</div>\n\n<br/>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
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

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
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
        path: 'table',
        component: __WEBPACK_IMPORTED_MODULE_6__portfolio_table_portfolio_table_component__["a" /* PortfolioTableComponent */],
    },
    {
        path: 'edit',
        component: __WEBPACK_IMPORTED_MODULE_7__edit_portfolio_edit_portfolio_component__["a" /* EditPortfolioComponent */]
    }
    //{ path: '**', component: PageNotFoundComponent }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__portfolio_table_portfolio_table_component__["a" /* PortfolioTableComponent */],
                __WEBPACK_IMPORTED_MODULE_7__edit_portfolio_edit_portfolio_component__["a" /* EditPortfolioComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_9__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_router__["b" /* RouterModule */].forRoot(appRoutes, { enableTracing: false } // <-- debugging purposes only
                )
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__portfolio_service__["a" /* PortfolioService */],
                __WEBPACK_IMPORTED_MODULE_4__coin_market_cap_service__["a" /* CoinMarketCapService */],
                __WEBPACK_IMPORTED_MODULE_10__local_storage_service__["a" /* LocalStorageService */]
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
    CoinMarketCapService.prototype.handleError = function (error) {
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
    ;
    CoinMarketCapService.prototype.marketData = function () {
        return this.http.get(this.url)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["b" /* retry */])(3), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(this.handleError));
    };
    CoinMarketCapService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], CoinMarketCapService);
    return CoinMarketCapService;
}());



/***/ }),

/***/ "./src/app/coin.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Coin; });
var Coin = /** @class */ (function () {
    function Coin(id, coins, price_usd, price_btc, value, percent_change_7d) {
        this.id = id;
        this.coins = coins;
        this.price_usd = price_usd;
        this.price_btc = price_btc;
        this.value = value;
        this.percent_change_7d = percent_change_7d;
    }
    return Coin;
}());



/***/ }),

/***/ "./src/app/edit-portfolio/edit-portfolio.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/edit-portfolio/edit-portfolio.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <h3 class=\"card-header\">Edit Portfolio</h3>\n  <div class=\"card-body\">\n\n\n    <label class=\"text-capitalize\">current portfolio</label>\n    <textarea\n      rows=\"5\"\n      (click)=\"newPortfolio.value = coinsJson\"\n      class=\"form-control\"\n      [value]=\"coinsJson\"\n    >\n\n</textarea>\n\n    <br/>\n    <br/>\n\n\n    <label class=\"text-capitalize\">new portfolio</label>\n    <textarea\n      rows=\"5\"\n      (keyup.enter)=\"handleSubmit(newPortfolio.value); newPortfolio.value = ''; \"\n      class=\"form-control\"\n      #newPortfolio\n    >\n\n</textarea>\n    <br/>\n\n\n    <button\n      (click)=\"handleSubmit(newPortfolio.value); newPortfolio.value = '';\"\n      class=\"btn btn-primary\">Submit\n    </button>\n\n\n    <button\n      (click)=\"handleDelete();\"\n      class=\"btn btn-danger\">\n      Delete\n    </button>\n\n  </div>\n</div>\n<footer class=\"container\">\n\n  <div class=\"row flex-row\">\n    <a routerLink=\"/\" class=\"btn btn-primary\">Home</a>\n  </div>\n</footer>\n"

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
        this.defaultPortfolio = [
            ['monero', 17.81623304],
            ['ethereum-classic', 400],
            ['bitcoin', 2.02],
            ['ethereum', 1.01],
            ['litecoin', 6],
            ['zcash', 6],
            ['dash', 0.3]
        ];
        this.defaultPortfolioDisplay = JSON.stringify(this.defaultPortfolio);
    }
    EditPortfolioComponent.prototype.ngOnInit = function () {
        console.log(this.localStorageService.COINS);
        this.coinsJson = JSON.stringify(this.localStorageService.COINS) || '';
    };
    EditPortfolioComponent.prototype.submitDefault = function () {
        var coins = this.portfolioService.editCoins(this.defaultPortfolio);
        this.coinsJson = JSON.stringify(coins);
    };
    EditPortfolioComponent.prototype.handleSubmit = function (newPortfolio) {
        var coins = this.portfolioService.editCoins(JSON.parse(newPortfolio));
        this.coinsJson = JSON.stringify(coins);
    };
    EditPortfolioComponent.prototype.handleDelete = function () {
        this.localStorageService.deleteCoins();
        this.coinsJson = '';
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
        this.COINS = this.getCoins();
    }
    LocalStorageService.prototype.getCoins = function () {
        var rawJSON = localStorage.getItem(this.KEY);
        var parsed = [];
        if (rawJSON) {
            try {
                parsed = JSON.parse(rawJSON)
                    .map(function (item) { return [String(item[0]), Number(item[1])]; });
            }
            catch (e) {
                console.error('error parsing');
                this.deleteCoins();
                parsed = [];
            }
        }
        return parsed;
    };
    LocalStorageService.prototype.setCoins = function (coins) {
        this.COINS = coins;
        localStorage.setItem(this.KEY, JSON.stringify(this.COINS));
        this.COINS = this.getCoins();
    };
    LocalStorageService.prototype.deleteCoins = function () {
        localStorage.clear();
        this.COINS = this.getCoins();
    };
    LocalStorageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], LocalStorageService);
    return LocalStorageService;
}());



/***/ }),

/***/ "./src/app/portfolio-table/portfolio-table.component.css":
/***/ (function(module, exports) {

module.exports = ".loading {\n\n  height: 300px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-size: 1.3rem;\n}\n"

/***/ }),

/***/ "./src/app/portfolio-table/portfolio-table.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div *ngIf=\"!coins\" class=\"loading\">\n\n\n    Loading...\n  </div>\n  <table *ngIf=\"coins\" class=\"table table-striped\">\n\n    <thead>\n    <tr>\n      <td class=\"text-capitalize\">\n        id\n      </td>\n      <td class=\"text-capitalize text-right\">hodl</td>\n      <td class=\"text-capitalize text-right\">VALUE</td>\n      <td class=\"text-capitalize text-right\">%</td>\n      <td class=\"text-capitalize text-right\">$</td>\n      <td class=\"text-capitalize text-right\">btc</td>\n    </tr>\n    </thead>\n    <tbody>\n    <tr *ngFor=\"let coin of coins\">\n      <a href=\"{{'https://coinmarketcap.com/currencies/' + coin.id}}\" target=\"_blank\">\n        <td>\n          {{coin.id}}\n          <img src=\"../../assets/icons/{{coin.id}}.png\"/>\n        </td>\n      </a>\n      <td class=\"text-right\">{{coin.coins | number: '1.0-4'}}</td>\n      <td [class]=\"min === coin.id ? 'text-danger text-right' : max === coin.id ? 'text-success text-right' : 'text-right' \"\n      >{{coin.value | currency }}</td>\n      <td class=\"text-right\">{{(coin.value / total) | percent}}</td>\n      <td class=\"text-right\">{{coin.price_usd | currency }}</td>\n      <td class=\"text-right\">{{coin.price_btc | number: '1.2-6'}}</td>\n    </tr>\n\n    <tr>\n      <td colspan=\"6\" class=\"text-right\">\n        Total:\n        <b>{{total | currency}}</b>\n      </td>\n    </tr>\n    </tbody>\n  </table>\n\n</div>\n<footer class=\"container\">\n\n  <div class=\"row flex-row\">\n    <a routerLink=\"/edit\" class=\"btn btn-primary\">Edit</a>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/portfolio-table/portfolio-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortfolioTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__portfolio_service__ = __webpack_require__("./src/app/portfolio.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__coin_market_cap_service__ = __webpack_require__("./src/app/coin-market-cap.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__local_storage_service__ = __webpack_require__("./src/app/local-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PortfolioTableComponent = /** @class */ (function () {
    function PortfolioTableComponent(portfolioService, coinMarketCapService, localStorageService, router) {
        this.portfolioService = portfolioService;
        this.coinMarketCapService = coinMarketCapService;
        this.localStorageService = localStorageService;
        this.router = router;
    }
    PortfolioTableComponent.prototype.ngOnInit = function () {
        var COINS = this.localStorageService.COINS;
        if (!(COINS && Array.isArray(COINS) && COINS.length > 0)) {
            this.router.navigate(['edit']);
        }
        else {
            this.fetchCoins();
            this.interval = setInterval(this.fetchCoins, 1000 * 60);
        }
    };
    PortfolioTableComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.interval);
    };
    PortfolioTableComponent.prototype.fetchCoins = function () {
        var _this = this;
        this.coinMarketCapService.marketData()
            .subscribe(function (coins) {
            _this.coins = _this.portfolioService.handleMarketData(coins);
            var maxP = 0;
            var minP = 100;
            _this.max = '';
            _this.min = '';
            _this.coins.forEach(function (coin) {
                if (+coin.percent_change_7d > maxP) {
                    _this.max = coin.id;
                    maxP = +coin.percent_change_7d;
                }
                if (+coin.percent_change_7d < minP) {
                    _this.min = coin.id;
                    minP = +coin.percent_change_7d;
                }
            });
            _this.total = _this.coins.reduce(function (tot, cur) { return tot + cur.value; }, 0);
        });
    };
    PortfolioTableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-portfolio-table',
            template: __webpack_require__("./src/app/portfolio-table/portfolio-table.component.html"),
            styles: [__webpack_require__("./src/app/portfolio-table/portfolio-table.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__portfolio_service__["a" /* PortfolioService */],
            __WEBPACK_IMPORTED_MODULE_2__coin_market_cap_service__["a" /* CoinMarketCapService */],
            __WEBPACK_IMPORTED_MODULE_3__local_storage_service__["a" /* LocalStorageService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]])
    ], PortfolioTableComponent);
    return PortfolioTableComponent;
}());



/***/ }),

/***/ "./src/app/portfolio.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortfolioService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__coin__ = __webpack_require__("./src/app/coin.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__local_storage_service__ = __webpack_require__("./src/app/local-storage.service.ts");
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
    function PortfolioService(localStorageService) {
        this.localStorageService = localStorageService;
    }
    PortfolioService.prototype.handleMarketData = function (coins_) {
        var coins = [];
        this.localStorageService.COINS.forEach(function (coin) {
            var id = coin[0], hodl = coin[1];
            var findCoin = coins_.find(function (row) { return row.id === id; });
            if (findCoin) {
                var price_usd = findCoin.price_usd, price_btc = findCoin.price_btc, percent_change_7d = findCoin.percent_change_7d;
                var p = new __WEBPACK_IMPORTED_MODULE_1__coin__["a" /* Coin */](String(id), +hodl, +price_usd, +price_btc, +price_usd * +hodl, +percent_change_7d);
                coins.push(p);
            }
            else {
                console.log('no found coin', coin);
            }
        });
        return coins.sort(function (a, b) { return b.value - a.value; });
    };
    PortfolioService.prototype.editCoins = function (coins) {
        var coins_ = coins.map(function (item) { return [String(item[0]), Number(item[1])]; });
        this.localStorageService.setCoins(coins_);
        return coins_;
    };
    PortfolioService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__local_storage_service__["a" /* LocalStorageService */]])
    ], PortfolioService);
    return PortfolioService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
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