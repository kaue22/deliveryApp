function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["categorias-categorias-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/categorias/categorias.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/categorias/categorias.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCategoriasCategoriasPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar >\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title class=\"titulo-home\">Escolha uma Categoria</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button  (click)=\"logout()\">\n        <ion-icon slot=\"end\" name=\"log-out\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-row class=\"margin-l\">\n\n    <ion-card class=\"card\" style=\"width: 43%\" *ngFor=\"let item of lista\">\n      <ion-img class=\"img-login center\" src=\"{{url_site_img}}{{item.imagem}}\"></ion-img>\n      <ion-card-header>\n        <ion-card-subtitle>{{item.produtos}} Produtos</ion-card-subtitle>\n        <ion-card-title class=\"titulo-produto\">{{item.nome}}</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-button (click)=\"verProdutos(item.id)\" expand=\"block\" color=\"primary\" ><ion-icon name=\"eye\"></ion-icon>VER</ion-button>\n      </ion-card-content>\n    </ion-card>\n\n   \n  </ion-row>\n\n\n\n  \n<ion-infinite-scroll  (ionInfinite)=\"loadData($event)\" *ngIf=\"total_itens >= limit\">\n  <ion-infinite-scroll-content\n    loadingSpinner=\"bubbles\"\n    loadingText=\"Carregando mais dados\">\n  </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n\n  \n<ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n  <ion-refresher-content\n    pullingIcon=\"arrow-dropdown\"\n    \n    refreshingSpinner=\"circles\"\n    refreshingText=\"Carregando...\">\n  </ion-refresher-content>\n</ion-refresher>\n  \n\n</ion-content>\n\n\n<ion-footer>\n \n\n    <ion-grid>\n      <ion-row>\n        <ion-col >\n          <ion-tab-button (click)=\"produtos()\">\n            <ion-icon color=\"primary\" name=\"list-circle\"></ion-icon>\n            <ion-label>Produtos</ion-label>\n          </ion-tab-button>\n        </ion-col>\n\n        <ion-col (click)=\"carrinhoPage()\" *ngIf=\"total_carrinho != undefined\">\n          <div class=\"rodape-carrinho center\">\n          <ion-icon color=\"danger\" name=\"cart\"></ion-icon>\n          Carrinho: R$ {{total_carrinho}}\n        </div>\n        </ion-col>\n\n        <ion-col *ngIf=\"total_carrinho === undefined\">\n          <div class=\"rodape-carrinho center\">\n          <ion-icon color=\"danger\" name=\"cart\"></ion-icon>\n          Carrinho: Sem produtos\n        </div>\n        </ion-col>\n\n\n        </ion-row>\n        \n        </ion-grid>\n      \n    \n      \n\n</ion-footer>\n\n\n\n\n";
    /***/
  },

  /***/
  "./src/app/categorias/categorias-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/categorias/categorias-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: CategoriasPageRoutingModule */

  /***/
  function srcAppCategoriasCategoriasRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoriasPageRoutingModule", function () {
      return CategoriasPageRoutingModule;
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


    var _categorias_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./categorias.page */
    "./src/app/categorias/categorias.page.ts");

    var routes = [{
      path: '',
      component: _categorias_page__WEBPACK_IMPORTED_MODULE_3__["CategoriasPage"]
    }];

    var CategoriasPageRoutingModule = function CategoriasPageRoutingModule() {
      _classCallCheck(this, CategoriasPageRoutingModule);
    };

    CategoriasPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CategoriasPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/categorias/categorias.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/categorias/categorias.module.ts ***!
    \*************************************************/

  /*! exports provided: CategoriasPageModule */

  /***/
  function srcAppCategoriasCategoriasModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoriasPageModule", function () {
      return CategoriasPageModule;
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


    var _categorias_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./categorias-routing.module */
    "./src/app/categorias/categorias-routing.module.ts");
    /* harmony import */


    var _categorias_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./categorias.page */
    "./src/app/categorias/categorias.page.ts");

    var CategoriasPageModule = function CategoriasPageModule() {
      _classCallCheck(this, CategoriasPageModule);
    };

    CategoriasPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _categorias_routing_module__WEBPACK_IMPORTED_MODULE_5__["CategoriasPageRoutingModule"]],
      declarations: [_categorias_page__WEBPACK_IMPORTED_MODULE_6__["CategoriasPage"]]
    })], CategoriasPageModule);
    /***/
  },

  /***/
  "./src/app/categorias/categorias.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/categorias/categorias.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCategoriasCategoriasPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".titulo-home {\n  font-size: 13px;\n}\n\n.welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\n.titulo-produto {\n  font-size: 14px;\n  font-weight: 300;\n}\n\n.preco-produto {\n  font-size: 13px;\n  font-weight: 200;\n}\n\n.margin-l {\n  margin-left: 10px;\n}\n\n.rodape-carrinho {\n  color: 148;\n  text-align: center;\n  font-size: 15px;\n  margin-top: 15px;\n}\n\nion-toolbar.in-toolbar.md.toolbar-title-default.hydrated {\n  background: #FED80B;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0ZWdvcmlhcy9GOlxcUHJvamV0b3NcXGRlbGl2ZXJ5QXBwL3NyY1xcYXBwXFxjYXRlZ29yaWFzXFxjYXRlZ29yaWFzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvY2F0ZWdvcmlhcy9jYXRlZ29yaWFzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxtQkFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvY2F0ZWdvcmlhcy9jYXRlZ29yaWFzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXR1bG8taG9tZSB7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuXHJcbi53ZWxjb21lLWNhcmQgaW9uLWltZyB7XHJcbiAgICBtYXgtaGVpZ2h0OiAzNXZoO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnRpdHVsby1wcm9kdXRvIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbn1cclxuXHJcbi5wcmVjby1wcm9kdXRvIHtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbn1cclxuXHJcbi5tYXJnaW4tbCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG5cclxuLnJvZGFwZS1jYXJyaW5obyB7XHJcbiAgICBjb2xvcjogcmVkKCRjb2xvcjogIzk0MGMwYyk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59XHJcbmlvbi10b29sYmFyLmluLXRvb2xiYXIubWQudG9vbGJhci10aXRsZS1kZWZhdWx0Lmh5ZHJhdGVkIHtcclxuICAgIGJhY2tncm91bmQ6ICNGRUQ4MEI7XHJcbn1cclxuIiwiLnRpdHVsby1ob21lIHtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4ud2VsY29tZS1jYXJkIGlvbi1pbWcge1xuICBtYXgtaGVpZ2h0OiAzNXZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4udGl0dWxvLXByb2R1dG8ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbi5wcmVjby1wcm9kdXRvIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogMjAwO1xufVxuXG4ubWFyZ2luLWwge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLnJvZGFwZS1jYXJyaW5obyB7XG4gIGNvbG9yOiAxNDg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG5pb24tdG9vbGJhci5pbi10b29sYmFyLm1kLnRvb2xiYXItdGl0bGUtZGVmYXVsdC5oeWRyYXRlZCB7XG4gIGJhY2tncm91bmQ6ICNGRUQ4MEI7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/categorias/categorias.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/categorias/categorias.page.ts ***!
    \***********************************************/

  /*! exports provided: CategoriasPage */

  /***/
  function srcAppCategoriasCategoriasPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoriasPage", function () {
      return CategoriasPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic-native/native-storage/ngx */
    "./node_modules/@ionic-native/native-storage/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _services_post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../services/post.service */
    "./src/app/services/post.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var CategoriasPage = /*#__PURE__*/function () {
      function CategoriasPage(storage, router, provider, toast) {
        _classCallCheck(this, CategoriasPage);

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

      _createClass(CategoriasPage, [{
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

            _this.listarCarrinho();
          });
          this.lista = [];
          this.start = 0;
          this.listarProdutos();
          this.url_site_img = this.provider.url_site_img_cat;
        }
      }, {
        key: "listarProdutos",
        value: function listarProdutos() {
          var _this2 = this;

          return new Promise(function (resolve) {
            var dados = {
              requisicao: 'listar-cat',
              limit: _this2.limit,
              start: _this2.start
            };

            _this2.provider.dadosApi(dados, 'apiProdutos.php').subscribe(function (data) {
              if (data['result'] == '0') {
                _this2.ionViewWillEnter();
              } else {
                _this2.lista = [];

                var _iterator = _createForOfIteratorHelper(data['result']),
                    _step;

                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    var item = _step.value;

                    _this2.lista.push(item);

                    _this2.total_itens = data['total'];
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
        key: "produtos",
        value: function produtos() {
          this.router.navigate(['/produtos']);
        }
      }, {
        key: "verProdutos",
        value: function verProdutos(id) {
          this.router.navigate(['/produtos/' + id]);
        } //barra de rolagem

      }, {
        key: "loadData",
        value: function loadData(event) {
          var _this3 = this;

          this.start += this.limit;
          setTimeout(function () {
            _this3.listarProdutos().then(function () {
              event.target.complete();
            });
          }, 3000);
        }
      }, {
        key: "carrinhoPage",
        value: function carrinhoPage() {
          this.router.navigate(['/carrinho']);
        }
      }, {
        key: "listarCarrinho",
        value: function listarCarrinho() {
          var _this4 = this;

          return new Promise(function (resolve) {
            var dados = {
              requisicao: 'listar-carrinho',
              cpf: _this4.cpf
            };

            _this4.provider.dadosApi(dados, 'apiProdutos.php').subscribe(function (data) {
              _this4.total_carrinho = data['total'];
              resolve(true);
            });
          });
        } //atualizar o list view

      }, {
        key: "doRefresh",
        value: function doRefresh(event) {
          var _this5 = this;

          setTimeout(function () {
            _this5.ionViewWillEnter();

            event.target.complete();
          }, 500);
        }
      }]);

      return CategoriasPage;
    }();

    CategoriasPage.ctorParameters = function () {
      return [{
        type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_1__["NativeStorage"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _services_post_service__WEBPACK_IMPORTED_MODULE_3__["Post"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }];
    };

    CategoriasPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
      selector: 'app-categorias',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./categorias.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/categorias/categorias.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./categorias.page.scss */
      "./src/app/categorias/categorias.page.scss"))["default"]]
    })], CategoriasPage);
    /***/
  }
}]);
//# sourceMappingURL=categorias-categorias-module-es5.js.map