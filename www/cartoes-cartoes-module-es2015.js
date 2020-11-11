(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cartoes-cartoes-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cartoes/cartoes.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cartoes/cartoes.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"dark\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Cartão Fidelidade</ion-title>\n    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n<h4>Cartão Fidelidade</h4>\n<span>A cada 5 compras no site você ganha uma bebida!!</span><br>\n\n<ion-row class=\"linha\">\n\n  \n  <ion-col size=\"2\">\n    <ion-img src=\"{{url_site_img}}carimbado.png\" *ngIf=\"cartao > 0\"></ion-img>\n    <ion-img src=\"{{url_site_img}}nao-carimbado.png\" *ngIf=\"cartao <= 0\"></ion-img>\n  </ion-col>\n\n  <ion-col size=\"2\">\n    <ion-img src=\"{{url_site_img}}carimbado.png\" *ngIf=\"cartao > 1\"></ion-img>\n    <ion-img src=\"{{url_site_img}}nao-carimbado.png\" *ngIf=\"cartao <= 1\"></ion-img>\n  </ion-col>\n\n  <ion-col size=\"2\">\n    <ion-img src=\"{{url_site_img}}carimbado.png\" *ngIf=\"cartao > 2\"></ion-img>\n    <ion-img src=\"{{url_site_img}}nao-carimbado.png\" *ngIf=\"cartao <= 2\"></ion-img>\n  </ion-col>\n\n  <ion-col size=\"2\">\n    <ion-img src=\"{{url_site_img}}carimbado.png\" *ngIf=\"cartao > 3\"></ion-img>\n    <ion-img src=\"{{url_site_img}}nao-carimbado.png\" *ngIf=\"cartao <= 3\"></ion-img>\n  </ion-col>\n\n  <ion-col size=\"2\">\n    <ion-img src=\"{{url_site_img}}carimbado.png\" *ngIf=\"cartao > 4\"></ion-img>\n    <ion-img src=\"{{url_site_img}}nao-carimbado.png\" *ngIf=\"cartao <= 4\"></ion-img>\n  </ion-col>\n  \n</ion-row> \n\n<div *ngIf=\"mensagem === '1'\">Você não está Logado! Faça seu Login</div>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/cartoes/cartoes-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/cartoes/cartoes-routing.module.ts ***!
  \***************************************************/
/*! exports provided: CartoesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartoesPageRoutingModule", function() { return CartoesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _cartoes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cartoes.page */ "./src/app/cartoes/cartoes.page.ts");




const routes = [
    {
        path: '',
        component: _cartoes_page__WEBPACK_IMPORTED_MODULE_3__["CartoesPage"]
    }
];
let CartoesPageRoutingModule = class CartoesPageRoutingModule {
};
CartoesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CartoesPageRoutingModule);



/***/ }),

/***/ "./src/app/cartoes/cartoes.module.ts":
/*!*******************************************!*\
  !*** ./src/app/cartoes/cartoes.module.ts ***!
  \*******************************************/
/*! exports provided: CartoesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartoesPageModule", function() { return CartoesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _cartoes_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cartoes-routing.module */ "./src/app/cartoes/cartoes-routing.module.ts");
/* harmony import */ var _cartoes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cartoes.page */ "./src/app/cartoes/cartoes.page.ts");







let CartoesPageModule = class CartoesPageModule {
};
CartoesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _cartoes_routing_module__WEBPACK_IMPORTED_MODULE_5__["CartoesPageRoutingModule"]
        ],
        declarations: [_cartoes_page__WEBPACK_IMPORTED_MODULE_6__["CartoesPage"]]
    })
], CartoesPageModule);



/***/ }),

/***/ "./src/app/cartoes/cartoes.page.scss":
/*!*******************************************!*\
  !*** ./src/app/cartoes/cartoes.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".linha {\n  text-align: center;\n  margin-top: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FydG9lcy9GOlxcUHJvamV0b3NcXGRlbGl2ZXJ5QXBwL3NyY1xcYXBwXFxjYXJ0b2VzXFxjYXJ0b2VzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvY2FydG9lcy9jYXJ0b2VzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NhcnRvZXMvY2FydG9lcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGluaGF7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6MjVweDtcclxufSIsIi5saW5oYSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMjVweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/cartoes/cartoes.page.ts":
/*!*****************************************!*\
  !*** ./src/app/cartoes/cartoes.page.ts ***!
  \*****************************************/
/*! exports provided: CartoesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartoesPage", function() { return CartoesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");






let CartoesPage = class CartoesPage {
    constructor(router, toast, storage, provider) {
        this.router = router;
        this.toast = toast;
        this.storage = storage;
        this.provider = provider;
        this.mensagem = "1";
    }
    ngOnInit() {
        this.listarCartoes();
    }
    ionViewWillEnter() {
        this.storage.getItem('session_storage').then((res) => {
            this.dadosLogin = res;
            this.cpf = this.dadosLogin.cpf;
            this.url_site_img = this.provider.url_site_img;
            this.listarCartoes();
        });
        //this.cpf = '777.777.777-77';
    }
    mensagemLogar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: 'Você precisa está logado!',
                duration: 2000,
                color: 'primary'
            });
            toast.present();
        });
    }
    listarCartoes() {
        return new Promise(resolve => {
            let dados = {
                requisicao: 'listar-cartoes',
                cpf: this.cpf,
            };
            if (this.cpf != '') {
                this.provider.dadosApi(dados, 'apiPedidos.php').subscribe(data => {
                    if (data['cartao'] == null) {
                    }
                    else {
                        this.cartao = data['cartao'];
                        this.mensagem = 'Entrou';
                    }
                    resolve(true);
                });
            }
        });
    }
};
CartoesPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__["NativeStorage"] },
    { type: _services_post_service__WEBPACK_IMPORTED_MODULE_4__["Post"] }
];
CartoesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-cartoes',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./cartoes.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cartoes/cartoes.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./cartoes.page.scss */ "./src/app/cartoes/cartoes.page.scss")).default]
    })
], CartoesPage);



/***/ })

}]);
//# sourceMappingURL=cartoes-cartoes-module-es2015.js.map