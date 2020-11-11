function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cadastro-cadastro-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/cadastro/cadastro.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cadastro/cadastro.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCadastroCadastroPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<link href=\"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;1,500&display=swap\" rel=\"stylesheet\"> \n<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\" (click)=\"login()\">\n      <ion-button>\n        <ion-icon  name=\"arrow-back\"> </ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>JAZZ BURGUER</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n\n<ion-content class=\"ion-padding\">\n  <ion-item color = \"newColor\">\n\n  \n    <ion-label position=\"floating\" >\n      Nome\n    </ion-label>\n\n \n    <ion-input [(ngModel)]=\"nome\">\n\n    </ion-input>\n\n  </ion-item>\n\n  \n  <ion-row>\n    <ion-col>\n      <ion-item color = \"newColor\">\n        <ion-label position=\"floating\">\n          CPF\n        </ion-label>\n        <ion-input [(ngModel)]=\"cpf\">\n    \n        </ion-input>\n      </ion-item>\n    </ion-col>\n\n    <ion-col>\n      <ion-item color = \"newColor\">\n        <ion-label position=\"floating\">\n          Telefone\n        </ion-label>\n        <ion-input [(ngModel)]=\"telefone\">\n    \n        </ion-input>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n\n  \n\n\n  \n\n\n  <ion-item color = \"newColor\">\n    <ion-label position=\"floating\">\n      Email\n    </ion-label>\n    <ion-input [(ngModel)]=\"usuario\">\n\n    </ion-input>\n  </ion-item>\n\n\n  <ion-item color = \"newColor\">\n    <ion-label position=\"floating\">\n      Senha\n    </ion-label>\n    <ion-input [(ngModel)]=\"senha\">\n\n    </ion-input>\n  </ion-item>\n\n<ion-row>\n  <ion-col size=\"9\">\n    <ion-item color = \"newColor\">\n      <ion-label position=\"floating\">\n        Rua\n      </ion-label>\n      <ion-input [(ngModel)]=\"rua\"></ion-input>\n  \n     \n    </ion-item>\n  </ion-col>\n\n  <ion-col size=\"3\">\n    <ion-item color = \"newColor\">\n      <ion-label position=\"floating\">\n        Número\n      </ion-label>\n      <ion-input [(ngModel)]=\"numero\"></ion-input>\n  \n      \n    </ion-item>\n  </ion-col>\n</ion-row>\n\n\n  \n\n  <ion-item color = \"newColor\">\n    <ion-label >Bairro</ion-label>\n    <ion-select placeholder=\"Selecione\" [(ngModel)]=\"bairro\" >\n      <ion-select-option *ngFor=\"let item of lista\" value=\"{{item.nome}}\">{{item.nome}}</ion-select-option>\n          \n    </ion-select>\n  </ion-item>\n\n\n  <ion-row>\n    <ion-col size=\"8\">\n      <ion-item color = \"newColor\">\n        <ion-label position=\"floating\">\n          Cidade\n        </ion-label>\n        <ion-input [(ngModel)]=\"cidade\"></ion-input>\n    \n       \n      </ion-item>\n    </ion-col>\n  \n    <ion-col size=\"4\">\n      <ion-item color = \"newColor\" class = \"ion-item-border\">\n        <ion-label position=\"floating\">\n          CEP\n        </ion-label>\n        <ion-input [(ngModel)]=\"cep\"></ion-input>\n    \n        \n      </ion-item>\n    </ion-col>\n  </ion-row>\n\n  <ion-button color=\"primary\" expand=\"block\" (click)=\"cadastro()\">\n    Salvar\n  </ion-button>\n\n \n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/cadastro/cadastro-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/cadastro/cadastro-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: CadastroPageRoutingModule */

  /***/
  function srcAppCadastroCadastroRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CadastroPageRoutingModule", function () {
      return CadastroPageRoutingModule;
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


    var _cadastro_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./cadastro.page */
    "./src/app/cadastro/cadastro.page.ts");

    var routes = [{
      path: '',
      component: _cadastro_page__WEBPACK_IMPORTED_MODULE_3__["CadastroPage"]
    }];

    var CadastroPageRoutingModule = function CadastroPageRoutingModule() {
      _classCallCheck(this, CadastroPageRoutingModule);
    };

    CadastroPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CadastroPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/cadastro/cadastro.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/cadastro/cadastro.module.ts ***!
    \*********************************************/

  /*! exports provided: CadastroPageModule */

  /***/
  function srcAppCadastroCadastroModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CadastroPageModule", function () {
      return CadastroPageModule;
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


    var _cadastro_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./cadastro-routing.module */
    "./src/app/cadastro/cadastro-routing.module.ts");
    /* harmony import */


    var _cadastro_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./cadastro.page */
    "./src/app/cadastro/cadastro.page.ts");

    var CadastroPageModule = function CadastroPageModule() {
      _classCallCheck(this, CadastroPageModule);
    };

    CadastroPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _cadastro_routing_module__WEBPACK_IMPORTED_MODULE_5__["CadastroPageRoutingModule"]],
      declarations: [_cadastro_page__WEBPACK_IMPORTED_MODULE_6__["CadastroPage"]]
    })], CadastroPageModule);
    /***/
  },

  /***/
  "./src/app/cadastro/cadastro.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/cadastro/cadastro.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppCadastroCadastroPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  --background: #FFFFFF;\n}\n\nion-toolbar {\n  --background: #ffff00;\n}\n\nion-title {\n  color: #000000;\n  font-family: \"Poppins\", sans-serif;\n}\n\n.item .item-content {\n  background-color: transparent !important;\n}\n\n.item-inner {\n  border-radius: 100%;\n}\n\nion-input.ng-pristine.ng-valid.sc-ion-input-md-h.sc-ion-input-md-s.md.hydrated.ng-touched.ion-pristine.ion-valid.ion-touched {\n  border-radius: 100%;\n}\n\nion-label#ion-input-0-lbl {\n  color: black;\n}\n\nion-label#ion-input-1-lbl {\n  color: black;\n}\n\nion-label#ion-input-2-lbl {\n  color: black;\n}\n\nion-label#ion-input-3-lbl {\n  color: black;\n}\n\nion-label#ion-input-4-lbl {\n  color: black;\n}\n\nion-label#ion-input-5-lbl {\n  color: black;\n}\n\nion-label#ion-input-6-lbl {\n  color: black;\n}\n\nion-label#ion-input-7-lbl {\n  color: black;\n}\n\nion-label#ion-input-8-lbl {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FkYXN0cm8vRjpcXFByb2pldG9zXFxkZWxpdmVyeUFwcC9zcmNcXGFwcFxcY2FkYXN0cm9cXGNhZGFzdHJvLnBhZ2Uuc2NzcyIsInNyYy9hcHAvY2FkYXN0cm8vY2FkYXN0cm8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7QUNDSjs7QURFQTtFQUNJLHFCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxjQUFBO0VBQ0Esa0NBQUE7QUNFSjs7QURBQTtFQUNJLHdDQUFBO0FDR0o7O0FEREE7RUFDSSxtQkFBQTtBQ0lKOztBRERBO0VBQ0ksbUJBQUE7QUNJSjs7QUREQTtFQUNJLFlBQUE7QUNJSjs7QURGQTtFQUNJLFlBQUE7QUNLSjs7QURIQTtFQUNJLFlBQUE7QUNNSjs7QURKQTtFQUNJLFlBQUE7QUNPSjs7QURMQTtFQUNJLFlBQUE7QUNRSjs7QUROQTtFQUNJLFlBQUE7QUNTSjs7QURQQTtFQUNJLFlBQUE7QUNVSjs7QURSQTtFQUNJLFlBQUE7QUNXSjs7QURUQTtFQUNJLFlBQUE7QUNZSiIsImZpbGUiOiJzcmMvYXBwL2NhZGFzdHJvL2NhZGFzdHJvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogI0ZGRkZGRjtcclxufVxyXG5cclxuaW9uLXRvb2xiYXJ7XHJcbiAgICAtLWJhY2tncm91bmQ6ICAjZmZmZjAwO1xyXG59XHJcbmlvbi10aXRsZXtcclxuICAgIGNvbG9yOiMwMDAwMDA7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5pdGVtIC5pdGVtLWNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG4uaXRlbS1pbm5lcntcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbn1cclxuXHJcbmlvbi1pbnB1dC5uZy1wcmlzdGluZS5uZy12YWxpZC5zYy1pb24taW5wdXQtbWQtaC5zYy1pb24taW5wdXQtbWQtcy5tZC5oeWRyYXRlZC5uZy10b3VjaGVkLmlvbi1wcmlzdGluZS5pb24tdmFsaWQuaW9uLXRvdWNoZWR7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG59XHJcblxyXG5pb24tbGFiZWwjaW9uLWlucHV0LTAtbGJsIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5pb24tbGFiZWwjaW9uLWlucHV0LTEtbGJse1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcbmlvbi1sYWJlbCNpb24taW5wdXQtMi1sYmx7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuaW9uLWxhYmVsI2lvbi1pbnB1dC0zLWxibHtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5pb24tbGFiZWwjaW9uLWlucHV0LTQtbGJse1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcbmlvbi1sYWJlbCNpb24taW5wdXQtNS1sYmx7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuaW9uLWxhYmVsI2lvbi1pbnB1dC02LWxibHtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5pb24tbGFiZWwjaW9uLWlucHV0LTctbGJse1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcbmlvbi1sYWJlbCNpb24taW5wdXQtOC1sYmx7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuIiwiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6ICNGRkZGRkY7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmZjAwO1xufVxuXG5pb24tdGl0bGUge1xuICBjb2xvcjogIzAwMDAwMDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xufVxuXG4uaXRlbSAuaXRlbS1jb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuLml0ZW0taW5uZXIge1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xufVxuXG5pb24taW5wdXQubmctcHJpc3RpbmUubmctdmFsaWQuc2MtaW9uLWlucHV0LW1kLWguc2MtaW9uLWlucHV0LW1kLXMubWQuaHlkcmF0ZWQubmctdG91Y2hlZC5pb24tcHJpc3RpbmUuaW9uLXZhbGlkLmlvbi10b3VjaGVkIHtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbn1cblxuaW9uLWxhYmVsI2lvbi1pbnB1dC0wLWxibCB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuaW9uLWxhYmVsI2lvbi1pbnB1dC0xLWxibCB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuaW9uLWxhYmVsI2lvbi1pbnB1dC0yLWxibCB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuaW9uLWxhYmVsI2lvbi1pbnB1dC0zLWxibCB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuaW9uLWxhYmVsI2lvbi1pbnB1dC00LWxibCB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuaW9uLWxhYmVsI2lvbi1pbnB1dC01LWxibCB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuaW9uLWxhYmVsI2lvbi1pbnB1dC02LWxibCB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuaW9uLWxhYmVsI2lvbi1pbnB1dC03LWxibCB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuaW9uLWxhYmVsI2lvbi1pbnB1dC04LWxibCB7XG4gIGNvbG9yOiBibGFjaztcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/cadastro/cadastro.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/cadastro/cadastro.page.ts ***!
    \*******************************************/

  /*! exports provided: CadastroPage */

  /***/
  function srcAppCadastroCadastroPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CadastroPage", function () {
      return CadastroPage;
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

    var CadastroPage = /*#__PURE__*/function () {
      function CadastroPage(storage, actRouter, router, provider, toastController) {
        _classCallCheck(this, CadastroPage);

        this.storage = storage;
        this.actRouter = actRouter;
        this.router = router;
        this.provider = provider;
        this.toastController = toastController;
        this.usuario = "";
        this.senha = "";
        this.nome = "";
        this.telefone = "";
        this.cpf = "";
        this.rua = "";
        this.numero = "";
        this.bairro = "";
        this.cidade = "";
        this.cep = "";
        this.lista = [];
      }

      _createClass(CadastroPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.lista = [];
          this.listarLocais();
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
                    return this.toastController.create({
                      message: texto,
                      duration: 1000
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
        key: "login",
        value: function login() {
          this.router.navigate(['/login']);
        }
      }, {
        key: "cadastro",
        value: function cadastro() {
          var _this = this;

          return new Promise(function (resolve) {
            var dados = {
              requisicao: 'add',
              nome: _this.nome,
              rua: _this.rua,
              telefone: _this.telefone,
              usuario: _this.usuario,
              numero: _this.numero,
              cpf: _this.cpf,
              bairro: _this.bairro,
              cidade: _this.cidade,
              senha: _this.senha,
              cep: _this.cep
            };

            _this.provider.dadosApi(dados, 'apiLogin.php').subscribe(function (data) {
              _this.mensagemSalvar(data['result']);

              if (data['result'] == 'Salvo com Sucesso!') {
                _this.router.navigate(['/login']);
              }
            });
          });
        }
      }, {
        key: "listarLocais",
        value: function listarLocais() {
          var _this2 = this;

          return new Promise(function (resolve) {
            var dados = {
              requisicao: 'listar-locais'
            };

            _this2.provider.dadosApi(dados, 'apiLogin.php').subscribe(function (data) {
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

      return CadastroPage;
    }();

    CadastroPage.ctorParameters = function () {
      return [{
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

    CadastroPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'app-cadastro',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./cadastro.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/cadastro/cadastro.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./cadastro.page.scss */
      "./src/app/cadastro/cadastro.page.scss"))["default"]]
    })], CadastroPage);
    /***/
  }
}]);
//# sourceMappingURL=cadastro-cadastro-module-es5.js.map