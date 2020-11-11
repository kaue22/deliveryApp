function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mostrar-produtos-mostrar-produtos-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/mostrar-produtos/mostrar-produtos.page.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mostrar-produtos/mostrar-produtos.page.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMostrarProdutosMostrarProdutosPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header >\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\" (click)=\"Pedidos()\">\n      <ion-button>\n        <ion-icon  name=\"arrow-back\"> </ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Produtos do Pedido</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item-sliding *ngFor=\"let item of lista\">\n       \n       \n    <ion-item>\n      <ion-thumbnail slot=\"start\">\n        <ion-img src=\"{{url_site_img}}{{item.imagem}}\"></ion-img>\n      </ion-thumbnail>\n      <ion-label>\n        \n        {{item.nome}} \n        <h6><span>R$ {{item.valor}}</span>  - QTD {{item.quantidade}}</h6>\n  \n      </ion-label>\n      \n   \n    </ion-item>\n  \n    \n  </ion-item-sliding>\n  </ion-list>\n  \n  \n  </ion-content>\n";
    /***/
  },

  /***/
  "./src/app/mostrar-produtos/mostrar-produtos-routing.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/mostrar-produtos/mostrar-produtos-routing.module.ts ***!
    \*********************************************************************/

  /*! exports provided: MostrarProdutosPageRoutingModule */

  /***/
  function srcAppMostrarProdutosMostrarProdutosRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MostrarProdutosPageRoutingModule", function () {
      return MostrarProdutosPageRoutingModule;
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


    var _mostrar_produtos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./mostrar-produtos.page */
    "./src/app/mostrar-produtos/mostrar-produtos.page.ts");

    var routes = [{
      path: '',
      component: _mostrar_produtos_page__WEBPACK_IMPORTED_MODULE_3__["MostrarProdutosPage"]
    }];

    var MostrarProdutosPageRoutingModule = function MostrarProdutosPageRoutingModule() {
      _classCallCheck(this, MostrarProdutosPageRoutingModule);
    };

    MostrarProdutosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MostrarProdutosPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/mostrar-produtos/mostrar-produtos.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/mostrar-produtos/mostrar-produtos.module.ts ***!
    \*************************************************************/

  /*! exports provided: MostrarProdutosPageModule */

  /***/
  function srcAppMostrarProdutosMostrarProdutosModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MostrarProdutosPageModule", function () {
      return MostrarProdutosPageModule;
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


    var _mostrar_produtos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./mostrar-produtos-routing.module */
    "./src/app/mostrar-produtos/mostrar-produtos-routing.module.ts");
    /* harmony import */


    var _mostrar_produtos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./mostrar-produtos.page */
    "./src/app/mostrar-produtos/mostrar-produtos.page.ts");

    var MostrarProdutosPageModule = function MostrarProdutosPageModule() {
      _classCallCheck(this, MostrarProdutosPageModule);
    };

    MostrarProdutosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _mostrar_produtos_routing_module__WEBPACK_IMPORTED_MODULE_5__["MostrarProdutosPageRoutingModule"]],
      declarations: [_mostrar_produtos_page__WEBPACK_IMPORTED_MODULE_6__["MostrarProdutosPage"]]
    })], MostrarProdutosPageModule);
    /***/
  },

  /***/
  "./src/app/mostrar-produtos/mostrar-produtos.page.scss":
  /*!*************************************************************!*\
    !*** ./src/app/mostrar-produtos/mostrar-produtos.page.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMostrarProdutosMostrarProdutosPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vc3RyYXItcHJvZHV0b3MvbW9zdHJhci1wcm9kdXRvcy5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/mostrar-produtos/mostrar-produtos.page.ts":
  /*!***********************************************************!*\
    !*** ./src/app/mostrar-produtos/mostrar-produtos.page.ts ***!
    \***********************************************************/

  /*! exports provided: MostrarProdutosPage */

  /***/
  function srcAppMostrarProdutosMostrarProdutosPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MostrarProdutosPage", function () {
      return MostrarProdutosPage;
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var MostrarProdutosPage = /*#__PURE__*/function () {
      function MostrarProdutosPage(actRouter, router, provider) {
        _classCallCheck(this, MostrarProdutosPage);

        this.actRouter = actRouter;
        this.router = router;
        this.provider = provider;
        this.lista = [];
      }

      _createClass(MostrarProdutosPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.actRouter.params.subscribe(function (data) {
            _this.id = data.id;
          });
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.lista = [];
          this.listarProdutos();
          this.url_site_img = this.provider.url_site_img_produtos;
        }
      }, {
        key: "Pedidos",
        value: function Pedidos() {
          this.router.navigate(['/pedidos']);
        }
      }, {
        key: "listarProdutos",
        value: function listarProdutos() {
          var _this2 = this;

          return new Promise(function (resolve) {
            var dados = {
              requisicao: 'listar-produtos',
              id: _this2.id
            };

            _this2.provider.dadosApi(dados, 'apiPedidos.php').subscribe(function (data) {
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

      return MostrarProdutosPage;
    }();

    MostrarProdutosPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_post_service__WEBPACK_IMPORTED_MODULE_1__["Post"]
      }];
    };

    MostrarProdutosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'app-mostrar-produtos',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./mostrar-produtos.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/mostrar-produtos/mostrar-produtos.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./mostrar-produtos.page.scss */
      "./src/app/mostrar-produtos/mostrar-produtos.page.scss"))["default"]]
    })], MostrarProdutosPage);
    /***/
  }
}]);
//# sourceMappingURL=mostrar-produtos-mostrar-produtos-module-es5.js.map