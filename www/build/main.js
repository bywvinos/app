webpackJsonp([13],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AboutPage = (function () {
    function AboutPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.slides = [
            {
                title: "",
                description: "In volutpat luctus urna, sit amet scelerisque mauris tincidunt eu. Phasellus est arcu, posuere in lectus ut, tristique viverra justo. Morbi cursus quis purus ac ullamcorper. Nam vitae consectetur felis. Sed bibendum risus eget leo fringilla, eget sagittis mi congue. Donec bibendum mi eu augue accumsan, mattis vulputate magna luctus. Praesent vel interdum sem. Phasellus diam nunc, vehicula vel est quis, feugiat facilisis mauris. Morbi ut mauris nec diam maximus sagittis. Praesent dapibus posuere vehicula.",
                image: "assets/img/titulo.png",
            },
            {
                title: "",
                description: "In id tempus nisi, eget dignissim urna. Nunc efficitur, sem non bibendum faucibus, nisl lectus facilisis odio, a cursus purus elit eget lacus. Aliquam enim turpis, feugiat vitae euismod sit amet, ullamcorper eu ipsum. Sed nec arcu gravida, accumsan urna a, eleifend diam. Aenean lobortis bibendum justo, ut vehicula metus. Duis dictum auctor arcu, eu elementum sapien viverra hendrerit. Cras fringilla lectus eros, id porttitor diam sollicitudin ut. Cras vel lectus dolor.",
                image: "",
            },
            {
                title: "",
                description: "Praesent quis sapien et eros tincidunt finibus. Sed vitae quam hendrerit, dignissim augue eget, gravida neque. Suspendisse magna lacus, tincidunt sit amet aliquam at, luctus id odio. Pellentesque non tempor odio. Nulla dictum mauris nec sapien rhoncus, vel ornare ipsum fringilla. Proin efficitur libero at varius aliquam. Praesent commodo felis sed sagittis varius. Donec bibendum, mi eu tristique cursus, metus justo tempus ante, sed malesuada elit ante id justo. Donec sed blandit orci. In nunc orci, fringilla eu pharetra sed, sagittis tristique nisi. Ut scelerisque elementum est, eu dictum massa sollicitudin sit amet. Pellentesque consequat pulvinar imperdiet. Curabitur ornare erat eget risus vehicula tempus.",
                image: "",
            }
        ];
    }
    AboutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutPage');
    };
    return AboutPage;
}());
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-about',template:/*ion-inline-start:"C:\Users\Ivan Rojo\Desktop\appvinos\src\pages\about\about.html"*/'<!--\n\n  Generated template for the AboutPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header no-border>\n\n\n\n    <ion-navbar transparent>\n\n        <button ion-button menuToggle icon-only class="menu">\n\n          <ion-icon></ion-icon>\n\n        </button>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content fullscreen padding>\n\n  <ion-slides pager>\n\n      <ion-slide *ngFor="let slide of slides">\n\n          <ion-card >\n\n              \n\n                <ion-card-content>\n\n                    <img [src]="slide.image" class="slide-image"/>\n\n                    <h2 [innerHTML]="slide.title"></h2>\n\n                    <p [innerHTML]="slide.description"></p>\n\n                </ion-card-content>   \n\n          </ion-card>\n\n      </ion-slide>\n\n  </ion-slides>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Ivan Rojo\Desktop\appvinos\src\pages\about\about.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificacionesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the NotificacionesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NotificacionesPage = (function () {
    function NotificacionesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NotificacionesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NotificacionesPage');
    };
    return NotificacionesPage;
}());
NotificacionesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-notificaciones',template:/*ion-inline-start:"C:\Users\Ivan Rojo\Desktop\appvinos\src\pages\notificaciones\notificaciones.html"*/'<!--\n\n  Generated template for the NotificacionesPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header no-border>\n\n\n\n  <ion-navbar transparent>\n\n    <ion-title>notificaciones</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Ivan Rojo\Desktop\appvinos\src\pages\notificaciones\notificaciones.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], NotificacionesPage);

//# sourceMappingURL=notificaciones.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisclaimerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the DisclaimerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DisclaimerPage = (function () {
    function DisclaimerPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DisclaimerPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DisclaimerPage');
    };
    return DisclaimerPage;
}());
DisclaimerPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-disclaimer',template:/*ion-inline-start:"C:\Users\Ivan Rojo\Desktop\appvinos\src\pages\disclaimer\disclaimer.html"*/'<!--\n\n  Generated template for the DisclaimerPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header no-border>\n\n\n\n  <ion-navbar transparent>\n\n    <ion-title>disclaimer</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Ivan Rojo\Desktop\appvinos\src\pages\disclaimer\disclaimer.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], DisclaimerPage);

//# sourceMappingURL=disclaimer.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductoresPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ProductoresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProductoresPage = (function () {
    function ProductoresPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ProductoresPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProductoresPage');
    };
    return ProductoresPage;
}());
ProductoresPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-productores',template:/*ion-inline-start:"C:\Users\Ivan Rojo\Desktop\appvinos\src\pages\productores\productores.html"*/'<!--\n\n  Generated template for the ProductoresPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header no-border>\n\n\n\n  <ion-navbar transparent>\n\n    <ion-title>productores</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Ivan Rojo\Desktop\appvinos\src\pages\productores\productores.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], ProductoresPage);

//# sourceMappingURL=productores.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TutorialPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TutorialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TutorialPage = (function () {
    function TutorialPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TutorialPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TutorialPage');
    };
    return TutorialPage;
}());
TutorialPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-tutorial',template:/*ion-inline-start:"C:\Users\Ivan Rojo\Desktop\appvinos\src\pages\tutorial\tutorial.html"*/'<!--\n\n  Generated template for the TutorialPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header no-border>\n\n\n\n    <ion-navbar transparent>\n\n        <button ion-button menuToggle icon-only class="menu">\n\n          <ion-icon></ion-icon>\n\n        </button>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content fullscreen padding>\n\n  <ion-card>\n\n    <ion-card-header>\n\n    <img src="assets/img/como.png" alt="titulo">\n\n    </ion-card-header>\n\n    <ion-card-header>\n\n      <img src="assets/img/crea.png" alt="crea">\n\n    </ion-card-header>\n\n    <ion-card-header>\n\n      <img src="assets/img/puntos.png" alt="puntos">\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n        <img src="assets/img/infografia2.png" alt="iconografia">\n\n    </ion-card-content>\n\n    \n\n  </ion-card>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Ivan Rojo\Desktop\appvinos\src\pages\tutorial\tutorial.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], TutorialPage);

//# sourceMappingURL=tutorial.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UvasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UvasPage = (function () {
    function UvasPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.slides = [
            {
                title: "Tipo 1 ",
                description: "In volutpat luctus urna, sit amet scelerisque mauris tincidunt eu. Phasellus est arcu, posuere in lectus ut, tristique viverra justo. Morbi cursus quis purus ac ullamcorper. Nam vitae consectetur felis. Sed bibendum risus eget leo fringilla, eget sagittis mi congue. Donec bibendum mi eu augue accumsan, mattis vulputate magna luctus. Praesent vel interdum sem. Phasellus diam nunc, vehicula vel est quis, feugiat facilisis mauris. Morbi ut mauris nec diam maximus sagittis. Praesent dapibus posuere vehicula. Curabitur posuere elit eu arcu maximus, vitae gravida justo auctor. In hac habitasse platea dictumst. Nullam ultricies arcu ligula, ut laoreet mauris dignissim ut.",
                image: "assets/img/tipo1.png",
            },
            {
                title: "Tipo 2",
                description: "In id tempus nisi, eget dignissim urna. Nunc efficitur, sem non bibendum faucibus, nisl lectus facilisis odio, a cursus purus elit eget lacus. Aliquam enim turpis, feugiat vitae euismod sit amet, ullamcorper eu ipsum. Sed nec arcu gravida, accumsan urna a, eleifend diam. Aenean lobortis bibendum justo, ut vehicula metus. Duis dictum auctor arcu, eu elementum sapien viverra hendrerit. Cras fringilla lectus eros, id porttitor diam sollicitudin ut. Cras vel lectus dolor.",
                image: "assets/img/tipo2.png",
            },
            {
                title: "Tipo 3",
                description: "Praesent quis sapien et eros tincidunt finibus. Sed vitae quam hendrerit, dignissim augue eget, gravida neque. Suspendisse magna lacus, tincidunt sit amet aliquam at, luctus id odio. Pellentesque non tempor odio. Nulla dictum mauris nec sapien rhoncus, vel ornare ipsum fringilla. Proin efficitur libero at varius aliquam. Praesent commodo felis sed sagittis varius. Donec bibendum, mi eu tristique cursus, metus justo tempus ante, sed malesuada elit ante id justo. Donec sed blandit orci.",
                image: "assets/img/tipo3.png",
            },
            {
                title: "Tipo 4",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada leo magna, sit amet tempus lectus mollis sed. Nunc id diam nunc. Morbi consectetur eros vitae fringilla venenatis. Nullam tincidunt, urna at lacinia lobortis, elit magna commodo magna, non fermentum ante diam et nisi. Duis volutpat in odio sed fermentum. Ut tellus elit, pellentesque eu libero vitae, suscipit interdum ipsum. Donec in leo sed ligula porta efficitur ut vulputate erat. Cras cursus quam ac efficitur fringilla. Donec tincidunt ultrices tortor, vitae commodo leo posuere in.",
                image: "assets/img/tipo4.png",
            },
        ];
    }
    UvasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UvasPage');
    };
    UvasPage.prototype.carrousel = function (index) {
        this.slider.slideTo(index);
    };
    return UvasPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Slides */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Slides */])
], UvasPage.prototype, "slider", void 0);
UvasPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-uvas',template:/*ion-inline-start:"C:\Users\Ivan Rojo\Desktop\appvinos\src\pages\uvas\uvas.html"*/'<!--\n\n  Generated template for the UvasPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header no-border>\n\n\n\n    <ion-navbar transparent>\n\n        <button ion-button menuToggle icon-only class="menu">\n\n          <ion-icon></ion-icon>\n\n        </button>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-slides pager>\n\n    <ion-slide>\n\n      <ion-card>\n\n        <ion-card-header>\n\n          <img src="assets/img/tituloUvas.png" class="slide-image" />\n\n        </ion-card-header>\n\n        <ion-card-content>\n\n          <div>\n\n            <img src="assets/img/tipo1.png" alt="tipo1" (click)="carrousel(1)">\n\n            <img src="assets/img/tipo2.png" alt="tipo2" (click)="carrousel(2)">\n\n            <img src="assets/img/tipo3.png" alt="tipo3" (click)="carrousel(3)">\n\n            <img src="assets/img/tipo4.png" alt="tipo4" (click)="carrousel(4)">\n\n          </div>\n\n          <br>\n\n          <br>\n\n          <br>\n\n          <br>\n\n          <br>\n\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt diam metus, quis mollis ante efficitur id. Quisque\n\n            dolor ligula, commodo id nisl eget, iaculis tincidunt eros. Proin laoreet leo eu justo placerat ullamcorper. Sed\n\n            elementum tellus eu lacus sodales commodo. Class aptent taciti sociosqu ad litora torquent per conubia nostra,\n\n            per inceptos himenaeos. \n\n  \n\n          \n\n          \n\n        </ion-card-content>\n\n      </ion-card>\n\n    </ion-slide>\n\n    <ion-slide *ngFor="let slide of slides; let i=index">\n\n      <ion-card class="ion-card" id="i">\n\n\n\n        <ion-card-content>\n\n          <img [src]="slide.image" class="slide-image" />\n\n          <h2 [innerHTML]="slide.title"></h2>\n\n          <p [innerHTML]="slide.description"></p>\n\n        </ion-card-content>\n\n      </ion-card>\n\n    </ion-slide>\n\n  </ion-slides>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Ivan Rojo\Desktop\appvinos\src\pages\uvas\uvas.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], UvasPage);

//# sourceMappingURL=uvas.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivacidadPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PrivacidadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PrivacidadPage = (function () {
    function PrivacidadPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PrivacidadPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PrivacidadPage');
    };
    return PrivacidadPage;
}());
PrivacidadPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-privacidad',template:/*ion-inline-start:"C:\Users\Ivan Rojo\Desktop\appvinos\src\pages\privacidad\privacidad.html"*/'<!--\n\n  Generated template for the PrivacidadPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header no-borders>\n\n\n\n  <ion-navbar transparent>\n\n    <ion-title>privacidad</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Ivan Rojo\Desktop\appvinos\src\pages\privacidad\privacidad.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], PrivacidadPage);

//# sourceMappingURL=privacidad.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContrasenaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_providers__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ContrasenaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContrasenaPage = (function () {
    function ContrasenaPage(navCtrl, navParams, alertCtrl, _usuarioService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this._usuarioService = _usuarioService;
    }
    ContrasenaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContrasenaPage');
    };
    ContrasenaPage.prototype.onSubmit = function (formLogin) {
        var _this = this;
        // TODO
        if (!formLogin.valid) {
            this.alert("Formulario incompleto", 'por favor llene todos los campos');
        }
        else {
            var params = formLogin.value;
            this._usuarioService.changePass(params).subscribe(function (result) {
                if (!result) {
                    _this.alert("Error", "Problemas con el servidor");
                }
                else {
                    if (result.failed) {
                        _this.alert("Error result", result.failed);
                    }
                    else {
                        console.log(result.message);
                        _this.alert("Actualizada", result.message);
                        _this._usuarioService.logout();
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
                    }
                }
            }, function (error) {
                var err = JSON.parse(error._body);
                // let errorMessage = JSON.parse(err._body);
                formLogin.setValue({
                    password: "",
                    password_new: "",
                    password_new_confirmation: ""
                });
                console.log("Error: " + JSON.stringify(err));
                console.log("ErrorMessage: " + JSON.stringify(err.error));
                if (err.errors) {
                    if (err.errors.password_new) {
                        _this.alert("Tu contraseña nueva no coinciden", err.errors.password_new);
                    }
                }
                else {
                    _this.alert("Error:", err.error);
                }
            });
            // console.log(params);
        }
    };
    ContrasenaPage.prototype.regresar = function () {
        this.navCtrl.pop();
    };
    ContrasenaPage.prototype.alert = function (titulo, contenido) {
        var alert = this.alertCtrl.create({
            title: titulo,
            subTitle: contenido,
            buttons: ['OK']
        });
        alert.present();
    };
    return ContrasenaPage;
}());
ContrasenaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-contrasena',template:/*ion-inline-start:"C:\Users\Ivan Rojo\Desktop\appvinos\src\pages\contrasena\contrasena.html"*/'<!--\n\n  Generated template for the ContrasenaPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Cambiar Contraseña</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-list>\n\n      <form #formLogin="ngForm" (ngSubmit)="onSubmit(formLogin)">\n\n        <ion-item>\n\n          <ion-input type="password" name="password" ngModel #password="ngModel" required placeholder="Contraseña actual"></ion-input>\n\n        </ion-item>\n\n      \n\n        <ion-item>\n\n          <ion-input type="password" name="password_new" ngModel #password_new="ngModel" required placeholder="Nueva contraseña"></ion-input>\n\n        </ion-item>\n\n  \n\n        <ion-item>\n\n            <ion-input type="password" name="password_new_confirmation" ngModel #password_new_confirmation="ngModel" required placeholder="Repetir contraseña nueva"></ion-input>\n\n        </ion-item>\n\n        <div padding>\n\n          <button ion-button color="primary" type="submit"  block>Guardar cambios</button>\n\n          <button ion-button color="light" (click)="regresar()" block>Cancelar</button>\n\n        </div>\n\n      </form>\n\n    </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Ivan Rojo\Desktop\appvinos\src\pages\contrasena\contrasena.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_providers__["a" /* UsuarioServiceProvider */]])
], ContrasenaPage);

//# sourceMappingURL=contrasena.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TarjetaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TarjetaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TarjetaPage = (function () {
    function TarjetaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TarjetaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TarjetaPage');
    };
    return TarjetaPage;
}());
TarjetaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-tarjeta',template:/*ion-inline-start:"C:\Users\Ivan Rojo\Desktop\appvinos\src\pages\tarjeta\tarjeta.html"*/'<!--\n\n  Generated template for the TarjetaPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>TarjetaPage</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Ivan Rojo\Desktop\appvinos\src\pages\tarjeta\tarjeta.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], TarjetaPage);

//# sourceMappingURL=tarjeta.js.map

/***/ }),

/***/ 123:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 123;

/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		284,
		12
	],
	"../pages/contrasena/contrasena.module": [
		293,
		11
	],
	"../pages/disclaimer/disclaimer.module": [
		286,
		10
	],
	"../pages/login/login.module": [
		290,
		9
	],
	"../pages/notificaciones/notificaciones.module": [
		285,
		8
	],
	"../pages/principal/principal.module": [
		295,
		0
	],
	"../pages/privacidad/privacidad.module": [
		292,
		7
	],
	"../pages/productores/productores.module": [
		287,
		6
	],
	"../pages/signup/signup.module": [
		291,
		5
	],
	"../pages/tarjeta/tarjeta.module": [
		294,
		4
	],
	"../pages/tutorial/tutorial.module": [
		288,
		3
	],
	"../pages/user/user.module": [
		283,
		2
	],
	"../pages/uvas/uvas.module": [
		289,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 165;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contrasena_contrasena__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tarjeta_tarjeta__ = __webpack_require__(115);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SettingPage = (function () {
    function SettingPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.SettingPages = [
            { title: "Cambiar Contraseña", component: __WEBPACK_IMPORTED_MODULE_2__contrasena_contrasena__["a" /* ContrasenaPage */] },
            { title: "Tarjetas", component: __WEBPACK_IMPORTED_MODULE_3__tarjeta_tarjeta__["a" /* TarjetaPage */] }
        ];
    }
    SettingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingPage');
    };
    SettingPage.prototype.openPage = function (page) {
        this.navCtrl.push(page.component);
    };
    return SettingPage;
}());
SettingPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-setting',template:/*ion-inline-start:"C:\Users\Ivan Rojo\Desktop\appvinos\src\pages\setting\setting.html"*/'<!--\n\n  Generated template for the SettingPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header no-border>\n\n\n\n  <ion-navbar transparent>\n\n      <button ion-button menuToggle icon-only class="menu">\n\n        <ion-icon></ion-icon>\n\n      </button>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content fullscreen padding>\n\n  <ion-card>\n\n    <ion-list>\n\n      <button ion-item *ngFor="let p of SettingPages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n    \n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Ivan Rojo\Desktop\appvinos\src\pages\setting\setting.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], SettingPage);

//# sourceMappingURL=setting.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(230);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_signup_signup__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_user_user__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_usuario_service_usuario_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_about_about__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_notificaciones_notificaciones__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_disclaimer_disclaimer__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_productores_productores__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_tutorial_tutorial__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_privacidad_privacidad__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_uvas_uvas__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_setting_setting__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_contrasena_contrasena__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_tarjeta_tarjeta__ = __webpack_require__(115);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













//providers











var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_user_user__["a" /* UserPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_notificaciones_notificaciones__["a" /* NotificacionesPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_disclaimer_disclaimer__["a" /* DisclaimerPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_productores_productores__["a" /* ProductoresPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_tutorial_tutorial__["a" /* TutorialPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_uvas_uvas__["a" /* UvasPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_privacidad_privacidad__["a" /* PrivacidadPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_setting_setting__["a" /* SettingPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_contrasena_contrasena__["a" /* ContrasenaPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_tarjeta_tarjeta__["a" /* TarjetaPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["d" /* JsonpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/user/user.module#UserPageModule', name: 'UserPage', segment: 'user', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/notificaciones/notificaciones.module#NotificacionesPageModule', name: 'NotificacionesPage', segment: 'notificaciones', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/disclaimer/disclaimer.module#DisclaimerPageModule', name: 'DisclaimerPage', segment: 'disclaimer', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/productores/productores.module#ProductoresPageModule', name: 'ProductoresPage', segment: 'productores', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tutorial/tutorial.module#TutorialPageModule', name: 'TutorialPage', segment: 'tutorial', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/uvas/uvas.module#UvasPageModule', name: 'UvasPage', segment: 'uvas', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/privacidad/privacidad.module#PrivacidadPageModule', name: 'PrivacidadPage', segment: 'privacidad', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/contrasena/contrasena.module#ContrasenaPageModule', name: 'ContrasenaPage', segment: 'contrasena', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tarjeta/tarjeta.module#TarjetaPageModule', name: 'TarjetaPage', segment: 'tarjeta', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/principal/principal.module#PrincipalPageModule', name: 'PrincipalPage', segment: 'principal', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_user_user__["a" /* UserPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_notificaciones_notificaciones__["a" /* NotificacionesPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_disclaimer_disclaimer__["a" /* DisclaimerPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_productores_productores__["a" /* ProductoresPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_tutorial_tutorial__["a" /* TutorialPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_uvas_uvas__["a" /* UvasPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_privacidad_privacidad__["a" /* PrivacidadPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_setting_setting__["a" /* SettingPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_contrasena_contrasena__["a" /* ContrasenaPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_tarjeta_tarjeta__["a" /* TarjetaPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_13__providers_usuario_service_usuario_service__["a" /* UsuarioServiceProvider */],
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_providers__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_user_user__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_about_about__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_notificaciones_notificaciones__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_disclaimer_disclaimer__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_productores_productores__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_tutorial_tutorial__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_uvas_uvas__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_signup_signup__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_login_login__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_privacidad_privacidad__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_home_home__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_setting_setting__ = __webpack_require__(210);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


















var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, storage, _usuarioService, menu, events) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.storage = storage;
        this._usuarioService = _usuarioService;
        this.menu = menu;
        this.events = events;
        this.loggedInPages = [
            { title: "Home", component: __WEBPACK_IMPORTED_MODULE_6__pages_user_user__["a" /* UserPage */] },
            { title: "Ajustes", component: __WEBPACK_IMPORTED_MODULE_17__pages_setting_setting__["a" /* SettingPage */] },
            { title: "Acerca de nosotros", component: __WEBPACK_IMPORTED_MODULE_7__pages_about_about__["a" /* AboutPage */] },
            { title: "Notificaciones", component: __WEBPACK_IMPORTED_MODULE_8__pages_notificaciones_notificaciones__["a" /* NotificacionesPage */] },
            { title: "Disclaimer", component: __WEBPACK_IMPORTED_MODULE_9__pages_disclaimer_disclaimer__["a" /* DisclaimerPage */] },
            { title: "Productores", component: __WEBPACK_IMPORTED_MODULE_10__pages_productores_productores__["a" /* ProductoresPage */] },
            { title: "Tutorial", component: __WEBPACK_IMPORTED_MODULE_11__pages_tutorial_tutorial__["a" /* TutorialPage */] },
            { title: "Sobre las Uvas", component: __WEBPACK_IMPORTED_MODULE_12__pages_uvas_uvas__["a" /* UvasPage */] },
            { title: "Aviso de privacidad", component: __WEBPACK_IMPORTED_MODULE_15__pages_privacidad_privacidad__["a" /* PrivacidadPage */] },
        ];
        this.loggedOutPages = [
            { title: "Home", component: __WEBPACK_IMPORTED_MODULE_16__pages_home_home__["a" /* HomePage */] },
            { title: "Registrate", component: __WEBPACK_IMPORTED_MODULE_13__pages_signup_signup__["a" /* SignupPage */] },
            { title: "Inicia Sesión", component: __WEBPACK_IMPORTED_MODULE_14__pages_login_login__["a" /* LoginPage */] },
            { title: "¿Quiénes somos?", component: __WEBPACK_IMPORTED_MODULE_7__pages_about_about__["a" /* AboutPage */] },
            // { title: "Notificaciones", component: NotificacionesPage },
            { title: "Disclaimer", component: __WEBPACK_IMPORTED_MODULE_9__pages_disclaimer_disclaimer__["a" /* DisclaimerPage */] },
            { title: "Productores", component: __WEBPACK_IMPORTED_MODULE_10__pages_productores_productores__["a" /* ProductoresPage */] },
            { title: "¿Cómo Funciona?", component: __WEBPACK_IMPORTED_MODULE_11__pages_tutorial_tutorial__["a" /* TutorialPage */] },
            { title: "Acerca de las Uvas", component: __WEBPACK_IMPORTED_MODULE_12__pages_uvas_uvas__["a" /* UvasPage */] },
            { title: "Aviso de privacidad", component: __WEBPACK_IMPORTED_MODULE_15__pages_privacidad_privacidad__["a" /* PrivacidadPage */] }
        ];
        this.access_token = "";
        this.initializeApp();
        this.listenToLoginEvents();
        this.storage.get("access_token").then(function (val) {
            _this.access_token = val;
            if (_this.access_token == null || _this.access_token == "") {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_16__pages_home_home__["a" /* HomePage */];
                _this.enableMenu(false);
            }
            else {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_user_user__["a" /* UserPage */];
                _this._usuarioService.estaLogeado().then(function (hasLoggedIn) {
                    _this.enableMenu(hasLoggedIn == true);
                    console.log("logeado");
                });
            }
        });
    }
    MyApp.prototype.listenToLoginEvents = function () {
        var _this = this;
        this.events.subscribe('user:login', function () {
            console.log('eventLogin');
            _this.enableMenu(true);
        });
        this.events.subscribe('user:signup', function () {
            _this.enableMenu(true);
        });
        this.events.subscribe("user:logout", function () {
            _this.enableMenu(false);
        });
    };
    MyApp.prototype.enableMenu = function (loggedIn) {
        console.log("loggedIn" + loggedIn);
        this.menu.enable(loggedIn, "loggedInMenu");
        this.menu.enable(!loggedIn, "loggedOutMenu");
    };
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.logout = function () {
        this._usuarioService.logout();
        this.rootPage = __WEBPACK_IMPORTED_MODULE_16__pages_home_home__["a" /* HomePage */];
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_16__pages_home_home__["a" /* HomePage */]);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\Ivan Rojo\Desktop\appvinos\src\app\app.html"*/'<!-- logged out menu -->\n\n<ion-menu id="loggedOutMenu" [content]="content">\n\n\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menú</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <button id="transparent" ion-item menuClose *ngFor="let p of loggedOutPages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- logged in menu -->\n\n<ion-menu id="loggedInMenu" [content]="content">\n\n\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menú</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n\n\n    <ion-list>\n\n      <button ion-item menuClose *ngFor="let p of loggedInPages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n      <button ion-item menuClose (click)="logout()">Salir</button>\n\n    </ion-list>\n\n  </ion-content>\n\n</ion-menu>\n\n\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\Ivan Rojo\Desktop\appvinos\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_5__providers_providers__["a" /* UsuarioServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuarioServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// import { HttpClient } from '@angular/common/http';





/*
  Generated class for the UsuarioServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var UsuarioServiceProvider = (function () {
    function UsuarioServiceProvider(_http, storage, events) {
        var _this = this;
        this._http = _http;
        this.storage = storage;
        this.events = events;
        this.HAS_LOGGED_IN = "hasLoggedIn";
        this.storage.get("access_token").then(function (val) {
            _this.var_token = JSON.parse(val);
        });
        console.log('Hello UsuarioServiceProvider Provider');
        this.url = 'http://byw.from-tn.com/pwm/api/';
        this.oauthUrl = 'http://byw.from-tn.com/pwm/oauth/token';
    }
    UsuarioServiceProvider.prototype.login = function (usuario) {
        var json = JSON.stringify(usuario);
        var params = json;
        console.log(params);
        var user = JSON.parse(params);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            "Content-Type": "application/json",
            "Accept": "application/json"
        });
        var postData = {
            grant_type: "password",
            client_id: 2,
            client_secret: "cco4KUfmpARVltxrK8eNazkc2BFs5IZuULOzI81y",
            username: user.email,
            password: user.password,
            scope: ""
        };
        console.log(postData);
        return this._http.post(this.oauthUrl, JSON.stringify(postData), {
            headers: headers
        }).map(function (res) { return res.json(); });
        // return this._http.post(this.url+'login',params,{headers:headers}).map(res=>res.json());
    };
    UsuarioServiceProvider.prototype.logginData = function (token, refresh) {
        this.storage.set("access_token", JSON.stringify(token));
        this.storage.set("refresh_token", JSON.stringify(refresh));
        this.storage.set(this.HAS_LOGGED_IN, true);
        this.events.publish("user:login");
    };
    UsuarioServiceProvider.prototype.addUsuario = function (usuario) {
        var json = JSON.stringify(usuario);
        var params = json;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        return this._http.post(this.url + 'users', params, { headers: headers }).map(function (res) { return res.json(); });
    };
    UsuarioServiceProvider.prototype.getUsuario = function (access_token) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": "Bearer " + JSON.parse(access_token)
        });
        return this._http.get(this.url + "user", { headers: headers }).map(function (res) { return res.json(); });
    };
    UsuarioServiceProvider.prototype.estaLogeado = function () {
        return this.storage.get(this.HAS_LOGGED_IN).then(function (value) {
            return value === true;
        });
    };
    UsuarioServiceProvider.prototype.logout = function () {
        this.storage.remove(this.HAS_LOGGED_IN);
        this.storage.remove("access_token");
        this.storage.remove("refresh_token");
        this.events.publish("user:logout");
    };
    UsuarioServiceProvider.prototype.changePass = function (params) {
        var json = JSON.stringify(params);
        console.log(this.var_token);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": "Bearer " + this.var_token,
        });
        console.log(headers);
        console.log(params);
        return this._http.post(this.url + "password", json, { headers: headers }).map(function (res) { return res.json(); });
    };
    return UsuarioServiceProvider;
}());
UsuarioServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* Events */]])
], UsuarioServiceProvider);

//# sourceMappingURL=usuario-service.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// @IonicPage()
var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    HomePage.prototype.signup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signup_signup__["a" /* SignupPage */]);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\Ivan Rojo\Desktop\appvinos\src\pages\home\home.html"*/'\n\n<ion-content scroll="false" class="backgroud">\n\n  <div class="splash-bg"></div>\n\n  <ion-header no-border>\n\n    <ion-navbar transparent>\n\n      <button ion-button menuToggle icon-only class="menu">\n\n        <ion-icon></ion-icon>\n\n      </button>\n\n    </ion-navbar>\n\n  </ion-header>\n\n  <div class="splash-info">\n\n    <div class="splash-logo"></div>\n\n    <div class="splash-intro">\n\n      Bienvenidos\n\n    </div>\n\n  </div>\n\n  <div padding>\n\n    <button ion-button block (click)="signup()">Registrarse</button>\n\n    <button ion-button block (click)="login()" class="login">Entrar</button>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Ivan Rojo\Desktop\appvinos\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_usuario__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_providers__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UserPage = (function () {
    function UserPage(navCtrl, navParams, _usuarioService, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._usuarioService = _usuarioService;
        this.storage = storage;
        this.usuario = new __WEBPACK_IMPORTED_MODULE_2__models_usuario__["a" /* Usuario */](null, '', '', '', '', '', '', '');
    }
    UserPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get("access_token").then(function (val) {
            // console.log("TOKEN: "+val);
            _this.access_token = val;
            if (_this.access_token == null || _this.access_token == "") {
                // console.log(this.access_token);
            }
            else {
                // console.log(this.access_token);
                _this._usuarioService.getUsuario(_this.access_token).subscribe(function (result) {
                    console.log(result.name);
                    // this.usuario = new Usuario(result.id, result.name, result.appaterno, result.apmaterno, result.nacimiento, result.telefono, result.email, result.password);
                    _this.usuario.idusuario = result.id;
                    _this.usuario.nombre = result.name;
                    _this.usuario.apaterno = result.appaterno;
                    _this.usuario.amaterno = result.apmaterno;
                    _this.usuario.email = result.email;
                    _this.usuario.fechanac = result.nacimiento;
                    _this.usuario.telefono = result.telefono;
                    _this.usuario.password = result.password;
                    console.log("USUARIO" + JSON.stringify(_this.usuario));
                });
            }
        });
    };
    UserPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UserPage');
    };
    return UserPage;
}());
UserPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-user',template:/*ion-inline-start:"C:\Users\Ivan Rojo\Desktop\appvinos\src\pages\user\user.html"*/'<!--\n\n  Generated template for the UserPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header no-border>\n\n  <ion-navbar transparent>\n\n    <button ion-button menuToggle icon-only class="menu">\n\n      <ion-icon></ion-icon>\n\n      <!-- <ion-icon></ion-icon> -->\n\n    </button>\n\n    <ion-title>{{ usuario.nombre | titlecase }} {{ usuario.apaterno | titlecase }} {{ usuario.amaterno | titlecase }} </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content fullscreen padding>\n\n  <div class="splash-bg"></div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Ivan Rojo\Desktop\appvinos\src\pages\user\user.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_3__providers_providers__["a" /* UsuarioServiceProvider */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__providers_providers__["a" /* UsuarioServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
], UserPage);

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_usuario__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_usuario_service_usuario_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_user__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { Params} from '@angular/router';




/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, _usuarioService, alertCtrl, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._usuarioService = _usuarioService;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.HAS_LOGGED_IN = 'hasLoggedIn';
        this.pushPage = "HomePage";
        this.usuario = new __WEBPACK_IMPORTED_MODULE_2__models_usuario__["a" /* Usuario */](null, '', '', '', '', '', '', '');
    }
    LoginPage.prototype.ngOnInit = function () {
        this.usuario = new __WEBPACK_IMPORTED_MODULE_2__models_usuario__["a" /* Usuario */](null, '', '', '', '', '', '', '');
    };
    LoginPage.prototype.onSubmit = function () {
        var _this = this;
        // console.log(this.usuario);
        // console.log(this.usuario);
        this._usuarioService.login(this.usuario).subscribe(function (result) {
            if (!result) {
                _this.alert('Error', 'Problemas con el servidor. Contacte con su administrador de red.');
            }
            else {
                if (result.failed) {
                    _this.alert('Error result ', result.failed);
                    _this.ngOnInit();
                }
                else {
                    _this.alert('Bienvenido', 'Sessión exitosa');
                    _this._usuarioService.logginData(result.access_token, result.refresh_token);
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__user_user__["a" /* UserPage */]);
                    _this.storage.get("access_token").then(function (val) {
                        console.log('Your access_token is ' + val);
                    });
                }
            }
        }, function (err) {
            var error = JSON.parse(JSON.stringify(err));
            var errorMessage = JSON.parse(error._body);
            console.log("Error: " + JSON.stringify(error));
            console.log("ErrorMessage: " + JSON.stringify(errorMessage));
            _this.alert("Error:", errorMessage.message);
        });
    };
    LoginPage.prototype.alert = function (titulo, contenido) {
        var alert = this.alertCtrl.create({
            title: titulo,
            subTitle: contenido,
            buttons: ['OK']
        });
        alert.present();
    };
    LoginPage.prototype.goToRegistroPage = function () {
        this.navCtrl.push('SignupPage');
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"C:\Users\Ivan Rojo\Desktop\appvinos\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header no-border>\n\n\n\n  <ion-navbar transparent>\n\n      <button ion-button menuToggle icon-only class="menu">\n\n        <ion-icon></ion-icon>\n\n      </button>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content fullscreen padding>\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Iniciar Sesión\n\n    </ion-card-header>\n\n    <form #formLogin="ngForm" (ngSubmit)="onSubmit()">\n\n    <ion-item>\n\n      <ion-label floating>Correo Electronico</ion-label>\n\n      <ion-input type="email" name="email" #email="ngModel" [(ngModel)]="usuario.email" pattern="[A-Za-z0-9._%+-]{3,}@[a-zA-Z_-]{3,}([.]{1}[a-zA-Z_-]{2,}|[.]{1}[a-zA-Z_-]{2,}[.]{1}[a-zA-Z_-]{2,})" required autofocus></ion-input>\n\n    </ion-item>\n\n  \n\n    <ion-item>\n\n      <ion-label floating>Contraseña</ion-label>\n\n      <ion-input type="password" name="password" #password="ngModel" [(ngModel)]="usuario.password" required autofocus></ion-input>\n\n    </ion-item>\n\n\n\n    <div padding>\n\n      <button ion-button color="primary" type="submit" [disabled]="!formLogin.form.valid" block>Entrar</button>\n\n    </div>\n\n    </form>\n\n\n\n    <div padding>Se te olvido la contraseña <a target="_blank" href="http://localhost:3000/forgot">Entra aqui</a></div>\n\n    <div padding>¿No tienes una cuenta? <a (click)="goToRegistroPage()" >REGISTRATE</a></div>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Ivan Rojo\Desktop\appvinos\src\pages\login\login.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_3__providers_usuario_service_usuario_service__["a" /* UsuarioServiceProvider */]],
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__providers_usuario_service_usuario_service__["a" /* UsuarioServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_usuario__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_usuario_service_usuario_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { Params} from '@angular/router';



/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignupPage = (function () {
    function SignupPage(navCtrl, _usuarioService, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this._usuarioService = _usuarioService;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.usuario = new __WEBPACK_IMPORTED_MODULE_2__models_usuario__["a" /* Usuario */](null, '', '', '', '', '', '', '');
        this.confirm_pass = '';
        this.confirm = false;
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.usuario + this.confirm_pass);
        if (this.usuario.password != this.confirm_pass) {
            console.log("NO-coinciden");
            this.alert('Error', 'Las contraseñas introducidas no coinciden, vuelve a verificarlas');
            this.usuario = new __WEBPACK_IMPORTED_MODULE_2__models_usuario__["a" /* Usuario */](null, '', '', '', '', '', '', '');
            this.confirm_pass = '';
        }
        else {
            // console.log("entra al else, coincide");
            if (this.usuario.password == this.confirm_pass) {
                // this.alert('Success', "coinciden contraseñas"+this.usuario.nombre);
                this._usuarioService.addUsuario(this.usuario).subscribe(function (result) {
                    if (!result.usuario) {
                        _this.alert('Error', 'Problemas con el servidor. Contacte con su administrador de red.');
                        console.log(result);
                    }
                    else {
                        if (result) {
                            _this.usuario = result.usuario;
                            _this.alert("Success", "Usuario creado correctamente. Por favor " + _this.usuario.nombre + " " + _this.usuario.apaterno + " introduce tus credenciales.");
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
                        }
                        else {
                            console.log("Result " + result);
                        }
                    }
                }, function (err) {
                    var error = JSON.parse(JSON.stringify(err));
                    var errorMessage = JSON.parse(error._body);
                    if (errorMessage != null) {
                        // let errorEmail = JSON.parse(errorMessage.email);
                        console.log("Error " + JSON.stringify(errorMessage));
                        _this.alert('Error', errorMessage.errors.email);
                    }
                });
            }
        }
    };
    SignupPage.prototype.alert = function (titulo, contenido) {
        var alert = this.alertCtrl.create({
            title: titulo,
            subTitle: contenido,
            buttons: ['OK']
        });
        alert.present();
    };
    return SignupPage;
}());
SignupPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-signup',template:/*ion-inline-start:"C:\Users\Ivan Rojo\Desktop\appvinos\src\pages\signup\signup.html"*/'<!--\n\n  Generated template for the SignupPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header no-border>\n\n\n\n    <ion-navbar transparent>\n\n        <button ion-button menuToggle icon-only class="menu">\n\n          <ion-icon></ion-icon>\n\n        </button>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content fullscreen padding>\n\n  <ion-card>\n\n  <ion-card-header>\n\n    Registrate:\n\n  </ion-card-header>\n\n    <form #formRegister="ngForm" (ngSubmit)="onSubmit()">\n\n      <ion-item>\n\n        <ion-label floating>Nombre</ion-label>\n\n        <ion-input type="text" name="nombre" #nombre="ngModel" [(ngModel)]="usuario.nombre" required autofocus></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label floating>Apellido Paterno</ion-label>\n\n        <ion-input type="text" name="apaterno" #apaterno="ngModel" [(ngModel)]="usuario.apaterno" required autofocus></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label floating>Apellido Materno</ion-label>\n\n        <ion-input type="text" name="amaterno" #amaterno="ngModel" [(ngModel)]="usuario.amaterno" required autofocus></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label stacked>Fecha de Nacimiento</ion-label>\n\n        <ion-input type="date" name="fechanac" #fechanac="ngModel" [(ngModel)]="usuario.fechanac" required autofocus></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label floating>Número movil</ion-label>\n\n        <ion-input type="text" name="telefono" #telefono="ngModel" [(ngModel)]="usuario.telefono" required autofocus></ion-input>\n\n      </ion-item>\n\n\n\n\n\n      <ion-item>\n\n        <ion-label floating>Correo Electronico</ion-label>\n\n        <ion-input type="email" name="email" #email="ngModel" [(ngModel)]="usuario.email" pattern="[A-Za-z0-9._%+-]{3,}@[a-zA-Z_-]{3,}([.]{1}[a-zA-Z_-]{2,}|[.]{1}[a-zA-Z_-]{2,}[.]{1}[a-zA-Z_-]{2,})" required></ion-input>\n\n      </ion-item>\n\n    \n\n      <ion-item>\n\n        <ion-label floating>Contraseña</ion-label>\n\n        <ion-input type="password" name="password" #password="ngModel" [(ngModel)]="usuario.password" required autofocus></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label floating>Repetir Contraseña</ion-label>\n\n        <ion-input type="password" name="confirm_pass"  [(ngModel)]="confirm_pass" required autofocus></ion-input>\n\n      </ion-item>\n\n  \n\n      <div padding>\n\n        <button ion-button color="primary" type="submit" [disabled]="!formRegister.form.valid" block>Entrar</button>\n\n      </div>\n\n    </form>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Ivan Rojo\Desktop\appvinos\src\pages\signup\signup.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_3__providers_usuario_service_usuario_service__["a" /* UsuarioServiceProvider */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_usuario_service_usuario_service__["a" /* UsuarioServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], SignupPage);

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Usuario; });
var Usuario = (function () {
    function Usuario(idusuario, nombre, apaterno, amaterno, fechanac, telefono, email, password) {
        this.idusuario = idusuario;
        this.nombre = nombre;
        this.apaterno = apaterno;
        this.amaterno = amaterno;
        this.fechanac = fechanac;
        this.telefono = telefono;
        this.email = email;
        this.password = password;
    }
    return Usuario;
}());

//# sourceMappingURL=usuario.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__usuario_service_usuario_service__ = __webpack_require__(46);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__usuario_service_usuario_service__["a"]; });


//# sourceMappingURL=providers.js.map

/***/ })

},[211]);
//# sourceMappingURL=main.js.map