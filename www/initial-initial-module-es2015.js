(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["initial-initial-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/initial/initial.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/initial/initial.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"ion-padding animated fadeIn login auth-page\">\n  <link href=\"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;1,500&display=swap\" rel=\"stylesheet\">\n  <div class=\"auth-content\">\n\n    <!-- Logo -->\n    <div padding-horizontal text-center class=\"animated fadeInDown\">\n      <div class=\"logo\"></div>\n      <h4 no-margin>\n        <h4 class=\"img-login center\">JAZZBurguer</h4>\n      </h4>\n    </div>\n    <br><br>\n    <div>\n    <ion-button icon-left size=\"large\" expand=\"full\" shape=\"round\" color=\"dark\" (click)=\"login()\" tappable>\n      <ion-icon name=\"log-in\"></ion-icon>\n      Login\n    </ion-button>\n\n  </div>\n\n  <div>\n    <ion-button icon-left size=\"large\" expand=\"full\" shape=\"round\" color=\"dark\" (click)=\"login()\" tappable>\n      <ion-icon name=\"logo-google\"></ion-icon>\n      google Login\n    </ion-button>\n\n\n\n  </div>\n\n\n\n  <div>\n    <ion-button icon-left size=\"large\" expand=\"full\" shape=\"round\" color=\"dark\" (click)=\"login()\" tappable>\n      <ion-icon name=\"logo-facebook\"></ion-icon>\n      Facebook Login\n    </ion-button>\n\n\n\n  </div>\n\n\n  <br /><br />\n  <!-- Other links -->\n  <div class=\"cadrec\">\n    <ion-label>Cadastre-se </ion-label>\n    <ion-label>|</ion-label>\n    <ion-label> Esqueceu a senha?</ion-label>\n  </div>\n  </div>\n</ion-content>\n\n\n\n\n<ion-footer>\n\n\n\n</ion-footer>");

/***/ }),

/***/ "./src/app/initial/initial-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/initial/initial-routing.module.ts ***!
  \***************************************************/
/*! exports provided: InitialPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitialPageRoutingModule", function() { return InitialPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _initial_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./initial.page */ "./src/app/initial/initial.page.ts");




const routes = [
    {
        path: '',
        component: _initial_page__WEBPACK_IMPORTED_MODULE_3__["InitialPage"]
    }
];
let InitialPageRoutingModule = class InitialPageRoutingModule {
};
InitialPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], InitialPageRoutingModule);



/***/ }),

/***/ "./src/app/initial/initial.module.ts":
/*!*******************************************!*\
  !*** ./src/app/initial/initial.module.ts ***!
  \*******************************************/
/*! exports provided: InitialPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitialPageModule", function() { return InitialPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _initial_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./initial-routing.module */ "./src/app/initial/initial-routing.module.ts");
/* harmony import */ var _initial_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./initial.page */ "./src/app/initial/initial.page.ts");







let InitialPageModule = class InitialPageModule {
};
InitialPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _initial_routing_module__WEBPACK_IMPORTED_MODULE_5__["InitialPageRoutingModule"]
        ],
        declarations: [_initial_page__WEBPACK_IMPORTED_MODULE_6__["InitialPage"]]
    })
], InitialPageModule);



/***/ }),

/***/ "./src/app/initial/initial.page.scss":
/*!*******************************************!*\
  !*** ./src/app/initial/initial.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item {\n  --ion-item-background: #ffffff;\n}\n\n.bg-white {\n  background-color: #ffff00;\n}\n\n.bg-light {\n  background-color: #ffff00;\n}\n\n.bg-dark {\n  background-color: #ffff00;\n}\n\n.bg-primary {\n  background-color: #ffff00;\n}\n\n.bg-secondary {\n  background-color: #ffff00;\n}\n\n.bg-tertiary {\n  background-color: #ffff00;\n}\n\n.bg-profile {\n  background-image: #ffff00;\n}\n\n.bg-main {\n  background-image: #ffff00;\n}\n\n.w100 {\n  width: 100%;\n}\n\n.bold,\n.fw500 {\n  font-weight: 500 !important;\n}\n\n.fw400 {\n  font-weight: 400 !important;\n}\n\n.fw700 {\n  font-weight: 700 !important;\n}\n\n.text08 {\n  font-size: 0.8rem;\n}\n\n.text1 {\n  font-size: 1rem !important;\n}\n\n.text12 {\n  font-size: 1.2rem;\n}\n\n.text15 {\n  font-size: 1.5rem;\n}\n\n.text20 {\n  font-size: 2rem;\n}\n\n.text-white {\n  color: #fff;\n}\n\n.text-primary {\n  color: var(--ion-color-primary);\n}\n\n.text-secondary {\n  color: var(--ion-color-secondary);\n}\n\n.text-dark {\n  color: var(--ion-color-dark);\n}\n\nion-toolbar.user-profile .user-avatar {\n  width: 68px;\n  height: 68px;\n}\n\nion-toolbar.user-profile .item-inner {\n  border-width: 0;\n}\n\nion-toolbar.ion-color-primary {\n  background-color: #ffffff !important;\n}\n\n:host(.button-solid.ion-color) .button-native {\n  background-color: #ffffff !important;\n}\n\nion-card.sc-ion-card-md-h {\n  box-shadow: 0 2px 4px rgba(var(--ion-color-dark-rgb), 0.24);\n}\n\n.auth-page {\n  background-image: #ffff00;\n}\n\n.auth-page .grid {\n  padding: 0;\n}\n\n.auth-page .grid .col {\n  padding: 0;\n}\n\n.auth-page .btn-group .button-ios,\n.auth-page .btn-group .button-md {\n  border-radius: 0;\n}\n\n.auth-page .btn-group .button-ios:first-of-type,\n.auth-page .btn-group .button-md:first-of-type {\n  border-radius: 2px 0 0 2px;\n}\n\n.auth-page .btn-group .button-ios:last-of-type,\n.auth-page .btn-group .button-md:last-of-type {\n  border-radius: 0 2px 2px 0;\n}\n\n.auth-page .auth-content {\n  margin: 0 5%;\n}\n\n.auth-page .auth-content .logo {\n  width: 20px;\n  height: 20px;\n  margin: 20px auto 8px;\n  border-radius: 10%;\n  background-size: 100%;\n}\n\n.auth-page .auth-content .list-form {\n  padding: 0;\n  margin-bottom: 0;\n}\n\n.auth-page .auth-content .list-form ion-item {\n  background: none;\n  padding: 0;\n}\n\n.auth-page .auth-content .list-form ion-item:first-child {\n  border-top: none;\n}\n\n.auth-page .auth-content .list-form ion-item:after {\n  display: none;\n}\n\n.auth-page .auth-content .list-form ion-item ion-label {\n  font-size: 1em;\n  color: var(--ion-color-light);\n}\n\n.auth-page .auth-content .list-form ion-item input {\n  color: var(--ion-color-light);\n}\n\nion-menu ion-header ion-toolbar.ion-color-dark {\n  background-color: #ffffff !important;\n}\n\n.mto {\n  margin-top: 12px;\n}\n\n.mto ion-icon {\n  margin-bottom: -2px;\n}\n\n.icon-add {\n  color: #FFF;\n}\n\n.form-registrar {\n  --background: #FED80B;\n}\n\n.branco {\n  color: #FFF;\n}\n\n.red {\n  color: red;\n}\n\n.green {\n  color: green;\n}\n\n:host ion-content {\n  --background: #FED80B;\n}\n\n.paz {\n  position: relative;\n  z-index: 10;\n}\n\n.img-text {\n  width: 80px;\n  margin: 0;\n  color: black;\n  border: 0ch;\n}\n\n.center {\n  margin: 0 auto;\n  text-align: center;\n  color: black;\n  font-weight: 800;\n  font-size: 44px;\n  padding-top: 50px;\n  padding-bottom: 50px;\n  font-family: \"Poppins\", sans-serif;\n}\n\n.cadrec {\n  color: black;\n  text-align: center;\n  font-weight: 600;\n}\n\nspan.button-inner {\n  color: #000000 !important;\n}\n\nion-ripple-effect {\n  color: #ffffff !important;\n}\n\n.teste {\n  color: #ffffff !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5pdGlhbC9GOlxcUHJvamV0b3NcXGRlbGl2ZXJ5QXBwL3NyY1xcYXBwXFxpbml0aWFsXFxpbml0aWFsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaW5pdGlhbC9pbml0aWFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLDhCQUFBO0FDQUo7O0FESUE7RUFDRSx5QkFBQTtBQ0RGOztBRElFO0VBQ0UseUJBQUE7QUNESjs7QURJRTtFQUNJLHlCQUFBO0FDRE47O0FESUU7RUFDSSx5QkFBQTtBQ0ROOztBRElFO0VBQ0kseUJBQUE7QUNETjs7QURJRTtFQUNJLHlCQUFBO0FDRE47O0FER0U7RUFDRSx5QkFBQTtBQ0FKOztBREdFO0VBQ0kseUJBQUE7QUNBTjs7QURJRTtFQUNFLFdBQUE7QUNESjs7QURJRTs7RUFFSSwyQkFBQTtBQ0ROOztBRElFO0VBQ0ksMkJBQUE7QUNETjs7QURLRTtFQUNFLDJCQUFBO0FDRko7O0FES0U7RUFDRSxpQkFBQTtBQ0ZKOztBREtFO0VBQ0UsMEJBQUE7QUNGSjs7QURLRTtFQUNFLGlCQUFBO0FDRko7O0FES0U7RUFDRSxpQkFBQTtBQ0ZKOztBREtFO0VBQ0UsZUFBQTtBQ0ZKOztBREtFO0VBQ0ksV0FBQTtBQ0ZOOztBREtFO0VBQ0ksK0JBQUE7QUNGTjs7QURLRTtFQUNFLGlDQUFBO0FDRko7O0FES0U7RUFDRSw0QkFBQTtBQ0ZKOztBRFNJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNOTjs7QURRSTtFQUNFLGVBQUE7QUNOTjs7QURZSTtFQUNFLG9DQUFBO0FDVE47O0FEWUU7RUFDRSxvQ0FBQTtBQ1RKOztBRGFJO0VBQ0UsMkRBQUE7QUNWTjs7QURlRTtFQUNFLHlCQUFBO0FDWko7O0FEY0k7RUFDRSxVQUFBO0FDWk47O0FEYU07RUFDRSxVQUFBO0FDWFI7O0FEZ0JNOztFQUVFLGdCQUFBO0FDZFI7O0FEZVE7O0VBQ0UsMEJBQUE7QUNaVjs7QURjUTs7RUFDRSwwQkFBQTtBQ1hWOztBRGdCSTtFQUNFLFlBQUE7QUNkTjs7QURnQk07RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFFQSxxQkFBQTtBQ2ZSOztBRGtCTTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtBQ2hCUjs7QURrQlE7RUFDRSxnQkFBQTtFQUNBLFVBQUE7QUNoQlY7O0FEa0JVO0VBQ0UsZ0JBQUE7QUNoQlo7O0FEbUJVO0VBQ0UsYUFBQTtBQ2pCWjs7QURvQlU7RUFDRSxjQUFBO0VBQ0EsNkJBQUE7QUNsQlo7O0FEcUJVO0VBQ0UsNkJBQUE7QUNuQlo7O0FEK0JRO0VBQ0Usb0NBQUE7QUM1QlY7O0FEa0NFO0VBQ0UsZ0JBQUE7QUMvQko7O0FEZ0NJO0VBQ0UsbUJBQUE7QUM5Qk47O0FEbUNFO0VBQ0UsV0FBQTtBQ2hDSjs7QURvQ0U7RUFDRSxxQkFBQTtBQ2pDSjs7QURvQ0U7RUFDSSxXQUFBO0FDakNOOztBRG9DRTtFQUNFLFVBQUE7QUNqQ0o7O0FEb0NBO0VBQ0UsWUFBQTtBQ2pDRjs7QUR3Q1E7RUFDSSxxQkFBQTtBQ3JDWjs7QUQwQ0k7RUFDSSxrQkFBQTtFQUNBLFdBQUE7QUN2Q1I7O0FEMENJO0VBQ0ksV0FBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ3ZDUjs7QUQwQ0k7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUdBLGtDQUFBO0FDekNSOztBRDZDRTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDMUNOOztBRDZDRTtFQUNBLHlCQUFBO0FDMUNGOztBRDZDRTtFQUNFLHlCQUFBO0FDMUNKOztBRDZDQTtFQUNFLHlCQUFBO0FDMUNGIiwiZmlsZSI6InNyYy9hcHAvaW5pdGlhbC9pbml0aWFsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pb24taXRlbSB7XHJcbiAgICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6ICAjZmZmZmZmOztcclxufVxyXG5cclxuLy8gYmFja2dyb3VuZHMgLy9cclxuLmJnLXdoaXRlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAgI2ZmZmYwMDtcclxufVxyXG4gIFxyXG4gIC5iZy1saWdodCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgI2ZmZmYwMDtcclxuICB9XHJcbiAgXHJcbiAgLmJnLWRhcmsge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgI2ZmZmYwMDtcclxuICB9XHJcbiAgXHJcbiAgLmJnLXByaW1hcnkge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgI2ZmZmYwMDtcclxuICB9XHJcbiAgXHJcbiAgLmJnLXNlY29uZGFyeSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICAjZmZmZjAwO1xyXG4gIH1cclxuICBcclxuICAuYmctdGVydGlhcnkge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZjAwO1xyXG4gIH1cclxuICAuYmctcHJvZmlsZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAgI2ZmZmYwMDtcclxuICB9XHJcbiAgXHJcbiAgLmJnLW1haW4ge1xyXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiAgI2ZmZmYwMDtcclxuICB9XHJcbiAgXHJcbiAgLy8gSGVscGVycyAvL1xyXG4gIC53MTAwIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAuYm9sZCxcclxuICAuZnc1MDAge1xyXG4gICAgICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5mdzQwMCB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDAgIWltcG9ydGFudDtcclxuICAgICBcclxuICB9XHJcblxyXG4gIC5mdzcwMCB7XHJcbiAgICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XHJcbn1cclxuICBcclxuICAudGV4dDA4IHtcclxuICAgIGZvbnQtc2l6ZTogLjhyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC50ZXh0MSB7XHJcbiAgICBmb250LXNpemU6IDFyZW0gIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC50ZXh0MTIge1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgfVxyXG5cclxuICAudGV4dDE1IHtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIH1cclxuICBcclxuICAudGV4dDIwIHtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICB9XHJcbiAgXHJcbiAgLnRleHQtd2hpdGUge1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICB9XHJcbiAgXHJcbiAgLnRleHQtcHJpbWFyeSB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgfVxyXG5cclxuICAudGV4dC1zZWNvbmRhcnkge1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xyXG59XHJcbiAgXHJcbiAgLnRleHQtZGFyayB7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG4gIH1cclxuICBcclxuICAvLyBtZW51IC8vXHJcbiAgLy8gTWVudSB1c2VyIHByb2ZpbGVcclxuICBpb24tdG9vbGJhci51c2VyLXByb2ZpbGUge1xyXG4gIFxyXG4gICAgLnVzZXItYXZhdGFyIHtcclxuICAgICAgd2lkdGg6IDY4cHg7XHJcbiAgICAgIGhlaWdodDogNjhweDtcclxuICAgIH1cclxuICAgIC5pdGVtLWlubmVyIHtcclxuICAgICAgYm9yZGVyLXdpZHRoOiAwO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAvLyBDdXN0b20gdG9vbGJhciAob3ZlcnJpZGluZyBTaGFkb3cgRE9NKVxyXG4gIGlvbi10b29sYmFyIHtcclxuICAgICYuaW9uLWNvbG9yLXByaW1hcnkge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbiAgOmhvc3QoLmJ1dHRvbi1zb2xpZC5pb24tY29sb3IpIC5idXR0b24tbmF0aXZle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZiFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC8vIEFuZHJvaWQgY2FyZCBzaGFkb3dcclxuICBpb24tY2FyZCB7XHJcbiAgICAmLnNjLWlvbi1jYXJkLW1kLWgge1xyXG4gICAgICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSh2YXIoLS1pb24tY29sb3ItZGFyay1yZ2IpLC4yNCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC8vIHN0eWxlIGZvciBhdXRoIHBhZ2VzXHJcbiAgLmF1dGgtcGFnZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAgI2ZmZmYwMDtcclxuICBcclxuICAgIC5ncmlkIHtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgICAgLmNvbCB7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgLmJ0bi1ncm91cCB7XHJcbiAgICAgIC5idXR0b24taW9zLFxyXG4gICAgICAuYnV0dG9uLW1kIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICAgICY6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHggMCAwIDJweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjpsYXN0LW9mLXR5cGUge1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMCAycHggMnB4IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmF1dGgtY29udGVudCB7XHJcbiAgICAgIG1hcmdpbjogMCA1JTtcclxuICBcclxuICAgICAgLmxvZ28ge1xyXG4gICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICBtYXJnaW46IDIwcHggYXV0byA4cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAlO1xyXG4gICAgICAgXHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIC5saXN0LWZvcm0ge1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICBcclxuICAgICAgICBpb24taXRlbSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICBcclxuICAgICAgICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICBib3JkZXItdG9wOiBub25lO1xyXG4gICAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gIH1cclxuICBcclxuICAvLyBDdXN0b20gTWVudSBzdHlsZXMgKG92ZXJyaWRpbmcgU2hhZG93IERPTSlcclxuICBpb24tbWVudSB7XHJcbiAgICBpb24taGVhZGVyIHtcclxuICAgICAgaW9uLXRvb2xiYXIge1xyXG4gICAgICAgICYuaW9uLWNvbG9yLWRhcmsge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZiFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5tdG8ge1xyXG4gICAgbWFyZ2luLXRvcDogMTJweDtcclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogLTJweDtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICAuaWNvbi1hZGR7XHJcbiAgICBjb2xvcjogI0ZGRjtcclxuICB9XHJcblxyXG5cclxuICAuZm9ybS1yZWdpc3RyYXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAgI0ZFRDgwQjtcclxuICB9XHJcblxyXG4gIC5icmFuY297XHJcbiAgICAgIGNvbG9yOiAjRkZGO1xyXG4gIH1cclxuXHJcbiAgLnJlZHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5ncmVlbntcclxuICBjb2xvcjogZ3JlZW47XHJcbn1cclxuXHJcblxyXG5cclxuICAgIFxyXG4gICAgOmhvc3Qge1xyXG4gICAgICAgIGlvbi1jb250ZW50IHtcclxuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiAjRkVEODBCO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5wYXogeyAgXHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuaW1nLXRleHR7XHJcbiAgICAgICAgd2lkdGg6ODBweDtcclxuICAgICAgICBtYXJnaW46MDtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgYm9yZGVyOjBjaDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmNlbnRlcntcclxuICAgICAgICBtYXJnaW46MCBhdXRvO1xyXG4gICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICAgIGNvbG9yOmJsYWNrO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgICAgZm9udC1zaXplOjQ0cHg7XHJcbiAgICAgICAgcGFkZGluZy10b3A6NTBweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTo1MHB4O1xyXG4gICAgICAgLy8gYm9yZGVyOiAxcHggc29saWQgIzAwMDtcclxuXHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIH1cclxuXHJcblxyXG4gIC5jYWRyZWMge1xyXG4gICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB9XHJcblxyXG4gIHNwYW4uYnV0dG9uLWlubmVyIHtcclxuICBjb2xvcjojMDAwMDAwIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIGlvbi1yaXBwbGUtZWZmZWN0IHtcclxuICAgIGNvbG9yOiNmZmZmZmYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRlc3Rle1xyXG4gIGNvbG9yOiNmZmZmZmYgIWltcG9ydGFudDtcclxufSIsImlvbi1pdGVtIHtcbiAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xufVxuXG4uYmctd2hpdGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZjAwO1xufVxuXG4uYmctbGlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZjAwO1xufVxuXG4uYmctZGFyayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmMDA7XG59XG5cbi5iZy1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmYwMDtcbn1cblxuLmJnLXNlY29uZGFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmMDA7XG59XG5cbi5iZy10ZXJ0aWFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmMDA7XG59XG5cbi5iZy1wcm9maWxlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogI2ZmZmYwMDtcbn1cblxuLmJnLW1haW4ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiAjZmZmZjAwO1xufVxuXG4udzEwMCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYm9sZCxcbi5mdzUwMCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcbn1cblxuLmZ3NDAwIHtcbiAgZm9udC13ZWlnaHQ6IDQwMCAhaW1wb3J0YW50O1xufVxuXG4uZnc3MDAge1xuICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XG59XG5cbi50ZXh0MDgge1xuICBmb250LXNpemU6IDAuOHJlbTtcbn1cblxuLnRleHQxIHtcbiAgZm9udC1zaXplOiAxcmVtICFpbXBvcnRhbnQ7XG59XG5cbi50ZXh0MTIge1xuICBmb250LXNpemU6IDEuMnJlbTtcbn1cblxuLnRleHQxNSB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4udGV4dDIwIHtcbiAgZm9udC1zaXplOiAycmVtO1xufVxuXG4udGV4dC13aGl0ZSB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4udGV4dC1wcmltYXJ5IHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuLnRleHQtc2Vjb25kYXJ5IHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xufVxuXG4udGV4dC1kYXJrIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbn1cblxuaW9uLXRvb2xiYXIudXNlci1wcm9maWxlIC51c2VyLWF2YXRhciB7XG4gIHdpZHRoOiA2OHB4O1xuICBoZWlnaHQ6IDY4cHg7XG59XG5pb24tdG9vbGJhci51c2VyLXByb2ZpbGUgLml0ZW0taW5uZXIge1xuICBib3JkZXItd2lkdGg6IDA7XG59XG5cbmlvbi10b29sYmFyLmlvbi1jb2xvci1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xufVxuXG46aG9zdCguYnV0dG9uLXNvbGlkLmlvbi1jb2xvcikgLmJ1dHRvbi1uYXRpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jYXJkLnNjLWlvbi1jYXJkLW1kLWgge1xuICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSh2YXIoLS1pb24tY29sb3ItZGFyay1yZ2IpLCAwLjI0KTtcbn1cblxuLmF1dGgtcGFnZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6ICNmZmZmMDA7XG59XG4uYXV0aC1wYWdlIC5ncmlkIHtcbiAgcGFkZGluZzogMDtcbn1cbi5hdXRoLXBhZ2UgLmdyaWQgLmNvbCB7XG4gIHBhZGRpbmc6IDA7XG59XG4uYXV0aC1wYWdlIC5idG4tZ3JvdXAgLmJ1dHRvbi1pb3MsXG4uYXV0aC1wYWdlIC5idG4tZ3JvdXAgLmJ1dHRvbi1tZCB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG4uYXV0aC1wYWdlIC5idG4tZ3JvdXAgLmJ1dHRvbi1pb3M6Zmlyc3Qtb2YtdHlwZSxcbi5hdXRoLXBhZ2UgLmJ0bi1ncm91cCAuYnV0dG9uLW1kOmZpcnN0LW9mLXR5cGUge1xuICBib3JkZXItcmFkaXVzOiAycHggMCAwIDJweDtcbn1cbi5hdXRoLXBhZ2UgLmJ0bi1ncm91cCAuYnV0dG9uLWlvczpsYXN0LW9mLXR5cGUsXG4uYXV0aC1wYWdlIC5idG4tZ3JvdXAgLmJ1dHRvbi1tZDpsYXN0LW9mLXR5cGUge1xuICBib3JkZXItcmFkaXVzOiAwIDJweCAycHggMDtcbn1cbi5hdXRoLXBhZ2UgLmF1dGgtY29udGVudCB7XG4gIG1hcmdpbjogMCA1JTtcbn1cbi5hdXRoLXBhZ2UgLmF1dGgtY29udGVudCAubG9nbyB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbjogMjBweCBhdXRvIDhweDtcbiAgYm9yZGVyLXJhZGl1czogMTAlO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG59XG4uYXV0aC1wYWdlIC5hdXRoLWNvbnRlbnQgLmxpc3QtZm9ybSB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4uYXV0aC1wYWdlIC5hdXRoLWNvbnRlbnQgLmxpc3QtZm9ybSBpb24taXRlbSB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG59XG4uYXV0aC1wYWdlIC5hdXRoLWNvbnRlbnQgLmxpc3QtZm9ybSBpb24taXRlbTpmaXJzdC1jaGlsZCB7XG4gIGJvcmRlci10b3A6IG5vbmU7XG59XG4uYXV0aC1wYWdlIC5hdXRoLWNvbnRlbnQgLmxpc3QtZm9ybSBpb24taXRlbTphZnRlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uYXV0aC1wYWdlIC5hdXRoLWNvbnRlbnQgLmxpc3QtZm9ybSBpb24taXRlbSBpb24tbGFiZWwge1xuICBmb250LXNpemU6IDFlbTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG4uYXV0aC1wYWdlIC5hdXRoLWNvbnRlbnQgLmxpc3QtZm9ybSBpb24taXRlbSBpbnB1dCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xufVxuXG5pb24tbWVudSBpb24taGVhZGVyIGlvbi10b29sYmFyLmlvbi1jb2xvci1kYXJrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xufVxuXG4ubXRvIHtcbiAgbWFyZ2luLXRvcDogMTJweDtcbn1cbi5tdG8gaW9uLWljb24ge1xuICBtYXJnaW4tYm90dG9tOiAtMnB4O1xufVxuXG4uaWNvbi1hZGQge1xuICBjb2xvcjogI0ZGRjtcbn1cblxuLmZvcm0tcmVnaXN0cmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjRkVEODBCO1xufVxuXG4uYnJhbmNvIHtcbiAgY29sb3I6ICNGRkY7XG59XG5cbi5yZWQge1xuICBjb2xvcjogcmVkO1xufVxuXG4uZ3JlZW4ge1xuICBjb2xvcjogZ3JlZW47XG59XG5cbjpob3N0IGlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAjRkVEODBCO1xufVxuXG4ucGF6IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxMDtcbn1cblxuLmltZy10ZXh0IHtcbiAgd2lkdGg6IDgwcHg7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IGJsYWNrO1xuICBib3JkZXI6IDBjaDtcbn1cblxuLmNlbnRlciB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgZm9udC1zaXplOiA0NHB4O1xuICBwYWRkaW5nLXRvcDogNTBweDtcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbn1cblxuLmNhZHJlYyB7XG4gIGNvbG9yOiBibGFjaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG5zcGFuLmJ1dHRvbi1pbm5lciB7XG4gIGNvbG9yOiAjMDAwMDAwICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1yaXBwbGUtZWZmZWN0IHtcbiAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbn1cblxuLnRlc3RlIHtcbiAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/initial/initial.page.ts":
/*!*****************************************!*\
  !*** ./src/app/initial/initial.page.ts ***!
  \*****************************************/
/*! exports provided: InitialPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitialPage", function() { return InitialPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/__ivy_ngcc__/ngx/index.js");






let InitialPage = class InitialPage {
    constructor(alertController, storage, router, provider, toast) {
        this.alertController = alertController;
        this.storage = storage;
        this.router = router;
        this.provider = provider;
        this.toast = toast;
        this.usuario = "";
        this.senha = "";
    }
    ngOnInit() {
    }
    login() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.usuario == "") {
                this.router.navigate(['/produtos']);
            }
            let dados = {
                requisicao: 'login',
                usuario: this.usuario,
                senha: this.senha
            };
            this.provider.dadosApi(dados, 'apiLogin.php').subscribe((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                var alert = data['msg'];
                if (data['success']) {
                    this.storage.setItem('session_storage', data['result']);
                    this.router.navigate(['/produtos']);
                    const toast = yield this.toast.create({
                        message: 'Logado com Sucesso!!',
                        duration: 1000,
                        color: 'success'
                    });
                    toast.present();
                    this.usuario = "";
                    this.senha = "";
                    console.log(data);
                }
                else {
                    const toast = yield this.toast.create({
                        message: alert,
                        duration: 2000,
                        color: 'danger'
                    });
                    toast.present();
                }
            }));
        });
    }
    cadastro() {
        this.router.navigate(['/cadastro']);
    }
    recuperarModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Recuperar Email!',
                inputs: [
                    {
                        name: 'email',
                        type: 'text',
                        placeholder: 'Insira seu Email',
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
                            this.usuario = data.email;
                            console.log(this.usuario);
                            this.recuperar();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    mensagemSalvar(msg) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: msg,
                duration: 1000
            });
            toast.present();
        });
    }
    recuperar() {
        return new Promise(resolve => {
            let dados = {
                requisicao: 'recuperar',
                usuario: this.usuario,
            };
            this.provider.dadosApi(dados, 'apiLogin.php').subscribe(data => {
                this.mensagemSalvar(data['result']);
            });
        });
    }
};
InitialPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"] },
    { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_5__["NativeStorage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_post_service__WEBPACK_IMPORTED_MODULE_2__["Post"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"] }
];
InitialPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./initial.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/initial/initial.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./initial.page.scss */ "./src/app/initial/initial.page.scss")).default]
    })
], InitialPage);



/***/ })

}]);
//# sourceMappingURL=initial-initial-module-es2015.js.map