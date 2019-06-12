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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _book_list_book_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./book-list/book-list.component */ "./src/app/book-list/book-list.component.ts");
/* harmony import */ var _book_details_book_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./book-details/book-details.component */ "./src/app/book-details/book-details.component.ts");
/* harmony import */ var _book_form_book_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./book-form/book-form.component */ "./src/app/book-form/book-form.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _book_basket_book_basket_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./book-basket/book-basket.component */ "./src/app/book-basket/book-basket.component.ts");
/* harmony import */ var _book_order_list_book_order_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./book-order-list/book-order-list.component */ "./src/app/book-order-list/book-order-list.component.ts");
/* harmony import */ var _book_order_detail_book_order_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./book-order-detail/book-order-detail.component */ "./src/app/book-order-detail/book-order-detail.component.ts");











var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'books', component: _book_list_book_list_component__WEBPACK_IMPORTED_MODULE_4__["BookListComponent"] },
    { path: 'books/:isbn', component: _book_details_book_details_component__WEBPACK_IMPORTED_MODULE_5__["BookDetailsComponent"] },
    { path: 'admin', component: _book_form_book_form_component__WEBPACK_IMPORTED_MODULE_6__["BookFormComponent"] },
    { path: 'admin/:isbn', component: _book_form_book_form_component__WEBPACK_IMPORTED_MODULE_6__["BookFormComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] },
    { path: 'basket', component: _book_basket_book_basket_component__WEBPACK_IMPORTED_MODULE_8__["BookBasketComponent"] },
    { path: 'order', component: _book_order_list_book_order_list_component__WEBPACK_IMPORTED_MODULE_9__["BookOrderListComponent"] },
    { path: 'order/:id', component: _book_order_detail_book_order_detail_component__WEBPACK_IMPORTED_MODULE_10__["BookOrderDetailComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] //mit Angular verknüpft, bei app.module importiert
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui {{isLogedIn()?'six':'four'}} item tabs menu\">\n  <a routerLink=\"home\" routerLinkActive=\"active\" class=\"item\">HOME</a>\n  <a routerLink=\"books\" routerLinkActive=\"active\" class=\"item\">BÜCHER</a><!-- a-tag nicht mit href, sondern mit routerLink verlinken-->\n  <a routerLink=\"basket\" routerLinkActive=\"active\" class=\"item\">WARENKORB</a>\n  <a *ngIf=\"isLogedIn()\" routerLink=\"order\" routerLinkActive=\"active\" class=\"item\">BESTELLUNG</a>\n  <a *ngIf=\"isLogedIn()\" routerLink=\"admin\" routerLinkActive=\"active\" class=\"item\">ADMINISTRATION</a>\n  <a routerLink=\"login\" routerLinkActive=\"active\" class=\"item\">{{getLoginLabel()}}</a>\n\n</div>\n<router-outlet></router-outlet>  <!-- durch die Taps werden die Komponenten angezeigt-->\n\n<!--The content below is only a placeholder and can be replaced.\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div>\n<h2>Here are some links to help you start: </h2>\n<ul>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/cli\">CLI Documentation</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\n  </li>\n</ul>\n\n-->\n\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shares_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shares/authentication.service */ "./src/app/shares/authentication.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(authService) {
        this.authService = authService;
    }
    AppComponent.prototype.isLogedIn = function () {
        return this.authService.isLoggedIn();
    };
    AppComponent.prototype.getLoginLabel = function () {
        if (this.isLogedIn()) {
            return "LOGOUT";
        }
        else {
            return "LOGIN";
        }
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bs-root',
            //findet den Inhalt --> Decorator für Komponente
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shares_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], AppComponent);
    return AppComponent;
}());

/*export class AppComponent {
  listOn = true;
  detailsOn = false;

  book: Book;

  showList(){
    this.listOn = true;
    this.detailsOn = false;
  }

  showDetails(book: Book){
    this.book = book;
    this.listOn = false;
    this.detailsOn = true;
  }
}*/


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _book_list_book_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./book-list/book-list.component */ "./src/app/book-list/book-list.component.ts");
/* harmony import */ var _book_list_item_book_list_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./book-list-item/book-list-item.component */ "./src/app/book-list-item/book-list-item.component.ts");
/* harmony import */ var _book_details_book_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./book-details/book-details.component */ "./src/app/book-details/book-details.component.ts");
/* harmony import */ var _shares_book_store_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shares/book-store.service */ "./src/app/shares/book-store.service.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _book_form_book_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./book-form/book-form.component */ "./src/app/book-form/book-form.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var angular_date_value_accessor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angular-date-value-accessor */ "./node_modules/angular-date-value-accessor/index.js");
/* harmony import */ var angular_date_value_accessor__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(angular_date_value_accessor__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _shares_authentication_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shares/authentication.service */ "./src/app/shares/authentication.service.ts");
/* harmony import */ var _shares_token_interceptor_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shares/token-interceptor.service */ "./src/app/shares/token-interceptor.service.ts");
/* harmony import */ var _shares_jwt_interceptor_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shares/jwt-interceptor.service */ "./src/app/shares/jwt-interceptor.service.ts");
/* harmony import */ var _book_basket_book_basket_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./book-basket/book-basket.component */ "./src/app/book-basket/book-basket.component.ts");
/* harmony import */ var _book_order_book_order_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./book-order/book-order.component */ "./src/app/book-order/book-order.component.ts");
/* harmony import */ var _book_order_list_book_order_list_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./book-order-list/book-order-list.component */ "./src/app/book-order-list/book-order-list.component.ts");
/* harmony import */ var _book_order_detail_book_order_detail_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./book-order-detail/book-order-detail.component */ "./src/app/book-order-detail/book-order-detail.component.ts");























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _book_list_book_list_component__WEBPACK_IMPORTED_MODULE_4__["BookListComponent"],
                _book_list_item_book_list_item_component__WEBPACK_IMPORTED_MODULE_5__["BookListItemComponent"],
                _book_details_book_details_component__WEBPACK_IMPORTED_MODULE_6__["BookDetailsComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _book_form_book_form_component__WEBPACK_IMPORTED_MODULE_11__["BookFormComponent"],
                _search_search_component__WEBPACK_IMPORTED_MODULE_13__["SearchComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"],
                _book_basket_book_basket_component__WEBPACK_IMPORTED_MODULE_19__["BookBasketComponent"],
                _book_order_book_order_component__WEBPACK_IMPORTED_MODULE_20__["BookOrderComponent"],
                _book_order_list_book_order_list_component__WEBPACK_IMPORTED_MODULE_21__["BookOrderListComponent"],
                _book_order_detail_book_order_detail_component__WEBPACK_IMPORTED_MODULE_22__["BookOrderDetailComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"], angular_date_value_accessor__WEBPACK_IMPORTED_MODULE_14__["DateValueAccessorModule"]
            ],
            providers: [_shares_book_store_service__WEBPACK_IMPORTED_MODULE_7__["BookStoreService"], _shares_authentication_service__WEBPACK_IMPORTED_MODULE_16__["AuthService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HTTP_INTERCEPTORS"],
                    useClass: _shares_token_interceptor_service__WEBPACK_IMPORTED_MODULE_17__["TokenInterceptorService"],
                    multi: true
                },
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HTTP_INTERCEPTORS"],
                    useClass: _shares_jwt_interceptor_service__WEBPACK_IMPORTED_MODULE_18__["JwtInterceptorService"],
                    multi: true
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/book-basket/book-basket.component.html":
/*!********************************************************!*\
  !*** ./src/app/book-basket/book-basket.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui middle aligned selection divided list\">\n  <ng-container *ngFor=\"let book of booksOrdered\" >\n  <a class=\"bs-book-list-item item\"\n     [book]=\"book\"\n     [routerLink]=\"book.isbn\" >\n  </a>\n\n    <div class=\"column\">\n      <div class=\"row\">\n        <div class=\"column\">\n          <p>\n    <span>Anzahl: {{book?.amount}}</span>\n\n    </div>\n\n    <button class=\"ui tiny blue labeled icon button\"\n            (click)=\"removeItemFromBasket(book)\" >\n      <i class=\"remove icon\"></i>Buch entfernen\n    </button>\n      </div>\n    </div>\n  </ng-container>\n\n  <ng-container>\n    <div>\n  <button class=\"ui tiny yellow labeled icon button\"\n          (click)=\"checkLogin()\" >\n    <i class=\"icon\"></i>Bestellen\n  </button>\n    </div>\n  </ng-container>\n\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/book-basket/book-basket.component.ts":
/*!******************************************************!*\
  !*** ./src/app/book-basket/book-basket.component.ts ***!
  \******************************************************/
/*! exports provided: BookBasketComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookBasketComponent", function() { return BookBasketComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shares_book_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shares/book-store.service */ "./src/app/shares/book-store.service.ts");
/* harmony import */ var _shares_book_factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shares/book-factory */ "./src/app/shares/book-factory.ts");
/* harmony import */ var _shares_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shares/authentication.service */ "./src/app/shares/authentication.service.ts");
/* harmony import */ var _shares_order_factory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shares/order-factory */ "./src/app/shares/order-factory.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var BookBasketComponent = /** @class */ (function () {
    function BookBasketComponent(bs, as, route, router) {
        this.bs = bs;
        this.as = as;
        this.route = route;
        this.router = router;
        this.booksOrdered = [];
        this.bruttoPrice = 0;
        this.order = _shares_order_factory__WEBPACK_IMPORTED_MODULE_5__["OrderFactory"].empty();
        this.total_amount = 0;
        this.book = _shares_book_factory__WEBPACK_IMPORTED_MODULE_3__["BookFactory"].empty();
    }
    BookBasketComponent.prototype.ngOnInit = function () {
        var _this = this;
        // holen aus localstorage
        // umwandeln in array
        var basketString = localStorage.getItem('basket');
        var basket = JSON.parse(basketString) || [];
        // array durchgehen
        // für jedes item
        basket.forEach(function (bookOrder) {
            _this.bs.getSingle(bookOrder.isbn).subscribe(function (bookDetails) {
                _this.booksOrdered.push(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, bookDetails, { amount: bookOrder.amount }));
                // Preis aufadieren
                _this.bruttoPrice += bookDetails.price;
            });
        });
    };
    BookBasketComponent.prototype.removeItemFromBasket = function (book) {
        if (confirm('Buch wirklich löschen?')) {
            this.booksOrdered.splice(this.booksOrdered.lastIndexOf(book), 1);
            var localState = this.booksOrdered.map(function (bookOrder) { return ({
                isbn: bookOrder.isbn,
                amount: bookOrder.amount
            }); });
            localStorage.setItem('basket', JSON.stringify(localState));
        }
    };
    /*  increaseAmount(book:Book){
  
          this.booksOrdered = JSON.parse(localStorage.getItem('basket'));
  
          for(var i in this.booksOrdered){
              if(this.booksOrdered[i].book:Book == book){
                  this.booksOrdered[i].amount++;
              }
  
          }
          localStorage.setItem('basket', JSON.stringify(this.booksOrdered));
  
      }*/
    BookBasketComponent.prototype.addToOrder = function () {
        var _this = this;
        var id = 1;
        var order_item = [];
        var currentUser = this.as.getCurrentUserId();
        for (var _i = 0, _a = this.booksOrdered; _i < _a.length; _i++) {
            var book = _a[_i];
            this.total_amount += book.price;
            //pushen die ISBN vom Book
            order_item.push(book.isbn);
            console.log(this.total_amount);
            //Werte anschauen
        }
        var taxes = this.total_amount * 0.1;
        var date = new Date();
        // const order:Order = {id, currentUser, date, price, taxes, bookIds  };
        var addOrder = _shares_order_factory__WEBPACK_IMPORTED_MODULE_5__["OrderFactory"].fromObject(id, currentUser, date, this.total_amount, taxes, order_item);
        //in die Datenbank senden
        this.bs.createOrder(addOrder).subscribe(function (res) {
            _this.order = _shares_order_factory__WEBPACK_IMPORTED_MODULE_5__["OrderFactory"].empty();
            _this.booksOrdered = [];
            localStorage.removeItem('basket');
        });
        console.log(addOrder);
    };
    BookBasketComponent.prototype.checkLogin = function () {
        if (this.as.isLoggedIn()) {
            this.addToOrder();
        }
        else {
            confirm('Bitte anmelden, um etwas zu bestellen.');
            this.router.navigate(['/login']);
        }
    };
    BookBasketComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bs-book-basket',
            template: __webpack_require__(/*! ./book-basket.component.html */ "./src/app/book-basket/book-basket.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shares_book_store_service__WEBPACK_IMPORTED_MODULE_2__["BookStoreService"], _shares_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], BookBasketComponent);
    return BookBasketComponent;
}());

/*const val = this.loginForm.value;
if (val.username && val.password) {
    this.authService.login(val.username, val.password).subscribe(res => {
        const resObj = res as Response;
        if (resObj.response === "success") {
            this.authService.setLocalStorage(resObj.result.token);
            this.router.navigateByUrl('/');

// Local storage holen ==> return string
const basketString = localStorage.getItem('basket');
// wenn was da
// umwandeln

const basket = basketString && basketString.length > 0 ? JSON.parse(basketString) : [];

// hier array

// schauen ob bookorder mit bookid existiert wenn ja amount erhöhen sonst appenden
basket.push({isbn: book.isbn, amount:1})

const newBasketString = JSON.stringify(basket);
// zurückspeichern
localStorage.setItem('basket', newBasketString)*/ 


/***/ }),

/***/ "./src/app/book-details/book-details.component.html":
/*!**********************************************************!*\
  !*** ./src/app/book-details/book-details.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui grid\" *ngIf=\"book\"> <!--ob es von außen ein Buch gibt -->\n  <div class=\"four wide column\">\n    <img class=\"ui large image\" *ngIf=\"book.images && book.images[0]\"\n         [src]=\"book.images[0].url\">\n  </div>\n  <div class=\"twelve wide column\">\n    <h1 class=\"ui header\">{{ book.title }}</h1>\n    <h3 class=\"ui header\">{{ book.subtitle }}</h3>\n    <div class=\"ui divider\"></div>\n    <div class=\"ui grid\">\n      <div class=\"five wide column\">\n        <h4 class=\"ui header\">Autoren</h4>\n        <span *ngFor=\"let author of book.authors; last as l\">\n         {{ author.firstName }} {{ author.lastName }}<span *ngIf=\"!l\">, </span>\n       </span>\n      </div>\n      <div class=\"five wide column\">\n        <h4 class=\"ui header\">ISBN</h4>\n        {{ book.isbn }}\n      </div>\n      <div class=\"five wide column\">\n        <h4 class=\"ui header\">Erschienen</h4>\n        {{ book.published }}\n      </div>\n      <div class=\"five wide column\">\n        <h4 class=\"ui header\">Preis</h4>\n        € {{ book.price }},-\n      </div>\n      <div class=\"five wide column\">\n        <h4 class=\"ui header\">Rating</h4>\n        <i *ngFor=\"let r of getRating(book.rating)\" class=\"yellow star icon\"></i>\n      </div>\n    </div>\n  </div>\n  <div class=\"sixteen wide column\">\n    <h3 class=\"ui header\">Beschreibung</h3>\n    {{ book.description }}\n  </div>\n  <div class=\"sixteen wide column\">\n    <div class=\"ui small images\">\n      <img *ngFor=\"let thumbnail of book.images\" [src]=\"thumbnail.url\">\n    </div>\n  </div>\n</div>\n\n<button [routerLink]=\"'/books'\" class=\"ui red button\">\n  Zurück zur Buchliste\n</button>\n\n<button class=\"ui tiny yellow labeled icon button\"\n        (click)=\"addToBasket(book)\">\n  <i class=\"cart icon\"></i> Zum Warenkorb\n</button>\n\n\n<button *ngIf=\"authService.isLoggedIn()\"class=\"ui tiny red labeled icon button\"\n        (click)=\"removeBook()\" >\n  <i class=\"remove icon\"></i>Buch löschen\n</button>\n\n<a *ngIf=\"authService.isLoggedIn()\" class=\"ui tiny yellow labeled icon button\"\n   [routerLink]=\"['../../admin',book?.isbn]\">\n  <i class=\"write icon\"></i>Buch bearbeiten</a>\n<!-- ? sichere Navigation, wenn Buch 0 ist tut es nicht auch kein Fehler anzeigen -->\n"

/***/ }),

/***/ "./src/app/book-details/book-details.component.ts":
/*!********************************************************!*\
  !*** ./src/app/book-details/book-details.component.ts ***!
  \********************************************************/
/*! exports provided: BookDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookDetailsComponent", function() { return BookDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shares_book_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shares/book-store.service */ "./src/app/shares/book-store.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shares_book_factory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shares/book-factory */ "./src/app/shares/book-factory.ts");
/* harmony import */ var _shares_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shares/authentication.service */ "./src/app/shares/authentication.service.ts");






var BookDetailsComponent = /** @class */ (function () {
    //@Input() book: Book;
    // @Output() showListEvent = new EventEmitter<any>();
    function BookDetailsComponent(bs, route, router, authService) {
        this.bs = bs;
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.book = _shares_book_factory__WEBPACK_IMPORTED_MODULE_4__["BookFactory"].empty();
        this.countCurrBook = 0;
    }
    // showBookList(){
    //  this.showListEvent.emit();
    //}
    BookDetailsComponent.prototype.addToBasket = function (book) {
        // Add item to local storage
        // Local storage holen ==> return string
        var basketString = localStorage.getItem('basket');
        // wenn was da
        // umwandeln
        var basket = basketString && basketString.length > 0 ? JSON.parse(basketString) : [];
        // hier array
        var existingOrderItem = basket.find(function (bookOrderModel) { return bookOrderModel.isbn === book.isbn; });
        // schauen ob bookorder mit bookid existiert wenn ja amount erhöhen sonst appenden
        if (existingOrderItem) {
            existingOrderItem.amount += 1;
        }
        else {
            basket.push({ isbn: book.isbn, amount: 1 });
        }
        var newBasketString = JSON.stringify(basket);
        // zurückspeichern
        localStorage.setItem('basket', newBasketString);
    };
    BookDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var params = this.route.snapshot.params;
        this.bs.getSingle(params['isbn']).subscribe(function (b) {
            _this.book = b;
            console.log(_this.book);
        }); //wir rufen den Service bs auf
    };
    BookDetailsComponent.prototype.getRating = function (num) {
        return new Array(num);
    };
    BookDetailsComponent.prototype.removeBook = function () {
        var _this = this;
        if (confirm('Buch wirklich löschen?')) {
            this.bs.remove(this.book.isbn).subscribe(function (res) { return _this.router.navigate(['../'], { relativeTo: _this.route }); });
        }
    };
    BookDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bs-book-details',
            template: __webpack_require__(/*! ./book-details.component.html */ "./src/app/book-details/book-details.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shares_book_store_service__WEBPACK_IMPORTED_MODULE_2__["BookStoreService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _shares_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], BookDetailsComponent);
    return BookDetailsComponent;
}());



/***/ }),

/***/ "./src/app/book-form/book-form-error-messages.ts":
/*!*******************************************************!*\
  !*** ./src/app/book-form/book-form-error-messages.ts ***!
  \*******************************************************/
/*! exports provided: ErrorMessage, BookFormErrorMessages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorMessage", function() { return ErrorMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookFormErrorMessages", function() { return BookFormErrorMessages; });
var ErrorMessage = /** @class */ (function () {
    function ErrorMessage(forControl, forValidator, text) {
        this.forControl = forControl;
        this.forValidator = forValidator;
        this.text = text;
    }
    return ErrorMessage;
}());

var BookFormErrorMessages = [
    new ErrorMessage('title', 'required', 'Ein Buchtitel muss angegeben werden'),
    new ErrorMessage('isbn', 'required', 'Es muss eine ISBN angegeben werden'),
    new ErrorMessage('isbn', 'minlength', 'Die ISBN muss mindestens 10 Zeichen enthalten'),
    new ErrorMessage('isbn', 'maxlength', 'Eine ISBN darf höchstens 13 Zeichen haben'),
    new ErrorMessage('isbn', 'isbnFormat', 'Die ISBN muss aus 10 oder 13 Zeichen bestehen'),
    new ErrorMessage('published', 'required', 'Es muss ein Erscheinungsdatum angegeben werden'),
    new ErrorMessage('authors', 'required', 'Es muss ein Autor angegeben werden'),
    new ErrorMessage('rating', 'min', 'Bewertung kann nur positive Werte annehmen'),
    new ErrorMessage('rating', 'max', 'Maximal 10 Sterne erlaubt'),
    new ErrorMessage('images', 'atLeastOneImage', 'Es muss ein Bild (mit URL und Titel) angegeben werden')
];


/***/ }),

/***/ "./src/app/book-form/book-form.component.html":
/*!****************************************************!*\
  !*** ./src/app/book-form/book-form.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Buchformular</h1>\n<form  class=\"ui large form\" [formGroup]=\"bookForm\" (ngSubmit)=\"submitForm()\">\n  <input type=\"hidden\" name=\"id\">\n  <div class=\"field\">\n    <label>Buchtitel</label>\n    <input formControlName=\"title\">\n    <div *ngIf=\"errors.title\" class=\"ui negative message\"> {{ errors.title }} </div>\n  </div>\n  <div class=\"field\">\n    <label>Untertitel</label>\n    <input formControlName=\"subtitle\">\n  </div>\n  <div class=\"field\" [class.disabled]=\"isUpdatingBook\">    <!--ISBN sollte nicht geändert werden, wenn update folgt -->\n    <label>ISBN-Nummer</label>\n    <input formControlName=\"isbn\">\n    <div *ngIf=\"errors.isbn\" class=\"ui negative message\">{{ errors.isbn }} </div>\n  </div>\n  <div class=\"field\">\n    <label>Erscheinungsdatum</label>\n    <input type=\"date\" useValueAsDate formControlName=\"published\">\n    <div *ngIf=\"errors.published\" class=\"ui negative message\">{{ errors.published }}</div>\n  </div>\n  <div class=\"field\">\n    <label>Beschreibung</label>\n    <textarea formControlName=\"description\" rows=\"3\"></textarea>\n  </div>\n  <div class=\"field\">\n    <label>Rating</label>\n    <input type=\"number\" formControlName=\"rating\">\n    <div *ngIf=\"errors.rating\" class=\"ui negative message\">{{ errors.rating }}</div>\n  </div>\n  <div class=\"field\">\n    <label>Bilder</label>\n    <div formArrayName=\"images\">\n      <div class=\"fields\" *ngFor=\"let control of images?.controls; index as i; last as l\" [formGroupName]=\"i\">\n        <input type=\"hidden\" name=\"id\">\n        <div class=\"nine wide field\">\n          <input formControlName=\"url\" placeholder=\"http://bild{{i+1}}_url\">\n        </div>\n        <div class=\"six wide field\">\n          <input formControlName=\"title\" placeholder=\"Bild{{i+1}}_Titel\">\n        </div>\n        <div class=\"one wide field\" *ngIf=\"!l\">  <!-- Wenn ich hier draufklicke, wird eine neue Zeile erstellt -->\n          <button (click)=\"removeThumbnailControl(i)\" class=\"ui large button\" type=\"button\">-</button>\n        </div>\n        <div class=\"one wide field\" *ngIf=\"l\">  <!-- Wenn ich hier draufklicke, wird eine neue Zeile erstellt -->\n          <button (click)=\"addThumbnailControl()\" class=\"ui large button\" type=\"button\">+</button>\n        </div>\n        <div *ngIf=\"errors.images\" class=\"ui negative message\">{{ errors.images }}</div>\n      </div>\n    </div>\n  </div>\n\n  <button type=\"submit\" class=\"ui button\" [disabled]=\"bookForm.invalid\">Speichern</button>\n</form>\n"

/***/ }),

/***/ "./src/app/book-form/book-form.component.ts":
/*!**************************************************!*\
  !*** ./src/app/book-form/book-form.component.ts ***!
  \**************************************************/
/*! exports provided: BookFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookFormComponent", function() { return BookFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shares_book_store_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shares/book-store.service */ "./src/app/shares/book-store.service.ts");
/* harmony import */ var _shares_book_factory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shares/book-factory */ "./src/app/shares/book-factory.ts");
/* harmony import */ var _book_form_error_messages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./book-form-error-messages */ "./src/app/book-form/book-form-error-messages.ts");
/* harmony import */ var _shares_book_validators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shares/book-validators */ "./src/app/shares/book-validators.ts");








var BookFormComponent = /** @class */ (function () {
    function BookFormComponent(fb, bs, route, router) {
        this.fb = fb;
        this.bs = bs;
        this.route = route;
        this.router = router;
        this.book = _shares_book_factory__WEBPACK_IMPORTED_MODULE_5__["BookFactory"].empty();
        this.errors = {};
        this.isUpdatingBook = false;
    }
    BookFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        var isbn = this.route.snapshot.params['isbn'];
        if (isbn) {
            this.isUpdatingBook = true;
            this.bs.getSingle(isbn).subscribe(function (book) {
                _this.book = book;
                _this.initBook();
            });
        }
        this.initBook();
    };
    BookFormComponent.prototype.initBook = function () {
        var _this = this;
        this.buildThumbnailsArray();
        this.bookForm = this.fb.group({
            id: this.book.id,
            title: [this.book.title, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            subtitle: this.book.subtitle,
            isbn: [this.book.isbn, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    //Validators.minLength(10),
                    //Validators.maxLength(13)
                    _shares_book_validators__WEBPACK_IMPORTED_MODULE_7__["BookValidators"].isbnFormat
                ]],
            description: this.book.description,
            rating: [this.book.rating, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(0),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].max(10)
                ]],
            //authors: this.authors,
            images: this.images,
            published: new Date(this.book.published)
        });
        this.bookForm.statusChanges.subscribe(function () { return _this.updateErrorMessages(); });
    };
    BookFormComponent.prototype.buildThumbnailsArray = function () {
        var _this = this;
        console.log(this.book.images);
        //if(this.book.images.length == 0){ //if new book had no images -> but no in edit mode
        //  this.book.images.push(new Image(0,'',''))
        //}
        this.images = this.fb.array(this.book.images.map(function (t) { return _this.fb.group({
            id: _this.fb.control(t.id),
            url: _this.fb.control(t.url),
            title: _this.fb.control(t.title)
        }); }), _shares_book_validators__WEBPACK_IMPORTED_MODULE_7__["BookValidators"].atLeastOneImage);
        console.log(this.images);
    };
    BookFormComponent.prototype.addThumbnailControl = function () {
        this.images.push(this.fb.group({ url: null, title: null }));
    };
    //löscht mir das Array an der stelle index
    BookFormComponent.prototype.removeThumbnailControl = function (index) {
        this.images.removeAt(index);
    };
    BookFormComponent.prototype.submitForm = function () {
        var _this = this;
        // filter empty values
        this.bookForm.value.images = this.bookForm.value.images.filter(function (thumbnail) { return thumbnail.url; });
        var book = _shares_book_factory__WEBPACK_IMPORTED_MODULE_5__["BookFactory"].fromObject(this.bookForm.value); //bekomme ich alle Value-Werte zurück
        //deep copy  - did not work without??  Images muss ich extra setzen
        book.images = this.bookForm.value.images;
        console.log(book);
        //just copy the authors
        book.authors = this.book.authors;
        if (this.isUpdatingBook) {
            this.bs.update(book).subscribe(function (res) {
                _this.router.navigate(['../../books', book.isbn], { relativeTo: _this.route });
            });
        }
        else {
            book.user_id = 1; // jsut for testing
            console.log(book);
            this.bs.create(book).subscribe(function (res) {
                //  this.book = BookFactory.empty();
                //  this.bookForm.reset(BookFactory.empty());
                _this.router.navigate(['../books'], { relativeTo: _this.route });
            });
        }
    };
    BookFormComponent.prototype.updateErrorMessages = function () {
        this.errors = {};
        for (var _i = 0, BookFormErrorMessages_1 = _book_form_error_messages__WEBPACK_IMPORTED_MODULE_6__["BookFormErrorMessages"]; _i < BookFormErrorMessages_1.length; _i++) {
            var message = BookFormErrorMessages_1[_i];
            var control = this.bookForm.get(message.forControl);
            if (control &&
                control.dirty && //Ich habe changes gemacht im Formular, aber nicht gespeichert keinen korrekten Zustand
                control.invalid && //wenn es invalide ist würde die Fehlermeldung kommen
                control.errors[message.forValidator] &&
                !this.errors[message.forControl]) {
                this.errors[message.forControl] = message.text;
            }
        }
    };
    BookFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'bs-book-form',
            template: __webpack_require__(/*! ./book-form.component.html */ "./src/app/book-form/book-form.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _shares_book_store_service__WEBPACK_IMPORTED_MODULE_4__["BookStoreService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], BookFormComponent);
    return BookFormComponent;
}());



/***/ }),

/***/ "./src/app/book-list-item/book-list-item.component.html":
/*!**************************************************************!*\
  !*** ./src/app/book-list-item/book-list-item.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <img class=\"ui tiny image\"\n       *ngIf=\"book?.images[0]\"\n       [src]=\"book?.images[0]?.url\">  <!-- das erste Bild im array anzeigen-->\n  <div class=\"content\">\n    <div class=\"header\">{{book.title}}</div>\n    <div class=\"description\">{{book.subtitle}}</div>\n    <div class=\"metadata\">\n        <span *ngFor=\"let author of book.authors; last as l\"> <!--Speichert mir den letzten in der Variabel l-->\n          {{author.firstName}} {{author.lastName}}<span *ngIf=\"!l\"></span>\n        </span>\n    </div>\n    <div class=\"extra\">ISBN {{book.isbn}}</div>\n      <div class=\"price\">Preis: € {{book.price}},-</div>\n  </div>\n\n"

/***/ }),

/***/ "./src/app/book-list-item/book-list-item.component.ts":
/*!************************************************************!*\
  !*** ./src/app/book-list-item/book-list-item.component.ts ***!
  \************************************************************/
/*! exports provided: BookListItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookListItemComponent", function() { return BookListItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shares_book__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shares/book */ "./src/app/shares/book.ts");



var BookListItemComponent = /** @class */ (function () {
    function BookListItemComponent() {
    }
    BookListItemComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _shares_book__WEBPACK_IMPORTED_MODULE_2__["Book"])
    ], BookListItemComponent.prototype, "book", void 0);
    BookListItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'a.bs-book-list-item',
            template: __webpack_require__(/*! ./book-list-item.component.html */ "./src/app/book-list-item/book-list-item.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BookListItemComponent);
    return BookListItemComponent;
}());



/***/ }),

/***/ "./src/app/book-list/book-list.component.html":
/*!****************************************************!*\
  !*** ./src/app/book-list/book-list.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui middle aligned selection divided list\">\n  <ng-container *ngFor=\"let book of books\">\n    <a class=\"bs-book-list-item item\"\n       [book]=\"book\"\n       [routerLink]=\"book.isbn\" >\n    </a>\n    <button class=\"ui tiny yellow button\" (click)=\"addToBasket(book)\">Zum Warenkorb</button>\n  </ng-container>\n</div>\n"

/***/ }),

/***/ "./src/app/book-list/book-list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/book-list/book-list.component.ts ***!
  \**************************************************/
/*! exports provided: BookListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookListComponent", function() { return BookListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shares_book_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shares/book-store.service */ "./src/app/shares/book-store.service.ts");



var BookListComponent = /** @class */ (function () {
    function BookListComponent(bs) {
        this.bs = bs;
    } //Independence Injection
    BookListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bs.getAll().subscribe(function (res) { return _this.books = res; });
    };
    BookListComponent.prototype.addToBasket = function (book) {
        // Add item to local storage
        // Local storage holen ==> return string
        var basketString = localStorage.getItem('basket');
        // wenn was da
        // umwandeln
        var basket = basketString && basketString.length > 0 ? JSON.parse(basketString) : [];
        // hier array
        var existingOrderItem = basket.find(function (bookOrderModel) { return bookOrderModel.isbn === book.isbn; });
        // schauen ob bookorder mit bookid existiert wenn ja amount erhöhen sonst appenden
        if (existingOrderItem) {
            existingOrderItem.amount += 1;
        }
        else {
            basket.push({ isbn: book.isbn, amount: 1 });
        }
        var newBasketString = JSON.stringify(basket);
        // zurückspeichern
        localStorage.setItem('basket', newBasketString);
    };
    BookListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bs-book-list',
            template: __webpack_require__(/*! ./book-list.component.html */ "./src/app/book-list/book-list.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shares_book_store_service__WEBPACK_IMPORTED_MODULE_2__["BookStoreService"]])
    ], BookListComponent);
    return BookListComponent;
}());



/***/ }),

/***/ "./src/app/book-order-detail/book-order-detail.component.html":
/*!********************************************************************!*\
  !*** ./src/app/book-order-detail/book-order-detail.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui grid\" *ngIf=\"order\">\n\n  <div class=\"twelve wide column\">\n    <!--<h1 class=\"ui header\">{{ order.books }}</h1> -->\n    <h3 class=\"ui header\">User: {{ order?.user_id }}</h3>\n    <div class=\"ui divider\"></div>\n    <div class=\"ui grid\">\n      <div class=\"five wide column\">\n        <h4 class=\"ui header\">Bücherliste {{order?.order_items.book}}</h4>\n        <div *ngFor=\"let item of order.order_items\">\n        Buch: {{ item.book_id}}, Menge: {{ item.amount }}\n       </div>\n      </div>\n      <div class=\"five wide column\">\n        <h4 class=\"ui header\">Gesamtpreis: </h4>\n        € {{ order.total_amount }},-\n      </div>\n\n     <!-- <div class=\"five wide column\">\n      <h4 class=\"ui header\">Lieferadresse: {{order?.user_id}}</h4>\n      <div *ngFor=\"let user of order.user_id\">\n        Adresse: {{ user.street}}, , {{ user.street_nr }}\n      </div>-->\n\n    </div>\n\n\n\n\n\n    <div class=\"column\">\n      Satus ändern zu:\n      <select class=\"ui dropdown\" (change)=\"changeState($event.target.value)\">\n        <option [ngValue]=\"offen\">Offen</option>\n        <option [ngValue]=\"bezahlt\">Bezahlt</option>\n        <option [ngValue]=\"versendet\">Versendet</option>\n        <option [ngValue]=\"storniert\">Storniert</option>\n      </select>\n    </div>\n  </div>\n\n<!--<ng container>\n   <div *ngFor=\"let status of order.statuses\">\n    <div class=\"column\">\n      Satus ändern zu:\n      <select class=\"ui dropdown\" (change)=\"changeState($event.target.value)\">\n        <option> {{status.type}}</option>\n      </select>\n\n  <div class=\"sixteen wide column\">\n    <h3 class=\"ui header\">Beschreibung</h3>\n    <p>{{status.description}}</p>\n  </div>\n    </div>\n</ng>-->\n  <div class=\"sixteen wide column\">\n    <div class=\"ui small images\">\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/book-order-detail/book-order-detail.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/book-order-detail/book-order-detail.component.ts ***!
  \******************************************************************/
/*! exports provided: BookOrderDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookOrderDetailComponent", function() { return BookOrderDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shares_book_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shares/book-store.service */ "./src/app/shares/book-store.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shares_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shares/authentication.service */ "./src/app/shares/authentication.service.ts");





var BookOrderDetailComponent = /** @class */ (function () {
    function BookOrderDetailComponent(bs, route, authService) {
        this.bs = bs;
        this.route = route;
        this.authService = authService;
        this.choosenState = 0;
    }
    BookOrderDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var params = this.route.snapshot.params;
        this.bs.getSingleOrder(params['id']).subscribe(function (b) {
            _this.order = b;
            console.log("test:" + _this.order.order_items);
            //  this.order.order_items.forEach(function(book){
            //     this.bs.getSingleByID(book).subscribe(c => {
            //        this.order.push(c);
            //   });
            //});
            //    this.bs.getAll().subscribe(res => this.books = res);
        });
    };
    BookOrderDetailComponent.prototype.getState = function (stateNumber) {
        switch (stateNumber) {
            case 0:
                return "offen";
            case 1:
                return "bezahlt";
            case 2:
                return "versendet";
            case 3:
                return "storniert";
        }
    };
    BookOrderDetailComponent.prototype.changeState = function (value) {
        switch (value) {
            case "Offen":
                this.choosenState = 0;
                break;
            case "Bezahlt":
                this.choosenState = 1;
                break;
            case "Versendet":
                this.choosenState = 2;
                break;
            case "Storniert":
                this.choosenState = 3;
                break;
        }
        console.log("state=" + this.choosenState);
    };
    BookOrderDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bs-book-order-detail',
            template: __webpack_require__(/*! ./book-order-detail.component.html */ "./src/app/book-order-detail/book-order-detail.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shares_book_store_service__WEBPACK_IMPORTED_MODULE_2__["BookStoreService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _shares_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], BookOrderDetailComponent);
    return BookOrderDetailComponent;
}());



/***/ }),

/***/ "./src/app/book-order-list/book-order-list.component.html":
/*!****************************************************************!*\
  !*** ./src/app/book-order-list/book-order-list.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui middle aligned selection divided list\">\n  <ng-container *ngFor=\"let order of orders\">\n    <a class=\"bs-book-order-item item\"\n       [order]=\"order\"\n       [routerLink]=\"order.id\" >\n    </a>\n\n\n  </ng-container>\n</div>\n"

/***/ }),

/***/ "./src/app/book-order-list/book-order-list.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/book-order-list/book-order-list.component.ts ***!
  \**************************************************************/
/*! exports provided: BookOrderListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookOrderListComponent", function() { return BookOrderListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shares_book_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shares/book-store.service */ "./src/app/shares/book-store.service.ts");



var BookOrderListComponent = /** @class */ (function () {
    function BookOrderListComponent(bs) {
        this.bs = bs;
    }
    BookOrderListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bs.getAllOrders().subscribe(function (orders) { return _this.orders = orders; });
    };
    BookOrderListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bs-book-order-list',
            template: __webpack_require__(/*! ./book-order-list.component.html */ "./src/app/book-order-list/book-order-list.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shares_book_store_service__WEBPACK_IMPORTED_MODULE_2__["BookStoreService"]])
    ], BookOrderListComponent);
    return BookOrderListComponent;
}());



/***/ }),

/***/ "./src/app/book-order/book-order.component.html":
/*!******************************************************!*\
  !*** ./src/app/book-order/book-order.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n <!-- <div class=\"header\">{{order?.books}}</div>-->\n  <div class=\"date\">Bestellt am: {{order?.date}}</div>\n  <div class=\"user\">User: {{order?.user_id}}</div>\n  <div class=\"price\">Gesamtsumme: {{order?.total_amount}},-</div>\n</div>\n"

/***/ }),

/***/ "./src/app/book-order/book-order.component.ts":
/*!****************************************************!*\
  !*** ./src/app/book-order/book-order.component.ts ***!
  \****************************************************/
/*! exports provided: BookOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookOrderComponent", function() { return BookOrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shares_order__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shares/order */ "./src/app/shares/order.ts");
/* harmony import */ var _shares_book_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shares/book-store.service */ "./src/app/shares/book-store.service.ts");




var BookOrderComponent = /** @class */ (function () {
    function BookOrderComponent(bs) {
        this.bs = bs;
    }
    BookOrderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bs.getAllOrders().subscribe(function (res) { return _this.orders = res; });
        this.bs.getAll().subscribe(function (res) { return _this.books = res; });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _shares_order__WEBPACK_IMPORTED_MODULE_2__["Order"])
    ], BookOrderComponent.prototype, "order", void 0);
    BookOrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'a.bs-book-order-item',
            template: __webpack_require__(/*! ./book-order.component.html */ "./src/app/book-order/book-order.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shares_book_store_service__WEBPACK_IMPORTED_MODULE_3__["BookStoreService"]])
    ], BookOrderComponent);
    return BookOrderComponent;
}());

/*getCurrentUserId()
{
    return Number.parseInt(localStorage.getItem('user'));
}*/ 


/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(router, route) {
        this.router = router;
        this.route = route;
    }
    HomeComponent.prototype.bookSelected = function (book) {
        this.router.navigate(['../books', book.isbn], { relativeTo: this.route });
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bs-home',
            template: "\n   <div class=\"ui container\">\n     <h1>Home</h1>\n     <p>Das ist der KWM Bookstore.</p>\n     <a routerLink=\"../books\" class=\"ui red button\">\n       Buchliste ansehen\n       <i class=\"right arrow icon\"></i>\n     </a>\n       <bs-search class=\"column\" (bookSelected)=\"bookSelected($event)\"> </bs-search>\n   </div>\n "
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!isLoggedIn()\">\n  <h1>LOGIN</h1>\n  <form  class=\"ui large form\" [formGroup]=\"loginForm\" (ngSubmit)=\"login()\">\n    <div class=\"field\">\n      <label>E-Mail</label>\n      <input type=\"email\" id=\"username\" formControlName=\"username\">\n      <div *ngIf=\"loginForm.get('username').invalid &&\n     (loginForm.get('username').dirty || loginForm.get('username').touched) &&\n     loginForm.get('username').hasError('required')\" class=\"ui negative message\">\n        Benutzername ist verpflichtend </div>\n      <div *ngIf=\"loginForm.get('username').invalid &&\n     (loginForm.get('username').dirty || loginForm.get('username').touched) &&\n     loginForm.get('username').hasError('email')\" class=\"ui negative message\">\n        E-Mail Format überprüfen </div>\n    </div>\n    <div class=\"field\">\n      <label>Passwort</label>\n      <input type=\"password\" formControlName=\"password\">\n      <div *ngIf=\"loginForm.get('password').invalid &&\n     (loginForm.get('password').dirty || loginForm.get('password').touched)\" class=\"ui negative message\">\n        Passwort ist verpflichtend </div>\n    </div>\n\n    <button type=\"submit\" class=\"ui button\" [disabled]=\"loginForm.invalid\">Login</button>\n  </form>\n</div>\n<div *ngIf=\"isLoggedIn()\">\n  <button type=\"button\" class=\"ui button\" (click)=\"logout()\">Logout</button>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shares_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shares/authentication.service */ "./src/app/shares/authentication.service.ts");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, router, authService) {
        this.fb = fb;
        this.router = router;
        this.authService = authService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.fb.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        var val = this.loginForm.value;
        if (val.username && val.password) {
            this.authService.login(val.username, val.password).subscribe(function (res) {
                var resObj = res;
                if (resObj.response === "success") {
                    _this.authService.setLocalStorage(resObj.result.token);
                    _this.router.navigateByUrl('/');
                }
            });
        }
    };
    LoginComponent.prototype.isLoggedIn = function () {
        return this.authService.isLoggedIn();
    };
    LoginComponent.prototype.logout = function () {
        this.authService.logout();
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bs-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _shares_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/search/search.component.html":
/*!**********************************************!*\
  !*** ./src/app/search/search.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"ui search\"  [ngClass]=\"{ loading: isLoading }\">\n    <div class=\"ui icon input\">\n        <input (keyup)=\"keyup.emit(searchTerm.value)\" #searchTerm class=\"prompt\" type=\"text\" placeholder=\"Suche...\">\n        <i class=\"search icon\"></i>\n    </div>\n    <div class=\"results transition\" [ngClass]=\"{ visible: foundBooks.length }\">\n\n        <a href (click)=\"bookSelected.emit(book); false\" class=\"result\" *ngFor=\"let book of foundBooks\">\n            <div class=\"content\">\n                <div class=\"title\" >{{ book.title }}</div>\n            </div>\n        </a>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/search/search.component.ts":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shares_book_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shares/book-store.service */ "./src/app/shares/book-store.service.ts");




var SearchComponent = /** @class */ (function () {
    function SearchComponent(bs) {
        this.bs = bs;
        this.isLoading = false;
        this.keyup = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.foundBooks = [];
        this.bookSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.keyup.
            pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(500)).
            pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])()).
            pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (searchTerm) { return _this.bs.getAllSearch(searchTerm); }))
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function () { return _this.isLoading = true; })). //this.Loading brauchen wir als Property
            subscribe(function (books) {
            _this.foundBooks = books;
            console.log(_this.foundBooks);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SearchComponent.prototype, "bookSelected", void 0);
    SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bs-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/search/search.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shares_book_store_service__WEBPACK_IMPORTED_MODULE_3__["BookStoreService"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/shares/authentication.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shares/authentication.service.ts ***!
  \**************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.api = 'http://bookstore19.s1610456016.student.kwmhgb.at/api/auth'; //'http://localhost:8080/api/auth';
    }
    AuthService.prototype.login = function (email, password) {
        return this.http.post(this.api + "/login", { 'email': email, 'password': password });
    };
    AuthService.prototype.setCurrentUserId = function () {
        this.http.get(this.api + "/user").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(3)).subscribe(function (res) {
            localStorage.setItem('userId', res.result.id.toString());
        });
    };
    AuthService.prototype.getCurrentUserId = function () {
        return Number.parseInt(localStorage.getItem('userId'));
    };
    AuthService.prototype.setLocalStorage = function (token) {
        console.log("Storing token");
        console.log(token);
        var decodedToken = jwt_decode__WEBPACK_IMPORTED_MODULE_4__(token);
        console.log(decodedToken);
        console.log(decodedToken.user.id);
        localStorage.setItem('token', token);
        localStorage.setItem('userId', decodedToken.user.id);
        localStorage.setItem('admin', decodedToken.user.admin); //.isAdmin
    };
    AuthService.prototype.logout = function () {
        this.http.post(this.api + "/logout", {});
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        console.log("logged out");
    };
    AuthService.prototype.isLoggedIn = function () {
        if (!Object(util__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(localStorage.getItem("token"))) {
            var token = localStorage.getItem("token");
            var decodedToken = jwt_decode__WEBPACK_IMPORTED_MODULE_4__(token);
            var expirationDate = new Date(0);
            expirationDate.setUTCSeconds(decodedToken.exp);
            if (expirationDate < new Date()) {
                console.log("token expired");
                localStorage.removeItem("token");
                return false;
            }
            return true;
        }
        else {
            return false;
        }
    };
    // public isLoggedIn() {
    //     return !isNullOrUndefined(localStorage.getItem("token"));
    // }
    AuthService.prototype.isAdmin = function () {
        return !Object(util__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(localStorage.getItem("admin"));
        /*     if (this.isLoggedIn()){
                 if (this.getAdminInfo() == 1){
                     return true;
                 }
                 return false;
             }
             return false;*/
    };
    AuthService.prototype.isLoggedOut = function () {
        return !this.isLoggedIn();
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/shares/author.ts":
/*!**********************************!*\
  !*** ./src/app/shares/author.ts ***!
  \**********************************/
/*! exports provided: Author */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Author", function() { return Author; });
var Author = /** @class */ (function () {
    function Author(id, firstName, lastName) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return Author;
}());



/***/ }),

/***/ "./src/app/shares/book-factory.ts":
/*!****************************************!*\
  !*** ./src/app/shares/book-factory.ts ***!
  \****************************************/
/*! exports provided: BookFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookFactory", function() { return BookFactory; });
/* harmony import */ var _book__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./book */ "./src/app/shares/book.ts");

var BookFactory = /** @class */ (function () {
    function BookFactory() {
    }
    BookFactory.empty = function () {
        return new _book__WEBPACK_IMPORTED_MODULE_0__["Book"](null, '', '', [], new Date(), 0, '', 0, [{ id: 0, url: '', title: '' }], '');
    };
    BookFactory.fromObject = function (rawBook) {
        return new _book__WEBPACK_IMPORTED_MODULE_0__["Book"](rawBook.id, rawBook.isbn, rawBook.title, rawBook.authors, typeof (rawBook.published) === 'string' ?
            new Date(rawBook.published) : rawBook.published, rawBook.user_id, rawBook.subtitle, rawBook.rating, rawBook.images, rawBook.description, rawBook.price);
    };
    return BookFactory;
}());



/***/ }),

/***/ "./src/app/shares/book-store.service.ts":
/*!**********************************************!*\
  !*** ./src/app/shares/book-store.service.ts ***!
  \**********************************************/
/*! exports provided: BookStoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookStoreService", function() { return BookStoreService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__);





var BookStoreService = /** @class */ (function () {
    function BookStoreService(http) {
        this.http = http;
        this.api = "http://bookstore19.S1610456016.student.kwmhgb.at/api";
    }
    BookStoreService.prototype.getAll = function () {
        return this.http.get(this.api + "/books").pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(3)).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    };
    BookStoreService.prototype.getSingle = function (isbn) {
        return this.http.get(this.api + "/book/" + isbn).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(3)).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    };
    BookStoreService.prototype.getSingleByID = function (id) {
        return this.http.get(this.api + "/book/" + id).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(3)).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    };
    BookStoreService.prototype.getSingleOrder = function (id) {
        return this.http.get(this.api + "/order/" + id).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(3)).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    };
    //return this.books.find(book =>book.isbn == isbn);  //Error-Function
    //(book) =>{if(book.isbn === isbn){  //Variante wie ich wie ich die Error-Function auch schreiben kann
    //  return book
    //}}
    BookStoreService.prototype.getAllSearch = function (searchTerm) {
        return this.http.get(this.api + "/book/search/" + searchTerm).
            pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(3)).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    };
    BookStoreService.prototype.create = function (book) {
        return this.http.post(this.api + "/book", book).
            pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(3)).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    };
    BookStoreService.prototype.update = function (book) {
        return this.http.put(this.api + "/book/" + book.isbn, book).
            pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(3)).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    };
    BookStoreService.prototype.remove = function (isbn) {
        return this.http.delete(this.api + "/book/" + isbn).
            pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(3)).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    };
    BookStoreService.prototype.errorHandler = function (error) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
    };
    BookStoreService.prototype.createOrder = function (order) {
        return this.http.post(this.api + "/order", order).
            pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(3)).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    };
    BookStoreService.prototype.getAllOrders = function () {
        return this.http.get(this.api + "/orders")
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(3)).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    };
    BookStoreService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], BookStoreService);
    return BookStoreService;
}());



/***/ }),

/***/ "./src/app/shares/book-validators.ts":
/*!*******************************************!*\
  !*** ./src/app/shares/book-validators.ts ***!
  \*******************************************/
/*! exports provided: BookValidators */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookValidators", function() { return BookValidators; });
var BookValidators = /** @class */ (function () {
    function BookValidators() {
    }
    BookValidators.isbnFormat = function (control) {
        if (!control.value) {
            return null;
        }
        //regular expressions
        var isolatedNumbers = control.value.replace(/-/g, '');
        var isbnPattern = /(^\d{10}$)|(^\d{13}$)/;
        return isbnPattern.test(isolatedNumbers) ? null : { isbnFormat: { valid: false } };
    };
    BookValidators.atLeastOneImage = function (controlArray) {
        var check = controlArray.controls.some(function (el) {
            return el.value && el.value.url != "" && el.value.url != null
                && el.value.title != "" && el.value.title != null;
        });
        return check ? null : { atLeastOneImage: { valid: false } };
    };
    return BookValidators;
}());



/***/ }),

/***/ "./src/app/shares/book.ts":
/*!********************************!*\
  !*** ./src/app/shares/book.ts ***!
  \********************************/
/*! exports provided: Author, Image, Book */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Book", function() { return Book; });
/* harmony import */ var _author__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./author */ "./src/app/shares/author.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Author", function() { return _author__WEBPACK_IMPORTED_MODULE_0__["Author"]; });

/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image */ "./src/app/shares/image.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return _image__WEBPACK_IMPORTED_MODULE_1__["Image"]; });



var Book = /** @class */ (function () {
    function Book(id, isbn, title, authors, published, user_id, subtitle, rating, images, description, price) {
        this.id = id;
        this.isbn = isbn;
        this.title = title;
        this.authors = authors;
        this.published = published;
        this.user_id = user_id;
        this.subtitle = subtitle;
        this.rating = rating;
        this.images = images;
        this.description = description;
        this.price = price;
    }
    return Book;
}());



/***/ }),

/***/ "./src/app/shares/image.ts":
/*!*********************************!*\
  !*** ./src/app/shares/image.ts ***!
  \*********************************/
/*! exports provided: Image */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return Image; });
var Image = /** @class */ (function () {
    function Image(id, url, title) {
        this.id = id;
        this.url = url;
        this.title = title;
    }
    return Image;
}());



/***/ }),

/***/ "./src/app/shares/jwt-interceptor.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shares/jwt-interceptor.service.ts ***!
  \***************************************************/
/*! exports provided: JwtInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptorService", function() { return JwtInterceptorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var JwtInterceptorService = /** @class */ (function () {
    function JwtInterceptorService() {
    }
    JwtInterceptorService.prototype.intercept = function (request, next) {
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (event) {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]) {
                // do stuff with response if you want
            }
        }, function (err) {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"]) {
                if (err.status === 401) {
                    // redirect to the login route
                    // or show a modal
                    // http://jasonwatmore.com/post/2016/09/29/angular-2-user-registration-and-login-example-tutorial
                    console.log("error");
                    alert("Invalid login");
                }
            }
        }));
    };
    JwtInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
    ], JwtInterceptorService);
    return JwtInterceptorService;
}());



/***/ }),

/***/ "./src/app/shares/order-factory.ts":
/*!*****************************************!*\
  !*** ./src/app/shares/order-factory.ts ***!
  \*****************************************/
/*! exports provided: OrderFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderFactory", function() { return OrderFactory; });
/* harmony import */ var _order__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order */ "./src/app/shares/order.ts");

var OrderFactory = /** @class */ (function () {
    function OrderFactory() {
    }
    OrderFactory.empty = function () {
        return new _order__WEBPACK_IMPORTED_MODULE_0__["Order"](null, null, null, null, null, []);
    };
    /*  static fromObject(rawOrder: any): Order {
          return new Order(
              rawOrder.id,
              rawOrder.user_id,
              rawOrder.date,
              rawOrder.total_amount,
              rawOrder.taxes,
              rawOrder.books
          );
      }*/
    OrderFactory.fromObject = function (id, user_id, date, total_amount, taxes, books) {
        return new _order__WEBPACK_IMPORTED_MODULE_0__["Order"](id, user_id, date, total_amount, taxes, books);
    };
    return OrderFactory;
}());



/***/ }),

/***/ "./src/app/shares/order.ts":
/*!*********************************!*\
  !*** ./src/app/shares/order.ts ***!
  \*********************************/
/*! exports provided: Book, Status, Order */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Order", function() { return Order; });
/* harmony import */ var _book__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./book */ "./src/app/shares/book.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Book", function() { return _book__WEBPACK_IMPORTED_MODULE_0__["Book"]; });

/* harmony import */ var _status__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./status */ "./src/app/shares/status.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Status", function() { return _status__WEBPACK_IMPORTED_MODULE_1__["Status"]; });



var Order = /** @class */ (function () {
    //public books: Book[]
    function Order(id, user_id, date, total_amount, taxes, order_items, statuses) {
        this.id = id;
        this.user_id = user_id;
        this.date = date;
        this.total_amount = total_amount;
        this.taxes = taxes;
        this.order_items = order_items;
        this.statuses = statuses;
    }
    return Order;
}());



/***/ }),

/***/ "./src/app/shares/status.ts":
/*!**********************************!*\
  !*** ./src/app/shares/status.ts ***!
  \**********************************/
/*! exports provided: Status */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Status", function() { return Status; });
var Status = /** @class */ (function () {
    function Status(id, order_id, date, description, type) {
        this.id = id;
        this.order_id = order_id;
        this.date = date;
        this.description = description;
        this.type = type;
    }
    return Status;
}());



/***/ }),

/***/ "./src/app/shares/token-interceptor.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shares/token-interceptor.service.ts ***!
  \*****************************************************/
/*! exports provided: TokenInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptorService", function() { return TokenInterceptorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TokenInterceptorService = /** @class */ (function () {
    function TokenInterceptorService() {
    }
    TokenInterceptorService.prototype.intercept = function (request, next) {
        request = request.clone({
            setHeaders: {
                Authorization: "Bearer " + localStorage.getItem('token') //Ich hole den Token aus dem local Storage raus
            }
        });
        return next.handle(request);
    };
    TokenInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TokenInterceptorService);
    return TokenInterceptorService;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/anna_kirchgasser/Documents/FH/6. Semester/Web-Projektentwicklung/Angular/bookstore19/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map