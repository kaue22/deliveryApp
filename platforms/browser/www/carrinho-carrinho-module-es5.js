function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["carrinho-carrinho-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/carrinho/carrinho.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/carrinho/carrinho.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCarrinhoCarrinhoPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<ion-header>\n  <ion-toolbar color=\"dark\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Itens do Carrinho: {{total_itens}}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button  (click)=\"produtos()\">\n        <ion-icon slot=\"end\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-list>\n  <ion-item-sliding *ngFor=\"let item of lista\">\n     \n    <ion-item-options side=\"start\">\n      <ion-item-option (click)=\"addItem(item.id)\" color=\"success\">ADD + 1</ion-item-option>\n    </ion-item-options>\n\n  <ion-item>\n    <ion-thumbnail slot=\"start\">\n      <ion-img src=\"{{url_site_img}}{{item.imagem}}\"></ion-img>\n    </ion-thumbnail>\n    <ion-buttons slot=\"end\" *ngIf=\"item.adicional != 'Sim'\">\n      <ion-button (click)=\"adicionais()\" color=\"tertiary\"><small>+ Adicionais</small></ion-button>\n    </ion-buttons>\n    <ion-label>\n      \n      {{item.nome}} <ion-icon (click)=\"deletar(item.id)\" color=\"danger\" name=\"trash\"></ion-icon>\n      <h6><span>R$ {{item.valor}}</span>  - QTD {{item.quantidade}}</h6> \n        \n\n    </ion-label>\n    \n \n  </ion-item>\n\n  <ion-item-options  side=\"end\">\n    <ion-item-option (click)=\"removeItem(item.id)\" color=\"danger\">Remover - 1</ion-item-option>\n  </ion-item-options>\n\n</ion-item-sliding>\n</ion-list>\n\n\n<div *ngIf=\"mensagem === '1'\">Você não possui itens no carrinho!</div>\n\n\n</ion-content>\n\n\n\n<ion-footer>\n \n\n  <ion-grid>\n    <ion-row>\n      <ion-col >\n       \n          <ion-icon color=\"secondary\" name=\"cart\"></ion-icon>\n          Carrinho: R$ {{total_carrinho}}\n       \n      </ion-col>\n\n      <ion-col>\n      \n        <ion-icon color=\"danger\" name=\"car\"></ion-icon>\n        Frete: R$ {{frete}}\n       \n      \n      </ion-col>\n\n      </ion-row>\n\n\n      <ion-row>\n        <ion-col >\n         \n          <ion-button (click)=\"finalizarModal()\" expand=\"block\" fill=\"outline\">FINALIZAR</ion-button>\n         \n        </ion-col>\n  \n        <ion-col>\n        \n         \n          <h6><ion-icon color=\"success\" name=\"card\"></ion-icon>\n            Sub-Total: R$ {{subtotal2}}</h6>\n        \n        \n        </ion-col>\n  \n        </ion-row>\n\n    \n      \n      </ion-grid>\n\n     \n    \n    \n\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/carrinho/carrinho-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/carrinho/carrinho-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: CarrinhoPageRoutingModule */

  /***/
  function srcAppCarrinhoCarrinhoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CarrinhoPageRoutingModule", function () {
      return CarrinhoPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _carrinho_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./carrinho.page */
    "./src/app/carrinho/carrinho.page.ts");

    var routes = [{
      path: '',
      component: _carrinho_page__WEBPACK_IMPORTED_MODULE_3__["CarrinhoPage"]
    }];

    var CarrinhoPageRoutingModule = function CarrinhoPageRoutingModule() {
      _classCallCheck(this, CarrinhoPageRoutingModule);
    };

    CarrinhoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CarrinhoPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/carrinho/carrinho.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/carrinho/carrinho.module.ts ***!
    \*********************************************/

  /*! exports provided: CarrinhoPageModule */

  /***/
  function srcAppCarrinhoCarrinhoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CarrinhoPageModule", function () {
      return CarrinhoPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _carrinho_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./carrinho-routing.module */
    "./src/app/carrinho/carrinho-routing.module.ts");
    /* harmony import */


    var _carrinho_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./carrinho.page */
    "./src/app/carrinho/carrinho.page.ts");

    var CarrinhoPageModule = function CarrinhoPageModule() {
      _classCallCheck(this, CarrinhoPageModule);
    };

    CarrinhoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _carrinho_routing_module__WEBPACK_IMPORTED_MODULE_5__["CarrinhoPageRoutingModule"]],
      declarations: [_carrinho_page__WEBPACK_IMPORTED_MODULE_6__["CarrinhoPage"]]
    })], CarrinhoPageModule);
    /***/
  },

  /***/
  "./src/app/carrinho/carrinho.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/carrinho/carrinho.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppCarrinhoCarrinhoPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhcnJpbmhvL2NhcnJpbmhvLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/carrinho/carrinho.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/carrinho/carrinho.page.ts ***!
    \*******************************************/

  /*! exports provided: CarrinhoPage */

  /***/
  function srcAppCarrinhoCarrinhoPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CarrinhoPage", function () {
      return CarrinhoPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _services_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../services/post.service */
    "./src/app/services/post.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/native-storage/ngx */
    "./node_modules/@ionic-native/native-storage/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var CarrinhoPage = /*#__PURE__*/function () {
      function CarrinhoPage(alertController, storage, actRouter, router, provider, toast) {
        _classCallCheck(this, CarrinhoPage);

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

      _createClass(CarrinhoPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "logout",
        value: function logout() {
          this.storage.clear();
          this.router.navigate(['/login']);
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this = this;

          this.storage.getItem('session_storage').then(function (res) {
            _this.dadosLogin = res;
            _this.cpf = _this.dadosLogin.cpf;
            _this.lista = [];
            _this.start = 0;

            _this.listarCarrinho();

            _this.url_site_img = _this.provider.url_site_img_produtos;
          }); // this.cpf = '777.777.777-77';

          /*
          if(this.cpf === undefined){
            this.router.navigate(['/login']);
            this.mensagemLogar();
            return;
          } */
        }
      }, {
        key: "mensagemLogar",
        value: function mensagemLogar() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var toast;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.toast.create({
                      message: 'Nenhum produto no Carrinho!',
                      duration: 2000,
                      color: 'danger'
                    });

                  case 2:
                    toast = _context.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "produtos",
        value: function produtos() {
          this.router.navigate(['/produtos']);
        } //barra de rolagem

      }, {
        key: "loadData",
        value: function loadData(event) {
          var _this2 = this;

          this.start += this.limit;
          setTimeout(function () {
            _this2.listarCarrinho().then(function () {
              event.target.complete();
            });
          }, 3000);
        }
      }, {
        key: "mensagemSalvar",
        value: function mensagemSalvar(texto) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var toast;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.toast.create({
                      message: texto,
                      duration: 1000,
                      color: 'primary'
                    });

                  case 2:
                    toast = _context2.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "listarCarrinho",
        value: function listarCarrinho() {
          var _this3 = this;

          return new Promise(function (resolve) {
            var dados = {
              requisicao: 'listar-carrinho',
              cpf: _this3.cpf
            };

            if (_this3.cpf != '') {
              _this3.provider.dadosApi(dados, 'apiProdutos.php').subscribe(function (data) {
                if (data['result'] == null) {} else {
                  _this3.lista = [];

                  var _iterator = _createForOfIteratorHelper(data['result']),
                      _step;

                  try {
                    for (_iterator.s(); !(_step = _iterator.n()).done;) {
                      var item = _step.value;

                      _this3.lista.push(item);

                      _this3.total_carrinho = data['total'];
                      _this3.frete = data['frete'];
                      _this3.subtotal = data['subtotal'];
                      _this3.subtotal2 = data['subtotal2'];
                      _this3.total_itens = data['totalItens'];
                      _this3.previsao = data['previsao'];

                      _this3.listarClientes();

                      _this3.mensagem = 'Entrou';
                    }
                  } catch (err) {
                    _iterator.e(err);
                  } finally {
                    _iterator.f();
                  }
                }

                resolve(true);
              });
            }
          });
        }
      }, {
        key: "addItem",
        value: function addItem(id) {
          var _this4 = this;

          return new Promise(function (resolve) {
            var dados = {
              requisicao: 'add-item',
              id: id,
              cpf: _this4.cpf
            };

            _this4.provider.dadosApi(dados, 'apiProdutos.php').subscribe(function (data) {
              _this4.mensagemSalvar('Item Adicionado!');

              _this4.listarCarrinho();
            });
          });
        }
      }, {
        key: "removeItem",
        value: function removeItem(id) {
          var _this5 = this;

          return new Promise(function (resolve) {
            var dados = {
              requisicao: 'remove-item',
              id: id,
              cpf: _this5.cpf
            };

            _this5.provider.dadosApi(dados, 'apiProdutos.php').subscribe(function (data) {
              _this5.mensagemSalvar('Item Removido!');

              _this5.listarCarrinho();
            });
          });
        }
      }, {
        key: "finalizarModal",
        value: function finalizarModal() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
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

                  case 1:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "finalizar",
        value: function finalizar() {
          var _this6 = this;

          return new Promise(function (resolve) {
            var dados = {
              requisicao: 'finalizar-pedido',
              cpf: _this6.cpf,
              rua: _this6.rua,
              numero: _this6.numero,
              bairro: _this6.bairro,
              obs: _this6.obs,
              troco: _this6.troco,
              tipo: _this6.tipo,
              total: _this6.subtotal
            };

            _this6.provider.dadosApi(dados, 'apiProdutos.php').subscribe(function (data) {
              _this6.mensagemSalvar(data['texto']);

              _this6.router.navigate(['/produtos']);
            });
          });
        }
      }, {
        key: "listarClientes",
        value: function listarClientes() {
          var _this7 = this;

          return new Promise(function (resolve) {
            var dados = {
              requisicao: 'listar-clientes',
              cpf: _this7.cpf
            };

            _this7.provider.dadosApi(dados, 'apiProdutos.php').subscribe(function (data) {
              if (data['result'] == '0') {
                _this7.ionViewWillEnter();
              } else {
                _this7.rua = data['rua'];
                _this7.numero = data['numero'];
                _this7.bairro = data['bairro'];
              }

              resolve(true);
            });
          });
        }
      }, {
        key: "deletar",
        value: function deletar(id) {
          var _this8 = this;

          console.log(id);
          return new Promise(function (resolve) {
            var dados = {
              requisicao: 'remover-item-carrinho',
              id: id,
              cpf: _this8.cpf
            };

            _this8.provider.dadosApi(dados, 'apiProdutos.php').subscribe(function (data) {
              _this8.mensagemSalvar('Item Removido!');

              _this8.listarCarrinho();
            });
          });
        }
      }, {
        key: "adicionais",
        value: function adicionais() {
          this.router.navigate(['/produtos/adc']);
        }
      }]);

      return CarrinhoPage;
    }();

    CarrinhoPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"]
      }, {
        type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_4__["NativeStorage"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _services_post_service__WEBPACK_IMPORTED_MODULE_2__["Post"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"]
      }];
    };

    CarrinhoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'app-carrinho',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./carrinho.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/carrinho/carrinho.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./carrinho.page.scss */
      "./src/app/carrinho/carrinho.page.scss"))["default"]]
    })], CarrinhoPage);
    /***/
  }
}]);
//# sourceMappingURL=carrinho-carrinho-module-es5.js.map