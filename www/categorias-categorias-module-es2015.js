(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["categorias-categorias-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/categorias/categorias.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/categorias/categorias.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar >\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title class=\"titulo-home\">Escolha uma Categoria</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button  (click)=\"logout()\">\n        <ion-icon slot=\"end\" name=\"log-out\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-row class=\"margin-l\">\n\n    <ion-card class=\"card\" style=\"width: 43%\" *ngFor=\"let item of lista\">\n      <ion-img class=\"img-login center\" src=\"{{url_site_img}}{{item.imagem}}\"></ion-img>\n      <ion-card-header>\n        <ion-card-subtitle>{{item.produtos}} Produtos</ion-card-subtitle>\n        <ion-card-title class=\"titulo-produto\">{{item.nome}}</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-button (click)=\"verProdutos(item.id)\" expand=\"block\" color=\"primary\" ><ion-icon name=\"eye\"></ion-icon>VER</ion-button>\n      </ion-card-content>\n    </ion-card>\n\n   \n  </ion-row>\n\n\n\n  \n<ion-infinite-scroll  (ionInfinite)=\"loadData($event)\" *ngIf=\"total_itens >= limit\">\n  <ion-infinite-scroll-content\n    loadingSpinner=\"bubbles\"\n    loadingText=\"Carregando mais dados\">\n  </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n\n  \n<ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n  <ion-refresher-content\n    pullingIcon=\"arrow-dropdown\"\n    \n    refreshingSpinner=\"circles\"\n    refreshingText=\"Carregando...\">\n  </ion-refresher-content>\n</ion-refresher>\n  \n\n</ion-content>\n\n\n<ion-footer>\n \n\n    <ion-grid>\n      <ion-row>\n        <ion-col >\n          <ion-tab-button (click)=\"produtos()\">\n            <ion-icon color=\"primary\" name=\"list-circle\"></ion-icon>\n            <ion-label>Produtos</ion-label>\n          </ion-tab-button>\n        </ion-col>\n\n        <ion-col (click)=\"carrinhoPage()\" *ngIf=\"total_carrinho != undefined\">\n          <div class=\"rodape-carrinho center\">\n          <ion-icon color=\"danger\" name=\"cart\"></ion-icon>\n          Carrinho: R$ {{total_carrinho}}\n        </div>\n        </ion-col>\n\n        <ion-col *ngIf=\"total_carrinho === undefined\">\n          <div class=\"rodape-carrinho center\">\n          <ion-icon color=\"danger\" name=\"cart\"></ion-icon>\n          Carrinho: Sem produtos\n        </div>\n        </ion-col>\n\n\n        </ion-row>\n        \n        </ion-grid>\n      \n    \n      \n\n</ion-footer>\n\n\n\n\n");

/***/ }),

/***/ "./src/app/categorias/categorias-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/categorias/categorias-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: CategoriasPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriasPageRoutingModule", function() { return CategoriasPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _categorias_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./categorias.page */ "./src/app/categorias/categorias.page.ts");




const routes = [
    {
        path: '',
        component: _categorias_page__WEBPACK_IMPORTED_MODULE_3__["CategoriasPage"]
    }
];
let CategoriasPageRoutingModule = class CategoriasPageRoutingModule {
};
CategoriasPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CategoriasPageRoutingModule);



/***/ }),

/***/ "./src/app/categorias/categorias.module.ts":
/*!*************************************************!*\
  !*** ./src/app/categorias/categorias.module.ts ***!
  \*************************************************/
/*! exports provided: CategoriasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriasPageModule", function() { return CategoriasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _categorias_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./categorias-routing.module */ "./src/app/categorias/categorias-routing.module.ts");
/* harmony import */ var _categorias_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./categorias.page */ "./src/app/categorias/categorias.page.ts");







let CategoriasPageModule = class CategoriasPageModule {
};
CategoriasPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _categorias_routing_module__WEBPACK_IMPORTED_MODULE_5__["CategoriasPageRoutingModule"]
        ],
        declarations: [_categorias_page__WEBPACK_IMPORTED_MODULE_6__["CategoriasPage"]]
    })
], CategoriasPageModule);



/***/ }),

/***/ "./src/app/categorias/categorias.page.scss":
/*!*************************************************!*\
  !*** ./src/app/categorias/categorias.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".titulo-home {\n  font-size: 13px;\n}\n\n.welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\n.titulo-produto {\n  font-size: 14px;\n  font-weight: 300;\n}\n\n.preco-produto {\n  font-size: 13px;\n  font-weight: 200;\n}\n\n.margin-l {\n  margin-left: 10px;\n}\n\n.rodape-carrinho {\n  color: 148;\n  text-align: center;\n  font-size: 15px;\n  margin-top: 15px;\n}\n\nion-toolbar.in-toolbar.md.toolbar-title-default.hydrated {\n  background: #FED80B;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0ZWdvcmlhcy9GOlxcUHJvamV0b3NcXGRlbGl2ZXJ5QXBwL3NyY1xcYXBwXFxjYXRlZ29yaWFzXFxjYXRlZ29yaWFzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvY2F0ZWdvcmlhcy9jYXRlZ29yaWFzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxtQkFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvY2F0ZWdvcmlhcy9jYXRlZ29yaWFzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXR1bG8taG9tZSB7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuXHJcbi53ZWxjb21lLWNhcmQgaW9uLWltZyB7XHJcbiAgICBtYXgtaGVpZ2h0OiAzNXZoO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnRpdHVsby1wcm9kdXRvIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbn1cclxuXHJcbi5wcmVjby1wcm9kdXRvIHtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbn1cclxuXHJcbi5tYXJnaW4tbCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG5cclxuLnJvZGFwZS1jYXJyaW5obyB7XHJcbiAgICBjb2xvcjogcmVkKCRjb2xvcjogIzk0MGMwYyk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59XHJcbmlvbi10b29sYmFyLmluLXRvb2xiYXIubWQudG9vbGJhci10aXRsZS1kZWZhdWx0Lmh5ZHJhdGVkIHtcclxuICAgIGJhY2tncm91bmQ6ICNGRUQ4MEI7XHJcbn1cclxuIiwiLnRpdHVsby1ob21lIHtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4ud2VsY29tZS1jYXJkIGlvbi1pbWcge1xuICBtYXgtaGVpZ2h0OiAzNXZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4udGl0dWxvLXByb2R1dG8ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbi5wcmVjby1wcm9kdXRvIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogMjAwO1xufVxuXG4ubWFyZ2luLWwge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLnJvZGFwZS1jYXJyaW5obyB7XG4gIGNvbG9yOiAxNDg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG5pb24tdG9vbGJhci5pbi10b29sYmFyLm1kLnRvb2xiYXItdGl0bGUtZGVmYXVsdC5oeWRyYXRlZCB7XG4gIGJhY2tncm91bmQ6ICNGRUQ4MEI7XG59Il19 */");

/***/ }),

/***/ "./src/app/categorias/categorias.page.ts":
/*!***********************************************!*\
  !*** ./src/app/categorias/categorias.page.ts ***!
  \***********************************************/
/*! exports provided: CategoriasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriasPage", function() { return CategoriasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






let CategoriasPage = class CategoriasPage {
    constructor(storage, router, provider, toast) {
        this.storage = storage;
        this.router = router;
        this.provider = provider;
        this.toast = toast;
        this.lista = [];
        this.limit = 10;
        this.start = 0;
        this.total_itens = 0;
        this.cpf = "";
        this.listarCarrinho();
    }
    ngOnInit() {
    }
    logout() {
        this.storage.clear();
        this.router.navigate(['/login']);
    }
    ionViewWillEnter() {
        this.storage.getItem('session_storage').then((res) => {
            this.dadosLogin = res;
            this.cpf = this.dadosLogin.cpf;
            this.listarCarrinho();
        });
        this.lista = [];
        this.start = 0;
        this.listarProdutos();
        this.url_site_img = this.provider.url_site_img_cat;
    }
    listarProdutos() {
        return new Promise(resolve => {
            let dados = {
                requisicao: 'listar-cat',
                limit: this.limit,
                start: this.start
            };
            this.provider.dadosApi(dados, 'apiProdutos.php').subscribe(data => {
                if (data['result'] == '0') {
                    this.ionViewWillEnter();
                }
                else {
                    this.lista = [];
                    for (let item of data['result']) {
                        this.lista.push(item);
                        this.total_itens = data['total'];
                    }
                }
                resolve(true);
            });
        });
    }
    produtos() {
        this.router.navigate(['/produtos']);
    }
    verProdutos(id) {
        this.router.navigate(['/produtos/' + id]);
    }
    //barra de rolagem
    loadData(event) {
        this.start += this.limit;
        setTimeout(() => {
            this.listarProdutos().then(() => {
                event.target.complete();
            });
        }, 3000);
    }
    carrinhoPage() {
        this.router.navigate(['/carrinho']);
    }
    listarCarrinho() {
        return new Promise(resolve => {
            let dados = {
                requisicao: 'listar-carrinho',
                cpf: this.cpf,
            };
            this.provider.dadosApi(dados, 'apiProdutos.php').subscribe(data => {
                this.total_carrinho = data['total'];
                resolve(true);
            });
        });
    }
    //atualizar o list view
    doRefresh(event) {
        setTimeout(() => {
            this.ionViewWillEnter();
            event.target.complete();
        }, 500);
    }
};
CategoriasPage.ctorParameters = () => [
    { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_1__["NativeStorage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _services_post_service__WEBPACK_IMPORTED_MODULE_3__["Post"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }
];
CategoriasPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-categorias',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./categorias.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/categorias/categorias.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./categorias.page.scss */ "./src/app/categorias/categorias.page.scss")).default]
    })
], CategoriasPage);



/***/ })

}]);
//# sourceMappingURL=categorias-categorias-module-es2015.js.map