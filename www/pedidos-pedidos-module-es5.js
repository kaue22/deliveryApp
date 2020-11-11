function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pedidos-pedidos-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pedidos/pedidos.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pedidos/pedidos.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPedidosPedidosPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Últimos Pedidos</ion-title>\n    \n  </ion-toolbar>\n</ion-header>\n\n\n<ion-toolbar color=\"dark\">\n  <!-- <ion-searchbar [(ngModel)]=\"searchKey\" placeholder=\"Buscar\"></ion-searchbar> -->\n  <ion-buttons slot=\"start\">\n    <ion-icon name=\"calendar\"></ion-icon>Data:\n</ion-buttons>\n<ion-input type=\"date\" [(ngModel)]=\"nome\" (ionChange)=\"carregar()\"></ion-input>\n\n  <ion-buttons slot=\"end\">\n    <ion-button size=\"small\" shape=\"round\" color=\"medium\" (click)=\"carregar()\">\n      <ion-icon name=\"search\"></ion-icon>\n    </ion-button>\n  </ion-buttons>\n</ion-toolbar>\n\n\n<ion-content class=\"cinza-claro\" class=\"ion-padding\">\n<ion-list>\n  <ion-item-sliding *ngFor=\"let item of lista\">\n\n    \n   \n    <ion-item>\n     \n      <ion-label>\n        \n        <ion-icon name=\"square\" color=\"primary\" *ngIf=\"item.status === 'Iniciado'\"></ion-icon>\n        <ion-icon name=\"square\" color=\"success\" *ngIf=\"item.status === 'Concluído'\"></ion-icon>\n        <ion-icon name=\"square\" color=\"danger\" *ngIf=\"item.status === 'Preparando'\"></ion-icon>\n        <ion-icon name=\"square\" color=\"warning\" *ngIf=\"item.status === 'Despachado'\"></ion-icon>\n        {{item.status}} - R$ {{item.total}} - {{item.data}}\n      <h6> <span>Previsão Entrega: {{item.hora}} </span>  - Pago: \n        <span *ngIf=\"item.pago != 'Sim'\" class=\"text-danger\">{{item.pago}}</span>\n        <span *ngIf=\"item.pago === 'Sim'\" class=\"text-success\">{{item.pago}}</span>\n      </h6>\n    </ion-label>\n    </ion-item>\n\n    <ion-item-options side=\"end\">\n      <ion-item-option (click)=\"mostrar(item.id)\" color=\"secondary\">\n        Ver Produtos\n      </ion-item-option>\n    \n    </ion-item-options>\n  </ion-item-sliding>\n\n  \n</ion-list>\n\n\n<ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n  <ion-refresher-content\n    pullingIcon=\"arrow-dropdown\"\n    \n    refreshingSpinner=\"circles\"\n    refreshingText=\"Carregando...\">\n  </ion-refresher-content>\n</ion-refresher>\n\n\n<div *ngIf=\"mensagem === '1'\">Você não possui pedidos ou não está Logado!</div>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pedidos/pedidos-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pedidos/pedidos-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: PedidosPageRoutingModule */

  /***/
  function srcAppPedidosPedidosRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PedidosPageRoutingModule", function () {
      return PedidosPageRoutingModule;
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


    var _pedidos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pedidos.page */
    "./src/app/pedidos/pedidos.page.ts");

    var routes = [{
      path: '',
      component: _pedidos_page__WEBPACK_IMPORTED_MODULE_3__["PedidosPage"]
    }];

    var PedidosPageRoutingModule = function PedidosPageRoutingModule() {
      _classCallCheck(this, PedidosPageRoutingModule);
    };

    PedidosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PedidosPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pedidos/pedidos.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/pedidos/pedidos.module.ts ***!
    \*******************************************/

  /*! exports provided: PedidosPageModule */

  /***/
  function srcAppPedidosPedidosModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PedidosPageModule", function () {
      return PedidosPageModule;
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


    var _pedidos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pedidos-routing.module */
    "./src/app/pedidos/pedidos-routing.module.ts");
    /* harmony import */


    var _pedidos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pedidos.page */
    "./src/app/pedidos/pedidos.page.ts");

    var PedidosPageModule = function PedidosPageModule() {
      _classCallCheck(this, PedidosPageModule);
    };

    PedidosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _pedidos_routing_module__WEBPACK_IMPORTED_MODULE_5__["PedidosPageRoutingModule"]],
      declarations: [_pedidos_page__WEBPACK_IMPORTED_MODULE_6__["PedidosPage"]]
    })], PedidosPageModule);
    /***/
  },

  /***/
  "./src/app/pedidos/pedidos.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/pedidos/pedidos.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppPedidosPedidosPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BlZGlkb3MvcGVkaWRvcy5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pedidos/pedidos.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/pedidos/pedidos.page.ts ***!
    \*****************************************/

  /*! exports provided: PedidosPage */

  /***/
  function srcAppPedidosPedidosPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PedidosPage", function () {
      return PedidosPage;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/native-storage/ngx */
    "./node_modules/@ionic-native/native-storage/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PedidosPage = /*#__PURE__*/function () {
      function PedidosPage(toast, storage, router, provider) {
        _classCallCheck(this, PedidosPage);

        this.toast = toast;
        this.storage = storage;
        this.router = router;
        this.provider = provider;
        this.lista = [];
        this.cpf = "";
        this.mensagem = "1";
        this.carregar();
      }

      _createClass(PedidosPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this = this;

          this.storage.getItem('session_storage').then(function (res) {
            _this.dadosLogin = res;
            _this.cpf = _this.dadosLogin.cpf;
            _this.lista = [];

            _this.carregar();
          }); //this.cpf = '777.777.777-77';
        }
      }, {
        key: "mensagemLogar",
        value: function mensagemLogar(texto) {
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
        key: "carregar",
        value: function carregar() {
          var _this2 = this;

          return new Promise(function (resolve) {
            _this2.lista = [];
            var dados = {
              requisicao: 'listar',
              nome: _this2.nome,
              cpf: _this2.cpf
            };

            if (_this2.cpf != '') {
              _this2.provider.dadosApi(dados, 'apiPedidos.php').subscribe(function (data) {
                _this2.dados = data['result'];

                if (data['result'] == null) {} else {
                  _this2.mensagemLogar(data['texto']);

                  var _iterator = _createForOfIteratorHelper(data['result']),
                      _step;

                  try {
                    for (_iterator.s(); !(_step = _iterator.n()).done;) {
                      var item = _step.value;

                      _this2.lista.push(item);

                      _this2.mensagem = 'Entrou';
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
        key: "mostrar",
        value: function mostrar(id) {
          this.router.navigate(['/mostrar-produtos/' + id]);
        } //atualizar o list view

      }, {
        key: "doRefresh",
        value: function doRefresh(event) {
          var _this3 = this;

          setTimeout(function () {
            _this3.ionViewWillEnter();

            event.target.complete();
          }, 500);
        }
      }]);

      return PedidosPage;
    }();

    PedidosPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"]
      }, {
        type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_4__["NativeStorage"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _services_post_service__WEBPACK_IMPORTED_MODULE_2__["Post"]
      }];
    };

    PedidosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
      selector: 'app-pedidos',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./pedidos.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pedidos/pedidos.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./pedidos.page.scss */
      "./src/app/pedidos/pedidos.page.scss"))["default"]]
    })], PedidosPage);
    /***/
  }
}]);
//# sourceMappingURL=pedidos-pedidos-module-es5.js.map