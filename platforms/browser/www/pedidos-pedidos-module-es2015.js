(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pedidos-pedidos-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pedidos/pedidos.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pedidos/pedidos.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Últimos Pedidos</ion-title>\n    \n  </ion-toolbar>\n</ion-header>\n\n\n<ion-toolbar color=\"dark\">\n  <!-- <ion-searchbar [(ngModel)]=\"searchKey\" placeholder=\"Buscar\"></ion-searchbar> -->\n  <ion-buttons slot=\"start\">\n    <ion-icon name=\"calendar\"></ion-icon>Data:\n</ion-buttons>\n<ion-input type=\"date\" [(ngModel)]=\"nome\" (ionChange)=\"carregar()\"></ion-input>\n\n  <ion-buttons slot=\"end\">\n    <ion-button size=\"small\" shape=\"round\" color=\"medium\" (click)=\"carregar()\">\n      <ion-icon name=\"search\"></ion-icon>\n    </ion-button>\n  </ion-buttons>\n</ion-toolbar>\n\n\n<ion-content class=\"cinza-claro\" class=\"ion-padding\">\n<ion-list>\n  <ion-item-sliding *ngFor=\"let item of lista\">\n\n    \n   \n    <ion-item>\n     \n      <ion-label>\n        \n        <ion-icon name=\"square\" color=\"primary\" *ngIf=\"item.status === 'Iniciado'\"></ion-icon>\n        <ion-icon name=\"square\" color=\"success\" *ngIf=\"item.status === 'Concluído'\"></ion-icon>\n        <ion-icon name=\"square\" color=\"danger\" *ngIf=\"item.status === 'Preparando'\"></ion-icon>\n        <ion-icon name=\"square\" color=\"warning\" *ngIf=\"item.status === 'Despachado'\"></ion-icon>\n        {{item.status}} - R$ {{item.total}} - {{item.data}}\n      <h6> <span>Previsão Entrega: {{item.hora}} </span>  - Pago: \n        <span *ngIf=\"item.pago != 'Sim'\" class=\"text-danger\">{{item.pago}}</span>\n        <span *ngIf=\"item.pago === 'Sim'\" class=\"text-success\">{{item.pago}}</span>\n      </h6>\n    </ion-label>\n    </ion-item>\n\n    <ion-item-options side=\"end\">\n      <ion-item-option (click)=\"mostrar(item.id)\" color=\"secondary\">\n        Ver Produtos\n      </ion-item-option>\n    \n    </ion-item-options>\n  </ion-item-sliding>\n\n  \n</ion-list>\n\n\n<ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n  <ion-refresher-content\n    pullingIcon=\"arrow-dropdown\"\n    \n    refreshingSpinner=\"circles\"\n    refreshingText=\"Carregando...\">\n  </ion-refresher-content>\n</ion-refresher>\n\n\n<div *ngIf=\"mensagem === '1'\">Você não possui pedidos ou não está Logado!</div>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pedidos/pedidos-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pedidos/pedidos-routing.module.ts ***!
  \***************************************************/
/*! exports provided: PedidosPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PedidosPageRoutingModule", function() { return PedidosPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _pedidos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pedidos.page */ "./src/app/pedidos/pedidos.page.ts");




const routes = [
    {
        path: '',
        component: _pedidos_page__WEBPACK_IMPORTED_MODULE_3__["PedidosPage"]
    }
];
let PedidosPageRoutingModule = class PedidosPageRoutingModule {
};
PedidosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PedidosPageRoutingModule);



/***/ }),

/***/ "./src/app/pedidos/pedidos.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pedidos/pedidos.module.ts ***!
  \*******************************************/
/*! exports provided: PedidosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PedidosPageModule", function() { return PedidosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _pedidos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pedidos-routing.module */ "./src/app/pedidos/pedidos-routing.module.ts");
/* harmony import */ var _pedidos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pedidos.page */ "./src/app/pedidos/pedidos.page.ts");







let PedidosPageModule = class PedidosPageModule {
};
PedidosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _pedidos_routing_module__WEBPACK_IMPORTED_MODULE_5__["PedidosPageRoutingModule"]
        ],
        declarations: [_pedidos_page__WEBPACK_IMPORTED_MODULE_6__["PedidosPage"]]
    })
], PedidosPageModule);



/***/ }),

/***/ "./src/app/pedidos/pedidos.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pedidos/pedidos.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BlZGlkb3MvcGVkaWRvcy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pedidos/pedidos.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pedidos/pedidos.page.ts ***!
  \*****************************************/
/*! exports provided: PedidosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PedidosPage", function() { return PedidosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");






let PedidosPage = class PedidosPage {
    constructor(toast, storage, router, provider) {
        this.toast = toast;
        this.storage = storage;
        this.router = router;
        this.provider = provider;
        this.lista = [];
        this.cpf = "";
        this.mensagem = "1";
        this.carregar();
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.storage.getItem('session_storage').then((res) => {
            this.dadosLogin = res;
            this.cpf = this.dadosLogin.cpf;
            this.lista = [];
            this.carregar();
        });
        //this.cpf = '777.777.777-77';
    }
    mensagemLogar(texto) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: texto,
                duration: 2000,
                color: 'primary'
            });
            toast.present();
        });
    }
    carregar() {
        return new Promise(resolve => {
            this.lista = [];
            let dados = {
                requisicao: 'listar',
                nome: this.nome,
                cpf: this.cpf,
            };
            if (this.cpf != '') {
                this.provider.dadosApi(dados, 'apiPedidos.php').subscribe(data => {
                    this.dados = data['result'];
                    if (data['result'] == null) {
                    }
                    else {
                        this.mensagemLogar(data['texto']);
                        for (let item of data['result']) {
                            this.lista.push(item);
                            this.mensagem = 'Entrou';
                        }
                    }
                    resolve(true);
                });
            }
        });
    }
    mostrar(id) {
        this.router.navigate(['/mostrar-produtos/' + id]);
    }
    //atualizar o list view
    doRefresh(event) {
        setTimeout(() => {
            this.ionViewWillEnter();
            event.target.complete();
        }, 500);
    }
};
PedidosPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"] },
    { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_4__["NativeStorage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_post_service__WEBPACK_IMPORTED_MODULE_2__["Post"] }
];
PedidosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-pedidos',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./pedidos.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pedidos/pedidos.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./pedidos.page.scss */ "./src/app/pedidos/pedidos.page.scss")).default]
    })
], PedidosPage);



/***/ })

}]);
//# sourceMappingURL=pedidos-pedidos-module-es2015.js.map