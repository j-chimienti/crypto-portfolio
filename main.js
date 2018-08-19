(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cx {\n    min-width: 600px;\n    overflow-x: scroll;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\n    class=\"{{cx ? 'cx' : null}}\"\n>\n    <app-navigation></app-navigation>\n    <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_portfolio_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/portfolio.service */ "./src/app/services/portfolio.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(portfolioService, router) {
        this.portfolioService = portfolioService;
        this.router = router;
        this.cx = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].cx;
    }
    AppComponent.prototype.ngOnInit = function () {
        var COINS = this.portfolioService.getCoins();
        if (!(COINS && Array.isArray(COINS) && COINS.length > 0)) {
            this.router.navigate(['edit']);
        }
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_services_portfolio_service__WEBPACK_IMPORTED_MODULE_1__["PortfolioService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _services_portfolio_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/portfolio.service */ "./src/app/services/portfolio.service.ts");
/* harmony import */ var _services_coin_market_cap_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/coin-market-cap.service */ "./src/app/services/coin-market-cap.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _components_portfolio_table_portfolio_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/portfolio-table/portfolio-table.component */ "./src/app/components/portfolio-table/portfolio-table.component.ts");
/* harmony import */ var _components_edit_portfolio_edit_portfolio_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/edit-portfolio/edit-portfolio.component */ "./src/app/components/edit-portfolio/edit-portfolio.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/local-storage.service */ "./src/app/services/local-storage.service.ts");
/* harmony import */ var _components_graph_graph_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/graph/graph.component */ "./src/app/components/graph/graph.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_market_table_market_table_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/market-table/market-table.component */ "./src/app/components/market-table/market-table.component.ts");
/* harmony import */ var _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/navigation/navigation.component */ "./src/app/components/navigation/navigation.component.ts");
/* harmony import */ var _services_csv_download_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/csv-download.service */ "./src/app/services/csv-download.service.ts");
/* harmony import */ var _components_pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/pie-chart/pie-chart.component */ "./src/app/components/pie-chart/pie-chart.component.ts");
/* harmony import */ var _portfolio_page_portfolio_page_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./portfolio-page/portfolio-page.component */ "./src/app/portfolio-page/portfolio-page.component.ts");
/* harmony import */ var _components_add_coin_add_coin_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/add-coin/add-coin.component */ "./src/app/components/add-coin/add-coin.component.ts");
/* harmony import */ var _components_portfolio_summary_portfolio_summary_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/portfolio-summary/portfolio-summary.component */ "./src/app/components/portfolio-summary/portfolio-summary.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _components_market_page_market_page_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/market-page/market-page.component */ "./src/app/components/market-page/market-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var appRoutes = [
    {
        path: '',
        component: _portfolio_page_portfolio_page_component__WEBPACK_IMPORTED_MODULE_17__["PortfolioPageComponent"],
        children: [
            {
                path: '',
                component: _components_portfolio_summary_portfolio_summary_component__WEBPACK_IMPORTED_MODULE_19__["PortfolioSummaryComponent"],
            },
            {
                path: 'portfolio',
                component: _components_portfolio_summary_portfolio_summary_component__WEBPACK_IMPORTED_MODULE_19__["PortfolioSummaryComponent"],
            },
            {
                path: 'portfolio/edit',
                component: _components_edit_portfolio_edit_portfolio_component__WEBPACK_IMPORTED_MODULE_7__["EditPortfolioComponent"]
            },
            {
                path: 'portfolio/add',
                component: _components_add_coin_add_coin_component__WEBPACK_IMPORTED_MODULE_18__["AddCoinComponent"]
            }
        ]
    },
    {
        path: 'market',
        component: _components_market_page_market_page_component__WEBPACK_IMPORTED_MODULE_21__["MarketPageComponent"],
    },
    { path: '**', redirectTo: '' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _components_portfolio_table_portfolio_table_component__WEBPACK_IMPORTED_MODULE_6__["PortfolioTableComponent"],
                _components_edit_portfolio_edit_portfolio_component__WEBPACK_IMPORTED_MODULE_7__["EditPortfolioComponent"],
                _components_graph_graph_component__WEBPACK_IMPORTED_MODULE_11__["GraphComponent"],
                _components_market_table_market_table_component__WEBPACK_IMPORTED_MODULE_13__["MarketTableComponent"],
                _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_14__["NavigationComponent"],
                _components_pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_16__["PieChartComponent"],
                _portfolio_page_portfolio_page_component__WEBPACK_IMPORTED_MODULE_17__["PortfolioPageComponent"],
                _components_add_coin_add_coin_component__WEBPACK_IMPORTED_MODULE_18__["AddCoinComponent"],
                _components_portfolio_summary_portfolio_summary_component__WEBPACK_IMPORTED_MODULE_19__["PortfolioSummaryComponent"],
                _components_market_page_market_page_component__WEBPACK_IMPORTED_MODULE_21__["MarketPageComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot(appRoutes, { enableTracing: false } // <-- debugging purposes only
                ),
            ],
            providers: [
                _services_portfolio_service__WEBPACK_IMPORTED_MODULE_3__["PortfolioService"],
                _services_coin_market_cap_service__WEBPACK_IMPORTED_MODULE_4__["CoinMarketCapService"],
                _services_local_storage_service__WEBPACK_IMPORTED_MODULE_10__["LocalStorageService"],
                _services_csv_download_service__WEBPACK_IMPORTED_MODULE_15__["CsvDownloadService"],
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/coin.ts":
/*!*************************!*\
  !*** ./src/app/coin.ts ***!
  \*************************/
/*! exports provided: Coin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Coin", function() { return Coin; });
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

/***/ "./src/app/components/add-coin/add-coin.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/add-coin/add-coin.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/add-coin/add-coin.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/add-coin/add-coin.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Add Coin</h3>\n<form (submit)=\"handleSubmit(); addCoin.reset();\" #addCoin=\"ngForm\">\n    <div class=\"form-group\">\n        <label for=\"name\">coin</label>\n        <input\n            [(ngModel)]=\"model.name\"\n            id=\"name\"\n            name=\"name\"\n            class=\"form-control-sm\"\n            required\n            #name=\"ngModel\"\n        >\n    </div>\n\n\n    <div class=\"form-group\">\n        <label for=\"hodl\">hodl</label>\n        <input\n            class=\"form-control-sm\"\n            type=\"number\"\n            id=\"hodl\"\n            name=\"hodl\"\n            [min]=\"0\"\n            [(ngModel)]=\"model.hodl\"\n            required\n            #hodl=\"ngModel\"\n        >\n    </div>\n    <button\n        [disabled]=\"!addCoin.form.valid\"\n        type=\"submit\" class=\"btn btn-primary\">Save!\n    </button>\n</form>\n\n"

/***/ }),

/***/ "./src/app/components/add-coin/add-coin.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/add-coin/add-coin.component.ts ***!
  \***********************************************************/
/*! exports provided: AddCoinComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCoinComponent", function() { return AddCoinComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_portfolio_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/portfolio.service */ "./src/app/services/portfolio.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddCoinComponent = /** @class */ (function () {
    function AddCoinComponent(portfolioService) {
        this.portfolioService = portfolioService;
        this.model = {
            name: '',
            hodl: 0
        };
    }
    AddCoinComponent.prototype.ngOnInit = function () {
    };
    AddCoinComponent.prototype.handleSubmit = function () {
        this.portfolioService.addCoin(this.model.name, this.model.hodl);
    };
    AddCoinComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-coin',
            template: __webpack_require__(/*! ./add-coin.component.html */ "./src/app/components/add-coin/add-coin.component.html"),
            styles: [__webpack_require__(/*! ./add-coin.component.css */ "./src/app/components/add-coin/add-coin.component.css")]
        }),
        __metadata("design:paramtypes", [_services_portfolio_service__WEBPACK_IMPORTED_MODULE_1__["PortfolioService"]])
    ], AddCoinComponent);
    return AddCoinComponent;
}());



/***/ }),

/***/ "./src/app/components/edit-portfolio/edit-portfolio.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/edit-portfolio/edit-portfolio.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/edit-portfolio/edit-portfolio.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/edit-portfolio/edit-portfolio.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table\n    id=\"editPortfolio\"\n    class=\"table table-responsive table-striped table-hover\">\n    <caption>Edit Portfolio</caption>\n    <thead>\n    <tr>\n        <th>name</th>\n        <th class=\"text-right\">hodl</th>\n        <th></th>\n    </tr>\n    </thead>\n\n    <tbody>\n    <tr *ngFor=\"let coin of portfolioService.getCoins()\">\n\n        <td\n\n        >{{coin[0]}}\n        </td>\n        <td class=\"text-right\">\n            <form\n                *ngIf=\"editMode\"\n                (submit)=\"portfolioService.editCoin(coin[0], coinAge.value); editMode = false;\">\n                <input\n                    #coinAge\n                    value=\"{{coin[1]}}\"\n                    class=\"form-control-inline\"\n                >\n                <button class=\"btn btn-sm btn-primary\" type=\"submit\">save!</button>\n            </form>\n\n            <span *ngIf=\"!editMode\" (click)=\"editMode = !editMode\" style=\"cursor: pointer;\">\n              {{coin[1] | number}}\n            </span>\n        </td>\n\n        <td>\n            <button class=\"btn btn-sm btn-danger\" (click)=\"portfolioService.deleteCoin(coin[0])\">\n                Delete\n            </button>\n        </td>\n\n    </tr>\n    </tbody>\n    <tfoot>\n\n    </tfoot>\n</table>\n\n"

/***/ }),

/***/ "./src/app/components/edit-portfolio/edit-portfolio.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/edit-portfolio/edit-portfolio.component.ts ***!
  \***********************************************************************/
/*! exports provided: EditPortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPortfolioComponent", function() { return EditPortfolioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_portfolio_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/portfolio.service */ "./src/app/services/portfolio.service.ts");
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/local-storage.service */ "./src/app/services/local-storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-portfolio',
            template: __webpack_require__(/*! ./edit-portfolio.component.html */ "./src/app/components/edit-portfolio/edit-portfolio.component.html"),
            styles: [__webpack_require__(/*! ./edit-portfolio.component.css */ "./src/app/components/edit-portfolio/edit-portfolio.component.css")]
        }),
        __metadata("design:paramtypes", [_services_portfolio_service__WEBPACK_IMPORTED_MODULE_1__["PortfolioService"], _services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"]])
    ], EditPortfolioComponent);
    return EditPortfolioComponent;
}());



/***/ }),

/***/ "./src/app/components/graph/graph.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/graph/graph.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#chart {\n\n    border-radius: 4px;\n    background: white;\n}\n\nform {\n\n    padding-right: 3%;\n}\n\n\n"

/***/ }),

/***/ "./src/app/components/graph/graph.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/graph/graph.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"container\">\n\n    <h1>{{activeParam}} Graph</h1>\n\n    <div id=\"chart\"></div>\n\n    <br/>\n\n    <div class=\"row\">\n        <form>\n            <label for=\"param\">param</label>\n            <select class=\"form-control-sm\"\n                    #activeParamInput\n                    id=\"param\"\n                    name=\"param\"\n                    [value]=\"activeParam\"\n                    (change)=\"activeParam = activeParamInput.value; updateGraph();\"\n            >\n                <option *ngFor=\"let key of keys\" [value]=\"key\">{{key}}</option>\n            </select>\n        </form>\n\n        <button class=\"{{descending ? 'btn btn-danger' : 'btn btn-success'}}\" [disabled]=\"descending\"\n                (click)=\"toggleDescending()\">Top 10\n        </button>\n        <button class=\"{{descending ? 'btn btn-success' : 'btn btn-danger'}}\" [disabled]=\"!descending\"\n                (click)=\"toggleDescending()\">Bottom 10\n        </button>\n    </div>\n\n</main>\n"

/***/ }),

/***/ "./src/app/components/graph/graph.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/graph/graph.component.ts ***!
  \*****************************************************/
/*! exports provided: GraphComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphComponent", function() { return GraphComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_portfolio_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/portfolio.service */ "./src/app/services/portfolio.service.ts");
/* harmony import */ var c3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! c3 */ "./node_modules/c3/c3.js");
/* harmony import */ var c3__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(c3__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_coin_market_cap_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/coin-market-cap.service */ "./src/app/services/coin-market-cap.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import * as d3 from 'd3';


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
            var mapped = coins
                .sort(function (a, b) { return _this.descending ? b[_this.activeParam] - a[_this.activeParam] : a[_this.activeParam] - b[_this.activeParam]; })
                .slice(0, 10)
                .map(function (c) { return _this.mapToRow(c); });
            c3__WEBPACK_IMPORTED_MODULE_2__["generate"]({
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
                }
            });
        });
    };
    GraphComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-graph',
            template: __webpack_require__(/*! ./graph.component.html */ "./src/app/components/graph/graph.component.html"),
            styles: [__webpack_require__(/*! ./graph.component.css */ "./src/app/components/graph/graph.component.css")]
        }),
        __metadata("design:paramtypes", [_services_portfolio_service__WEBPACK_IMPORTED_MODULE_1__["PortfolioService"],
            _services_coin_market_cap_service__WEBPACK_IMPORTED_MODULE_3__["CoinMarketCapService"]])
    ], GraphComponent);
    return GraphComponent;
}());



/***/ }),

/***/ "./src/app/components/market-page/market-page.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/market-page/market-page.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/market-page/market-page.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/market-page/market-page.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-lg-6\">\n\n        <app-market-table></app-market-table>\n    </div>\n    <div class=\"col-lg-6\">\n        <app-graph></app-graph>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/market-page/market-page.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/market-page/market-page.component.ts ***!
  \*****************************************************************/
/*! exports provided: MarketPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketPageComponent", function() { return MarketPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MarketPageComponent = /** @class */ (function () {
    function MarketPageComponent() {
    }
    MarketPageComponent.prototype.ngOnInit = function () {
    };
    MarketPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-market-page',
            template: __webpack_require__(/*! ./market-page.component.html */ "./src/app/components/market-page/market-page.component.html"),
            styles: [__webpack_require__(/*! ./market-page.component.css */ "./src/app/components/market-page/market-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MarketPageComponent);
    return MarketPageComponent;
}());



/***/ }),

/***/ "./src/app/components/market-table/market-table.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/market-table/market-table.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "th {\n    cursor: pointer;\n}\n"

/***/ }),

/***/ "./src/app/components/market-table/market-table.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/market-table/market-table.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"container\">\n  <table class=\"table table-responsive table-hover\">\n    <caption>Market Data</caption>\n    <thead>\n    <tr>\n      <th\n        (click)=\"handleNewSort('rank')\"\n        class=\"text-capitalize text-left\"\n      >\n        name\n      </th>\n      <th class=\"text-right\"\n          (click)=\"handleNewSort('price_usd')\"\n      >Price (USD)\n      </th>\n      <th class=\"text-right\"\n          (click)=\"handleNewSort('price_btc')\"\n      >Price (BTC)\n      </th>\n      <th class=\"text-right\"\n          (click)=\"handleNewSort('available_supply')\"\n      >Available Supply\n      </th>\n      <th class=\"text-right\"\n          (click)=\"handleNewSort('percent_change_24h')\"\n      >24h %\n      </th>\n      <th class=\"text-right\"\n          (click)=\"handleNewSort('percent_change_7d')\"\n      >7d %\n      </th>\n\n    </tr>\n    </thead>\n    <tbody>\n    <tr *ngFor=\"let coin of sortedCoins()\">\n      <td>\n        <a href=\"{{'https://coinmarketcap.com/currencies/' + coin.id}}\" target=\"_blank\">\n          {{coin.rank}}\n          {{' '}}\n          <span [class]=\"'icon icon-' + coin.symbol.toLowerCase()\"></span>\n          {{coin.id}}\n        </a>\n      </td>\n      <td class=\"text-right\">{{coin.price_usd | currency}}</td>\n      <td class=\"text-right\">{{coin.price_btc | number: '1.3-6'}}</td>\n      <td class=\"text-right\">{{coin.available_supply | number: '1.0'}}</td>\n      <td class=\"text-right\">{{coin.percent_change_24h | number}}</td>\n      <td class=\"text-right\">{{coin.percent_change_7d | number }}</td>\n    </tr>\n    </tbody>\n  </table>\n</main>\n"

/***/ }),

/***/ "./src/app/components/market-table/market-table.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/market-table/market-table.component.ts ***!
  \*******************************************************************/
/*! exports provided: MarketTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketTableComponent", function() { return MarketTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_coin_market_cap_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/coin-market-cap.service */ "./src/app/services/coin-market-cap.service.ts");
/* harmony import */ var _sorted_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../sorted-table */ "./src/app/sorted-table.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-market-table',
            template: __webpack_require__(/*! ./market-table.component.html */ "./src/app/components/market-table/market-table.component.html"),
            styles: [__webpack_require__(/*! ./market-table.component.css */ "./src/app/components/market-table/market-table.component.css")]
        }),
        __metadata("design:paramtypes", [_services_coin_market_cap_service__WEBPACK_IMPORTED_MODULE_1__["CoinMarketCapService"]])
    ], MarketTableComponent);
    return MarketTableComponent;
}(_sorted_table__WEBPACK_IMPORTED_MODULE_2__["SortedTable"]));



/***/ }),

/***/ "./src/app/components/navigation/navigation.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav {\n\n    padding: 3%;\n}\n\n.flexer {\n\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n}\n"

/***/ }),

/***/ "./src/app/components/navigation/navigation.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-sm navbar-dark bg-primary\">\n<a class=\"navbar-brand\" routerLink=\"/portfolio\">Alt Folio</a>\n\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTop\"\n          aria-controls=\"navbarTop\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarTop\">\n        <ul class=\"navbar-nav mr-auto\">\n            <li class=\"nav-item\"><a routerLink=\"/portfolio\" class=\"nav-link\" routerLinkActive=\"btn-success\">Portfolio</a></li>\n            <li class=\"nav-item\"><a routerLink=\"/market\" class=\"nav-link\" routerLinkActive=\"btn-success\">Market</a></li>\n        </ul>\n    </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/navigation/navigation.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.ts ***!
  \***************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_csv_download_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/csv-download.service */ "./src/app/services/csv-download.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(csvDownloadService) {
        this.csvDownloadService = csvDownloadService;
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/components/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.css */ "./src/app/components/navigation/navigation.component.css")]
        }),
        __metadata("design:paramtypes", [_services_csv_download_service__WEBPACK_IMPORTED_MODULE_1__["CsvDownloadService"]])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/components/pie-chart/pie-chart.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/pie-chart/pie-chart.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/pie-chart/pie-chart.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/pie-chart/pie-chart.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"pie-chart\"></div>\n"

/***/ }),

/***/ "./src/app/components/pie-chart/pie-chart.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/pie-chart/pie-chart.component.ts ***!
  \*************************************************************/
/*! exports provided: PieChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PieChartComponent", function() { return PieChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var c3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! c3 */ "./node_modules/c3/c3.js");
/* harmony import */ var c3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(c3__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_coin_market_cap_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/coin-market-cap.service */ "./src/app/services/coin-market-cap.service.ts");
/* harmony import */ var _services_portfolio_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/portfolio.service */ "./src/app/services/portfolio.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PieChartComponent = /** @class */ (function () {
    function PieChartComponent(coinMarketCapService, portfolioService) {
        this.coinMarketCapService = coinMarketCapService;
        this.portfolioService = portfolioService;
        this.coins = [];
    }
    PieChartComponent.prototype.ngOnInit = function () {
        this.getCoins();
    };
    PieChartComponent.prototype.getCoins = function () {
        var _this = this;
        this.coinMarketCapService.marketData().subscribe(function (coins) {
            _this.coins = _this.portfolioService.mergeMarketAndCoinData(coins);
            _this.generatePieChart();
        });
    };
    PieChartComponent.prototype.generatePieChart = function () {
        function mapToChart(coin) {
            return [coin.name, coin.value];
        }
        c3__WEBPACK_IMPORTED_MODULE_1__["generate"]({
            bindto: '#pie-chart',
            data: {
                // iris data from R
                columns: this.coins.map(mapToChart),
                type: 'pie',
            }
        });
    };
    PieChartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pie-chart',
            template: __webpack_require__(/*! ./pie-chart.component.html */ "./src/app/components/pie-chart/pie-chart.component.html"),
            styles: [__webpack_require__(/*! ./pie-chart.component.css */ "./src/app/components/pie-chart/pie-chart.component.css")]
        }),
        __metadata("design:paramtypes", [_services_coin_market_cap_service__WEBPACK_IMPORTED_MODULE_2__["CoinMarketCapService"],
            _services_portfolio_service__WEBPACK_IMPORTED_MODULE_3__["PortfolioService"]])
    ], PieChartComponent);
    return PieChartComponent;
}());



/***/ }),

/***/ "./src/app/components/portfolio-summary/portfolio-summary.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/portfolio-summary/portfolio-summary.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/portfolio-summary/portfolio-summary.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/portfolio-summary/portfolio-summary.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-6\">\n        <app-portfolio-table></app-portfolio-table>\n    </div>\n    <div class=\"col-md-6\">\n        <app-pie-chart></app-pie-chart>\n    </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/portfolio-summary/portfolio-summary.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/portfolio-summary/portfolio-summary.component.ts ***!
  \*****************************************************************************/
/*! exports provided: PortfolioSummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioSummaryComponent", function() { return PortfolioSummaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PortfolioSummaryComponent = /** @class */ (function () {
    function PortfolioSummaryComponent() {
    }
    PortfolioSummaryComponent.prototype.ngOnInit = function () {
    };
    PortfolioSummaryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-portfolio-summary',
            template: __webpack_require__(/*! ./portfolio-summary.component.html */ "./src/app/components/portfolio-summary/portfolio-summary.component.html"),
            styles: [__webpack_require__(/*! ./portfolio-summary.component.css */ "./src/app/components/portfolio-summary/portfolio-summary.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PortfolioSummaryComponent);
    return PortfolioSummaryComponent;
}());



/***/ }),

/***/ "./src/app/components/portfolio-table/portfolio-table.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/portfolio-table/portfolio-table.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loading {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 1.3rem;\n}\n\n\n.table-container {\n\n    height: 60vh;\n    min-height: 100px;\n    max-height: 800px;\n}\n\n\ntable {\n    display: flex;\n    flex-flow: column;\n    height: 100%;\n    width: 100%;\n}\n\n\nthead {\n    /* head takes the height it requires,\n    and it's not scaled when table is resized */\n    flex: 0 0 auto;\n    width: calc(100% - 0.9em);\n}\n\n\ntbody {\n    /* body takes all the remaining available space */\n    flex: 1 1 auto;\n    display: block;\n    overflow-y: scroll;\n}\n\n\ntbody tr {\n    width: 100%;\n}\n\n\ntable thead, table tbody tr {\n    display: table;\n    table-layout: fixed;\n}\n"

/***/ }),

/***/ "./src/app/components/portfolio-table/portfolio-table.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/portfolio-table/portfolio-table.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngSwitch]=\"portfolioService.coins.length > 0\">\n  <div *ngSwitchDefault class=\"loading\">\n    <h2>Loading...</h2>\n  </div>\n  <div *ngSwitchCase=\"true\">\n    <div class=\"table-container\">\n      <table id=\"portfolioTable\" class=\"table table-responsive table-hover\">\n        <caption>Portfolio</caption>\n        <thead>\n        <tr>\n          <th class=\"text-capitalize text-right\"\n              (click)=\"handleNewSort('rank')\"\n          >coin\n          </th>\n          <th class=\"text-capitalize text-right\"\n              (click)=\"handleNewSort('price_usd')\"\n          >$\n          </th>\n          <th class=\"text-capitalize text-right\"\n              (click)=\"handleNewSort('price_btc')\"\n          >btc\n          </th>\n          <th class=\"text-capitalize text-right\"\n              (click)=\"handleNewSort('coins')\"\n          >hodl\n          </th>\n          <th class=\"text-capitalize text-right\"\n              (click)=\"handleNewSort('value')\"\n          >Value\n          </th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr *ngFor=\" let coin of sortedCoins()\n                \">\n          <td>\n            <a href=\"{{'https://coinmarketcap.com/currencies/' + coin.id}}\" target=\"_blank\">\n              <span [class]=\"'icon icon-' + coin.symbol.toLowerCase()\"></span>\n              {{coin.id}}\n            </a>\n          </td>\n\n          <td class=\"text-right\">{{coin.price_usd | currency }}</td>\n          <td class=\"text-right\">{{coin.price_btc | number: '1.3-6'}}</td>\n          <td class=\"text-right\">{{coin.coins | number: '1.0-4'}}</td>\n          <td class=\"text-right\">{{coin.value | currency }}</td>\n        </tr>\n\n\n        </tbody>\n        <tfoot style=\"font-size: large\">\n        <tr>\n          <td><b>\n            Equivalent Value:\n          </b></td>\n          <td\n            title=\"Equivalent BTC\"\n            [attr.colspan]=\"4\"\n            class=\"text-right\"\n          >\n            {{portfolioService.totalBTC() | number}} btc\n          </td>\n        </tr>\n        <tr>\n          <td\n            title=\"Equivalent $\"\n            [attr.colspan]=\"5\"\n            class=\"text-right\"\n          >\n\n            {{portfolioService.totalUSD() | currency}}\n          </td>\n        </tr>\n        </tfoot>\n      </table>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/portfolio-table/portfolio-table.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/portfolio-table/portfolio-table.component.ts ***!
  \*************************************************************************/
/*! exports provided: PortfolioTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioTableComponent", function() { return PortfolioTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_portfolio_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/portfolio.service */ "./src/app/services/portfolio.service.ts");
/* harmony import */ var _sorted_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../sorted-table */ "./src/app/sorted-table.ts");
/* harmony import */ var _services_coin_market_cap_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/coin-market-cap.service */ "./src/app/services/coin-market-cap.service.ts");
/* harmony import */ var _services_csv_download_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/csv-download.service */ "./src/app/services/csv-download.service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PortfolioTableComponent = /** @class */ (function (_super) {
    __extends(PortfolioTableComponent, _super);
    function PortfolioTableComponent(portfolioService, coinMarketCapService, csvDownloadService) {
        var _this = _super.call(this) || this;
        _this.portfolioService = portfolioService;
        _this.coinMarketCapService = coinMarketCapService;
        _this.csvDownloadService = csvDownloadService;
        return _this;
    }
    PortfolioTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sortBy = 'value';
        this.ascending = false;
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-portfolio-table',
            template: __webpack_require__(/*! ./portfolio-table.component.html */ "./src/app/components/portfolio-table/portfolio-table.component.html"),
            styles: [__webpack_require__(/*! ./portfolio-table.component.css */ "./src/app/components/portfolio-table/portfolio-table.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('loadedState', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
                        color: 'green',
                        height: '0px',
                        opacity: '0',
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
                        color: 'red',
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('inactive => active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('100ms ease-in')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('active => inactive', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('100ms ease-out'))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('showState', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({})),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
                        opacity: '0',
                        height: '0',
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('inactive => active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('100ms ease-in')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('active => inactive', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('100ms ease-out'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [_services_portfolio_service__WEBPACK_IMPORTED_MODULE_1__["PortfolioService"], _services_coin_market_cap_service__WEBPACK_IMPORTED_MODULE_3__["CoinMarketCapService"], _services_csv_download_service__WEBPACK_IMPORTED_MODULE_4__["CsvDownloadService"]])
    ], PortfolioTableComponent);
    return PortfolioTableComponent;
}(_sorted_table__WEBPACK_IMPORTED_MODULE_2__["SortedTable"]));



/***/ }),

/***/ "./src/app/portfolio-page/portfolio-page.component.css":
/*!*************************************************************!*\
  !*** ./src/app/portfolio-page/portfolio-page.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/portfolio-page/portfolio-page.component.html":
/*!**************************************************************!*\
  !*** ./src/app/portfolio-page/portfolio-page.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" style=\"margin-top: 3vh;\">\n\n  <ul class=\"nav nav-tabs\">\n    <li class=\"nav-item\">\n      <a routerLink=\"/portfolio\" routerLinkActive=\"btn-success\" class=\"nav-link\">Details</a>\n    </li>\n    <li class=\"nav-item\">\n      <a routerLink=\"/portfolio/add\" routerLinkActive=\"btn-success\" class=\"nav-link\">Add Coin</a>\n    </li>\n    <li class=\"nav-item\">\n      <a routerLink=\"/portfolio/edit\" class=\"nav-link\" routerLinkActive=\"btn-success\">Edit\n        Portfolio</a>\n    </li>\n\n  </ul>\n  <router-outlet></router-outlet>\n\n  <nav class=\"navbar navbar-dark bg-primary fixed-bottom\">\n\n    <div class=\"btn-group\">\n      <button\n        class=\"btn\"\n\n        (click)=\"csvDownloadService.handleDownload()\">Download\n      </button>\n\n      <button\n        class=\"btn btn-danger\"\n        (click)=\"localStorageService.deleteCoins()\"\n\n      >Delete Portfolio\n      </button>\n    </div>\n  </nav>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/portfolio-page/portfolio-page.component.ts":
/*!************************************************************!*\
  !*** ./src/app/portfolio-page/portfolio-page.component.ts ***!
  \************************************************************/
/*! exports provided: PortfolioPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioPageComponent", function() { return PortfolioPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_csv_download_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/csv-download.service */ "./src/app/services/csv-download.service.ts");
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/local-storage.service */ "./src/app/services/local-storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PortfolioPageComponent = /** @class */ (function () {
    function PortfolioPageComponent(csvDownloadService, localStorageService) {
        this.csvDownloadService = csvDownloadService;
        this.localStorageService = localStorageService;
    }
    PortfolioPageComponent.prototype.ngOnInit = function () {
    };
    PortfolioPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-portfolio-page',
            template: __webpack_require__(/*! ./portfolio-page.component.html */ "./src/app/portfolio-page/portfolio-page.component.html"),
            styles: [__webpack_require__(/*! ./portfolio-page.component.css */ "./src/app/portfolio-page/portfolio-page.component.css")]
        }),
        __metadata("design:paramtypes", [_services_csv_download_service__WEBPACK_IMPORTED_MODULE_1__["CsvDownloadService"], _services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"]])
    ], PortfolioPageComponent);
    return PortfolioPageComponent;
}());



/***/ }),

/***/ "./src/app/services/coin-market-cap.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/coin-market-cap.service.ts ***!
  \*****************************************************/
/*! exports provided: CoinMarketCapService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoinMarketCapService", function() { return CoinMarketCapService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _coin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../coin */ "./src/app/coin.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CoinMarketCapService = /** @class */ (function () {
    function CoinMarketCapService(http) {
        this.http = http;
        this.url = 'https://api.coinmarketcap.com/v1/ticker/';
    }
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
        return new Error('Something bad happened; please try again later.');
    };
    CoinMarketCapService.prototype.marketData = function () {
        return this.http.get(this.url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(3), 
        //catchError(CoinMarketCapService.handleError),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.map(function (item) { return new _coin__WEBPACK_IMPORTED_MODULE_2__["Coin"](item.id, item.name, item.symbol, item.rank, item.price_usd, item.price_btc, item.market_cap_usd, item.available_supply, item.total_supply, item.max_supply, item.percent_change_1h, item.percent_change_24h, item.percent_change_7d, item.last_updated, item['24h_volume_usd']); }); }));
    };
    CoinMarketCapService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CoinMarketCapService);
    return CoinMarketCapService;
}());



/***/ }),

/***/ "./src/app/services/csv-download.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/csv-download.service.ts ***!
  \**************************************************/
/*! exports provided: CsvDownloadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CsvDownloadService", function() { return CsvDownloadService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _portfolio_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./portfolio.service */ "./src/app/services/portfolio.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_portfolio_service__WEBPACK_IMPORTED_MODULE_1__["PortfolioService"]])
    ], CsvDownloadService);
    return CsvDownloadService;
}());



/***/ }),

/***/ "./src/app/services/local-storage.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/local-storage.service.ts ***!
  \***************************************************/
/*! exports provided: LocalStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageService", function() { return LocalStorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], LocalStorageService);
    return LocalStorageService;
}());



/***/ }),

/***/ "./src/app/services/portfolio.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/portfolio.service.ts ***!
  \***********************************************/
/*! exports provided: PortfolioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioService", function() { return PortfolioService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _local_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./local-storage.service */ "./src/app/services/local-storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PortfolioService = /** @class */ (function () {
    function PortfolioService(localStorageService) {
        this.localStorageService = localStorageService;
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
        });
        return this.coins;
    };
    PortfolioService.prototype.totalUSD = function () {
        return this.coins.reduce(function (tot, cur) { return tot + cur.value; }, 0);
    };
    PortfolioService.prototype.totalBTC = function () {
        return this.coins.reduce(function (tot, cur) { return tot + cur.price_btc * cur.coins; }, 0);
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_local_storage_service__WEBPACK_IMPORTED_MODULE_1__["LocalStorageService"]])
    ], PortfolioService);
    return PortfolioService;
    var PortfolioService_1;
}());



/***/ }),

/***/ "./src/app/sorted-table.ts":
/*!*********************************!*\
  !*** ./src/app/sorted-table.ts ***!
  \*********************************/
/*! exports provided: SortedTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortedTable", function() { return SortedTable; });
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
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: true,
    cx: false,
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/joe/Documents/crypto-portfolio/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map