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


    __webpack_exports__["default"] = "<ion-content class=\"ion-padding animated fadeIn login auth-page\">\n  \n  <div class=\"auth-content\">\n\n    <!-- Logo -->\n    <div padding-horizontal text-center class=\"animated fadeInDown\">\n      <div class=\"logo\"></div>\n      <h4 no-margin>\n          <ion-img class=\"img-login center\" src=\"../assets/logo.png\"></ion-img>\n       \n       \n       \n       </h4>\n    </div>\n\n    <!-- Login form -->\n    <div  class=\"list-form\">\n      <ion-item no-padding class=\"animated fadeInUp\">\n        <ion-label position=\"floating\">\n          <ion-icon name=\"mail\" item-start></ion-icon>\n          Usuário\n        </ion-label>\n        <ion-input color=\"light\" type=\"text\" [(ngModel)]=\"usuario\"></ion-input>\n      </ion-item>\n      <p ion-text class=\"text08\">\n        <ion-text color=\"warning\">\n          Campo Requerido\n        </ion-text>\n      </p>\n\n      <ion-item no-padding class=\"animated fadeInUp\">\n        <ion-label position=\"floating\">\n          <ion-icon name=\"lock-closed\" item-start></ion-icon>\n          Senha\n        </ion-label>\n        <ion-input color=\"light\" type=\"password\" [(ngModel)]=\"senha\"></ion-input>\n      </ion-item>\n      <p ion-text color=\"warning\" class=\"text08\">\n        <ion-text color=\"warning\">\n          Campo Requerido\n        </ion-text>\n        </p>\n      </div>\n\n    \n    <br><br>\n\n    <div>\n      <ion-button icon-left size=\"medium\" expand=\"full\" shape=\"round\" color=\"dark\" (click)=\"login()\"  tappable>\n        <ion-icon name=\"log-in\"></ion-icon>\n        Login\n      </ion-button>\n\n     \n\n    </div>\n\n    <!-- Other links -->\n  \n\n  </div>\n</ion-content>\n\n\n\n\n<ion-footer>\n \n\n  <ion-grid>\n    <ion-row>\n      <ion-col >\n        <ion-tab-button (click)=\"cadastro()\">\n          <ion-icon color=\"primary\" name=\"list-circle\"></ion-icon>\n          <ion-label>Cadastro</ion-label>\n        </ion-tab-button>\n      </ion-col>\n\n      <ion-col>\n        <ion-tab-button (click)=\"recuperarModal()\">\n          <ion-icon color=\"primary\" name=\"list-circle\"></ion-icon>\n          <ion-label>Recuperar</ion-label>\n        </ion-tab-button>\n      </ion-col>\n\n      </ion-row>\n      \n      </ion-grid>\n    \n  \n    \n\n</ion-footer>";
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


    __webpack_exports__["default"] = "ion-item {\n  --ion-item-background: transparent;\n}\n\n.bg-white {\n  background-color: #fff;\n}\n\n.bg-light {\n  background-color: var(--ion-color-light);\n}\n\n.bg-dark {\n  background-color: var(--ion-color-dark);\n}\n\n.bg-primary {\n  background-color: var(--ion-color-primary);\n}\n\n.bg-secondary {\n  background-color: var(--ion-color-secondary);\n}\n\n.bg-tertiary {\n  background-color: var(--ion-color-tertiary);\n}\n\n.bg-profile {\n  background-image: linear-gradient(135deg, var(--ion-color-dark), var(--ion-color-danger));\n}\n\n.bg-main {\n  background-image: linear-gradient(-135deg, var(--ion-color-medium), var(--ion-color-light));\n}\n\n.w100 {\n  width: 100%;\n}\n\n.bold,\n.fw500 {\n  font-weight: 500 !important;\n}\n\n.fw400 {\n  font-weight: 400 !important;\n}\n\n.fw700 {\n  font-weight: 700 !important;\n}\n\n.text08 {\n  font-size: 0.8rem;\n}\n\n.text1 {\n  font-size: 1rem !important;\n}\n\n.text12 {\n  font-size: 1.2rem;\n}\n\n.text15 {\n  font-size: 1.5rem;\n}\n\n.text20 {\n  font-size: 2rem;\n}\n\n.text-white {\n  color: #fff;\n}\n\n.text-primary {\n  color: var(--ion-color-primary);\n}\n\n.text-secondary {\n  color: var(--ion-color-secondary);\n}\n\n.text-dark {\n  color: var(--ion-color-dark);\n}\n\nion-toolbar.user-profile .user-avatar {\n  width: 68px;\n  height: 68px;\n}\n\nion-toolbar.user-profile .item-inner {\n  border-width: 0;\n}\n\nion-toolbar.ion-color-primary {\n  --ion-color-base: linear-gradient(135deg, var(--ion-color-dark), var(--ion-color-primary)) !important;\n}\n\nion-card.sc-ion-card-md-h {\n  box-shadow: 0 2px 4px rgba(var(--ion-color-dark-rgb), 0.24);\n}\n\n.auth-page {\n  background-image: linear-gradient(135deg, var(--ion-color-dark), var(--ion-color-primary));\n}\n\n.auth-page .grid {\n  padding: 0;\n}\n\n.auth-page .grid .col {\n  padding: 0;\n}\n\n.auth-page .btn-group .button-ios,\n.auth-page .btn-group .button-md {\n  border-radius: 0;\n}\n\n.auth-page .btn-group .button-ios:first-of-type,\n.auth-page .btn-group .button-md:first-of-type {\n  border-radius: 2px 0 0 2px;\n}\n\n.auth-page .btn-group .button-ios:last-of-type,\n.auth-page .btn-group .button-md:last-of-type {\n  border-radius: 0 2px 2px 0;\n}\n\n.auth-page .auth-content {\n  margin: 0 5%;\n}\n\n.auth-page .auth-content .logo {\n  width: 20px;\n  height: 20px;\n  margin: 20px auto 8px;\n  border-radius: 10%;\n  background-size: 100%;\n}\n\n.auth-page .auth-content .list-form {\n  padding: 0;\n  margin-bottom: 0;\n}\n\n.auth-page .auth-content .list-form ion-item {\n  background: none;\n  padding: 0;\n}\n\n.auth-page .auth-content .list-form ion-item:first-child {\n  border-top: none;\n}\n\n.auth-page .auth-content .list-form ion-item:after {\n  display: none;\n}\n\n.auth-page .auth-content .list-form ion-item ion-label {\n  font-size: 1em;\n  color: var(--ion-color-light);\n}\n\n.auth-page .auth-content .list-form ion-item input {\n  color: var(--ion-color-light);\n}\n\nion-menu ion-header ion-toolbar.ion-color-dark {\n  --ion-color-base: linear-gradient(135deg, var(--ion-color-dark), var(--ion-color-primary)) !important;\n}\n\n.mto {\n  margin-top: 12px;\n}\n\n.mto ion-icon {\n  margin-bottom: -2px;\n}\n\n.icon-add {\n  color: #FFF;\n}\n\n.form-registrar {\n  --background: linear-gradient(135deg, var(--ion-color-dark), var(--ion-color-primary)) ;\n}\n\n.branco {\n  color: #FFF;\n}\n\n.red {\n  color: red;\n}\n\n.green {\n  color: green;\n}\n\n:host ion-content {\n  --background: linear-gradient(135deg, #011c1f, #4ab6c2);\n}\n\n.paz {\n  position: relative;\n  z-index: 10;\n}\n\n.img-login {\n  width: 80px;\n  margin: 0;\n}\n\n.center {\n  margin: 0 auto;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vRDpcXFByb2pldG9zXFxkZWxpdmVyeUFwcC9zcmNcXGFwcFxcbG9naW5cXGxvZ2luLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksa0NBQUE7QUNBSjs7QURJQTtFQUNFLHNCQUFBO0FDREY7O0FESUU7RUFDRSx3Q0FBQTtBQ0RKOztBRElFO0VBQ0ksdUNBQUE7QUNETjs7QURJRTtFQUNJLDBDQUFBO0FDRE47O0FESUU7RUFDSSw0Q0FBQTtBQ0ROOztBRElFO0VBQ0ksMkNBQUE7QUNETjs7QURJRTtFQUNFLHlGQUFBO0FDREo7O0FESUU7RUFDSSwyRkFBQTtBQ0ROOztBREtFO0VBQ0UsV0FBQTtBQ0ZKOztBREtFOztFQUVJLDJCQUFBO0FDRk47O0FES0U7RUFDSSwyQkFBQTtBQ0ZOOztBRE1FO0VBQ0UsMkJBQUE7QUNISjs7QURNRTtFQUNFLGlCQUFBO0FDSEo7O0FETUU7RUFDRSwwQkFBQTtBQ0hKOztBRE1FO0VBQ0UsaUJBQUE7QUNISjs7QURNRTtFQUNFLGlCQUFBO0FDSEo7O0FETUU7RUFDRSxlQUFBO0FDSEo7O0FETUU7RUFDSSxXQUFBO0FDSE47O0FETUU7RUFDSSwrQkFBQTtBQ0hOOztBRE1FO0VBQ0UsaUNBQUE7QUNISjs7QURNRTtFQUNFLDRCQUFBO0FDSEo7O0FEVUk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ1BOOztBRFNJO0VBQ0UsZUFBQTtBQ1BOOztBRGFJO0VBQ0UscUdBQUE7QUNWTjs7QURnQkk7RUFDRSwyREFBQTtBQ2JOOztBRGtCRTtFQUNFLDBGQUFBO0FDZko7O0FEaUJJO0VBQ0UsVUFBQTtBQ2ZOOztBRGdCTTtFQUNFLFVBQUE7QUNkUjs7QURtQk07O0VBRUUsZ0JBQUE7QUNqQlI7O0FEa0JROztFQUNFLDBCQUFBO0FDZlY7O0FEaUJROztFQUNFLDBCQUFBO0FDZFY7O0FEbUJJO0VBQ0UsWUFBQTtBQ2pCTjs7QURtQk07RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFFQSxxQkFBQTtBQ2xCUjs7QURxQk07RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7QUNuQlI7O0FEcUJRO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0FDbkJWOztBRHFCVTtFQUNFLGdCQUFBO0FDbkJaOztBRHNCVTtFQUNFLGFBQUE7QUNwQlo7O0FEdUJVO0VBQ0UsY0FBQTtFQUNBLDZCQUFBO0FDckJaOztBRHdCVTtFQUNFLDZCQUFBO0FDdEJaOztBRGtDUTtFQUNFLHFHQUFBO0FDL0JWOztBRHFDRTtFQUNFLGdCQUFBO0FDbENKOztBRG1DSTtFQUNFLG1CQUFBO0FDakNOOztBRHNDRTtFQUNFLFdBQUE7QUNuQ0o7O0FEdUNFO0VBQ0UsdUZBQUE7QUNwQ0o7O0FEdUNFO0VBQ0ksV0FBQTtBQ3BDTjs7QUR1Q0U7RUFDRSxVQUFBO0FDcENKOztBRHVDQTtFQUNFLFlBQUE7QUNwQ0Y7O0FEMkNRO0VBQ0ksdURBQUE7QUN4Q1o7O0FENENJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0FDekNSOztBRDRDSTtFQUNJLFdBQUE7RUFDQSxTQUFBO0FDekNSOztBRDRDSTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtBQ3pDUiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pb24taXRlbSB7XHJcbiAgICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4vLyBiYWNrZ3JvdW5kcyAvL1xyXG4uYmctd2hpdGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuICBcclxuICAuYmctbGlnaHQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICB9XHJcbiAgXHJcbiAgLmJnLWRhcmsge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XHJcbiAgfVxyXG4gIFxyXG4gIC5iZy1wcmltYXJ5IHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gIH1cclxuICBcclxuICAuYmctc2Vjb25kYXJ5IHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgfVxyXG4gIFxyXG4gIC5iZy10ZXJ0aWFyeSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XHJcbiAgfVxyXG4gIFxyXG4gIC5iZy1wcm9maWxlIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLWlvbi1jb2xvci1kYXJrKSwgdmFyKC0taW9uLWNvbG9yLWRhbmdlcikpXHJcbiAgfVxyXG4gIFxyXG4gIC5iZy1tYWluIHtcclxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC0xMzVkZWcsIHZhcigtLWlvbi1jb2xvci1tZWRpdW0pLCB2YXIoLS1pb24tY29sb3ItbGlnaHQpKVxyXG4gIH1cclxuICBcclxuICAvLyBIZWxwZXJzIC8vXHJcbiAgLncxMDAge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5ib2xkLFxyXG4gIC5mdzUwMCB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLmZ3NDAwIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IDQwMCAhaW1wb3J0YW50O1xyXG4gICAgIFxyXG4gIH1cclxuXHJcbiAgLmZ3NzAwIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcclxufVxyXG4gIFxyXG4gIC50ZXh0MDgge1xyXG4gICAgZm9udC1zaXplOiAuOHJlbTtcclxuICB9XHJcbiAgXHJcbiAgLnRleHQxIHtcclxuICAgIGZvbnQtc2l6ZTogMXJlbSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLnRleHQxMiB7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICB9XHJcblxyXG4gIC50ZXh0MTUge1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC50ZXh0MjAge1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gIH1cclxuICBcclxuICAudGV4dC13aGl0ZSB7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gIH1cclxuICBcclxuICAudGV4dC1wcmltYXJ5IHtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICB9XHJcblxyXG4gIC50ZXh0LXNlY29uZGFyeSB7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbn1cclxuICBcclxuICAudGV4dC1kYXJrIHtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XHJcbiAgfVxyXG4gIFxyXG4gIC8vIG1lbnUgLy9cclxuICAvLyBNZW51IHVzZXIgcHJvZmlsZVxyXG4gIGlvbi10b29sYmFyLnVzZXItcHJvZmlsZSB7XHJcbiAgXHJcbiAgICAudXNlci1hdmF0YXIge1xyXG4gICAgICB3aWR0aDogNjhweDtcclxuICAgICAgaGVpZ2h0OiA2OHB4O1xyXG4gICAgfVxyXG4gICAgLml0ZW0taW5uZXIge1xyXG4gICAgICBib3JkZXItd2lkdGg6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC8vIEN1c3RvbSB0b29sYmFyIChvdmVycmlkaW5nIFNoYWRvdyBET00pXHJcbiAgaW9uLXRvb2xiYXIge1xyXG4gICAgJi5pb24tY29sb3ItcHJpbWFyeSB7XHJcbiAgICAgIC0taW9uLWNvbG9yLWJhc2U6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLWlvbi1jb2xvci1kYXJrKSwgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpKSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAvLyBBbmRyb2lkIGNhcmQgc2hhZG93XHJcbiAgaW9uLWNhcmQge1xyXG4gICAgJi5zYy1pb24tY2FyZC1tZC1oIHtcclxuICAgICAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEodmFyKC0taW9uLWNvbG9yLWRhcmstcmdiKSwuMjQpO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAvLyBzdHlsZSBmb3IgYXV0aCBwYWdlc1xyXG4gIC5hdXRoLXBhZ2Uge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0taW9uLWNvbG9yLWRhcmspLCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSkpO1xyXG4gIFxyXG4gICAgLmdyaWQge1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAuY29sIHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuYnRuLWdyb3VwIHtcclxuICAgICAgLmJ1dHRvbi1pb3MsXHJcbiAgICAgIC5idXR0b24tbWQge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgICAgJjpmaXJzdC1vZi10eXBlIHtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweCAwIDAgMnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOmxhc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwIDJweCAycHggMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgIC5hdXRoLWNvbnRlbnQge1xyXG4gICAgICBtYXJnaW46IDAgNSU7XHJcbiAgXHJcbiAgICAgIC5sb2dvIHtcclxuICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAyMHB4IGF1dG8gOHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwJTtcclxuICAgICAgIFxyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAubGlzdC1mb3JtIHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgXHJcbiAgICAgICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgXHJcbiAgICAgICAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcDogbm9uZTtcclxuICAgICAgICAgIH1cclxuICBcclxuICAgICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gICAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICB9XHJcbiAgXHJcbiAgLy8gQ3VzdG9tIE1lbnUgc3R5bGVzIChvdmVycmlkaW5nIFNoYWRvdyBET00pXHJcbiAgaW9uLW1lbnUge1xyXG4gICAgaW9uLWhlYWRlciB7XHJcbiAgICAgIGlvbi10b29sYmFyIHtcclxuICAgICAgICAmLmlvbi1jb2xvci1kYXJrIHtcclxuICAgICAgICAgIC0taW9uLWNvbG9yLWJhc2U6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLWlvbi1jb2xvci1kYXJrKSwgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpKSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAubXRvIHtcclxuICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgICBpb24taWNvbiB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IC0ycHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgLmljb24tYWRke1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbiAgfVxyXG5cclxuXHJcbiAgLmZvcm0tcmVnaXN0cmFyIHtcclxuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0taW9uLWNvbG9yLWRhcmspLCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSkpXHJcbiAgfVxyXG5cclxuICAuYnJhbmNve1xyXG4gICAgICBjb2xvcjogI0ZGRjtcclxuICB9XHJcblxyXG4gIC5yZWR7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG4uZ3JlZW57XHJcbiAgY29sb3I6IGdyZWVuO1xyXG59XHJcblxyXG5cclxuXHJcbiAgICBcclxuICAgIDpob3N0IHtcclxuICAgICAgICBpb24tY29udGVudCB7XHJcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzAxMWMxZiwgIzRhYjZjMik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAucGF6IHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgei1pbmRleDogMTA7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5pbWctbG9naW57XHJcbiAgICAgICAgd2lkdGg6ODBweDtcclxuICAgICAgICBtYXJnaW46MDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmNlbnRlcntcclxuICAgICAgICBtYXJnaW46MCBhdXRvO1xyXG4gICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgfSIsImlvbi1pdGVtIHtcbiAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLmJnLXdoaXRlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuLmJnLWxpZ2h0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbn1cblxuLmJnLWRhcmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG59XG5cbi5iZy1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG4uYmctc2Vjb25kYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG59XG5cbi5iZy10ZXJ0aWFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XG59XG5cbi5iZy1wcm9maWxlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0taW9uLWNvbG9yLWRhcmspLCB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKSk7XG59XG5cbi5iZy1tYWluIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC0xMzVkZWcsIHZhcigtLWlvbi1jb2xvci1tZWRpdW0pLCB2YXIoLS1pb24tY29sb3ItbGlnaHQpKTtcbn1cblxuLncxMDAge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmJvbGQsXG4uZnc1MDAge1xuICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XG59XG5cbi5mdzQwMCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDAgIWltcG9ydGFudDtcbn1cblxuLmZ3NzAwIHtcbiAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xufVxuXG4udGV4dDA4IHtcbiAgZm9udC1zaXplOiAwLjhyZW07XG59XG5cbi50ZXh0MSB7XG4gIGZvbnQtc2l6ZTogMXJlbSAhaW1wb3J0YW50O1xufVxuXG4udGV4dDEyIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG59XG5cbi50ZXh0MTUge1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuLnRleHQyMCB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbn1cblxuLnRleHQtd2hpdGUge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLnRleHQtcHJpbWFyeSB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbi50ZXh0LXNlY29uZGFyeSB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbn1cblxuLnRleHQtZGFyayB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG59XG5cbmlvbi10b29sYmFyLnVzZXItcHJvZmlsZSAudXNlci1hdmF0YXIge1xuICB3aWR0aDogNjhweDtcbiAgaGVpZ2h0OiA2OHB4O1xufVxuaW9uLXRvb2xiYXIudXNlci1wcm9maWxlIC5pdGVtLWlubmVyIHtcbiAgYm9yZGVyLXdpZHRoOiAwO1xufVxuXG5pb24tdG9vbGJhci5pb24tY29sb3ItcHJpbWFyeSB7XG4gIC0taW9uLWNvbG9yLWJhc2U6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLWlvbi1jb2xvci1kYXJrKSwgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpKSAhaW1wb3J0YW50O1xufVxuXG5pb24tY2FyZC5zYy1pb24tY2FyZC1tZC1oIHtcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEodmFyKC0taW9uLWNvbG9yLWRhcmstcmdiKSwgMC4yNCk7XG59XG5cbi5hdXRoLXBhZ2Uge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB2YXIoLS1pb24tY29sb3ItZGFyayksIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSk7XG59XG4uYXV0aC1wYWdlIC5ncmlkIHtcbiAgcGFkZGluZzogMDtcbn1cbi5hdXRoLXBhZ2UgLmdyaWQgLmNvbCB7XG4gIHBhZGRpbmc6IDA7XG59XG4uYXV0aC1wYWdlIC5idG4tZ3JvdXAgLmJ1dHRvbi1pb3MsXG4uYXV0aC1wYWdlIC5idG4tZ3JvdXAgLmJ1dHRvbi1tZCB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG4uYXV0aC1wYWdlIC5idG4tZ3JvdXAgLmJ1dHRvbi1pb3M6Zmlyc3Qtb2YtdHlwZSxcbi5hdXRoLXBhZ2UgLmJ0bi1ncm91cCAuYnV0dG9uLW1kOmZpcnN0LW9mLXR5cGUge1xuICBib3JkZXItcmFkaXVzOiAycHggMCAwIDJweDtcbn1cbi5hdXRoLXBhZ2UgLmJ0bi1ncm91cCAuYnV0dG9uLWlvczpsYXN0LW9mLXR5cGUsXG4uYXV0aC1wYWdlIC5idG4tZ3JvdXAgLmJ1dHRvbi1tZDpsYXN0LW9mLXR5cGUge1xuICBib3JkZXItcmFkaXVzOiAwIDJweCAycHggMDtcbn1cbi5hdXRoLXBhZ2UgLmF1dGgtY29udGVudCB7XG4gIG1hcmdpbjogMCA1JTtcbn1cbi5hdXRoLXBhZ2UgLmF1dGgtY29udGVudCAubG9nbyB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbjogMjBweCBhdXRvIDhweDtcbiAgYm9yZGVyLXJhZGl1czogMTAlO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG59XG4uYXV0aC1wYWdlIC5hdXRoLWNvbnRlbnQgLmxpc3QtZm9ybSB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4uYXV0aC1wYWdlIC5hdXRoLWNvbnRlbnQgLmxpc3QtZm9ybSBpb24taXRlbSB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG59XG4uYXV0aC1wYWdlIC5hdXRoLWNvbnRlbnQgLmxpc3QtZm9ybSBpb24taXRlbTpmaXJzdC1jaGlsZCB7XG4gIGJvcmRlci10b3A6IG5vbmU7XG59XG4uYXV0aC1wYWdlIC5hdXRoLWNvbnRlbnQgLmxpc3QtZm9ybSBpb24taXRlbTphZnRlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uYXV0aC1wYWdlIC5hdXRoLWNvbnRlbnQgLmxpc3QtZm9ybSBpb24taXRlbSBpb24tbGFiZWwge1xuICBmb250LXNpemU6IDFlbTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG4uYXV0aC1wYWdlIC5hdXRoLWNvbnRlbnQgLmxpc3QtZm9ybSBpb24taXRlbSBpbnB1dCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xufVxuXG5pb24tbWVudSBpb24taGVhZGVyIGlvbi10b29sYmFyLmlvbi1jb2xvci1kYXJrIHtcbiAgLS1pb24tY29sb3ItYmFzZTogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0taW9uLWNvbG9yLWRhcmspLCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSkpICFpbXBvcnRhbnQ7XG59XG5cbi5tdG8ge1xuICBtYXJnaW4tdG9wOiAxMnB4O1xufVxuLm10byBpb24taWNvbiB7XG4gIG1hcmdpbi1ib3R0b206IC0ycHg7XG59XG5cbi5pY29uLWFkZCB7XG4gIGNvbG9yOiAjRkZGO1xufVxuXG4uZm9ybS1yZWdpc3RyYXIge1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLWlvbi1jb2xvci1kYXJrKSwgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpKSA7XG59XG5cbi5icmFuY28ge1xuICBjb2xvcjogI0ZGRjtcbn1cblxuLnJlZCB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5ncmVlbiB7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuOmhvc3QgaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwMTFjMWYsICM0YWI2YzIpO1xufVxuXG4ucGF6IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxMDtcbn1cblxuLmltZy1sb2dpbiB7XG4gIHdpZHRoOiA4MHB4O1xuICBtYXJnaW46IDA7XG59XG5cbi5jZW50ZXIge1xuICBtYXJnaW46IDAgYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */";
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