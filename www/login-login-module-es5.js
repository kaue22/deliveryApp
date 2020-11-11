function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html":
  /*!*****************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content class=\"ion-padding animated fadeIn login auth-page\">\n  \n  <div class=\"auth-content\">\n\n    <!-- Logo -->\n    <div padding-horizontal text-center class=\"animated fadeInDown\">\n      <div class=\"logo\"></div>\n      <h4 no-margin>\n      \n          <h4 class=\"img-login center\">JAZZ BURGUER</h4>\n       \n       \n       \n       </h4>\n    </div>\n\n    <!-- Login form -->\n    <div  class=\"list-form\">\n      <ion-item no-padding class=\"animated fadeInUp\">\n        <ion-label position=\"floating\">\n          <ion-icon name=\"mail\" item-start></ion-icon>\n          Usuário\n        </ion-label>\n        <ion-input color=\"light\" type=\"text\" [(ngModel)]=\"usuario\"></ion-input>\n      </ion-item>\n      <p ion-text class=\"text08\">\n        <ion-text color=\"warning\">\n          Campo Requerido\n        </ion-text>\n      </p>\n\n      <ion-item no-padding class=\"animated fadeInUp\">\n        <ion-label position=\"floating\">\n          <ion-icon name=\"lock-closed\" item-start></ion-icon>\n          Senha\n        </ion-label>\n        <ion-input color=\"light\" type=\"password\" [(ngModel)]=\"senha\"></ion-input>\n      </ion-item>\n      <p ion-text color=\"warning\" class=\"text08\">\n        <ion-text color=\"warning\">\n          Campo Requerido\n        </ion-text>\n        </p>\n      </div>\n\n    \n    <br><br>\n\n    <div>\n      <ion-button icon-left size=\"medium\" expand=\"full\" shape=\"round\" color=\"dark\" (click)=\"login()\"  tappable>\n        <ion-icon name=\"log-in\"></ion-icon>\n        Login\n      </ion-button>\n\n     \n\n    </div>\n\n    <!-- Other links -->\n  \n\n  </div>\n</ion-content>\n\n\n\n\n<ion-footer>\n \n\n  <ion-grid>\n    <ion-row>\n      <ion-col >\n        <ion-tab-button (click)=\"cadastro()\">\n          <ion-icon color=\"primary\" name=\"list-circle\"></ion-icon>\n          <ion-label>Cadastro</ion-label>\n        </ion-tab-button>\n      </ion-col>\n\n      <ion-col>\n        <ion-tab-button (click)=\"recuperarModal()\">\n          <ion-icon color=\"primary\" name=\"list-circle\"></ion-icon>\n          <ion-label>Recuperar</ion-label>\n        </ion-tab-button>\n      </ion-col>\n\n      </ion-row>\n      \n      </ion-grid>\n    \n  \n    \n\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/login/login-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/login/login-routing.module.ts ***!
    \***********************************************/

  /*! exports provided: LoginPageRoutingModule */

  /***/
  function srcAppLoginLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
      return LoginPageRoutingModule;
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


    var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/login/login.page.ts");

    var routes = [{
      path: '',
      component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }];

    var LoginPageRoutingModule = function LoginPageRoutingModule() {
      _classCallCheck(this, LoginPageRoutingModule);
    };

    LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LoginPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/login/login.module.ts":
  /*!***************************************!*\
    !*** ./src/app/login/login.module.ts ***!
    \***************************************/

  /*! exports provided: LoginPageModule */

  /***/
  function srcAppLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
      return LoginPageModule;
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


    var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login-routing.module */
    "./src/app/login/login-routing.module.ts");
    /* harmony import */


    var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/login/login.page.ts");

    var LoginPageModule = function LoginPageModule() {
      _classCallCheck(this, LoginPageModule);
    };

    LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]],
      declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })], LoginPageModule);
    /***/
  },

  /***/
  "./src/app/login/login.page.scss":
  /*!***************************************!*\
    !*** ./src/app/login/login.page.scss ***!
    \***************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginLoginPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-item {\n  --ion-item-background: #ffffff;\n}\n\n.bg-white {\n  background-color: #ffff00;\n}\n\n.bg-light {\n  background-color: #ffff00;\n}\n\n.bg-dark {\n  background-color: #ffff00;\n}\n\n.bg-primary {\n  background-color: #ffff00;\n}\n\n.bg-secondary {\n  background-color: #ffff00;\n}\n\n.bg-tertiary {\n  background-color: #ffff00;\n}\n\n.bg-profile {\n  background-image: #ffff00;\n}\n\n.bg-main {\n  background-image: #ffff00;\n}\n\n.w100 {\n  width: 100%;\n}\n\n.bold,\n.fw500 {\n  font-weight: 500 !important;\n}\n\n.fw400 {\n  font-weight: 400 !important;\n}\n\n.fw700 {\n  font-weight: 700 !important;\n}\n\n.text08 {\n  font-size: 0.8rem;\n}\n\n.text1 {\n  font-size: 1rem !important;\n}\n\n.text12 {\n  font-size: 1.2rem;\n}\n\n.text15 {\n  font-size: 1.5rem;\n}\n\n.text20 {\n  font-size: 2rem;\n}\n\n.text-white {\n  color: #fff;\n}\n\n.text-primary {\n  color: var(--ion-color-primary);\n}\n\n.text-secondary {\n  color: var(--ion-color-secondary);\n}\n\n.text-dark {\n  color: var(--ion-color-dark);\n}\n\nion-toolbar.user-profile .user-avatar {\n  width: 68px;\n  height: 68px;\n}\n\nion-toolbar.user-profile .item-inner {\n  border-width: 0;\n}\n\nion-toolbar.ion-color-primary {\n  --ion-color-base: linear-gradient(135deg, var(--ion-color-dark), var(--ion-color-primary)) !important;\n}\n\nion-card.sc-ion-card-md-h {\n  box-shadow: 0 2px 4px rgba(var(--ion-color-dark-rgb), 0.24);\n}\n\n.auth-page {\n  background-image: #ffff00;\n}\n\n.auth-page .grid {\n  padding: 0;\n}\n\n.auth-page .grid .col {\n  padding: 0;\n}\n\n.auth-page .btn-group .button-ios,\n.auth-page .btn-group .button-md {\n  border-radius: 0;\n}\n\n.auth-page .btn-group .button-ios:first-of-type,\n.auth-page .btn-group .button-md:first-of-type {\n  border-radius: 2px 0 0 2px;\n}\n\n.auth-page .btn-group .button-ios:last-of-type,\n.auth-page .btn-group .button-md:last-of-type {\n  border-radius: 0 2px 2px 0;\n}\n\n.auth-page .auth-content {\n  margin: 0 5%;\n}\n\n.auth-page .auth-content .logo {\n  width: 20px;\n  height: 20px;\n  margin: 20px auto 8px;\n  border-radius: 10%;\n  background-size: 100%;\n}\n\n.auth-page .auth-content .list-form {\n  padding: 0;\n  margin-bottom: 0;\n}\n\n.auth-page .auth-content .list-form ion-item {\n  background: none;\n  padding: 0;\n}\n\n.auth-page .auth-content .list-form ion-item:first-child {\n  border-top: none;\n}\n\n.auth-page .auth-content .list-form ion-item:after {\n  display: none;\n}\n\n.auth-page .auth-content .list-form ion-item ion-label {\n  font-size: 1em;\n  color: var(--ion-color-light);\n}\n\n.auth-page .auth-content .list-form ion-item input {\n  color: var(--ion-color-light);\n}\n\nion-menu ion-header ion-toolbar.ion-color-dark {\n  --ion-color-base: linear-gradient(135deg, var(--ion-color-dark), var(--ion-color-primary)) !important;\n}\n\n.mto {\n  margin-top: 12px;\n}\n\n.mto ion-icon {\n  margin-bottom: -2px;\n}\n\n.icon-add {\n  color: #FFF;\n}\n\n.form-registrar {\n  --background: #ffff00;\n}\n\n.branco {\n  color: #FFF;\n}\n\n.red {\n  color: red;\n}\n\n.green {\n  color: green;\n}\n\n:host ion-content {\n  --background: #FED80B;\n}\n\n.paz {\n  position: relative;\n  z-index: 10;\n}\n\n.img-text {\n  width: 80px;\n  margin: 0;\n  color: black;\n  border: 0ch;\n}\n\n.center {\n  margin: 0 auto;\n  text-align: center;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vRjpcXFByb2pldG9zXFxkZWxpdmVyeUFwcC9zcmNcXGFwcFxcbG9naW5cXGxvZ2luLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksOEJBQUE7QUNBSjs7QURJQTtFQUNFLHlCQUFBO0FDREY7O0FESUU7RUFDRSx5QkFBQTtBQ0RKOztBRElFO0VBQ0kseUJBQUE7QUNETjs7QURJRTtFQUNJLHlCQUFBO0FDRE47O0FESUU7RUFDSSx5QkFBQTtBQ0ROOztBRElFO0VBQ0kseUJBQUE7QUNETjs7QURHRTtFQUNFLHlCQUFBO0FDQUo7O0FER0U7RUFDSSx5QkFBQTtBQ0FOOztBRElFO0VBQ0UsV0FBQTtBQ0RKOztBRElFOztFQUVJLDJCQUFBO0FDRE47O0FESUU7RUFDSSwyQkFBQTtBQ0ROOztBREtFO0VBQ0UsMkJBQUE7QUNGSjs7QURLRTtFQUNFLGlCQUFBO0FDRko7O0FES0U7RUFDRSwwQkFBQTtBQ0ZKOztBREtFO0VBQ0UsaUJBQUE7QUNGSjs7QURLRTtFQUNFLGlCQUFBO0FDRko7O0FES0U7RUFDRSxlQUFBO0FDRko7O0FES0U7RUFDSSxXQUFBO0FDRk47O0FES0U7RUFDSSwrQkFBQTtBQ0ZOOztBREtFO0VBQ0UsaUNBQUE7QUNGSjs7QURLRTtFQUNFLDRCQUFBO0FDRko7O0FEU0k7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ05OOztBRFFJO0VBQ0UsZUFBQTtBQ05OOztBRFlJO0VBQ0UscUdBQUE7QUNUTjs7QURlSTtFQUNFLDJEQUFBO0FDWk47O0FEaUJFO0VBQ0UseUJBQUE7QUNkSjs7QURnQkk7RUFDRSxVQUFBO0FDZE47O0FEZU07RUFDRSxVQUFBO0FDYlI7O0FEa0JNOztFQUVFLGdCQUFBO0FDaEJSOztBRGlCUTs7RUFDRSwwQkFBQTtBQ2RWOztBRGdCUTs7RUFDRSwwQkFBQTtBQ2JWOztBRGtCSTtFQUNFLFlBQUE7QUNoQk47O0FEa0JNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBRUEscUJBQUE7QUNqQlI7O0FEb0JNO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0FDbEJSOztBRG9CUTtFQUNFLGdCQUFBO0VBQ0EsVUFBQTtBQ2xCVjs7QURvQlU7RUFDRSxnQkFBQTtBQ2xCWjs7QURxQlU7RUFDRSxhQUFBO0FDbkJaOztBRHNCVTtFQUNFLGNBQUE7RUFDQSw2QkFBQTtBQ3BCWjs7QUR1QlU7RUFDRSw2QkFBQTtBQ3JCWjs7QURpQ1E7RUFDRSxxR0FBQTtBQzlCVjs7QURvQ0U7RUFDRSxnQkFBQTtBQ2pDSjs7QURrQ0k7RUFDRSxtQkFBQTtBQ2hDTjs7QURxQ0U7RUFDRSxXQUFBO0FDbENKOztBRHNDRTtFQUNFLHFCQUFBO0FDbkNKOztBRHNDRTtFQUNJLFdBQUE7QUNuQ047O0FEc0NFO0VBQ0UsVUFBQTtBQ25DSjs7QURzQ0E7RUFDRSxZQUFBO0FDbkNGOztBRDBDUTtFQUNJLHFCQUFBO0FDdkNaOztBRDJDSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtBQ3hDUjs7QUQyQ0k7RUFDSSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDeENSOztBRDJDSTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUN4Q1IiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW9uLWl0ZW0ge1xyXG4gICAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiAgI2ZmZmZmZjs7XHJcbn1cclxuXHJcbi8vIGJhY2tncm91bmRzIC8vXHJcbi5iZy13aGl0ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogICNmZmZmMDA7XHJcbn1cclxuICBcclxuICAuYmctbGlnaHQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogICNmZmZmMDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5iZy1kYXJrIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogICNmZmZmMDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5iZy1wcmltYXJ5IHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogICNmZmZmMDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5iZy1zZWNvbmRhcnkge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgI2ZmZmYwMDtcclxuICB9XHJcbiAgXHJcbiAgLmJnLXRlcnRpYXJ5IHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmYwMDtcclxuICB9XHJcbiAgLmJnLXByb2ZpbGUge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogICNmZmZmMDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5iZy1tYWluIHtcclxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogICNmZmZmMDA7XHJcbiAgfVxyXG4gIFxyXG4gIC8vIEhlbHBlcnMgLy9cclxuICAudzEwMCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLmJvbGQsXHJcbiAgLmZ3NTAwIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAuZnc0MDAge1xyXG4gICAgICBmb250LXdlaWdodDogNDAwICFpbXBvcnRhbnQ7XHJcbiAgICAgXHJcbiAgfVxyXG5cclxuICAuZnc3MDAge1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xyXG59XHJcbiAgXHJcbiAgLnRleHQwOCB7XHJcbiAgICBmb250LXNpemU6IC44cmVtO1xyXG4gIH1cclxuICBcclxuICAudGV4dDEge1xyXG4gICAgZm9udC1zaXplOiAxcmVtICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAudGV4dDEyIHtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIH1cclxuXHJcbiAgLnRleHQxNSB7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICB9XHJcbiAgXHJcbiAgLnRleHQyMCB7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC50ZXh0LXdoaXRlIHtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgfVxyXG4gIFxyXG4gIC50ZXh0LXByaW1hcnkge1xyXG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gIH1cclxuXHJcbiAgLnRleHQtc2Vjb25kYXJ5IHtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxufVxyXG4gIFxyXG4gIC50ZXh0LWRhcmsge1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcclxuICB9XHJcbiAgXHJcbiAgLy8gbWVudSAvL1xyXG4gIC8vIE1lbnUgdXNlciBwcm9maWxlXHJcbiAgaW9uLXRvb2xiYXIudXNlci1wcm9maWxlIHtcclxuICBcclxuICAgIC51c2VyLWF2YXRhciB7XHJcbiAgICAgIHdpZHRoOiA2OHB4O1xyXG4gICAgICBoZWlnaHQ6IDY4cHg7XHJcbiAgICB9XHJcbiAgICAuaXRlbS1pbm5lciB7XHJcbiAgICAgIGJvcmRlci13aWR0aDogMDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLy8gQ3VzdG9tIHRvb2xiYXIgKG92ZXJyaWRpbmcgU2hhZG93IERPTSlcclxuICBpb24tdG9vbGJhciB7XHJcbiAgICAmLmlvbi1jb2xvci1wcmltYXJ5IHtcclxuICAgICAgLS1pb24tY29sb3ItYmFzZTogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0taW9uLWNvbG9yLWRhcmspLCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSkpICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC8vIEFuZHJvaWQgY2FyZCBzaGFkb3dcclxuICBpb24tY2FyZCB7XHJcbiAgICAmLnNjLWlvbi1jYXJkLW1kLWgge1xyXG4gICAgICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSh2YXIoLS1pb24tY29sb3ItZGFyay1yZ2IpLC4yNCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC8vIHN0eWxlIGZvciBhdXRoIHBhZ2VzXHJcbiAgLmF1dGgtcGFnZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAgI2ZmZmYwMDtcclxuICBcclxuICAgIC5ncmlkIHtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgICAgLmNvbCB7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgLmJ0bi1ncm91cCB7XHJcbiAgICAgIC5idXR0b24taW9zLFxyXG4gICAgICAuYnV0dG9uLW1kIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICAgICY6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHggMCAwIDJweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjpsYXN0LW9mLXR5cGUge1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMCAycHggMnB4IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuYXV0aC1jb250ZW50IHtcclxuICAgICAgbWFyZ2luOiAwIDUlO1xyXG4gIFxyXG4gICAgICAubG9nbyB7XHJcbiAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgIG1hcmdpbjogMjBweCBhdXRvIDhweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMCU7XHJcbiAgICAgICBcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgLmxpc3QtZm9ybSB7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIFxyXG4gICAgICAgIGlvbi1pdGVtIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gIFxyXG4gICAgICAgICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3A6IG5vbmU7XHJcbiAgICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgIH1cclxuICBcclxuICAgICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICAgICAgICAgIH1cclxuICBcclxuICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgfVxyXG4gIFxyXG4gIC8vIEN1c3RvbSBNZW51IHN0eWxlcyAob3ZlcnJpZGluZyBTaGFkb3cgRE9NKVxyXG4gIGlvbi1tZW51IHtcclxuICAgIGlvbi1oZWFkZXIge1xyXG4gICAgICBpb24tdG9vbGJhciB7XHJcbiAgICAgICAgJi5pb24tY29sb3ItZGFyayB7XHJcbiAgICAgICAgICAtLWlvbi1jb2xvci1iYXNlOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB2YXIoLS1pb24tY29sb3ItZGFyayksIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSkgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLm10byB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gICAgaW9uLWljb24ge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAtMnB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIC5pY29uLWFkZHtcclxuICAgIGNvbG9yOiAjRkZGO1xyXG4gIH1cclxuXHJcblxyXG4gIC5mb3JtLXJlZ2lzdHJhciB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICAjZmZmZjAwO1xyXG4gIH1cclxuXHJcbiAgLmJyYW5jb3tcclxuICAgICAgY29sb3I6ICNGRkY7XHJcbiAgfVxyXG5cclxuICAucmVke1xyXG4gICAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuLmdyZWVue1xyXG4gIGNvbG9yOiBncmVlbjtcclxufVxyXG5cclxuXHJcblxyXG4gICAgXHJcbiAgICA6aG9zdCB7XHJcbiAgICAgICAgaW9uLWNvbnRlbnQge1xyXG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6ICNGRUQ4MEI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAucGF6IHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgei1pbmRleDogMTA7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5pbWctdGV4dHtcclxuICAgICAgICB3aWR0aDo4MHB4O1xyXG4gICAgICAgIG1hcmdpbjowO1xyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICBib3JkZXI6MGNoO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuY2VudGVye1xyXG4gICAgICAgIG1hcmdpbjowIGF1dG87XHJcbiAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgICAgY29sb3I6YmxhY2s7XHJcbiAgICB9IiwiaW9uLWl0ZW0ge1xuICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6ICNmZmZmZmY7XG59XG5cbi5iZy13aGl0ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmMDA7XG59XG5cbi5iZy1saWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmMDA7XG59XG5cbi5iZy1kYXJrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmYwMDtcbn1cblxuLmJnLXByaW1hcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZjAwO1xufVxuXG4uYmctc2Vjb25kYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmYwMDtcbn1cblxuLmJnLXRlcnRpYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmYwMDtcbn1cblxuLmJnLXByb2ZpbGUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiAjZmZmZjAwO1xufVxuXG4uYmctbWFpbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6ICNmZmZmMDA7XG59XG5cbi53MTAwIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5ib2xkLFxuLmZ3NTAwIHtcbiAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xufVxuXG4uZnc0MDAge1xuICBmb250LXdlaWdodDogNDAwICFpbXBvcnRhbnQ7XG59XG5cbi5mdzcwMCB7XG4gIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcbn1cblxuLnRleHQwOCB7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuXG4udGV4dDEge1xuICBmb250LXNpemU6IDFyZW0gIWltcG9ydGFudDtcbn1cblxuLnRleHQxMiB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuXG4udGV4dDE1IHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi50ZXh0MjAge1xuICBmb250LXNpemU6IDJyZW07XG59XG5cbi50ZXh0LXdoaXRlIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi50ZXh0LXByaW1hcnkge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG4udGV4dC1zZWNvbmRhcnkge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG59XG5cbi50ZXh0LWRhcmsge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xufVxuXG5pb24tdG9vbGJhci51c2VyLXByb2ZpbGUgLnVzZXItYXZhdGFyIHtcbiAgd2lkdGg6IDY4cHg7XG4gIGhlaWdodDogNjhweDtcbn1cbmlvbi10b29sYmFyLnVzZXItcHJvZmlsZSAuaXRlbS1pbm5lciB7XG4gIGJvcmRlci13aWR0aDogMDtcbn1cblxuaW9uLXRvb2xiYXIuaW9uLWNvbG9yLXByaW1hcnkge1xuICAtLWlvbi1jb2xvci1iYXNlOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB2YXIoLS1pb24tY29sb3ItZGFyayksIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSkgIWltcG9ydGFudDtcbn1cblxuaW9uLWNhcmQuc2MtaW9uLWNhcmQtbWQtaCB7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKHZhcigtLWlvbi1jb2xvci1kYXJrLXJnYiksIDAuMjQpO1xufVxuXG4uYXV0aC1wYWdlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogI2ZmZmYwMDtcbn1cbi5hdXRoLXBhZ2UgLmdyaWQge1xuICBwYWRkaW5nOiAwO1xufVxuLmF1dGgtcGFnZSAuZ3JpZCAuY29sIHtcbiAgcGFkZGluZzogMDtcbn1cbi5hdXRoLXBhZ2UgLmJ0bi1ncm91cCAuYnV0dG9uLWlvcyxcbi5hdXRoLXBhZ2UgLmJ0bi1ncm91cCAuYnV0dG9uLW1kIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cbi5hdXRoLXBhZ2UgLmJ0bi1ncm91cCAuYnV0dG9uLWlvczpmaXJzdC1vZi10eXBlLFxuLmF1dGgtcGFnZSAuYnRuLWdyb3VwIC5idXR0b24tbWQ6Zmlyc3Qtb2YtdHlwZSB7XG4gIGJvcmRlci1yYWRpdXM6IDJweCAwIDAgMnB4O1xufVxuLmF1dGgtcGFnZSAuYnRuLWdyb3VwIC5idXR0b24taW9zOmxhc3Qtb2YtdHlwZSxcbi5hdXRoLXBhZ2UgLmJ0bi1ncm91cCAuYnV0dG9uLW1kOmxhc3Qtb2YtdHlwZSB7XG4gIGJvcmRlci1yYWRpdXM6IDAgMnB4IDJweCAwO1xufVxuLmF1dGgtcGFnZSAuYXV0aC1jb250ZW50IHtcbiAgbWFyZ2luOiAwIDUlO1xufVxuLmF1dGgtcGFnZSAuYXV0aC1jb250ZW50IC5sb2dvIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgbWFyZ2luOiAyMHB4IGF1dG8gOHB4O1xuICBib3JkZXItcmFkaXVzOiAxMCU7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbn1cbi5hdXRoLXBhZ2UgLmF1dGgtY29udGVudCAubGlzdC1mb3JtIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5hdXRoLXBhZ2UgLmF1dGgtY29udGVudCAubGlzdC1mb3JtIGlvbi1pdGVtIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgcGFkZGluZzogMDtcbn1cbi5hdXRoLXBhZ2UgLmF1dGgtY29udGVudCAubGlzdC1mb3JtIGlvbi1pdGVtOmZpcnN0LWNoaWxkIHtcbiAgYm9yZGVyLXRvcDogbm9uZTtcbn1cbi5hdXRoLXBhZ2UgLmF1dGgtY29udGVudCAubGlzdC1mb3JtIGlvbi1pdGVtOmFmdGVyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5hdXRoLXBhZ2UgLmF1dGgtY29udGVudCAubGlzdC1mb3JtIGlvbi1pdGVtIGlvbi1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbn1cbi5hdXRoLXBhZ2UgLmF1dGgtY29udGVudCAubGlzdC1mb3JtIGlvbi1pdGVtIGlucHV0IHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG5cbmlvbi1tZW51IGlvbi1oZWFkZXIgaW9uLXRvb2xiYXIuaW9uLWNvbG9yLWRhcmsge1xuICAtLWlvbi1jb2xvci1iYXNlOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB2YXIoLS1pb24tY29sb3ItZGFyayksIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSkgIWltcG9ydGFudDtcbn1cblxuLm10byB7XG4gIG1hcmdpbi10b3A6IDEycHg7XG59XG4ubXRvIGlvbi1pY29uIHtcbiAgbWFyZ2luLWJvdHRvbTogLTJweDtcbn1cblxuLmljb24tYWRkIHtcbiAgY29sb3I6ICNGRkY7XG59XG5cbi5mb3JtLXJlZ2lzdHJhciB7XG4gIC0tYmFja2dyb3VuZDogI2ZmZmYwMDtcbn1cblxuLmJyYW5jbyB7XG4gIGNvbG9yOiAjRkZGO1xufVxuXG4ucmVkIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLmdyZWVuIHtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG46aG9zdCBpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogI0ZFRDgwQjtcbn1cblxuLnBheiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTA7XG59XG5cbi5pbWctdGV4dCB7XG4gIHdpZHRoOiA4MHB4O1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiBibGFjaztcbiAgYm9yZGVyOiAwY2g7XG59XG5cbi5jZW50ZXIge1xuICBtYXJnaW46IDAgYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogYmxhY2s7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/login/login.page.ts":
  /*!*************************************!*\
    !*** ./src/app/login/login.page.ts ***!
    \*************************************/

  /*! exports provided: LoginPage */

  /***/
  function srcAppLoginLoginPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
      return LoginPage;
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/native-storage/ngx */
    "./node_modules/@ionic-native/native-storage/__ivy_ngcc__/ngx/index.js");

    var LoginPage = /*#__PURE__*/function () {
      function LoginPage(alertController, storage, router, provider, toast) {
        _classCallCheck(this, LoginPage);

        this.alertController = alertController;
        this.storage = storage;
        this.router = router;
        this.provider = provider;
        this.toast = toast;
        this.usuario = "";
        this.senha = "";
      }

      _createClass(LoginPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "login",
        value: function login() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this = this;

            var toast, _toast, dados;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    if (!(this.usuario == "")) {
                      _context2.next = 6;
                      break;
                    }

                    _context2.next = 3;
                    return this.toast.create({
                      message: 'Preencha o Usuário',
                      duration: 2000,
                      color: 'warning'
                    });

                  case 3:
                    toast = _context2.sent;
                    toast.present();
                    return _context2.abrupt("return");

                  case 6:
                    if (!(this.senha == "")) {
                      _context2.next = 12;
                      break;
                    }

                    _context2.next = 9;
                    return this.toast.create({
                      message: 'Preencha a Senha',
                      duration: 2000,
                      color: 'warning'
                    });

                  case 9:
                    _toast = _context2.sent;

                    _toast.present();

                    return _context2.abrupt("return");

                  case 12:
                    dados = {
                      requisicao: 'login',
                      usuario: this.usuario,
                      senha: this.senha
                    };
                    this.provider.dadosApi(dados, 'apiLogin.php').subscribe(function (data) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                        var alert, _toast2, _toast3;

                        return regeneratorRuntime.wrap(function _callee$(_context) {
                          while (1) {
                            switch (_context.prev = _context.next) {
                              case 0:
                                alert = data['msg'];

                                if (!data['success']) {
                                  _context.next = 13;
                                  break;
                                }

                                this.storage.setItem('session_storage', data['result']);
                                this.router.navigate(['/produtos']);
                                _context.next = 6;
                                return this.toast.create({
                                  message: 'Logado com Sucesso!!',
                                  duration: 1000,
                                  color: 'success'
                                });

                              case 6:
                                _toast2 = _context.sent;

                                _toast2.present();

                                this.usuario = "";
                                this.senha = "";
                                console.log(data);
                                _context.next = 17;
                                break;

                              case 13:
                                _context.next = 15;
                                return this.toast.create({
                                  message: alert,
                                  duration: 2000,
                                  color: 'danger'
                                });

                              case 15:
                                _toast3 = _context.sent;

                                _toast3.present();

                              case 17:
                              case "end":
                                return _context.stop();
                            }
                          }
                        }, _callee, this);
                      }));
                    });

                  case 14:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "cadastro",
        value: function cadastro() {
          this.router.navigate(['/cadastro']);
        }
      }, {
        key: "recuperarModal",
        value: function recuperarModal() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this2 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.alertController.create({
                      header: 'Recuperar Email!',
                      inputs: [{
                        name: 'email',
                        type: 'text',
                        placeholder: 'Insira seu Email'
                      }],
                      buttons: [{
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler() {
                          console.log('Confirm Cancel');
                        }
                      }, {
                        text: 'Enviar',
                        handler: function handler(data) {
                          //atualizar pag
                          _this2.usuario = data.email;
                          console.log(_this2.usuario);

                          _this2.recuperar();
                        }
                      }]
                    });

                  case 2:
                    alert = _context3.sent;
                    _context3.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "mensagemSalvar",
        value: function mensagemSalvar(msg) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var toast;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.toast.create({
                      message: msg,
                      duration: 1000
                    });

                  case 2:
                    toast = _context4.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "recuperar",
        value: function recuperar() {
          var _this3 = this;

          return new Promise(function (resolve) {
            var dados = {
              requisicao: 'recuperar',
              usuario: _this3.usuario
            };

            _this3.provider.dadosApi(dados, 'apiLogin.php').subscribe(function (data) {
              _this3.mensagemSalvar(data['result']);
            });
          });
        }
      }]);

      return LoginPage;
    }();

    LoginPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"]
      }, {
        type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_5__["NativeStorage"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _services_post_service__WEBPACK_IMPORTED_MODULE_2__["Post"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"]
      }];
    };

    LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
      selector: 'app-login',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./login.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./login.page.scss */
      "./src/app/login/login.page.scss"))["default"]]
    })], LoginPage);
    /***/
  }
}]);
//# sourceMappingURL=login-login-module-es5.js.map