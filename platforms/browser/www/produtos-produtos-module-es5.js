function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["produtos-produtos-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/produtos/produtos.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/produtos/produtos.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProdutosProdutosPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"dark\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title class=\"titulo-home\">O que deseja comer hoje?</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button  (click)=\"logout()\">\n        <ion-icon slot=\"end\" name=\"log-out\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n\n<ion-content>\n\n\n  <ion-row>\n\n    \n      <ion-slides>\n       \n        <ion-slide class=\"item-slide\" *ngFor=\"let item of lista_cat\" (click)=\"filtrarCategoria(item.id)\">\n          <ion-thumbnail slot=\"start\">\n            <ion-img src=\"{{url_site_img_cat}}{{item.imagem}}\"></ion-img>\n          </ion-thumbnail>\n          <ion-label>\n      \n            <h5 class=\"titulo-slider\">{{item.nome}}</h5>\n            <h6><span class=\"subtitulo-slider\">{{total_itens_cat}} Produtos</span></h6>\n              \n      \n          </ion-label>\n        </ion-slide>\n       \n        \n        \n      </ion-slides>\n   \n\n  </ion-row>\n\n\n  <ion-row class=\"cinzaclaro\">\n  \n    <ion-input placeholder=\"Buscar Produto\" [(ngModel)]=\"buscar\" type=\"search\" (ionChange)=\"listarProdutos()\" ></ion-input>\n  \n    <ion-buttons (click)=\"listarProdutos()\">\n      <ion-button>\n        <ion-icon slot=\"end\" name=\"search\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  \n  </ion-row>\n\n\n\n  <ion-row class=\"margin-l\">\n\n    <ion-card class=\"card\" style=\"width: 43%\" *ngFor=\"let item of lista\">\n      <ion-img class=\"img-login center\" src=\"{{url_site_img}}{{item.imagem}}\"></ion-img>\n      <ion-card-header>\n        <ion-card-subtitle>R$ {{item.valor}}</ion-card-subtitle>\n        <ion-card-title class=\"titulo-produto\">{{item.nome}}</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-button (click)=\"addCarrinho(item.id)\" expand=\"block\" color=\"success\" ><ion-icon name=\"cart\"></ion-icon>ADD</ion-button>\n      </ion-card-content>\n    </ion-card>\n\n   \n  </ion-row>\n\n\n\n  \n  <ion-infinite-scroll  (ionInfinite)=\"loadData($event)\" *ngIf=\"total_itens >= limit\">\n  <ion-infinite-scroll-content\n    loadingSpinner=\"bubbles\"\n    loadingText=\"Carregando mais dados\">\n  </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n  \n\n</ion-content>\n\n\n<ion-footer>\n \n\n    <ion-grid>\n      <ion-row>\n        <ion-col >\n          <ion-tab-button (click)=\"categorias()\">\n            <ion-icon color=\"primary\" name=\"list-circle\"></ion-icon>\n            <ion-label>Categorias</ion-label>\n          </ion-tab-button>\n        </ion-col>\n\n        <ion-col (click)=\"carrinhoPage()\" *ngIf=\"total_carrinho != undefined\">\n          <div class=\"rodape-carrinho center\">\n          <ion-icon color=\"danger\" name=\"cart\"></ion-icon>\n          Carrinho: R$ {{total_carrinho}}\n        </div>\n        </ion-col>\n\n        <ion-col *ngIf=\"total_carrinho === undefined\">\n          <div class=\"rodape-carrinho center\">\n          <ion-icon color=\"danger\" name=\"cart\"></ion-icon>\n          Carrinho: Sem produtos\n        </div>\n        </ion-col>\n\n        </ion-row>\n        \n        </ion-grid>\n      \n    \n      \n\n</ion-footer>\n\n";
    /***/
  },

  /***/
  "./src/app/produtos/produtos-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/produtos/produtos-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: ProdutosPageRoutingModule */

  /***/
  function srcAppProdutosProdutosRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProdutosPageRoutingModule", function () {
      return ProdutosPageRoutingModule;
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


    var _produtos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./produtos.page */
    "./src/app/produtos/produtos.page.ts");

    var routes = [{
      path: '',
      component: _produtos_page__WEBPACK_IMPORTED_MODULE_3__["ProdutosPage"]
    }];

    var ProdutosPageRoutingModule = function ProdutosPageRoutingModule() {
      _classCallCheck(this, ProdutosPageRoutingModule);
    };

    ProdutosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ProdutosPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/produtos/produtos.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/produtos/produtos.module.ts ***!
    \*********************************************/

  /*! exports provided: ProdutosPageModule */

  /***/
  function srcAppProdutosProdutosModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProdutosPageModule", function () {
      return ProdutosPageModule;
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


    var _produtos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./produtos-routing.module */
    "./src/app/produtos/produtos-routing.module.ts");
    /* harmony import */


    var _produtos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./produtos.page */
    "./src/app/produtos/produtos.page.ts");

    var ProdutosPageModule = function ProdutosPageModule() {
      _classCallCheck(this, ProdutosPageModule);
    };

    ProdutosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _produtos_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProdutosPageRoutingModule"]],
      declarations: [_produtos_page__WEBPACK_IMPORTED_MODULE_6__["ProdutosPage"]]
    })], ProdutosPageModule);
    /***/
  },

  /***/
  "./src/app/produtos/produtos.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/produtos/produtos.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppProdutosProdutosPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".titulo-home {\n  font-size: 13px;\n}\n\n.welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\n.titulo-produto {\n  font-size: 14px;\n  font-weight: 300;\n}\n\n.preco-produto {\n  font-size: 13px;\n  font-weight: 200;\n}\n\n.margin-l {\n  margin-left: 10px;\n}\n\n.rodape-carrinho {\n  color: 148;\n  text-align: center;\n  font-size: 15px;\n  margin-top: 15px;\n}\n\n.titulo-slider {\n  margin-left: 15px;\n  font-size: 13px;\n}\n\n.subtitulo-slider {\n  font-size: 11px;\n  margin-left: 15px;\n}\n\n.item-slide {\n  width: 25px;\n  background-color: #f5f5f5;\n  margin-top: 5px;\n}\n\n.cinzaclaro {\n  background-color: #fcfcfc;\n  padding-left: 10px;\n  padding-right: 10px;\n  padding-top: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHV0b3MvRDpcXFByb2pldG9zXFxkZWxpdmVyeUFwcC9zcmNcXGFwcFxccHJvZHV0b3NcXHByb2R1dG9zLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcHJvZHV0b3MvcHJvZHV0b3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVFO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FDQ047O0FERUU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURHRTtFQUNJLGlCQUFBO0FDQU47O0FER0U7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNBTjs7QURJRTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtBQ0ROOztBRElFO0VBQ0csZUFBQTtFQUNBLGlCQUFBO0FDREw7O0FESUU7RUFDSSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FDRE47O0FES0U7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ0ZOIiwiZmlsZSI6InNyYy9hcHAvcHJvZHV0b3MvcHJvZHV0b3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdHVsby1ob21le1xyXG4gICAgZm9udC1zaXplOjEzcHg7XHJcbn1cclxuXHJcbi53ZWxjb21lLWNhcmQgaW9uLWltZyB7XHJcbiAgICBtYXgtaGVpZ2h0OiAzNXZoO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcblxyXG4gIC50aXR1bG8tcHJvZHV0b3tcclxuICAgICAgZm9udC1zaXplOjE0cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OjMwMDtcclxuICB9XHJcblxyXG4gIC5wcmVjby1wcm9kdXRve1xyXG4gICAgZm9udC1zaXplOjEzcHg7XHJcbiAgICBmb250LXdlaWdodDoyMDA7XHJcbiAgfVxyXG5cclxuXHJcbiAgLm1hcmdpbi1se1xyXG4gICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICB9XHJcblxyXG4gIC5yb2RhcGUtY2FycmluaG97XHJcbiAgICAgIGNvbG9yOiByZWQoJGNvbG9yOiAjOTQwYzBjKTtcclxuICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgIGZvbnQtc2l6ZToxNXB4O1xyXG4gICAgICBtYXJnaW4tdG9wOjE1cHg7XHJcbiAgfVxyXG5cclxuXHJcbiAgLnRpdHVsby1zbGlkZXJ7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OjE1cHg7XHJcbiAgICAgIGZvbnQtc2l6ZToxM3B4O1xyXG4gIH1cclxuXHJcbiAgLnN1YnRpdHVsby1zbGlkZXJ7XHJcbiAgICAgZm9udC1zaXplOjExcHg7XHJcbiAgICAgbWFyZ2luLWxlZnQ6MTVweDtcclxufVxyXG5cclxuICAuaXRlbS1zbGlkZXtcclxuICAgICAgd2lkdGg6MjVweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjojZjVmNWY1O1xyXG4gICAgICBtYXJnaW4tdG9wOjVweDtcclxuICB9XHJcblxyXG5cclxuICAuY2luemFjbGFyb3tcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjojZmNmY2ZjO1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6MTBweDtcclxuICAgICAgcGFkZGluZy1yaWdodDoxMHB4O1xyXG4gICAgICBwYWRkaW5nLXRvcDozcHg7XHJcbiAgfSIsIi50aXR1bG8taG9tZSB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLndlbGNvbWUtY2FyZCBpb24taW1nIHtcbiAgbWF4LWhlaWdodDogMzV2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnRpdHVsby1wcm9kdXRvIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xufVxuXG4ucHJlY28tcHJvZHV0byB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDIwMDtcbn1cblxuLm1hcmdpbi1sIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5yb2RhcGUtY2FycmluaG8ge1xuICBjb2xvcjogMTQ4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuLnRpdHVsby1zbGlkZXIge1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4uc3VidGl0dWxvLXNsaWRlciB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG5cbi5pdGVtLXNsaWRlIHtcbiAgd2lkdGg6IDI1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLmNpbnphY2xhcm8ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmY2ZjO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIHBhZGRpbmctdG9wOiAzcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/produtos/produtos.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/produtos/produtos.page.ts ***!
    \*******************************************/

  /*! exports provided: ProdutosPage */

  /***/
  function srcAppProdutosProdutosPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProdutosPage", function () {
      return ProdutosPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _services_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../services/post.service */
    "./src/app/services/post.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/native-storage/ngx */
    "./node_modules/@ionic-native/native-storage/__ivy_ngcc__/ngx/index.js");

    var ProdutosPage = /*#__PURE__*/function () {
      function ProdutosPage(appCtrl, storage, actRouter, router, provider, toast) {
        _classCallCheck(this, ProdutosPage);

        this.appCtrl = appCtrl;
        this.storage = storage;
        this.actRouter = actRouter;
        this.router = router;
        this.provider = provider;
        this.toast = toast;
        this.lista = [];
        this.lista_cat = [];
        this.limit = 10;
        this.start = 0;
        this.total_itens = 0;
        this.total_itens_cat = 0;
      }

      _createClass(ProdutosPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.actRouter.params.subscribe(function (data) {
            _this.id = data.id; //this.adc = data.adc;
          });
        }
      }, {
        key: "logout",
        value: function logout() {
          this.storage.clear();
          this.router.navigate(['/login']);
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this2 = this;

          this.appCtrl.atualizarLogin(this.cpf);
          this.storage.getItem('session_storage').then(function (res) {
            _this2.dadosLogin = res;
            _this2.cpf = _this2.dadosLogin.cpf;

            _this2.listarCarrinho();

            _this2.appCtrl.atualizarLogin(_this2.cpf);
          }); // this.cpf = '777.777.777-77';

          this.lista = [];
          this.lista_cat = [];
          this.start = 0;
          this.listarProdutos();
          this.listarCategorias();
          this.url_site_img = this.provider.url_site_img_produtos;
          this.url_site_img_cat = this.provider.url_site_img_cat;
        }
      }, {
        key: "listarProdutos",
        value: function listarProdutos() {
          var _this3 = this;

          return new Promise(function (resolve) {
            var dados = {
              requisicao: 'listar-produtos',
              limit: _this3.limit,
              start: _this3.start,
              id_cat: _this3.id,
              buscar: _this3.buscar
            };

            _this3.provider.dadosApi(dados, 'apiProdutos.php').subscribe(function (data) {
              if (data['result'] == '0') {
                _this3.lista = [];

                _this3.mensagemBusca();
              } else {
                _this3.lista = [];

                var _iterator = _createForOfIteratorHelper(data['result']),
                    _step;

                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    var item = _step.value;

                    _this3.lista.push(item);

                    _this3.total_itens = data['total'];
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
      }, {
        key: "categorias",
        value: function categorias() {
          this.router.navigate(['/categorias']);
        } //barra de rolagem

      }, {
        key: "loadData",
        value: function loadData(event) {
          var _this4 = this;

          this.start += this.limit;
          setTimeout(function () {
            _this4.listarProdutos().then(function () {
              event.target.complete();
            });
          }, 3000);
        }
      }, {
        key: "mensagemBusca",
        value: function mensagemBusca() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var toast;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.toast.create({
                      message: 'Nenhum Item Encontrado',
                      duration: 1000,
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
        key: "mensagemSalvar",
        value: function mensagemSalvar() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var toast;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.toast.create({
                      message: 'Adicionado ao Carinho!',
                      duration: 500,
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
        key: "mensagemLogar",
        value: function mensagemLogar() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var toast;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.toast.create({
                      message: 'Você precisa estar logado! Faça Login ou Cadastre-se!',
                      duration: 4000,
                      color: 'danger'
                    });

                  case 2:
                    toast = _context3.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "addCarrinho",
        value: function addCarrinho(id) {
          var _this5 = this;

          if (this.cpf === undefined) {
            this.mensagemLogar();
            this.router.navigate(['/login']);
            console.log(this.cpf);
            return;
          }

          return new Promise(function (resolve) {
            var dados = {
              requisicao: 'add-carrinho',
              id_produto: id,
              cpf: _this5.cpf
            };

            _this5.provider.dadosApi(dados, 'apiProdutos.php').subscribe(function (data) {
              _this5.mensagemSalvar();

              _this5.listarCarrinho();
            });
          });
        }
      }, {
        key: "listarCarrinho",
        value: function listarCarrinho() {
          var _this6 = this;

          console.log(this.total_itens);
          return new Promise(function (resolve) {
            var dados = {
              requisicao: 'listar-carrinho',
              cpf: _this6.cpf
            };

            if (_this6.cpf != '') {
              _this6.provider.dadosApi(dados, 'apiProdutos.php').subscribe(function (data) {
                _this6.total_carrinho = data['total'];
                resolve(true);
              });
            }
          });
        }
      }, {
        key: "carrinhoPage",
        value: function carrinhoPage() {
          this.router.navigate(['/carrinho']);
        }
      }, {
        key: "listarCategorias",
        value: function listarCategorias() {
          var _this7 = this;

          return new Promise(function (resolve) {
            var dados = {
              requisicao: 'listar-cat',
              limit: _this7.limit,
              start: _this7.start
            };

            _this7.provider.dadosApi(dados, 'apiProdutos.php').subscribe(function (data) {
              if (data['result'] == '0') {
                _this7.ionViewWillEnter();
              } else {
                _this7.lista_cat = [];

                var _iterator2 = _createForOfIteratorHelper(data['result']),
                    _step2;

                try {
                  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                    var item = _step2.value;

                    _this7.lista_cat.push(item);

                    _this7.total_itens_cat = data['total'];
                  }
                } catch (err) {
                  _iterator2.e(err);
                } finally {
                  _iterator2.f();
                }
              }

              resolve(true);
            });
          });
        }
      }, {
        key: "filtrarCategoria",
        value: function filtrarCategoria(id) {
          this.router.navigate(['/produtos/' + id]);
        }
      }]);

      return ProdutosPage;
    }();

    ProdutosPage.ctorParameters = function () {
      return [{
        type: _app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]
      }, {
        type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_6__["NativeStorage"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _services_post_service__WEBPACK_IMPORTED_MODULE_2__["Post"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
      }];
    };

    ProdutosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'app-produtos',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./produtos.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/produtos/produtos.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./produtos.page.scss */
      "./src/app/produtos/produtos.page.scss"))["default"]]
    })], ProdutosPage);
    /***/
  }
}]);
//# sourceMappingURL=produtos-produtos-module-es5.js.map