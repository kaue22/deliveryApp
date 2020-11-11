(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["carrinho-carrinho-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/carrinho/carrinho.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/carrinho/carrinho.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-header>\n  <ion-toolbar color=\"dark\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Itens do Carrinho: {{total_itens}}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button  (click)=\"produtos()\">\n        <ion-icon slot=\"end\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-list>\n  <ion-item-sliding *ngFor=\"let item of lista\">\n     \n    <ion-item-options side=\"start\">\n      <ion-item-option (click)=\"addItem(item.id)\" color=\"success\">ADD + 1</ion-item-option>\n    </ion-item-options>\n\n  <ion-item>\n    <ion-thumbnail slot=\"start\">\n      <ion-img src=\"{{url_site_img}}{{item.imagem}}\"></ion-img>\n    </ion-thumbnail>\n    <ion-buttons slot=\"end\" *ngIf=\"item.adicional != 'Sim'\">\n      <ion-button (click)=\"adicionais()\" color=\"tertiary\"><small>+ Adicionais</small></ion-button>\n    </ion-buttons>\n    <ion-label>\n      \n      {{item.nome}} <ion-icon (click)=\"deletar(item.id)\" color=\"danger\" name=\"trash\"></ion-icon>\n      <h6><span>R$ {{item.valor}}</span>  - QTD {{item.quantidade}}</h6> \n        \n\n    </ion-label>\n    \n \n  </ion-item>\n\n  <ion-item-options  side=\"end\">\n    <ion-item-option (click)=\"removeItem(item.id)\" color=\"danger\">Remover - 1</ion-item-option>\n  </ion-item-options>\n\n</ion-item-sliding>\n</ion-list>\n\n\n<div *ngIf=\"mensagem === '1'\">Você não possui itens no carrinho!</div>\n\n\n</ion-content>\n\n\n\n<ion-footer>\n \n\n  <ion-grid>\n    <ion-row>\n      <ion-col >\n       \n          <ion-icon color=\"secondary\" name=\"cart\"></ion-icon>\n          Carrinho: R$ {{total_carrinho}}\n       \n      </ion-col>\n\n      <ion-col>\n      \n        <ion-icon color=\"danger\" name=\"car\"></ion-icon>\n        Frete: R$ {{frete}}\n       \n      \n      </ion-col>\n\n      </ion-row>\n\n\n      <ion-row>\n        <ion-col >\n         \n          <ion-button (click)=\"finalizarModal()\" expand=\"block\" fill=\"outline\">FINALIZAR</ion-button>\n         \n        </ion-col>\n  \n        <ion-col>\n        \n         \n          <h6><ion-icon color=\"success\" name=\"card\"></ion-icon>\n            Sub-Total: R$ {{subtotal2}}</h6>\n        \n        \n        </ion-col>\n  \n        </ion-row>\n\n    \n      \n      </ion-grid>\n\n     \n    \n    \n\n</ion-footer>");

/***/ }),

/***/ "./src/app/carrinho/carrinho-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/carrinho/carrinho-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: CarrinhoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarrinhoPageRoutingModule", function() { return CarrinhoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _carrinho_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./carrinho.page */ "./src/app/carrinho/carrinho.page.ts");




const routes = [
    {
        path: '',
        component: _carrinho_page__WEBPACK_IMPORTED_MODULE_3__["CarrinhoPage"]
    }
];
let CarrinhoPageRoutingModule = class CarrinhoPageRoutingModule {
};
CarrinhoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CarrinhoPageRoutingModule);



/***/ }),

/***/ "./src/app/carrinho/carrinho.module.ts":
/*!*********************************************!*\
  !*** ./src/app/carrinho/carrinho.module.ts ***!
  \*********************************************/
/*! exports provided: CarrinhoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarrinhoPageModule", function() { return CarrinhoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _carrinho_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./carrinho-routing.module */ "./src/app/carrinho/carrinho-routing.module.ts");
/* harmony import */ var _carrinho_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./carrinho.page */ "./src/app/carrinho/carrinho.page.ts");







let CarrinhoPageModule = class CarrinhoPageModule {
};
CarrinhoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _carrinho_routing_module__WEBPACK_IMPORTED_MODULE_5__["CarrinhoPageRoutingModule"]
        ],
        declarations: [_carrinho_page__WEBPACK_IMPORTED_MODULE_6__["CarrinhoPage"]]
    })
], CarrinhoPageModule);



/***/ }),

/***/ "./src/app/carrinho/carrinho.page.scss":
/*!*********************************************!*\
  !*** ./src/app/carrinho/carrinho.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhcnJpbmhvL2NhcnJpbmhvLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/carrinho/carrinho.page.ts":
/*!*******************************************!*\
  !*** ./src/app/carrinho/carrinho.page.ts ***!
  \*******************************************/
/*! exports provided: CarrinhoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarrinhoPage", function() { return CarrinhoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






let CarrinhoPage = class CarrinhoPage {
    constructor(alertController, storage, actRouter, router, provider, toast) {
        this.alertController = alertController;
        this.storage = storage;
        this.actRouter = actRouter;
        this.router = router;
        this.provider = provider;
        this.toast = toast;
        this.lista = [];
        this.limit = 10;
        this.start = 0;
        this.mensagem = "1";
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
            this.lista = [];
            this.start = 0;
            this.listarCarrinho();
            this.url_site_img = this.provider.url_site_img_produtos;
        });
        // this.cpf = '777.777.777-77';
        /*
        if(this.cpf === undefined){
          this.router.navigate(['/login']);
          this.mensagemLogar();
          return;
        } */
    }
    mensagemLogar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: 'Nenhum produto no Carrinho!',
                duration: 2000,
                color: 'danger'
            });
            toast.present();
        });
    }
    produtos() {
        this.router.navigate(['/produtos']);
    }
    //barra de rolagem
    loadData(event) {
        this.start += this.limit;
        setTimeout(() => {
            this.listarCarrinho().then(() => {
                event.target.complete();
            });
        }, 3000);
    }
    mensagemSalvar(texto) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: texto,
                duration: 1000,
                color: 'primary'
            });
            toast.present();
        });
    }
    listarCarrinho() {
        return new Promise(resolve => {
            let dados = {
                requisicao: 'listar-carrinho',
                cpf: this.cpf,
            };
            if (this.cpf != '') {
                this.provider.dadosApi(dados, 'apiProdutos.php').subscribe(data => {
                    if (data['result'] == null) {
                    }
                    else {
                        this.lista = [];
                        for (let item of data['result']) {
                            this.lista.push(item);
                            this.total_carrinho = data['total'];
                            this.frete = data['frete'];
                            this.subtotal = data['subtotal'];
                            this.subtotal2 = data['subtotal2'];
                            this.total_itens = data['totalItens'];
                            this.previsao = data['previsao'];
                            this.listarClientes();
                            this.mensagem = 'Entrou';
                        }
                    }
                    resolve(true);
                });
            }
        });
    }
    addItem(id) {
        return new Promise(resolve => {
            let dados = {
                requisicao: 'add-item',
                id: id,
                cpf: this.cpf,
            };
            this.provider.dadosApi(dados, 'apiProdutos.php').subscribe(data => {
                this.mensagemSalvar('Item Adicionado!');
                this.listarCarrinho();
            });
        });
    }
    removeItem(id) {
        return new Promise(resolve => {
            let dados = {
                requisicao: 'remove-item',
                id: id,
                cpf: this.cpf,
            };
            this.provider.dadosApi(dados, 'apiProdutos.php').subscribe(data => {
                this.mensagemSalvar('Item Removido!');
                this.listarCarrinho();
            });
        });
    }
    finalizarModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.router.navigate(['/finalizar']);
            /*
            const alert = await this.alertController.create({
              header: 'Finalizar Pedido!',
              message: 'Previsão ' + this.previsao + ' Minutos',
              backdropDismiss: false,
              inputs: [
          
          
                {
                  name: 'tipo',
                  type: 'text',
                  placeholder: 'Cartão / Dinheiro',
                  //value: this.usuario
                },
          
                {
                  name: 'troco',
                  type: 'number',
                  placeholder: 'Valor para o Troco',
                  //value: this.usuario
                },
          
          
                {
                  name: 'rua',
                  type: 'text',
                  placeholder: 'Rua',
                  value: this.rua
                },
          
          
                {
                  name: 'numero',
                  type: 'number',
                  placeholder: 'Número',
                  value: this.numero
                },
          
                {
                  name: 'bairro',
                  type: 'text',
                  placeholder: 'Bairro',
                  value: this.bairro
                },
          
                {
                  name: 'obs',
                  type: 'textarea',
                  placeholder: 'Obs: Tirar o Picles, etc',
                  
                },
          
                
                     
                
              ],
          
          
              
          
              
              buttons: [
                {
                  text: 'Cancelar',
                  role: 'cancel',
                  cssClass: 'secondary',
                  handler: () => {
                    console.log('Confirm Cancel');
                  }
                }, {
                  text: 'Enviar',
                  handler: (data) => {
                   //atualizar pag
                   
                   this.rua = data.rua;
                   this.bairro = data.bairro;
                   this.numero = data.numero;
                   this.tipo = data.tipo;
                   this.troco = data.troco;
                   this.obs = data.obs;
                   
                   this.finalizar();
                  }
                }
              ]
            });
          
            await alert.present();
          
            */
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
                this.router.navigate(['/produtos']);
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
    deletar(id) {
        console.log(id);
        return new Promise(resolve => {
            let dados = {
                requisicao: 'remover-item-carrinho',
                id: id,
                cpf: this.cpf,
            };
            this.provider.dadosApi(dados, 'apiProdutos.php').subscribe(data => {
                this.mensagemSalvar('Item Removido!');
                this.listarCarrinho();
            });
        });
    }
    adicionais() {
        this.router.navigate(['/produtos/adc']);
    }
};
CarrinhoPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"] },
    { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_4__["NativeStorage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _services_post_service__WEBPACK_IMPORTED_MODULE_2__["Post"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"] }
];
CarrinhoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-carrinho',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./carrinho.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/carrinho/carrinho.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./carrinho.page.scss */ "./src/app/carrinho/carrinho.page.scss")).default]
    })
], CarrinhoPage);



/***/ })

}]);
//# sourceMappingURL=carrinho-carrinho-module-es2015.js.map