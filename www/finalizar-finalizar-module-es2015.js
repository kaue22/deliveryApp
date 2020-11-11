(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["finalizar-finalizar-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/finalizar/finalizar.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/finalizar/finalizar.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header >\n  <ion-toolbar color=\"dark\">\n    <ion-buttons slot=\"start\" (click)=\"Carrinho()\">\n      <ion-button>\n        <ion-icon  name=\"arrow-back\"> </ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Finalizar Pedido</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content class=\"ion-padding\">\n<ion-item >\n  <ion-label>Tipo Pagamento</ion-label>\n  <ion-select placeholder=\"Selecione\" [(ngModel)]=\"tipo\" >\n    <ion-select-option  value=\"Dinheiro\">Dinheiro</ion-select-option>\n    <ion-select-option  value=\"Cartão de Débito\">Cartão de Débito</ion-select-option>\n    <ion-select-option  value=\"Cartão de Crédito\">Cartão de Crédito</ion-select-option>   \n  </ion-select>\n</ion-item>\n\n<ion-item *ngIf=\"tipo === 'Dinheiro'\">\n  <ion-label position=\"floating\">\n    Total para o Troco\n  </ion-label>\n  <ion-input [(ngModel)]=\"troco\"></ion-input>\n\n \n</ion-item>\n\n\n<ion-row>\n  <ion-col size=\"9\">\n    <ion-item>\n      <ion-label position=\"floating\">\n        Rua\n      </ion-label>\n      <ion-input [(ngModel)]=\"rua\"></ion-input>\n  \n     \n    </ion-item>\n  </ion-col>\n\n  <ion-col size=\"3\">\n    <ion-item>\n      <ion-label position=\"floating\">\n        Número\n      </ion-label>\n      <ion-input [(ngModel)]=\"numero\"></ion-input>\n  \n      \n    </ion-item>\n  </ion-col>\n</ion-row>\n\n\n  \n\n  <ion-item >\n    <ion-label>Bairro</ion-label>\n    <ion-select placeholder=\"Selecione\" [(ngModel)]=\"bairro\" >\n      <ion-select-option *ngFor=\"let item of lista\" value=\"{{item.nome}}\">{{item.nome}}</ion-select-option>\n          \n    </ion-select>\n  </ion-item>\n\n\n\n  <ion-item>\n    <ion-label position=\"floating\">Tirar o Picles / etc</ion-label>\n    <ion-textarea [(ngModel)]=\"obs\"></ion-textarea>\n  </ion-item>\n \n\n  <ion-button color=\"primary\" expand=\"block\" fill=\"outline\" (click)=\"finalizar()\">\n    Salvar\n  </ion-button>\n\n \n\n</ion-content>\n\n\n\n<ion-footer>\n \n\n  <ion-grid>\n   \n      <ion-row>\n        <ion-col >\n         \n          <h6><ion-icon color=\"primary\" name=\"bicycle\"></ion-icon>\n            Entrega: {{previsao}} Minutos</h6>\n         \n        </ion-col>\n  \n        <ion-col>\n        \n         \n          <h6><ion-icon color=\"success\" name=\"card\"></ion-icon>\n            Sub-Total: R$ {{subtotal2}}</h6>\n        \n        \n        </ion-col>\n  \n        </ion-row>\n\n    \n      \n      </ion-grid>\n\n\n</ion-footer>\n");

/***/ }),

/***/ "./src/app/finalizar/finalizar-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/finalizar/finalizar-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: FinalizarPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinalizarPageRoutingModule", function() { return FinalizarPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _finalizar_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./finalizar.page */ "./src/app/finalizar/finalizar.page.ts");




const routes = [
    {
        path: '',
        component: _finalizar_page__WEBPACK_IMPORTED_MODULE_3__["FinalizarPage"]
    }
];
let FinalizarPageRoutingModule = class FinalizarPageRoutingModule {
};
FinalizarPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FinalizarPageRoutingModule);



/***/ }),

/***/ "./src/app/finalizar/finalizar.module.ts":
/*!***********************************************!*\
  !*** ./src/app/finalizar/finalizar.module.ts ***!
  \***********************************************/
/*! exports provided: FinalizarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinalizarPageModule", function() { return FinalizarPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _finalizar_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./finalizar-routing.module */ "./src/app/finalizar/finalizar-routing.module.ts");
/* harmony import */ var _finalizar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./finalizar.page */ "./src/app/finalizar/finalizar.page.ts");







let FinalizarPageModule = class FinalizarPageModule {
};
FinalizarPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _finalizar_routing_module__WEBPACK_IMPORTED_MODULE_5__["FinalizarPageRoutingModule"]
        ],
        declarations: [_finalizar_page__WEBPACK_IMPORTED_MODULE_6__["FinalizarPage"]]
    })
], FinalizarPageModule);



/***/ }),

/***/ "./src/app/finalizar/finalizar.page.scss":
/*!***********************************************!*\
  !*** ./src/app/finalizar/finalizar.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpbmFsaXphci9maW5hbGl6YXIucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/finalizar/finalizar.page.ts":
/*!*********************************************!*\
  !*** ./src/app/finalizar/finalizar.page.ts ***!
  \*********************************************/
/*! exports provided: FinalizarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinalizarPage", function() { return FinalizarPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");






let FinalizarPage = class FinalizarPage {
    constructor(storage, actRouter, router, provider, toast) {
        this.storage = storage;
        this.actRouter = actRouter;
        this.router = router;
        this.provider = provider;
        this.toast = toast;
        this.lista = [];
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.storage.getItem('session_storage').then((res) => {
            this.dadosLogin = res;
            this.cpf = this.dadosLogin.cpf;
        });
        // this.cpf = '777.777.777-77';
        this.listarCarrinho();
        this.listarClientes();
        this.listarLocais();
        this.lista = [];
    }
    Carrinho() {
        this.router.navigate(['/carrinho']);
    }
    listarCarrinho() {
        return new Promise(resolve => {
            let dados = {
                requisicao: 'listar-carrinho',
                cpf: this.cpf,
            };
            this.provider.dadosApi(dados, 'apiProdutos.php').subscribe(data => {
                if (data['result'] == '0') {
                    this.ionViewWillEnter();
                }
                else {
                    this.total_carrinho = data['total'];
                    this.frete = data['frete'];
                    this.subtotal = data['subtotal'];
                    this.subtotal2 = data['subtotal2'];
                    this.total_itens = data['totalItens'];
                    this.previsao = data['previsao'];
                }
                resolve(true);
            });
        });
    }
    listarClientes() {
        return new Promise(resolve => {
            let dados = {
                requisicao: 'listar-clientes',
                cpf: this.cpf,
            };
            this.provider.dadosApi(dados, 'apiProdutos.php').subscribe(data => {
                if (data['result'] == '0') {
                    this.ionViewWillEnter();
                }
                else {
                    this.rua = data['rua'];
                    this.numero = data['numero'];
                    this.bairro = data['bairro'];
                }
                resolve(true);
            });
        });
    }
    mensagemSalvar(texto) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: texto,
                duration: 2000,
                color: 'primary'
            });
            toast.present();
        });
    }
    finalizar() {
        return new Promise(resolve => {
            let dados = {
                requisicao: 'finalizar-pedido',
                cpf: this.cpf,
                rua: this.rua,
                numero: this.numero,
                bairro: this.bairro,
                obs: this.obs,
                troco: this.troco,
                tipo: this.tipo,
                total: this.subtotal,
            };
            this.provider.dadosApi(dados, 'apiProdutos.php').subscribe(data => {
                this.mensagemSalvar(data['texto']);
                if (data['texto'] === 'Pedido Concluído!') {
                    this.router.navigate(['/pedidos']);
                }
            });
        });
    }
    listarLocais() {
        return new Promise(resolve => {
            let dados = {
                requisicao: 'listar-locais',
            };
            this.provider.dadosApi(dados, 'apiLogin.php').subscribe(data => {
                if (data['result'] == '0') {
                    this.ionViewWillEnter();
                }
                else {
                    this.lista = [];
                    for (let item of data['result']) {
                        this.lista.push(item);
                    }
                }
                resolve(true);
            });
        });
    }
};
FinalizarPage.ctorParameters = () => [
    { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__["NativeStorage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_post_service__WEBPACK_IMPORTED_MODULE_1__["Post"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] }
];
FinalizarPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-finalizar',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./finalizar.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/finalizar/finalizar.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./finalizar.page.scss */ "./src/app/finalizar/finalizar.page.scss")).default]
    })
], FinalizarPage);



/***/ })

}]);
//# sourceMappingURL=finalizar-finalizar-module-es2015.js.map