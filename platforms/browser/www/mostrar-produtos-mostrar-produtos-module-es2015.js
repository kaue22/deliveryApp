(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mostrar-produtos-mostrar-produtos-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/mostrar-produtos/mostrar-produtos.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mostrar-produtos/mostrar-produtos.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header >\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\" (click)=\"Pedidos()\">\n      <ion-button>\n        <ion-icon  name=\"arrow-back\"> </ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Produtos do Pedido</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item-sliding *ngFor=\"let item of lista\">\n       \n       \n    <ion-item>\n      <ion-thumbnail slot=\"start\">\n        <ion-img src=\"{{url_site_img}}{{item.imagem}}\"></ion-img>\n      </ion-thumbnail>\n      <ion-label>\n        \n        {{item.nome}} \n        <h6><span>R$ {{item.valor}}</span>  - QTD {{item.quantidade}}</h6>\n  \n      </ion-label>\n      \n   \n    </ion-item>\n  \n    \n  </ion-item-sliding>\n  </ion-list>\n  \n  \n  </ion-content>\n");

/***/ }),

/***/ "./src/app/mostrar-produtos/mostrar-produtos-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/mostrar-produtos/mostrar-produtos-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: MostrarProdutosPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MostrarProdutosPageRoutingModule", function() { return MostrarProdutosPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _mostrar_produtos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mostrar-produtos.page */ "./src/app/mostrar-produtos/mostrar-produtos.page.ts");




const routes = [
    {
        path: '',
        component: _mostrar_produtos_page__WEBPACK_IMPORTED_MODULE_3__["MostrarProdutosPage"]
    }
];
let MostrarProdutosPageRoutingModule = class MostrarProdutosPageRoutingModule {
};
MostrarProdutosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MostrarProdutosPageRoutingModule);



/***/ }),

/***/ "./src/app/mostrar-produtos/mostrar-produtos.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/mostrar-produtos/mostrar-produtos.module.ts ***!
  \*************************************************************/
/*! exports provided: MostrarProdutosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MostrarProdutosPageModule", function() { return MostrarProdutosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _mostrar_produtos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mostrar-produtos-routing.module */ "./src/app/mostrar-produtos/mostrar-produtos-routing.module.ts");
/* harmony import */ var _mostrar_produtos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mostrar-produtos.page */ "./src/app/mostrar-produtos/mostrar-produtos.page.ts");







let MostrarProdutosPageModule = class MostrarProdutosPageModule {
};
MostrarProdutosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _mostrar_produtos_routing_module__WEBPACK_IMPORTED_MODULE_5__["MostrarProdutosPageRoutingModule"]
        ],
        declarations: [_mostrar_produtos_page__WEBPACK_IMPORTED_MODULE_6__["MostrarProdutosPage"]]
    })
], MostrarProdutosPageModule);



/***/ }),

/***/ "./src/app/mostrar-produtos/mostrar-produtos.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/mostrar-produtos/mostrar-produtos.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vc3RyYXItcHJvZHV0b3MvbW9zdHJhci1wcm9kdXRvcy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/mostrar-produtos/mostrar-produtos.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/mostrar-produtos/mostrar-produtos.page.ts ***!
  \***********************************************************/
/*! exports provided: MostrarProdutosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MostrarProdutosPage", function() { return MostrarProdutosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");




let MostrarProdutosPage = class MostrarProdutosPage {
    constructor(actRouter, router, provider) {
        this.actRouter = actRouter;
        this.router = router;
        this.provider = provider;
        this.lista = [];
    }
    ngOnInit() {
        this.actRouter.params.subscribe((data) => {
            this.id = data.id;
        });
    }
    ionViewWillEnter() {
        this.lista = [];
        this.listarProdutos();
        this.url_site_img = this.provider.url_site_img_produtos;
    }
    Pedidos() {
        this.router.navigate(['/pedidos']);
    }
    listarProdutos() {
        return new Promise(resolve => {
            let dados = {
                requisicao: 'listar-produtos',
                id: this.id,
            };
            this.provider.dadosApi(dados, 'apiPedidos.php').subscribe(data => {
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
MostrarProdutosPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_post_service__WEBPACK_IMPORTED_MODULE_1__["Post"] }
];
MostrarProdutosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-mostrar-produtos',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./mostrar-produtos.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/mostrar-produtos/mostrar-produtos.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./mostrar-produtos.page.scss */ "./src/app/mostrar-produtos/mostrar-produtos.page.scss")).default]
    })
], MostrarProdutosPage);



/***/ })

}]);
//# sourceMappingURL=mostrar-produtos-mostrar-produtos-module-es2015.js.map