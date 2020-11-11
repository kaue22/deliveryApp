function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["finalizar-finalizar-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/finalizar/finalizar.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/finalizar/finalizar.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFinalizarFinalizarPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header >\n  <ion-toolbar color=\"dark\">\n    <ion-buttons slot=\"start\" (click)=\"Carrinho()\">\n      <ion-button>\n        <ion-icon  name=\"arrow-back\"> </ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Finalizar Pedido</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content class=\"ion-padding\">\n<ion-item >\n  <ion-label>Tipo Pagamento</ion-label>\n  <ion-select placeholder=\"Selecione\" [(ngModel)]=\"tipo\" >\n    <ion-select-option  value=\"Dinheiro\">Dinheiro</ion-select-option>\n    <ion-select-option  value=\"Cartão de Débito\">Cartão de Débito</ion-select-option>\n    <ion-select-option  value=\"Cartão de Crédito\">Cartão de Crédito</ion-select-option>   \n  </ion-select>\n</ion-item>\n\n<ion-item *ngIf=\"tipo === 'Dinheiro'\">\n  <ion-label position=\"floating\">\n    Total para o Troco\n  </ion-label>\n  <ion-input [(ngModel)]=\"troco\"></ion-input>\n\n \n</ion-item>\n\n\n<ion-row>\n  <ion-col size=\"9\">\n    <ion-item>\n      <ion-label position=\"floating\">\n        Rua\n      </ion-label>\n      <ion-input [(ngModel)]=\"rua\"></ion-input>\n  \n     \n    </ion-item>\n  </ion-col>\n\n  <ion-col size=\"3\">\n    <ion-item>\n      <ion-label position=\"floating\">\n        Número\n      </ion-label>\n      <ion-input [(ngModel)]=\"numero\"></ion-input>\n  \n      \n    </ion-item>\n  </ion-col>\n</ion-row>\n\n\n  \n\n  <ion-item >\n    <ion-label>Bairro</ion-label>\n    <ion-select placeholder=\"Selecione\" [(ngModel)]=\"bairro\" >\n      <ion-select-option *ngFor=\"let item of lista\" value=\"{{item.nome}}\">{{item.nome}}</ion-select-option>\n          \n    </ion-select>\n  </ion-item>\n\n\n\n  <ion-item>\n    <ion-label position=\"floating\">Tirar o Picles / etc</ion-label>\n    <ion-textarea [(ngModel)]=\"obs\"></ion-textarea>\n  </ion-item>\n \n\n  <ion-button color=\"primary\" expand=\"block\" fill=\"outline\" (click)=\"finalizar()\">\n    Salvar\n  </ion-button>\n\n \n\n</ion-content>\n\n\n\n<ion-footer>\n \n\n  <ion-grid>\n   \n      <ion-row>\n        <ion-col >\n         \n          <h6><ion-icon color=\"primary\" name=\"bicycle\"></ion-icon>\n            Entrega: {{previsao}} Minutos</h6>\n         \n        </ion-col>\n  \n        <ion-col>\n        \n         \n          <h6><ion-icon color=\"success\" name=\"card\"></ion-icon>\n            Sub-Total: R$ {{subtotal2}}</h6>\n        \n        \n        </ion-col>\n  \n        </ion-row>\n\n    \n      \n      </ion-grid>\n\n\n</ion-footer>\n";
    /***/
  },

  /***/
  "./src/app/finalizar/finalizar-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/finalizar/finalizar-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: FinalizarPageRoutingModule */

  /***/
  function srcAppFinalizarFinalizarRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FinalizarPageRoutingModule", function () {
      return FinalizarPageRoutingModule;
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


    var _finalizar_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./finalizar.page */
    "./src/app/finalizar/finalizar.page.ts");

    var routes = [{
      path: '',
      component: _finalizar_page__WEBPACK_IMPORTED_MODULE_3__["FinalizarPage"]
    }];

    var FinalizarPageRoutingModule = function FinalizarPageRoutingModule() {
      _classCallCheck(this, FinalizarPageRoutingModule);
    };

    FinalizarPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], FinalizarPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/finalizar/finalizar.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/finalizar/finalizar.module.ts ***!
    \***********************************************/

  /*! exports provided: FinalizarPageModule */

  /***/
  function srcAppFinalizarFinalizarModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FinalizarPageModule", function () {
      return FinalizarPageModule;
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


    var _finalizar_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./finalizar-routing.module */
    "./src/app/finalizar/finalizar-routing.module.ts");
    /* harmony import */


    var _finalizar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./finalizar.page */
    "./src/app/finalizar/finalizar.page.ts");

    var FinalizarPageModule = function FinalizarPageModule() {
      _classCallCheck(this, FinalizarPageModule);
    };

    FinalizarPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _finalizar_routing_module__WEBPACK_IMPORTED_MODULE_5__["FinalizarPageRoutingModule"]],
      declarations: [_finalizar_page__WEBPACK_IMPORTED_MODULE_6__["FinalizarPage"]]
    })], FinalizarPageModule);
    /***/
  },

  /***/
  "./src/app/finalizar/finalizar.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/finalizar/finalizar.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppFinalizarFinalizarPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpbmFsaXphci9maW5hbGl6YXIucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/finalizar/finalizar.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/finalizar/finalizar.page.ts ***!
    \*********************************************/

  /*! exports provided: FinalizarPage */

  /***/
  function srcAppFinalizarFinalizarPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FinalizarPage", function () {
      return FinalizarPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_post_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../services/post.service */
    "./src/app/services/post.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/native-storage/ngx */
    "./node_modules/@ionic-native/native-storage/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FinalizarPage = /*#__PURE__*/function () {
      function FinalizarPage(storage, actRouter, router, provider, toast) {
        _classCallCheck(this, FinalizarPage);

        this.storage = storage;
        this.actRouter = actRouter;
        this.router = router;
        this.provider = provider;
        this.toast = toast;
        this.lista = [];
      }

      _createClass(FinalizarPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this = this;

          this.storage.getItem('session_storage').then(function (res) {
            _this.dadosLogin = res;
            _this.cpf = _this.dadosLogin.cpf;
          }); // this.cpf = '777.777.777-77';

          this.listarCarrinho();
          this.listarClientes();
          this.listarLocais();
          this.lista = [];
        }
      }, {
        key: "Carrinho",
        value: function Carrinho() {
          this.router.navigate(['/carrinho']);
        }
      }, {
        key: "listarCarrinho",
        value: function listarCarrinho() {
          var _this2 = this;

          return new Promise(function (resolve) {
            var dados = {
              requisicao: 'listar-carrinho',
              cpf: _this2.cpf
            };

            _this2.provider.dadosApi(dados, 'apiProdutos.php').subscribe(function (data) {
              if (data['result'] == '0') {
                _this2.ionViewWillEnter();
              } else {
                _this2.total_carrinho = data['total'];
                _this2.frete = data['frete'];
                _this2.subtotal = data['subtotal'];
                _this2.subtotal2 = data['subtotal2'];
                _this2.total_itens = data['totalItens'];
                _this2.previsao = data['previsao'];
              }

              resolve(true);
            });
          });
        }
      }, {
        key: "listarClientes",
        value: function listarClientes() {
          var _this3 = this;

          return new Promise(function (resolve) {
            var dados = {
              requisicao: 'listar-clientes',
              cpf: _this3.cpf
            };

            _this3.provider.dadosApi(dados, 'apiProdutos.php').subscribe(function (data) {
              if (data['result'] == '0') {
                _this3.ionViewWillEnter();
              } else {
                _this3.rua = data['rua'];
                _this3.numero = data['numero'];
                _this3.bairro = data['bairro'];
              }

              resolve(true);
            });
          });
        }
      }, {
        key: "mensagemSalvar",
        value: function mensagemSalvar(texto) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var toast;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.toast.create({
                      message: texto,
                      duration: 2000,
                      color: 'primary'
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
        key: "finalizar",
        value: function finalizar() {
          var _this4 = this;

          return new Promise(function (resolve) {
            var dados = {
              requisicao: 'finalizar-pedido',
              cpf: _this4.cpf,
              rua: _this4.rua,
              numero: _this4.numero,
              bairro: _this4.bairro,
              obs: _this4.obs,
              troco: _this4.troco,
              tipo: _this4.tipo,
              total: _this4.subtotal
            };

            _this4.provider.dadosApi(dados, 'apiProdutos.php').subscribe(function (data) {
              _this4.mensagemSalvar(data['texto']);

              if (data['texto'] === 'Pedido Concluído!') {
                _this4.router.navigate(['/pedidos']);
              }
            });
          });
        }
      }, {
        key: "listarLocais",
        value: function listarLocais() {
          var _this5 = this;

          return new Promise(function (resolve) {
            var dados = {
              requisicao: 'listar-locais'
            };

            _this5.provider.dadosApi(dados, 'apiLogin.php').subscribe(function (data) {
              if (data['result'] == '0') {
                _this5.ionViewWillEnter();
              } else {
                _this5.lista = [];

                var _iterator = _createForOfIteratorHelper(data['result']),
                    _step;

                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    var item = _step.value;

                    _this5.lista.push(item);
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }
              }

              resolve(true);
            });
          });
        }
      }]);

      return FinalizarPage;
    }();

    FinalizarPage.ctorParameters = function () {
      return [{
        type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__["NativeStorage"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_post_service__WEBPACK_IMPORTED_MODULE_1__["Post"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
      }];
    };

    FinalizarPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
      selector: 'app-finalizar',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./finalizar.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/finalizar/finalizar.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./finalizar.page.scss */
      "./src/app/finalizar/finalizar.page.scss"))["default"]]
    })], FinalizarPage);
    /***/
  }
}]);
//# sourceMappingURL=finalizar-finalizar-module-es5.js.map