(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row aboutMe scene_element scene_element-fadeinup\">\n    <div class=\"col-12 col-md-6 col-lg-5\">\n      <img [src]=\"myPhotoUrl\" alt=\"Irina Ziborova Portret\">\n    </div>\n    <div class=\"col-12 col-md-6 col-lg-7\">\n        <h2 class=\"mobile-margin-top\">{{myStory}}</h2>\n        <p *ngFor=\"let paragraf of paragrafs\">\n            {{paragraf}}\n        </p>\n    </div>\n</div>\n\n<div class=\"row experience scene_element scene_element-fadeinup\">\n    <div  class=\"col-12 col-md-5\">\n        <h3>EXPERIENCE -</h3>\n        <p *ngFor=\"let experience of experiences\">\n          <span>{{experience.year}} </span>\n          <span>{{experience.name}}</span>\n        </p>\n    </div>\n    <div  class=\"col-12 col-md-5\">\n        <h3 class=\"mobile-margin-top\">EDUCATION -</h3>\n        <p *ngFor=\"let education of educations\">\n          <span>{{education.year}} </span>\n          <span>{{education.name}}</span>\n        </p>\n      </div>\n</div>\n\n<div class=\"row skills scene_element scene_element-fadeinup\">\n  <div class=\"col-12 col-md-5 offset-md-5\"><h3>SKILLS-</h3></div>\n  <p>{{skills}}</p>\n</div>\n"

/***/ }),

/***/ "./src/app/about/about.component.scss":
/*!********************************************!*\
  !*** ./src/app/about/about.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media screen and (max-width: 767px) {\n  .mobile-margin-top {\n    margin-top: 20px; } }\n\n.skills {\n  background: black;\n  padding: 40px;\n  margin: 40px 0; }\n\n.skills h3 {\n    color: white; }\n\n.skills p {\n    margin-top: 20px;\n    color: white !important;\n    text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pcmEvd29ya3NwYWNlL2lyaW5hc2l0ZS9zcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0k7SUFDSSxnQkFBZ0IsRUFBQSxFQUNuQjs7QUFFTDtFQUNJLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsY0FBYyxFQUFBOztBQUhsQjtJQU1RLFlBQVksRUFBQTs7QUFOcEI7SUFVUSxnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCl7XG4gICAgLm1vYmlsZS1tYXJnaW4tdG9wIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDsgXG4gICAgfVxufVxuLnNraWxscyB7XG4gICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICAgcGFkZGluZzogNDBweDtcbiAgICBtYXJnaW46IDQwcHggMDtcblxuICAgIGgze1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuXG4gICAgcCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
        this.myPhotoUrl = "assets/img/me.jpg";
        this.myStory = "My Story -";
        this.paragrafs = [
            'I am an Interaction Engineer and Usability specialist with a passion to bring clear logic, good user experience, and a pleasant UI to web-based platforms.',
            'I started in 2014 to learn about web technologies namely HTML, CSS, and Javascript. Followed by a Master program in Computer Graphics and Web Design, I deepened my knowledge in Helsinki’s Aalto University with the following courses: human-computer interaction, user-oriented design and usability product design.",     ',
            'I am hands on with most popular prototyping and design tools like Adobe CC, Sketch, Figma, Invision, Anima, Craft and I am an active user of design thinking methods and I am used to work in an agile environment.'
        ];
        this.educations = [
            {
                year: '2016',
                name: 'Aalto University, semester abroad'
            },
            {
                year: '2015-2017',
                name: 'ITMO University, M.Sc Computer Grafics & Web-Design'
            },
            {
                year: '2009-2015',
                name: 'Peter the Great St.Petersburg Polytechnic University, B. Managment'
            },
            {
                year: '2014',
                name: 'Learning center Status, Creation and Promotion of Web Sites'
            }
        ];
        this.experiences = [
            {
                year: '2018 - ND',
                name: 'Visual Meta GmBH, Interaction Engineer'
            },
            {
                year: '2017',
                name: 'Avanta Digital, Web-designer'
            },
            {
                year: '2012-2017',
                name: 'Reksoft, project assistant'
            }
        ];
        this.skills = "#HTML #CSS #JavaScript #bootstrap #Angular #Java #AdobeCC #AdobePhotoshop #AdobeIllustrator #Sketch #Figma #InVision #UI #UX #GraficDesign #GifAnimation #WebDesign #ResponsiceDesign #CrosBrowserDesign #GitHub #Bitbucket #InteliJ";
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/about/about.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<app-header></app-header>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Irina Ziborova';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule, OtherModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherModule", function() { return OtherModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var angular_popper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-popper */ "./node_modules/angular-popper/fesm5/angular-popper.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "./src/app/portfolio/portfolio.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _project_project_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./project/project.component */ "./src/app/project/project.component.ts");
/* harmony import */ var _services_projects_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/projects.service */ "./src/app/services/projects.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_10__["AboutComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_11__["ContactComponent"],
                _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_12__["PortfolioComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"],
                _project_project_component__WEBPACK_IMPORTED_MODULE_14__["ProjectComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_7__["AngularFontAwesomeModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"].forRoot(),
                angular_popper__WEBPACK_IMPORTED_MODULE_8__["NgxPopper"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([
                    { path: '', redirectTo: '/portfolio', pathMatch: 'full' },
                    { path: 'portfolio', component: _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_12__["PortfolioComponent"] },
                    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_10__["AboutComponent"] },
                    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_11__["ContactComponent"] },
                    { path: 'project/:id', component: _project_project_component__WEBPACK_IMPORTED_MODULE_14__["ProjectComponent"] }
                ], { scrollPositionRestoration: 'enabled' })
            ],
            providers: [_services_projects_service__WEBPACK_IMPORTED_MODULE_15__["ProjectsService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());

var OtherModule = /** @class */ (function () {
    function OtherModule() {
    }
    return OtherModule;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row contacts scene_element scene_element-fadeinup\">\n    <div class=\"col-12 offset-md-3 col-md-6\">\n       <img [src]=\"contactPhotoUrl\" alt=\"contact\"/>\n    </div>\n    <div class=\"field\">\n        <a href=\"mailto:irisha.ziborova@gmail.com\"><button type=\"submit\" class=\"button black is-danger is-large\">{{buttonNname}}</button></a>\n    </div>\n    <div class=\"flex-social-wrap\">\n      <div class=\"flex\">\n        <svg version=\"1.1\" id=\"locationIco\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n          viewBox=\"0 0 58 58\" style=\"enable-background:new 0 0 58 58;\" xml:space=\"preserve\">\n        <line style=\"fill:none;stroke:#556080;stroke-width:2;stroke-linecap:round;stroke-miterlimit:10;\" x1=\"29\" y1=\"28\" x2=\"29\" y2=\"57\"/>\n        <circle style=\"fill:#000;\" cx=\"29\" cy=\"14\" r=\"14\"/>\n        <circle style=\"fill:#fff;\" cx=\"24\" cy=\"10\" r=\"3\"/>\n        </svg>\n        <span>{{myLocation}}</span>\n      </div>\n      <div class=\"flex\">\n          <span *ngFor=\"let social of socials\">\n              <a href=\"{{social.socialIcoLink}}\" target=\"_blank\">\n                <img class=\"socialIco\" [src]=\"social.socialIcoUrl\"/>\n              </a>\n          </span>\n      </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/contact/contact.component.scss":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flex-column {\n  display: flex;\n  flex-flow: column; }\n\n.field {\n  width: 100%;\n  text-align: center; }\n\n.flex-social-wrap {\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  justify-content: center;\n  flex: 1; }\n\n.flex {\n  display: flex;\n  flex-direction: row;\n  align-items: center; }\n\n#locationIco {\n  width: 24px; }\n\n.socialIco {\n  width: 20px;\n  margin: 24px 4px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pcmEvd29ya3NwYWNlL2lyaW5hc2l0ZS9zcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLGFBQWE7RUFDYixpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxXQUFXO0VBQ1gsa0JBQWtCLEVBQUE7O0FBY3RCO0VBQ0ksYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLE9BQU8sRUFBQTs7QUFFWDtFQUNJLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksV0FBVyxFQUFBOztBQUVmO0VBQ0ksV0FBVztFQUNYLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGJsYWNrIDogIzMzMztcbiRsaWdodGdyZXk6ICNlZWU7IFxuXG4uZmxleC1jb2x1bW4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiBjb2x1bW47XG59XG5cbi5maWVsZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgLy8gaW5wdXQsIHRleHRhcmVhIHtcbiAgICAvLyAgICAgd2lkdGg6IDEwMCU7XG4gICAgLy8gICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gICAgLy8gICAgIGJvcmRlcjogMXB4IHNvbGlkICRsaWdodGdyZXk7XG4gICAgLy8gfVxuXG4gICAgLy8gdGV4dGFyZWEge1xuICAgIC8vICAgICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgICAvLyB9XG5cbiAgICBcbn1cbi5mbGV4LXNvY2lhbC13cmFwIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleDogMTtcbn1cbi5mbGV4IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuI2xvY2F0aW9uSWNvIHtcbiAgICB3aWR0aDogMjRweDtcbn1cbi5zb2NpYWxJY28ge1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIG1hcmdpbjogMjRweCA0cHg7XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
        this.contactPhotoUrl = "assets/img/contact.jpg";
        this.followMe = "FOLLOW ME -";
        this.myLocation = "Berlin, Germany";
        this.contactMe = "CONTACT ME -";
        this.buttonNname = "Email me";
        this.socials = [
            {
                socialIcoLink: "https://www.behance.net/irinaziborova",
                socialIcoUrl: "assets/img/be.png"
            },
            {
                socialIcoLink: "https://www.instagram.com/iraziborova",
                socialIcoUrl: "assets/img/insta.png"
            },
            {
                socialIcoLink: "https://www.linkedin.com/in/ziborovairina/",
                socialIcoUrl: "assets/img/in.png"
            }
        ];
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    /**
     * Process the form we have. Send to whatever backend
     * Only alerting for now
     */
    ContactComponent.prototype.processForm = function () {
        var allInfo = "My name is " + this.name + ". My email is " + this.email + ". My message is " + this.message;
        alert(allInfo);
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/contact/contact.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row footer\">\n  <div class=\"col-12 col-md-4\">\n    <h4>{{contact}}</h4>\n  </div>\n  <div class=\"col-12 col-md-8\">\n    <ul class=\"list-inline\">\n        <li class=\"-pt-mono list-inline-item\">\n          <a href=\"mailto:irisha.ziborova@gmail.com\">Email me ‣</a>\n        </li>\n        <li class=\"-pt-mono list-inline-item\" *ngFor=\"let link of links\">\n          <a [attr.href]=\"link.url\" target=\"_blank\">{{link.title}}</a>\n        </li>\n        <!-- <li class=\"-pt-mono list-inline-item\"><a  href=\"https://www.instagram.com/irinaziborova.de/\" target=\"_blank\">Instagram ‣</a></li>\n        <li class=\"-pt-mono list-inline-item\"><a  href=\"https://www.linkedin.com/in/ziborovairina/\" target=\"_blank\">LinkedIn ‣</a></li> -->\n    </ul>\n    <div class=\"-pt-mono rights\">\n      <span class=\"copy-symbol\">&copy; {{currentYear | date:'yyyy'}} Irina Reinerth</span></div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n  bottom: 0;\n  width: 100%;\n  padding-top: 40px; }\n  .footer .rights {\n    margin: 1.2rem 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pcmEvd29ya3NwYWNlL2lyaW5hc2l0ZS9zcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSxTQUFTO0VBQ1QsV0FBVztFQUNYLGlCQUFpQixFQUFBO0VBSnpCO0lBTVEsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlciB7XG4gICAgICAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcGFkZGluZy10b3A6IDQwcHg7XG4gICAgLnJpZ2h0cyB7XG4gICAgICAgIG1hcmdpbjogMS4ycmVtIDA7XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.contact = 'How to contact';
        this.links = [
            // {
            //   url : 'https://www.behance.net/irinaziborova',
            //   title: 'Behance ‣'
            // },
            {
                url: 'https://www.instagram.com/irinaziborova.de/',
                title: 'Instagram ‣'
            },
            {
                url: 'https://www.linkedin.com/in/ziborovairina/',
                title: 'LinkedIn ‣'
            }
        ];
        this.currentYear = new Date();
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md\">\n    <a class=\"navbar-brand logo\" routerLink=\"/portfolio\"><h1>{{title}}</h1></a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExample04\" aria-controls=\"navbarsExample04\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <i class=\"fa fa-bars\"></i>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarsExample04\">\n      <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item\" *ngFor=\"let navigation of navigations\">\n          <a class=\"nav-link -pt-mono\" routerLink=\"{{navigation.routerLink}}\" routerLinkActive=\"active-link\">{{navigation.title}}</a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav {\n  background-color: #ffffffe6;\n  padding: 1.5rem 0rem; }\n\n.navbar-brand, h1 {\n  text-transform: uppercase;\n  font-size: 1.75rem; }\n\n.active-link {\n  border-bottom: 1px solid #eee; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pcmEvd29ya3NwYWNlL2lyaW5hc2l0ZS9zcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSwyQkFKd0I7RUFLeEIsb0JBQW9CLEVBQUE7O0FBRXhCO0VBQ0kseUJBQXlCO0VBQ3pCLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLDZCQVhZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHdoaXRlVHJhbnNwYXJlbnQ6ICNmZmZmZmZlNjtcbiRsaWdodGdyZXk6ICNlZWU7IFxuXG5uYXZ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlVHJhbnNwYXJlbnQ7XG4gICAgcGFkZGluZzogMS41cmVtIDByZW07XG59XG4ubmF2YmFyLWJyYW5kLCBoMSB7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXNpemU6IDEuNzVyZW07XG59XG4uYWN0aXZlLWxpbmsge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkbGlnaHRncmV5O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.title = 'Irina Reinerth';
        this.navigations = [
            {
                routerLink: "/portfolio",
                title: "Portfolio"
            },
            {
                routerLink: "/about",
                title: "About"
            },
            {
                routerLink: "/contact",
                title: "Contact"
            }
        ];
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/portfolio/portfolio.component.html":
/*!****************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"masonry scene_element scene_element-fadeinup\">\n  <div *ngFor=\"let project of projectsService.projects\" class=\"item\">\n    <a routerLink=\"/project/{{project.id}}\">\n      <img [src]=\"project.photoUrl[0]\" [alt]=\"project.alt\">\n      <a class=\"-pt-mono\">{{project.title}}</a>\n    </a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/portfolio/portfolio.component.scss":
/*!****************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".masonry {\n  -webkit-column-count: 3;\n          column-count: 3;\n  -webkit-column-gap: 5rem;\n          column-gap: 5rem; }\n  .masonry .item {\n    display: inline-block;\n    margin: 0 0 5rem;\n    width: 100%; }\n  .masonry .item img {\n      margin-bottom: 2rem; }\n  @media (max-width: 767.98px) {\n  .masonry {\n    -webkit-column-count: 1 !important;\n            column-count: 1 !important; } }\n  @media (max-width: 991.98px) {\n  .masonry {\n    -webkit-column-count: 2;\n            column-count: 2; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pcmEvd29ya3NwYWNlL2lyaW5hc2l0ZS9zcmMvYXBwL3BvcnRmb2xpby9wb3J0Zm9saW8uY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvaXJhL3dvcmtzcGFjZS9pcmluYXNpdGUvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL21peGlucy9fYnJlYWtwb2ludHMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNJLHVCQUFjO1VBQWQsZUFBYztFQUNkLHdCQUFlO1VBQWYsZ0JBQWUsRUFBQTtFQUZuQjtJQUtJLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsV0FBVyxFQUFBO0VBUGY7TUFVUSxtQkFBbUIsRUFBQTtFQzJEdkI7RURyREE7SUFDSSxrQ0FBMEI7WUFBMUIsMEJBQTBCLEVBQUEsRUFDN0I7RUNtREQ7RURoREE7SUFDSSx1QkFBZTtZQUFmLGVBQWUsRUFBQSxFQUNsQiIsImZpbGUiOiJzcmMvYXBwL3BvcnRmb2xpby9wb3J0Zm9saW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwibm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL2Z1bmN0aW9uc1wiO1xuQGltcG9ydCBcIm5vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy92YXJpYWJsZXNcIjtcbkBpbXBvcnQgXCJub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvbWl4aW5zL2JyZWFrcG9pbnRzXCI7XG5cbi5tYXNvbnJ5IHtcbiAgICBjb2x1bW4tY291bnQ6MztcbiAgICBjb2x1bW4tZ2FwOjVyZW07XG4gIFxuICAuaXRlbSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbjogMCAwIDVyZW07XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICBpbWcge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgIH1cbiAgfVxufVxuXG5AaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oc20pe1xuICAgIC5tYXNvbnJ5IHtcbiAgICAgICAgY29sdW1uLWNvdW50OiAxICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKG1kKXtcbiAgICAubWFzb25yeSB7XG4gICAgICAgIGNvbHVtbi1jb3VudDogMjtcbiAgICB9XG59IiwiLy8gQnJlYWtwb2ludCB2aWV3cG9ydCBzaXplcyBhbmQgbWVkaWEgcXVlcmllcy5cbi8vXG4vLyBCcmVha3BvaW50cyBhcmUgZGVmaW5lZCBhcyBhIG1hcCBvZiAobmFtZTogbWluaW11bSB3aWR0aCksIG9yZGVyIGZyb20gc21hbGwgdG8gbGFyZ2U6XG4vL1xuLy8gICAgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KVxuLy9cbi8vIFRoZSBtYXAgZGVmaW5lZCBpbiB0aGUgYCRncmlkLWJyZWFrcG9pbnRzYCBnbG9iYWwgdmFyaWFibGUgaXMgdXNlZCBhcyB0aGUgYCRicmVha3BvaW50c2AgYXJndW1lbnQgYnkgZGVmYXVsdC5cblxuLy8gTmFtZSBvZiB0aGUgbmV4dCBicmVha3BvaW50LCBvciBudWxsIGZvciB0aGUgbGFzdCBicmVha3BvaW50LlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSlcbi8vICAgIG1kXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAkYnJlYWtwb2ludC1uYW1lczogKHhzIHNtIG1kIGxnIHhsKSlcbi8vICAgIG1kXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludC1uYW1lczogbWFwLWtleXMoJGJyZWFrcG9pbnRzKSkge1xuICAkbjogaW5kZXgoJGJyZWFrcG9pbnQtbmFtZXMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbiA8IGxlbmd0aCgkYnJlYWtwb2ludC1uYW1lcyksIG50aCgkYnJlYWtwb2ludC1uYW1lcywgJG4gKyAxKSwgbnVsbCk7XG59XG5cbi8vIE1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIHNtYWxsZXN0IChmaXJzdCkgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1pbihzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDU3NnB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogbWFwLWdldCgkYnJlYWtwb2ludHMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbWluICE9IDAsICRtaW4sIG51bGwpO1xufVxuXG4vLyBNYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBsYXJnZXN0IChsYXN0KSBicmVha3BvaW50LlxuLy8gVGhlIG1heGltdW0gdmFsdWUgaXMgY2FsY3VsYXRlZCBhcyB0aGUgbWluaW11bSBvZiB0aGUgbmV4dCBvbmUgbGVzcyAwLjAycHhcbi8vIHRvIHdvcmsgYXJvdW5kIHRoZSBsaW1pdGF0aW9ucyBvZiBgbWluLWAgYW5kIGBtYXgtYCBwcmVmaXhlcyBhbmQgdmlld3BvcnRzIHdpdGggZnJhY3Rpb25hbCB3aWR0aHMuXG4vLyBTZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL21lZGlhcXVlcmllcy00LyNtcS1taW4tbWF4XG4vLyBVc2VzIDAuMDJweCByYXRoZXIgdGhhbiAwLjAxcHggdG8gd29yayBhcm91bmQgYSBjdXJyZW50IHJvdW5kaW5nIGJ1ZyBpbiBTYWZhcmkuXG4vLyBTZWUgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE3ODI2MVxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbWF4KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgNzY3Ljk4cHhcbkBmdW5jdGlvbiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbmV4dDogYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAcmV0dXJuIGlmKCRuZXh0LCBicmVha3BvaW50LW1pbigkbmV4dCwgJGJyZWFrcG9pbnRzKSAtIC4wMnB4LCBudWxsKTtcbn1cblxuLy8gUmV0dXJucyBhIGJsYW5rIHN0cmluZyBpZiBzbWFsbGVzdCBicmVha3BvaW50LCBvdGhlcndpc2UgcmV0dXJucyB0aGUgbmFtZSB3aXRoIGEgZGFzaCBpbiBmcm9udC5cbi8vIFVzZWZ1bCBmb3IgbWFraW5nIHJlc3BvbnNpdmUgdXRpbGl0aWVzLlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtaW5maXgoeHMsICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBcIlwiICAoUmV0dXJucyBhIGJsYW5rIHN0cmluZylcbi8vICAgID4+IGJyZWFrcG9pbnQtaW5maXgoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBcIi1zbVwiXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1pbmZpeCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICBAcmV0dXJuIGlmKGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpID09IG51bGwsIFwiXCIsIFwiLSN7JG5hbWV9XCIpO1xufVxuXG4vLyBNZWRpYSBvZiBhdCBsZWFzdCB0aGUgbWluaW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIHNtYWxsZXN0IGJyZWFrcG9pbnQuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIHdpZGVyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtdXAoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEBpZiAkbWluIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBNZWRpYSBvZiBhdCBtb3N0IHRoZSBtYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgbGFyZ2VzdCBicmVha3BvaW50LlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCBuYXJyb3dlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LWRvd24oJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEBpZiAkbWF4IHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBNZWRpYSB0aGF0IHNwYW5zIG11bHRpcGxlIGJyZWFrcG9pbnQgd2lkdGhzLlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IGJldHdlZW4gdGhlIG1pbiBhbmQgbWF4IGJyZWFrcG9pbnRzXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1iZXR3ZWVuKCRsb3dlciwgJHVwcGVyLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRsb3dlciwgJGJyZWFrcG9pbnRzKTtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJHVwcGVyLCAkYnJlYWtwb2ludHMpO1xuXG4gIEBpZiAkbWluICE9IG51bGwgYW5kICRtYXggIT0gbnVsbCB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIGFuZCAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1heCA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRsb3dlciwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1pbiA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oJHVwcGVyLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuXG4vLyBNZWRpYSBiZXR3ZWVuIHRoZSBicmVha3BvaW50J3MgbWluaW11bSBhbmQgbWF4aW11bSB3aWR0aHMuXG4vLyBObyBtaW5pbXVtIGZvciB0aGUgc21hbGxlc3QgYnJlYWtwb2ludCwgYW5kIG5vIG1heGltdW0gZm9yIHRoZSBsYXJnZXN0IG9uZS5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSBvbmx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50LCBub3Qgdmlld3BvcnRzIGFueSB3aWRlciBvciBuYXJyb3dlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LW9ubHkoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cyk7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuXG4gIEBpZiAkbWluICE9IG51bGwgYW5kICRtYXggIT0gbnVsbCB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIGFuZCAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1heCA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRuYW1lLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWluID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkbmFtZSwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/portfolio/portfolio.component.ts":
/*!**************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.ts ***!
  \**************************************************/
/*! exports provided: PortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function() { return PortfolioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_projects_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/projects.service */ "./src/app/services/projects.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PortfolioComponent = /** @class */ (function () {
    function PortfolioComponent(projectsService) {
        this.projectsService = projectsService;
    }
    PortfolioComponent.prototype.ngOnInit = function () {
    };
    PortfolioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-portfolio',
            template: __webpack_require__(/*! ./portfolio.component.html */ "./src/app/portfolio/portfolio.component.html"),
            styles: [__webpack_require__(/*! ./portfolio.component.scss */ "./src/app/portfolio/portfolio.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_projects_service__WEBPACK_IMPORTED_MODULE_1__["ProjectsService"]])
    ], PortfolioComponent);
    return PortfolioComponent;
}());



/***/ }),

/***/ "./src/app/project/project.component.html":
/*!************************************************!*\
  !*** ./src/app/project/project.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"projectPage scene_element scene_element-fadeinup\"> \n  <div class=\"row\">\n    <div class=\"col-12 col-md-6\">\n      <h2 (click)=\"goBack()\">\n         <a>Portfolio</a> ◂ {{project.title}}\n      </h2>\n      <p *ngFor=\"let description of project.descriptions\">\n        {{description}}\n      </p>\n      <div *ngIf=\"project.photoUrl.length % 2 !== 0\">\n          <h4 >Project tags :</h4>\n          <ul>\n            <li *ngFor=\"let tag of project.projectTags\"># {{tag}}</li>\n          </ul>\n        </div>\n    </div>\n  \n    <div *ngFor=\"let url of project.photoUrl\" class=\"col-12 col-md-6\">\n        <img [src]=\"url\" [alt]=\"project.alt\">\n    </div>\n    <div class=\"col-12 col-md-6\">\n        <div *ngIf=\"project.photoUrl.length % 2 == 0\">\n            <h4>Project tags :</h4>\n            <ul>\n              <li *ngFor=\"let tag of project.projectTags\"># {{tag}}</li>\n            </ul>\n        </div>\n    </div>\n  </div>\n  <div *ngIf=\"this.display\" class=\"flex -justify-end\">\n      <button (click)=\"goNext()\" class=\"button black is-danger is-large\">Next project</button>\n  </div>\n  <div *ngIf=\"this.lastProject\" class=\"flex -justify-end\">\n      <button routerLink=\"/portfolio\" class=\"button white is-danger is-large\">Home</button>\n      <button routerLink=\"/about\" class=\"button black is-danger is-large\">About me</button>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/project/project.component.scss":
/*!************************************************!*\
  !*** ./src/app/project/project.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.col-12 {\n  margin: 10px 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pcmEvd29ya3NwYWNlL2lyaW5hc2l0ZS9zcmMvYXBwL3Byb2plY3QvcHJvamVjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3QvcHJvamVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdi5jb2wtMTIge1xuICAgIG1hcmdpbjogMTBweCAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/project/project.component.ts":
/*!**********************************************!*\
  !*** ./src/app/project/project.component.ts ***!
  \**********************************************/
/*! exports provided: ProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectComponent", function() { return ProjectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_projects_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/projects.service */ "./src/app/services/projects.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProjectComponent = /** @class */ (function () {
    function ProjectComponent(route, location, projectsService) {
        this.route = route;
        this.location = location;
        this.projectsService = projectsService;
    }
    ProjectComponent.prototype.ngOnInit = function () {
        this.id = +this.route.snapshot.paramMap.get('id');
        this.getProject();
    };
    ProjectComponent.prototype.getProject = function () {
        var _this = this;
        this.project = this.projectsService.getProject().filter(function (proj) { return proj.id === _this.id; })[0];
        if (this.id > 1) {
            this.display = true;
            this.lastProject = false;
        }
        else if (this.id = 1) {
            this.display = false;
            this.lastProject = true;
        }
    };
    ProjectComponent.prototype.goBack = function () {
        this.location.back();
    };
    ProjectComponent.prototype.goNext = function () {
        var next = this.id - 1;
        this.project = this.projectsService.getProject().filter(function (proj) { return proj.id === next; })[0];
        if (next > 1) {
            this.display = true;
            this.lastProject = false;
        }
        else if (next = 1) {
            this.display = false;
            this.lastProject = true;
        }
        this.id = next;
        window.scroll(0, 0);
    };
    ProjectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-project',
            template: __webpack_require__(/*! ./project.component.html */ "./src/app/project/project.component.html"),
            styles: [__webpack_require__(/*! ./project.component.scss */ "./src/app/project/project.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"],
            _services_projects_service__WEBPACK_IMPORTED_MODULE_1__["ProjectsService"]])
    ], ProjectComponent);
    return ProjectComponent;
}());



/***/ }),

/***/ "./src/app/services/projects.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/projects.service.ts ***!
  \**********************************************/
/*! exports provided: ProjectsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsService", function() { return ProjectsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectsService = /** @class */ (function () {
    function ProjectsService() {
        this.projects = [];
        this.projects.push({
            id: 12,
            photoUrl: ["assets/img/Andeor.jpg", "assets/img/andeor2.jpg", "assets/img/andeor3.jpg"],
            title: "Dance School web-site design",
            alt: "Dance School Site",
            descriptions: ["Responsive design and layout for a dancing school. Made in dark colours with the use of black and white photos to stand out the chamber theater atmosphere. You will find the main information on the site about dancing classes, groups and projects, reviews, photos, and a contact form."],
            projectTags: ["Dancing school web-design",
                "Responsive design and layout",
                "Dark interface",
                "One page site",
                "HTML",
                "CSS",
                "JavaScript",
                "Bootstrap"]
        });
        this.projects.push({
            id: 11,
            photoUrl: ["assets/img/night_guide/cover.jpg",
                "assets/img/night_guide/map.jpg",
                "assets/img/night_guide/details.jpg",
                "assets/img/night_guide/prototype.png"],
            title: "Mobile App design for Night Guide",
            alt: "Mobile App design for Night Guide",
            descriptions: ["goal: Create a design for night life mobile application",
                "Elements created for the project: Name, Logo, Colors, Fonts and Icons",
                "Pages: Prototype made in Figma. User flow starts on a home screen, where a user sees the logo.\
                The user needs to allow access to the maps for the application to be able to search the clubs around\
                users current location and create the route to the choosen club.\
                The interface consists of 2 view screens: on the map and as a list. From both view types user goes to details\
                page by clicking on the club. Details show number of visitors, current event at the club and avarage check.\
                From details page the user can go back and explore more options or click the button to navigate to the club.\
                At this point the session counts as converted. It helps to collect statistics and attract more clubs/restaurans/bars."],
            projectTags: ["MobileAppDesign",
                "MaterialDesign",
                "DarkUI",
                "ClearUserFlow",
                "dontMakeMeThink",
                "Figma"]
        });
        this.projects.push({
            id: 10,
            photoUrl: ["assets/img/Voice_Gift/1.Singers.png",
                "assets/img/Voice_Gift/2.Info.png",
                "assets/img/Voice_Gift/2.1.png",
                "assets/img/Voice_Gift/3.Confirmation.png",
                "assets/img/Voice_Gift/3.1Video_preview.png",
                "assets/img/Voice_Gift/3.2Payment.png",
                "assets/img/Voice_Gift/4.Payment_confirmed.png",
                "assets/img/Voice_Gift/Homepage.png"],
            title: "Voice gift service",
            alt: "Voice gift service",
            descriptions: ["Online service offers users to buy a personalised voice message: \
            Song, poem or anything else from a professional artists.\
            I wanted to create a simple and interesting design with a clear user flow starting \
            at Introduction to the service on the Home page, choosing the artist and the message \
            and purchasing the gift. I like the filter system that I came up with in this project. \
            We needed to filter artists by gender and type of art.\
            I was able to create a rotation circle filters around the video block.",
                "You can find below the animation showing my idea.\
            I like the playful mood that the design brings and how clean design collaborates \
            with the colours in this project."],
            projectTags: ["desktop application",
                "Purchase user flow",
                "Playful design",
                "Music goods and services",
                "Unusual filter system",
                "Figma"]
        });
        this.projects.push({
            id: 9,
            photoUrl: ["assets/img/Newsletter2.jpg"],
            title: "Subscribtion Form design and Layout",
            alt: "Subscribtion Form",
            descriptions: ["Web-design and full implementation of forms for newsletter subscription. \
            The task was to create attractive for a user and in line with The EU General Data Protection \
            Regulation (GDPR) newsletter subscription form. For the project were designed and developed a \
            full page in the platform, section in the footer and a pop-up both for desktop and mobile."],
            projectTags: ["Newsletter subscription forms",
                "GDPR frced redesign",
                "Responsive web-design",
                "Pink-grey palette indesign",
                "HTML",
                "SASS"]
        });
        this.projects.push({
            id: 8,
            photoUrl: ["assets/img/filters2.jpg"],
            title: "Mobile Filters design and implementation",
            alt: "Mobile Filters",
            descriptions: ["Navigation and filtering among many fashion articles include seasonality, occasion, style filters. Filter panel is designed universally for desktop and smartphone. Front-end implementation also was provided. Filters are always a very interactive section, therefore I liked to work on usability and interaction design at this project. Collapsed/ expanded filters, buttons to increase a list of options to a filter,  active filter status in collapsed and expanded modes and removing active filters globally or from a specific filter. Those behaviors were the biggest things to think about and I like the final result."],
            projectTags: ["Filter’s panel",
                "Intraction design",
                "HTML, CSS, JavaScript",
                "Collapsed filters"
            ]
        });
        this.projects.push({
            id: 7,
            photoUrl: ["assets/img/Style_guide/cover3.jpg",
                "assets/img/Style_guide/colors.jpg",
                "assets/img/Style_guide/buttons.jpg",
                "assets/img/Style_guide/typography.jpg",
                "assets/img/Style_guide/screen_breaks.jpg",
                "assets/img/Style_guide/sketch_2.jpg"],
            title: "Style guide development",
            alt: "Style guide development",
            descriptions: ["Problem: No consistency in design",
                "Solution: Created a design library for designers and developers",
                "Elements: Colors, Buttons, Typography, Spaces, Shapes and Forms, Checkboxes, and Radio buttons, icons.",
                "Components: Login form, Toast massages, 404 page, product item.",
                "Result: -Fully functional cloud-based Sketch library for fast hi-fi prototyping by Designers.",
                "-CSS and JS library inside the frontend project for inbuild styles. The element gets CSS style automaticaly based on the aplied HTML classes to this element.",
                "-A landing page with all use cases of elements and components coded and ready to be copied and pasted in the code by developers",
                "Timeline and team: 2 months, 2 interaction engineers"],
            projectTags: ["Design language development",
                "Responsive design",
                "Core components design",
                "Sketch",
                "HTML",
                "SASS",
                "JavaScript",
                "JSP"]
        });
        this.projects.push({
            id: 6,
            photoUrl: ["assets/img/Apps2.jpg"],
            title: "Apps promotion page",
            alt: "Apps promotion page",
            descriptions: ["Company colours combined together led to a nice Pink-yellow gradients. To reach better readability, typography is performed in white colour. To show the surface of 3 phones and bring the floating effect were used depth and perspective design methods. The image with 3 phones was created out of one frontal positioned phone by using transformation of smart objects in Adobe Photoshop.  Design represents the page on desktop and mobile. Design was fully implemented by designer in front-end."],
            projectTags: ["Typography on a background",
                "Pin yellow gradient",
                "Apps web-page design ",
                "Responsive design",
                "Shadows as depth representation",
                "Smart bjects in Photoshop",
                "Sketch",
                "HTML",
                "SASS"]
        });
        this.projects.push({
            id: 5,
            photoUrl: ["assets/img/pionica1.jpg", "assets/img/pionica2.jpg", "assets/img/pionica3.jpg", "assets/img/pionica4.jpg"],
            title: "Brand identity design",
            alt: "Brand identity design",
            descriptions: ["Brand identity for a make up stylist. Tender logo represents the power of natural beauty of every customer and inspires the make up artist to create the same fresh and lite looks. As a scope of the work was to create the logo, business cards, certificates for trainings attendance, and gift cards."],
            projectTags: ["Polygraph and print design",
                "Make up stylist logo",
                "Make up stylist business card",
                "Pion i brand intentity",
                "AdobePhotoshop"]
        });
        this.projects.push({
            id: 4,
            photoUrl: ["assets/img/phonetemplate2.gif", "assets/img/shoppingquest1.jpg", "assets/img/shoppingquest2.jpg"],
            title: "Interaction design",
            alt: "Interaction design",
            descriptions: ["Interaction design played a big role in human-computer interaction. It helps to show the system statuses and reactions which are one of the essentials in usability. The project is a gift finder, that is 4 questions namely gender, occasion, budget, and interests. Design solution preceded a user test and competitor analysis. The name for a project was found with the use of a design thinking methods."],
            projectTags: ["Gift finder design",
                "Interaction design",
                "Design thinking methods",
                "AdobeXD"]
        });
        this.projects.push({
            id: 3,
            photoUrl: ["assets/img/invitation2.jpg", "assets/img/Invitation1.jpg", "assets/img/invitation3.jpg"],
            title: "Graphic Design",
            alt: "Water-colour flowers",
            descriptions: ["Water-colour flowers printed on a paper board with design fonts were made for a photo-shooting gift card. Made flower print can be also perfect complement to a wedding invitation or a post card with all the best wishes. There are also collection of item with this print available on sosity6/irinaziborova"],
            projectTags: ["Water-colour flowers print",
                "Print graphic design",
                "Wedding invitation",
                "AdobePhotoshop"]
        });
        this.projects.push({
            id: 2,
            photoUrl: ["assets/img/1.jpg", "assets/img/4.jpg", "assets/img/3.jpg", "assets/img/2.jpg"],
            title: "E-commerce site Design",
            alt: "E-commerce site Nicetop photo",
            descriptions: ["Nicetop.ru is a Russian e-commerce site for a woman, man, and children fashion. The site is made in white, black and ight green colors. The design foresees a desktop and a mobile layout. The design solution is based on the project prescription from a stakeholder and consists of all core elements and site pages namely Home page, Results page, Brand page, Item detail page, and others. Many complementary sectors like delivery, payment, personal account sections, and a page with size tables were also developed during the project."],
            projectTags: ["Design language development",
                "Responsive design",
                "Core compoents design",
                "Mobile Filters",
                "Grid Item and a quick viw",
                "Home page, Results page, Item detail page design",
                "white interface with black and green accents",
                "E-commerce design",
                "AdobePhotoshop"]
        });
        this.projects.push({
            id: 1,
            photoUrl: ["assets/img/Marcopolo.jpg"],
            title: "Hotel web-site design",
            alt: "Marco Polo Hotel site",
            descriptions: ["Marco Polo hotel is a small accomodation in the hart of St. Petersburg, Russia. Every suite is unique and made in Classical Russian design. To reflect this interior in my web-design were used red-wine and gold colours and a corporate monogram."],
            projectTags: ["Hotel web-site",
                "Resonsive design",
                "Classic style",
                "Booking system",
                "Dynamic pages"]
        });
    }
    ProjectsService.prototype.getProject = function () {
        return this.projects;
    };
    ProjectsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ProjectsService);
    return ProjectsService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ira/workspace/irinasite/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map