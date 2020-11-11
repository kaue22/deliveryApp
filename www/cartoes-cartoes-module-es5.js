function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cartoes-cartoes-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/cartoes/cartoes.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cartoes/cartoes.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCartoesCartoesPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"dark\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Cartão Fidelidade</ion-title>\n    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n<h4>Cartão Fidelidade</h4>\n<span>A cada 5 compras no site você ganha uma bebida!!</span><br>\n\n<ion-row class=\"linha\">\n\n  \n  <ion-col size=\"2\">\n    <ion-img src=\"{{url_site_img}}carimbado.png\" *ngIf=\"cartao > 0\"></ion-img>\n    <ion-img src=\"{{url_site_img}}nao-carimbado.png\" *ngIf=\"cartao <= 0\"></ion-img>\n  </ion-col>\n\n  <ion-col size=\"2\">\n    <ion-img src=\"{{url_site_img}}carimbado.png\" *ngIf=\"cartao > 1\"></ion-img>\n    <ion-img src=\"{{url_site_img}}nao-carimbado.png\" *ngIf=\"cartao <= 1\"></ion-img>\n  </ion-col>\n\n  <ion-col size=\"2\">\n    <ion-img src=\"{{url_site_img}}carimbado.png\" *ngIf=\"cartao > 2\"></ion-img>\n    <ion-img src=\"{{url_site_img}}nao-carimbado.png\" *ngIf=\"cartao <= 2\"></ion-img>\n  </ion-col>\n\n  <ion-col size=\"2\">\n    <ion-img src=\"{{url_site_img}}carimbado.png\" *ngIf=\"cartao > 3\"></ion-img>\n    <ion-img src=\"{{url_site_img}}nao-carimbado.png\" *ngIf=\"cartao <= 3\"></ion-img>\n  </ion-col>\n\n  <ion-col size=\"2\">\n    <ion-img src=\"{{url_site_img}}carimbado.png\" *ngIf=\"cartao > 4\"></ion-img>\n    <ion-img src=\"{{url_site_img}}nao-carimbado.png\" *ngIf=\"cartao <= 4\"></ion-img>\n  </ion-col>\n  \n</ion-row> \n\n<div *ngIf=\"mensagem === '1'\">Você não está Logado! Faça seu Login</div>\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/cartoes/cartoes-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/cartoes/cartoes-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: CartoesPageRoutingModule */

  /***/
  function srcAppCartoesCartoesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartoesPageRoutingModule", function () {
      return CartoesPageRoutingModule;
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


    var _cartoes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./cartoes.page */
    "./src/app/cartoes/cartoes.page.ts");

    var routes = [{
      path: '',
      component: _cartoes_page__WEBPACK_IMPORTED_MODULE_3__["CartoesPage"]
    }];

    var CartoesPageRoutingModule = function CartoesPageRoutingModule() {
      _classCallCheck(this, CartoesPageRoutingModule);
    };

    CartoesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CartoesPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/cartoes/cartoes.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/cartoes/cartoes.module.ts ***!
    \*******************************************/

  /*! exports provided: CartoesPageModule */

  /***/
  function srcAppCartoesCartoesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartoesPageModule", function () {
      return CartoesPageModule;
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


    var _cartoes_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./cartoes-routing.module */
    "./src/app/cartoes/cartoes-routing.module.ts");
    /* harmony import */


    var _cartoes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./cartoes.page */
    "./src/app/cartoes/cartoes.page.ts");

    var CartoesPageModule = function CartoesPageModule() {
      _classCallCheck(this, CartoesPageModule);
    };

    CartoesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _cartoes_routing_module__WEBPACK_IMPORTED_MODULE_5__["CartoesPageRoutingModule"]],
      declarations: [_cartoes_page__WEBPACK_IMPORTED_MODULE_6__["CartoesPage"]]
    })], CartoesPageModule);
    /***/
  },

  /***/
  "./src/app/cartoes/cartoes.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/cartoes/cartoes.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppCartoesCartoesPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".linha {\n  text-align: center;\n  margin-top: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FydG9lcy9GOlxcUHJvamV0b3NcXGRlbGl2ZXJ5QXBwL3NyY1xcYXBwXFxjYXJ0b2VzXFxjYXJ0b2VzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvY2FydG9lcy9jYXJ0b2VzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NhcnRvZXMvY2FydG9lcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGluaGF7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6MjVweDtcclxufSIsIi5saW5oYSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMjVweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/cartoes/cartoes.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/cartoes/cartoes.page.ts ***!
    \*****************************************/

  /*! exports provided: CartoesPage */

  /***/
  function srcAppCartoesCartoesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartoesPage", function () {
      return CartoesPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/native-storage/ngx */
    "./node_modules/@ionic-native/native-storage/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _services_post_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../services/post.service */
    "./src/app/services/post.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CartoesPage = /*#__PURE__*/function () {
      function CartoesPage(router, toast, storage, provider) {
        _classCallCheck(this, CartoesPage);

        this.router = router;
        this.toast = toast;
        this.storage = storage;
        this.provider = provider;
        this.mensagem = "1";
      }

      _createClass(CartoesPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.listarCartoes();
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this = this;

          this.storage.getItem('session_storage').then(function (res) {
            _this.dadosLogin = res;
            _this.cpf = _this.dadosLogin.cpf;
            _this.url_site_img = _this.provider.url_site_img;

            _this.listarCartoes();
          }); //this.cpf = '777.777.777-77';
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
                      message: 'Você precisa está logado!',
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
        key: "listarCartoes",
        value: function listarCartoes() {
          var _this2 = this;

          return new Promise(function (resolve) {
            var dados = {
              requisicao: 'listar-cartoes',
              cpf: _this2.cpf
            };

            if (_this2.cpf != '') {
              _this2.provider.dadosApi(dados, 'apiPedidos.php').subscribe(function (data) {
                if (data['cartao'] == null) {} else {
                  _this2.cartao = data['cartao'];
                  _this2.mensagem = 'Entrou';
                }

                resolve(true);
              });
            }
          });
        }
      }]);

      return CartoesPage;
    }();

    CartoesPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }, {
        type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__["NativeStorage"]
      }, {
        type: _services_post_service__WEBPACK_IMPORTED_MODULE_4__["Post"]
      }];
    };

    CartoesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
      selector: 'app-cartoes',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./cartoes.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/cartoes/cartoes.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./cartoes.page.scss */
      "./src/app/cartoes/cartoes.page.scss"))["default"]]
    })], CartoesPage);
    /***/
  }
}]);
//# sourceMappingURL=cartoes-cartoes-module-es5.js.map