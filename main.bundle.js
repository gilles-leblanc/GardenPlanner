webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/alert.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_alert_service__ = __webpack_require__("../../../../../src/app/services/alert.service.ts");
// A component to display an error message to the user
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertComponent = /** @class */ (function () {
    function AlertComponent(alertService) {
        this.alertService = alertService;
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.alertService.getAlert().subscribe(function (alert) {
            if (!alert) {
                // clear alerts when an empty alert is received
                _this.hide();
                return;
            }
            // add alert to array
            _this.display(alert);
        });
    };
    AlertComponent.prototype.display = function (message) {
        this.isDisplayed = true;
        this.message = message;
    };
    AlertComponent.prototype.hide = function () {
        this.isDisplayed = false;
        this.message = '';
    };
    AlertComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            moduleId: module.i,
            selector: 'ts-alert',
            template: "\n  <div *ngIf=\"isDisplayed\" class=\"notification is-warning\">\n    <button class=\"delete\" (click)=\"hide()\"></button>\n    {{message}}\n  </div>",
            styles: ["div.notification { color: white; }"]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_alert_service__["a" /* AlertService */]])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_guard_service__ = __webpack_require__("../../../../../src/app/services/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__landing_landing_component__ = __webpack_require__("../../../../../src/app/landing/landing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__authenticated_garden_planner_garden_planner_component__ = __webpack_require__("../../../../../src/app/authenticated/garden-planner/garden-planner.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__authenticated_plants_borders_plants_borders_component__ = __webpack_require__("../../../../../src/app/authenticated/plants-borders/plants-borders.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', redirectTo: '/landing', pathMatch: 'full' },
    { path: 'landing', component: __WEBPACK_IMPORTED_MODULE_3__landing_landing_component__["a" /* LandingComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_4__login_login_component__["a" /* LoginComponent */] },
    { path: 'planner', component: __WEBPACK_IMPORTED_MODULE_5__authenticated_garden_planner_garden_planner_component__["a" /* GardenPlannerComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'plants-borders', component: __WEBPACK_IMPORTED_MODULE_6__authenticated_plants_borders_plants_borders_component__["a" /* PlantsBordersComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__services_auth_guard_service__["a" /* AuthGuard */]] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Tomato Stake';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ts-app-root',
            template: "\n  <ts-alert></ts-alert>\n  <router-outlet></router-outlet>",
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_in_memory_web_api_in_memory_web_api_module__ = __webpack_require__("../../../../angular-in-memory-web-api/in-memory-web-api.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_in_memory_data_service__ = __webpack_require__("../../../../../src/app/services/in-memory-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__landing_landing_component__ = __webpack_require__("../../../../../src/app/landing/landing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__authenticated_garden_planner_garden_planner_component__ = __webpack_require__("../../../../../src/app/authenticated/garden-planner/garden-planner.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__authenticated_garden_planner_garden_job_component__ = __webpack_require__("../../../../../src/app/authenticated/garden-planner/garden-job.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__authenticated_plants_borders_plants_borders_component__ = __webpack_require__("../../../../../src/app/authenticated/plants-borders/plants-borders.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__authenticated_plants_borders_plant_display_row_component__ = __webpack_require__("../../../../../src/app/authenticated/plants-borders/plant-display-row.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__authenticated_plants_borders_plant_edit_row_component__ = __webpack_require__("../../../../../src/app/authenticated/plants-borders/plant-edit-row.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__alert_component__ = __webpack_require__("../../../../../src/app/alert.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__authenticated_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/authenticated/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__authenticated_pipes_mod3__ = __webpack_require__("../../../../../src/app/authenticated/pipes/mod3.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_auth_guard_service__ = __webpack_require__("../../../../../src/app/services/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_alert_service__ = __webpack_require__("../../../../../src/app/services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__authenticated_services_plant_service__ = __webpack_require__("../../../../../src/app/authenticated/services/plant.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__authenticated_services_border_service__ = __webpack_require__("../../../../../src/app/authenticated/services/border.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__authenticated_services_job_service__ = __webpack_require__("../../../../../src/app/authenticated/services/job.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__authenticated_services_month_service__ = __webpack_require__("../../../../../src/app/authenticated/services/month.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// in-memory web api imports





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__landing_landing_component__["a" /* LandingComponent */],
                __WEBPACK_IMPORTED_MODULE_8__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_9__authenticated_garden_planner_garden_planner_component__["a" /* GardenPlannerComponent */],
                __WEBPACK_IMPORTED_MODULE_10__authenticated_garden_planner_garden_job_component__["a" /* GardenJobComponent */],
                __WEBPACK_IMPORTED_MODULE_11__authenticated_plants_borders_plants_borders_component__["a" /* PlantsBordersComponent */],
                __WEBPACK_IMPORTED_MODULE_12__authenticated_plants_borders_plant_display_row_component__["a" /* PlantDisplayRowComponent */],
                __WEBPACK_IMPORTED_MODULE_13__authenticated_plants_borders_plant_edit_row_component__["a" /* PlantEditRowComponent */],
                __WEBPACK_IMPORTED_MODULE_14__alert_component__["a" /* AlertComponent */],
                __WEBPACK_IMPORTED_MODULE_15__authenticated_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_16__authenticated_pipes_mod3__["a" /* Mod3Pipe */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_24__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4_angular_in_memory_web_api_in_memory_web_api_module__["a" /* InMemoryWebApiModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__services_in_memory_data_service__["a" /* InMemoryDataService */], { dataEncapsulation: false }),
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_17__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_18__services_auth_guard_service__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_19__services_alert_service__["a" /* AlertService */], __WEBPACK_IMPORTED_MODULE_20__authenticated_services_plant_service__["a" /* PlantService */], __WEBPACK_IMPORTED_MODULE_21__authenticated_services_border_service__["a" /* BorderService */], __WEBPACK_IMPORTED_MODULE_22__authenticated_services_job_service__["a" /* JobService */], __WEBPACK_IMPORTED_MODULE_23__authenticated_services_month_service__["a" /* MonthService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/authenticated/garden-planner/garden-job.component.html":
/***/ (function(module, exports) {

module.exports = "  <button class=\"delete\" (click)=\"removeJob(job); $event.stopPropagation();\"></button>\r\n  <p>\r\n    <strong>{{job.name}}</strong>\r\n  </p>\r\n  <p>\r\n    <em>\r\n      Date: {{job.schedule.startDate | date:'LLLL d'}} \r\n      <span *ngIf=\"!job.schedule.startDate.isSame(job.schedule.endDate)\"> to {{job.schedule.endDate | date:'LLLL d'}}</span>\r\n    </em>\r\n  </p>\r\n  <p>Location:    \r\n    <span *ngFor=\"let border of job.locations\" class=\"tag is-primary\">{{border.name}}</span>\r\n    <span *ngIf=\"job.locations.length === 0\"><em>Not specified</em></span>\r\n  </p>\r\n  <p *ngIf=\"job.description\">{{job.description}}</p>"

/***/ }),

/***/ "../../../../../src/app/authenticated/garden-planner/garden-job.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GardenJobComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__job__ = __webpack_require__("../../../../../src/app/authenticated/job.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GardenJobComponent = /** @class */ (function () {
    function GardenJobComponent() {
        this.onRemoved = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    // Remove a job from the schedule
    GardenJobComponent.prototype.removeJob = function (job) {
        this.onRemoved.emit(job);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__job__["a" /* Job */])
    ], GardenJobComponent.prototype, "job", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], GardenJobComponent.prototype, "onRemoved", void 0);
    GardenJobComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'div.garden-job',
            template: __webpack_require__("../../../../../src/app/authenticated/garden-planner/garden-job.component.html"),
        })
    ], GardenJobComponent);
    return GardenJobComponent;
}());



/***/ }),

/***/ "../../../../../src/app/authenticated/garden-planner/garden-planner.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "header.current {\r\n  background-color: #76B566;    \r\n}\r\n\r\nheader.soon {\r\n  background-color: #54965B;\r\n}\r\n\r\nheader.later {\r\n  background-color: #555645;\r\n}\r\n\r\ndiv#new-job {\r\n  margin-bottom: 1em;\r\n}\r\n\r\ndiv.card {\r\n  margin-bottom: 2em;\r\n}\r\n\r\n.link-list {\r\n  position: fixed;\r\n  border-style: solid;\r\n  border-left-color: #76B566;\r\n  border-width: 0px;\r\n  border-left-width: 0.15em;\r\n  padding-left: 0.5em;\r\n}\r\n\r\n.card-header-title {\r\n  color: white;\r\n}\r\n\r\nspan.tag > a {\r\n  color: white;\r\n}\r\n\r\nspan.tag.is-info {\r\n  cursor: pointer;\r\n  margin-bottom: 0.275em;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/authenticated/garden-planner/garden-planner.component.html":
/***/ (function(module, exports) {

module.exports = "<ts-navbar></ts-navbar>\r\n\r\n<section class=\"hero is-primary is-bold\">\r\n  <div class=\"hero-body\">\r\n    <div class=\"container\">\r\n      <h1 class=\"title\">\r\n        Garden Planner\r\n      </h1>\r\n    </div>\r\n  </div>\r\n</section>\r\n<br />\r\n\r\n<div class=\"container\">\r\n  <div class=\"columns\">\r\n    <div class=\"column\">\r\n      <div id=\"new-job\">\r\n        <button class=\"button is-info modal-button\" data-target=\"modal-job\" (click)=\"openModal('addJob')\">\r\n          <span class=\"icon\">\r\n            <i class=\"fa fa-leaf\"></i>\r\n          </span>\r\n          <span>Add Job</span>\r\n        </button>\r\n      </div>\r\n\r\n      <div class=\"card\">\r\n        <header class=\"card-header current\" id=\"current\">\r\n          <p class=\"card-header-title\">\r\n            Jobs to do right now\r\n          </p>\r\n        </header>\r\n\r\n        <div class=\"card-content\">\r\n          <ng-container *ngFor=\"let job of getDueNow()\">\r\n            <div class=\"notification garden-job\" [job]=\"job\" (onRemoved)=\"onRemoved($event)\"></div>\r\n          </ng-container>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"card\">\r\n        <header class=\"card-header soon\" id=\"soon\">\r\n          <p class=\"card-header-title\">\r\n            Jobs in the next few weeks\r\n          </p>\r\n        </header>\r\n\r\n        <div class=\"card-content\">\r\n          <ng-container *ngFor=\"let job of getDueSoon()\">\r\n            <div class=\"notification garden-job\" [job]=\"job\" (onRemoved)=\"onRemoved($event)\"></div>\r\n          </ng-container>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"card\">\r\n        <header class=\"card-header later\" id=\"later\">\r\n          <p class=\"card-header-title\">\r\n            Future jobs\r\n          </p>\r\n        </header>\r\n\r\n        <div class=\"card-content\">\r\n          <ng-container *ngFor=\"let job of getDueLater()\">\r\n            <div class=\"notification garden-job\" [job]=\"job\" (onRemoved)=\"onRemoved($event)\"></div>\r\n          </ng-container>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"column is-one-quarter\">\r\n      <ul class=\"link-list\">\r\n        <li>\r\n          <span class=\"tag is-info modal-button\" data-target=\"modal-job\" (click)=\"openModal('addJob')\">\r\n            <span class=\"icon\">\r\n              <i class=\"fa fa-leaf\"></i>\r\n            </span>\r\n            Add job\r\n          </span>\r\n        </li>\r\n        <li>\r\n          <span class=\"tag is-info\" (click)=\"onAnchorClick('current')\">\r\n            <span class=\"icon\">\r\n              <i class=\"fa fa-angle-double-left\"></i>\r\n            </span>\r\n            Right now\r\n          </span>          \r\n        </li>\r\n        <li>\r\n          <span class=\"tag is-info\" (click)=\"onAnchorClick('soon')\">\r\n            <span class=\"icon\">\r\n              <i class=\"fa fa-angle-double-left\"></i>\r\n            </span>\r\n            Next few weeks\r\n          </span>\r\n        </li>\r\n        <li>\r\n          <span class=\"tag is-info\" (click)=\"onAnchorClick('later')\">\r\n            <span class=\"icon\">\r\n              <i class=\"fa fa-angle-double-left\"></i>\r\n            </span>\r\n            Future jobs\r\n          </span>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n\r\n    <!-- Modal: Confirm Job deletion -->\r\n    <div class=\"modal\" [class.is-active]=\"isVisible('deleteJob')\" id=\"modal-delete\">\r\n      <div class=\"modal-background\"></div>\r\n      <div class=\"modal-card\">\r\n        <header class=\"modal-card-head\">\r\n          <p class=\"modal-card-title\">Delete job</p>\r\n        </header>\r\n        <section class=\"modal-card-body\">\r\n          <div class=\"field\">\r\n            Confirm that you want to delete this job.\r\n          </div>\r\n        </section>\r\n        <footer class=\"modal-card-foot\">\r\n          <button class=\"button is-success\">1</button>\r\n          <button class=\"button\">2</button>\r\n        </footer>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Modal: Add a new job -->\r\n    <div class=\"modal\" [class.is-active]=\"isVisible('addJob')\" id=\"modal-job\">\r\n      <div class=\"modal-background\"></div>\r\n      <div class=\"modal-card\">\r\n        <header class=\"modal-card-head\">\r\n          <p class=\"modal-card-title\">Add a job</p>\r\n          <!-- <button class=\"delete\" aria-label=\"close\"></button> -->\r\n        </header>\r\n        <section class=\"modal-card-body\">\r\n          <!-- Content ... -->\r\n          <div class=\"field\">\r\n            <label class=\"label\" for=\"job-name\" type=\"text\">\r\n              What:\r\n            </label>\r\n            <div class=\"control\">\r\n              <input class=\"input\" type=\"text\" id=\"job-name\">\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"field\">\r\n            <label class=\"label\" type=\"text\">\r\n              When:\r\n            </label>\r\n\r\n            <div class=\"columns\">\r\n              <div class=\"column is-one-third\">\r\n                <div class=\"control\">\r\n                  <p>\r\n                    <label class=\"radio\">\r\n                      <input type=\"radio\" name=\"rangeType\" checked (click)=\"showMonth = true;$event.stopPropagation()\"> Month range\r\n                    </label>\r\n                  </p>\r\n                  <p>\r\n                    <label class=\"radio\">\r\n                      <input type=\"radio\" name=\"rangeType\" (click)=\"showMonth = false;$event.stopPropagation()\"> Date range\r\n                    </label>\r\n                  </p>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"column\">\r\n                <div id=\"monthRange\" [hidden]=\"!showMonth\">\r\n                  From:\r\n                  <div class=\"select\">\r\n                    <select>\r\n                      <option *ngFor=\"let startingMonth of months\" [value]=\"startingMonth\">{{startingMonth[1]}}</option>\r\n                    </select>\r\n                  </div>\r\n\r\n                  To:\r\n                  <div class=\"select\">\r\n                    <select>\r\n                      <option *ngFor=\"let endingMonth of months\" [value]=\"endingMonth\">{{endingMonth[1]}}</option>\r\n                    </select>\r\n                  </div>\r\n                </div>\r\n\r\n                <div id=\"dateRange\" [hidden]=\"showMonth\">\r\n                  From: To:\r\n\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"location-list\">\r\n            <label class=\"label\" type=\"text\">\r\n              Where:\r\n            </label>\r\n\r\n            <div class=\"columns\">\r\n              <div class=\"column\">\r\n                <div class=\"field\" *ngFor=\"let border of borders | mod3:1\">\r\n                  <input class=\"is-checkbox is-block is-info\" id=\"chkBorder{{border.id}}\" type=\"checkbox\" name=\"chkBorder{{border.id}}\">\r\n                  <label for=\"chkBorder{{border.id}}\">{{border.name}}</label>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"column\">\r\n                <div class=\"field\" *ngFor=\"let border of borders | mod3:2\">\r\n                  <input class=\"is-checkbox is-block is-info\" id=\"chkBorder{{border.id}}\" type=\"checkbox\" name=\"chkBorder{{border.id}}\">\r\n                  <label for=\"chkBorder{{border.id}}\">{{border.name}}</label>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"column\">\r\n                <div class=\"field\" *ngFor=\"let border of borders | mod3:0\">\r\n                  <input class=\"is-checkbox is-block is-info\" id=\"chkBorder{{border.id}}\" type=\"checkbox\" name=\"chkBorder{{border.id}}\">\r\n                  <label for=\"chkBorder{{border.id}}\">{{border.name}}</label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"field\">\r\n            <label class=\"label\" for=\"job-name\" type=\"text\">\r\n              How:\r\n            </label>\r\n\r\n            <div class=\"control\">\r\n              <textarea class=\"textarea\" type=\"text\" rows=\"2\" placeholder=\"optional\"></textarea>\r\n            </div>\r\n          </div>\r\n        </section>\r\n        <footer class=\"modal-card-foot\">\r\n          <button class=\"button is-success\" (click)=\"addJob()\">Add</button>\r\n          <button class=\"button\" (click)=\"closeModal()\">Cancel</button>\r\n        </footer>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/authenticated/garden-planner/garden-planner.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GardenPlannerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modal__ = __webpack_require__("../../../../../src/app/authenticated/modal.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__job__ = __webpack_require__("../../../../../src/app/authenticated/job.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__jobSchedule__ = __webpack_require__("../../../../../src/app/authenticated/jobSchedule.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_alert_service__ = __webpack_require__("../../../../../src/app/services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_border_service__ = __webpack_require__("../../../../../src/app/authenticated/services/border.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_job_service__ = __webpack_require__("../../../../../src/app/authenticated/services/job.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_month_service__ = __webpack_require__("../../../../../src/app/authenticated/services/month.service.ts");
// The agenda/calendar component which displays a list of garden jobs
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var GardenPlannerComponent = /** @class */ (function (_super) {
    __extends(GardenPlannerComponent, _super);
    function GardenPlannerComponent(alertService, jobService, borderService, monthService) {
        var _this = _super.call(this) || this;
        _this.alertService = alertService;
        _this.jobService = jobService;
        _this.borderService = borderService;
        _this.monthService = monthService;
        _this.registerModal('addJob');
        _this.registerModal('deleteJob');
        return _this;
    }
    GardenPlannerComponent.prototype.ngOnInit = function () {
        this.getJobs();
        this.getBorders();
        this.showMonth = true;
        this.months = this.monthService.getMonths();
    };
    GardenPlannerComponent.prototype.onAnchorClick = function (location) {
        window.location.hash = location;
    };
    GardenPlannerComponent.prototype.getJobs = function () {
        var _this = this;
        this.jobs = [];
        this.jobService.getJobs()
            .subscribe(function (jobs) { return jobs.forEach(function (job) { return _this.jobs.push(new __WEBPACK_IMPORTED_MODULE_2__job__["a" /* Job */](job.id, job.name, job.description, job.locations, new __WEBPACK_IMPORTED_MODULE_3__jobSchedule__["b" /* JobSchedule */](job.schedule.startDate, job.schedule.endDate))); }); });
    };
    GardenPlannerComponent.prototype.getBorders = function () {
        var _this = this;
        this.borders = [];
        this.borderService.getBorders().subscribe(function (borders) { return _this.borders = borders; });
    };
    GardenPlannerComponent.prototype.getDueNow = function () {
        return this.jobs.filter(function (job) { return job.schedule.isDueWhen() === __WEBPACK_IMPORTED_MODULE_3__jobSchedule__["a" /* Due */].Now; });
    };
    GardenPlannerComponent.prototype.getDueSoon = function () {
        return this.jobs.filter(function (job) { return job.schedule.isDueWhen() === __WEBPACK_IMPORTED_MODULE_3__jobSchedule__["a" /* Due */].Soon; });
    };
    GardenPlannerComponent.prototype.getDueLater = function () {
        return this.jobs.filter(function (job) { return job.schedule.isDueWhen() === __WEBPACK_IMPORTED_MODULE_3__jobSchedule__["a" /* Due */].Later; });
    };
    GardenPlannerComponent.prototype.getDuePast = function () {
        return this.jobs.filter(function (job) { return job.schedule.isDueWhen() === __WEBPACK_IMPORTED_MODULE_3__jobSchedule__["a" /* Due */].Past; });
    };
    GardenPlannerComponent.prototype.onRemoved = function (job) {
        // ???
        this.openModal('deleteJob');
        this.alertService.alert('Removed job');
    };
    GardenPlannerComponent.prototype.addJob = function () {
        console.log('showMonth: ' + this.showMonth);
        if (this.showMonth) {
        }
    };
    GardenPlannerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ts-planner',
            template: __webpack_require__("../../../../../src/app/authenticated/garden-planner/garden-planner.component.html"),
            styles: [__webpack_require__("../../../../../src/app/authenticated/garden-planner/garden-planner.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_alert_service__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_6__services_job_service__["a" /* JobService */],
            __WEBPACK_IMPORTED_MODULE_5__services_border_service__["a" /* BorderService */],
            __WEBPACK_IMPORTED_MODULE_7__services_month_service__["a" /* MonthService */]])
    ], GardenPlannerComponent);
    return GardenPlannerComponent;
}(__WEBPACK_IMPORTED_MODULE_1__modal__["a" /* ModalHandler */]));



/***/ }),

/***/ "../../../../../src/app/authenticated/job.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Job; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__jobSchedule__ = __webpack_require__("../../../../../src/app/authenticated/jobSchedule.ts");


// A garden job/chore/activity
var Job = /** @class */ (function () {
    function Job(id, name, description, locations, schedule) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.locations = locations === null ? [] : locations;
        this.schedule = new __WEBPACK_IMPORTED_MODULE_1__jobSchedule__["b" /* JobSchedule */](__WEBPACK_IMPORTED_MODULE_0_moment__(schedule.startDate), __WEBPACK_IMPORTED_MODULE_0_moment__(schedule.endDate));
    }
    return Job;
}());



/***/ }),

/***/ "../../../../../src/app/authenticated/jobSchedule.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Due; });
/* unused harmony export Month */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return JobSchedule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);

var Due;
(function (Due) {
    Due[Due["Past"] = 0] = "Past";
    Due[Due["Now"] = 1] = "Now";
    Due[Due["Soon"] = 2] = "Soon";
    Due[Due["Later"] = 3] = "Later";
})(Due || (Due = {}));
var Month;
(function (Month) {
    Month[Month["January"] = 0] = "January";
    Month[Month["February"] = 1] = "February";
    Month[Month["March"] = 2] = "March";
    Month[Month["April"] = 3] = "April";
    Month[Month["May"] = 4] = "May";
    Month[Month["June"] = 5] = "June";
    Month[Month["July"] = 6] = "July";
    Month[Month["August"] = 7] = "August";
    Month[Month["September"] = 8] = "September";
    Month[Month["Octoboer"] = 9] = "Octoboer";
    Month[Month["November"] = 10] = "November";
    Month[Month["December"] = 11] = "December";
})(Month || (Month = {}));
var JobSchedule = /** @class */ (function () {
    function JobSchedule(startDate, endDate) {
        this.startDate = startDate;
        this.endDate = endDate;
    }
    JobSchedule.prototype.isDueWhen = function () {
        if (!this.startDate || !this.endDate) {
            throw new Error('date is not initialized.');
        }
        var today = __WEBPACK_IMPORTED_MODULE_0_moment__(new Date());
        if (this.endDate.isBefore(today.clone().subtract(15, 'days'))) {
            return Due.Past;
        }
        if (this.startDate.isAfter(today.clone().add(30, 'days'))) {
            return Due.Later;
        }
        if (this.startDate.isAfter(today.clone().add(15, 'days'))) {
            return Due.Soon;
        }
        return Due.Now;
    };
    return JobSchedule;
}());



/***/ }),

/***/ "../../../../../src/app/authenticated/modal.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
// Base class for components that support modal windows
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ModalDialog = /** @class */ (function () {
    function ModalDialog(name) {
        this.name = name;
        this.visible = false;
    }
    return ModalDialog;
}());
var ModalHandler = /** @class */ (function () {
    function ModalHandler() {
        this.escape_keycode = 27;
        this.modalDialogs = [];
    }
    ModalHandler.prototype.registerModal = function (name) {
        this.modalDialogs.push(new ModalDialog(name));
    };
    // specify the modal we want to open using it's id
    ModalHandler.prototype.openModal = function (name) {
        this.closeAllModals();
        this.modalDialogs.find(function (m) { return m.name === name; }).visible = true;
    };
    // returns wether a specified modal is currently visible
    ModalHandler.prototype.isVisible = function (name) {
        return this.modalDialogs.some(function (m) { return m.name === name && m.visible === true; });
    };
    // We can only have one modal active at a time so there is no need to pass to id of the modal to close
    // we just close them all
    ModalHandler.prototype.closeModal = function () {
        this.closeAllModals();
    };
    ModalHandler.prototype.closeAllModals = function () {
        this.modalDialogs.forEach(function (m) { return m.visible = false; });
    };
    ModalHandler.prototype.keyboardInput = function (event) {
        if (event.keyCode === this.escape_keycode) {
            this.closeModal();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('window:keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], ModalHandler.prototype, "keyboardInput", null);
    return ModalHandler;
}());



/***/ }),

/***/ "../../../../../src/app/authenticated/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <nav class=\"navbar\">\r\n    <div class=\"navbar-brand\">\r\n      <a class=\"navbar-item\">\r\n        LOGO\r\n      </a>\r\n\r\n      <div class=\"navbar-burger\">\r\n        <span></span>\r\n        <span></span>\r\n        <span></span>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"navbar-menu\">\r\n      <div class=\"navbar-start\">\r\n        <a class=\"navbar-item\" routerLink=\"/planner\">\r\n          Garden Planner\r\n        </a>\r\n\r\n        <a class=\"navbar-item\" routerLink=\"/plants-borders\">\r\n          Plants and borders\r\n        </a>\r\n      </div>\r\n\r\n      <div class=\"navbar-end\">\r\n        <a class=\"navbar-item\" href=\"profile.html\">\r\n          <i class=\"fa fa-user\"></i>\r\n        </a>\r\n\r\n        <a class=\"navbar-item\" (click)=\"logout()\">\r\n          Logout\r\n        </a>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/authenticated/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
// The common top navigation bar that is re-used on all authentified pages.
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ts-navbar',
            template: __webpack_require__("../../../../../src/app/authenticated/navbar/navbar.component.html"),
        })
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/authenticated/pipes/mod3.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Mod3Pipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Mod3Pipe = /** @class */ (function () {
    function Mod3Pipe() {
    }
    Mod3Pipe.prototype.transform = function (items, remainder) {
        if (!items) {
            return items;
        }
        return items.filter(function (item) { return item.id % 3 === remainder; });
    };
    Mod3Pipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'mod3',
        })
    ], Mod3Pipe);
    return Mod3Pipe;
}());



/***/ }),

/***/ "../../../../../src/app/authenticated/plant.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Plant; });
var Plant = /** @class */ (function () {
    function Plant() {
        this.name = '';
        this.locations = [];
        this.jobs = [];
    }
    return Plant;
}());



/***/ }),

/***/ "../../../../../src/app/authenticated/plants-borders/plant-display-row.component.html":
/***/ (function(module, exports) {

module.exports = "<td>{{plant.name}}</td>\r\n\r\n<td>\r\n  <span *ngFor=\"let border of plant.locations\" class=\"tag is-primary\">{{border.name}}</span>\r\n</td>\r\n\r\n<td>{{plant.notes}}</td>\r\n\r\n<td>\r\n  <a>Display Row</a>\r\n</td>\r\n\r\n<td>\r\n  <span class=\"icon has-text-warning\" (click)=\"editPlant(plant.id)\">\r\n    <i class=\"fa fa-pencil clickable\"></i>\r\n  </span> \r\n\r\n  <span class=\"icon has-text-warning\" (click)=\"deletePlant(plant); $event.stopPropagation();\">\r\n    <i class=\"fa fa-trash-o clickable\"></i>\r\n  </span>\r\n</td>"

/***/ }),

/***/ "../../../../../src/app/authenticated/plants-borders/plant-display-row.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlantDisplayRowComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__plant__ = __webpack_require__("../../../../../src/app/authenticated/plant.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PlantDisplayRowComponent = /** @class */ (function () {
    function PlantDisplayRowComponent() {
        this.onSelected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.onDeleted = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    PlantDisplayRowComponent.prototype.editPlant = function (id) {
        this.onSelected.emit(id);
    };
    PlantDisplayRowComponent.prototype.deletePlant = function (plant) {
        this.onDeleted.emit(plant);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__plant__["a" /* Plant */])
    ], PlantDisplayRowComponent.prototype, "plant", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], PlantDisplayRowComponent.prototype, "onSelected", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], PlantDisplayRowComponent.prototype, "onDeleted", void 0);
    PlantDisplayRowComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'tr.plant-display-row',
            template: __webpack_require__("../../../../../src/app/authenticated/plants-borders/plant-display-row.component.html"),
            styles: [".clickable { cursor: pointer; } "]
        })
    ], PlantDisplayRowComponent);
    return PlantDisplayRowComponent;
}());



/***/ }),

/***/ "../../../../../src/app/authenticated/plants-borders/plant-edit-row.component.html":
/***/ (function(module, exports) {

module.exports = "<td>\r\n  <input [(ngModel)]=\"plant.name\" class=\"input\" [class.is-danger]=\"plant.name.length == 0\" type=\"text\" placeholder=\"Plant name (required)\" required>\r\n</td>\r\n\r\n<td>\r\n  <span *ngFor=\"let border of plant.locations\" class=\"tag is-primary\">{{border.name}}</span>\r\n  <span class=\"icon has-text-primary clickable\" (click)=\"addPlantToBorder(plant.Id)\"><i class=\"fa fa-plus\"></i></span>\r\n</td>\r\n\r\n<td>\r\n  <input [(ngModel)]=\"plant.notes\" class=\"input\" type=\"text\">\r\n</td>\r\n\r\n<td>\r\n  <a>Edit Row</a>\r\n</td>\r\n\r\n<td>\r\n  <span class=\"icon has-text-primary\" (click)=\"save(plant)\">\r\n    <i class=\"fa fa-check clickable\"></i>\r\n  </span> \r\n  \r\n  <span class=\"icon has-text-info\" (click)=\"cancelEdit()\">\r\n    <i class=\"fa fa-close clickable\"></i>\r\n  </span>\r\n</td>"

/***/ }),

/***/ "../../../../../src/app/authenticated/plants-borders/plant-edit-row.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlantEditRowComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__plant__ = __webpack_require__("../../../../../src/app/authenticated/plant.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PlantEditRowComponent = /** @class */ (function () {
    function PlantEditRowComponent() {
        this.onCancelled = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.onSaved = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.onAddPlantToBorder = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    PlantEditRowComponent.prototype.cancelEdit = function () {
        this.onCancelled.emit(this.plant.id === 0);
    };
    PlantEditRowComponent.prototype.save = function (plant) {
        this.onSaved.emit(plant);
    };
    PlantEditRowComponent.prototype.addPlantToBorder = function (plantId) {
        this.onAddPlantToBorder.emit(plantId);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__plant__["a" /* Plant */])
    ], PlantEditRowComponent.prototype, "plant", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], PlantEditRowComponent.prototype, "onCancelled", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], PlantEditRowComponent.prototype, "onSaved", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], PlantEditRowComponent.prototype, "onAddPlantToBorder", void 0);
    PlantEditRowComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'tr.plant-edit-row',
            template: __webpack_require__("../../../../../src/app/authenticated/plants-borders/plant-edit-row.component.html"),
            styles: [".clickable { cursor: pointer; } "]
        })
    ], PlantEditRowComponent);
    return PlantEditRowComponent;
}());



/***/ }),

/***/ "../../../../../src/app/authenticated/plants-borders/plants-borders.component.html":
/***/ (function(module, exports) {

module.exports = "<ts-navbar></ts-navbar>\r\n\r\n<section class=\"hero is-primary is-bold\">\r\n  <div class=\"hero-body\">\r\n    <div class=\"container\">\r\n      <h1 class=\"title\">\r\n        Plants and borders\r\n      </h1>\r\n    </div>\r\n  </div>\r\n</section>\r\n<br />\r\n\r\n<div class=\"container\">\r\n  <table class=\"table is-striped is-fullwidth\">\r\n    <thead>\r\n      <tr>\r\n        <th>Plant</th>\r\n        <th>Locations</th>\r\n        <th>Notes</th>\r\n        <th>Jobs</th>\r\n        <th></th>\r\n      </tr>\r\n    </thead>\r\n\r\n    <tbody>\r\n      <ng-container *ngFor=\"let plant of plants\">\r\n        <tr *ngIf=\"plant.id !== selectedId\" class=\"plant-display-row\" [plant]=\"plant\" (onSelected)=\"onSelected($event)\" (onDeleted)=\"onDeleted($event)\"></tr>\r\n        <tr *ngIf=\"plant.id === selectedId\" class=\"plant-edit-row\" [plant]=\"plant\" (onCancelled)=\"onCancelled($event)\" (onSaved)=\"onSaved($event)\"\r\n          (onAddPlantToBorder)=\"onAddPlantToBorder()\"></tr>\r\n      </ng-container>\r\n    </tbody>\r\n  </table>\r\n\r\n  <p *ngIf=\"plants.length === 0\" class=\"notification is-info\">\r\n    You haven't added any plants yet. Use the Add Plant button to get started.\r\n  </p>\r\n\r\n  <button class=\"button is-info\" (click)=\"addPlant()\">\r\n    <span class=\"icon\">\r\n      <i class=\"fa fa-leaf\"></i>\r\n    </span>\r\n    <span>Add Plant</span>\r\n  </button>\r\n\r\n  <button class=\"button is-info modal-button\" data-target=\"modal-location\" (click)=\"openModal('border')\">\r\n    <span class=\"icon\">\r\n      <i class=\"fa fa-plus\"></i>\r\n    </span>\r\n    <span>Add Location</span>\r\n  </button>\r\n\r\n  <!-- Modal: Add a new location (border) -->\r\n  <div class=\"modal\" [class.is-active]=\"isVisible('border')\" id=\"modal-location\">\r\n    <div class=\"modal-background\"></div>\r\n    <div class=\"modal-card\">\r\n      <header class=\"modal-card-head\">\r\n        <p class=\"modal-card-title\">Add a new location (ie: bed, border, etc.)</p>\r\n      </header>\r\n      <section class=\"modal-card-body\">\r\n        <!-- Content ... -->\r\n        <div class=\"field\">\r\n          <label class=\"label\" for=\"new-location\" type=\"text\">\r\n            Location Name:\r\n          </label>\r\n          <div class=\"control\">\r\n            <input class=\"input\" type=\"text\" id=\"new-location\" #location>\r\n          </div>\r\n        </div>\r\n        <label *ngIf=\"duplicateName\" class=\"has-text-danger\">There is already another location with the name {{duplicateName}}.</label>\r\n      </section>\r\n      <footer class=\"modal-card-foot\">\r\n        <button class=\"button is-success\" (click)=\"addBorder(location.value); location.value='';\">Add</button>\r\n        <button class=\"button\" (click)=\"closeWindow(); location.value='';\">Cancel</button>\r\n      </footer>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Modal: Select an existing location to add to a plant's location list -->\r\n  <div class=\"modal\" [class.is-active]=\"isVisible('addBorder')\" id=\"modal-add-location\">\r\n    <div class=\"modal-background\"></div>\r\n    <div class=\"modal-card\">\r\n      <header class=\"modal-card-head\">\r\n        <p class=\"modal-card-title\">Select a location</p>\r\n      </header>\r\n      <section class=\"modal-card-body\">\r\n        <!-- Content ... -->\r\n        <div class=\"select\">\r\n          <select>            \r\n            <option *ngFor=\"let border of borders\" [value]=\"border\">{{border.name}}</option>\r\n          </select>\r\n        </div>\r\n      </section>\r\n      <footer class=\"modal-card-foot\">\r\n        <button class=\"button is-success\" (click)=\"addBorderToPlant();\">Add</button>\r\n        <button class=\"button\" (click)=\"closeWindow();\">Cancel</button>\r\n      </footer>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/authenticated/plants-borders/plants-borders.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlantsBordersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modal__ = __webpack_require__("../../../../../src/app/authenticated/modal.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__plant__ = __webpack_require__("../../../../../src/app/authenticated/plant.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_alert_service__ = __webpack_require__("../../../../../src/app/services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_plant_service__ = __webpack_require__("../../../../../src/app/authenticated/services/plant.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_border_service__ = __webpack_require__("../../../../../src/app/authenticated/services/border.service.ts");
// The plants and borders component which displays the user's garden borders and plants
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PlantsBordersComponent = /** @class */ (function (_super) {
    __extends(PlantsBordersComponent, _super);
    function PlantsBordersComponent(alertService, plantService, borderService) {
        var _this = _super.call(this) || this;
        _this.alertService = alertService;
        _this.plantService = plantService;
        _this.borderService = borderService;
        _this.unselectPlant();
        _this.registerModal('border');
        _this.registerModal('addBorder');
        return _this;
    }
    PlantsBordersComponent.prototype.ngOnInit = function () {
        this.getPlants();
        this.getBorders();
    };
    PlantsBordersComponent.prototype.getPlants = function () {
        var _this = this;
        this.plants = [];
        this.plantService.getPlants().subscribe(function (plants) { return _this.plants = plants; });
    };
    PlantsBordersComponent.prototype.onSelected = function (id) {
        this.selectedId = id;
    };
    PlantsBordersComponent.prototype.onCancelled = function (newPlant) {
        this.unselectPlant();
        if (newPlant) {
            this.plants = this.plants.filter(function (p) { return p.id !== 0; });
        }
    };
    PlantsBordersComponent.prototype.onSaved = function (plant) {
        this.unselectPlant();
    };
    // editPlant(id: number): void {
    //   this.selectedId = id;
    //   this.plantService.update();
    // }
    PlantsBordersComponent.prototype.onDeleted = function (plant) {
        this.plantService.delete(plant.id);
        this.plants = this.plants.filter(function (x) { return x !== plant; });
    };
    PlantsBordersComponent.prototype.onAddPlantToBorder = function (plantId) {
        this.openModal('addBorder');
    };
    PlantsBordersComponent.prototype.addBorderToPlant = function (border) {
        console.log(border.name);
        this.plantService.addPlantToBorder();
        this.closeModal();
    };
    PlantsBordersComponent.prototype.getBorders = function () {
        var _this = this;
        this.borders = [];
        this.borderService.getBorders().subscribe(function (borders) { return _this.borders = borders; });
    };
    PlantsBordersComponent.prototype.addPlant = function () {
        // we only allow one new plant row at a time
        // before we create a new plant row we must check if there isn't already a pre-existing one
        if (!this.plants.some(function (p) { return p.id === 0; })) {
            var newPlant = new __WEBPACK_IMPORTED_MODULE_2__plant__["a" /* Plant */]();
            newPlant.id = 0;
            this.plants.push(newPlant);
            this.selectedId = 0;
        }
    };
    PlantsBordersComponent.prototype.addBorder = function (name) {
        // validate that the location name isn't empty
        name = name.trim();
        if (!name) {
            return;
        }
        // validate that the location name doesn't already exists
        if (this.borders.some(function (x) { return x.name === name; })) {
            this.duplicateName = name;
            return;
        }
        this.duplicateName = '';
        this.borderService.create(name);
        this.closeModal();
    };
    PlantsBordersComponent.prototype.closeWindow = function () {
        this.closeModal();
        this.duplicateName = '';
    };
    PlantsBordersComponent.prototype.unselectPlant = function () {
        this.selectedId = -1;
    };
    PlantsBordersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ts-plants-borders',
            template: __webpack_require__("../../../../../src/app/authenticated/plants-borders/plants-borders.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_alert_service__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_4__services_plant_service__["a" /* PlantService */],
            __WEBPACK_IMPORTED_MODULE_5__services_border_service__["a" /* BorderService */]])
    ], PlantsBordersComponent);
    return PlantsBordersComponent;
}(__WEBPACK_IMPORTED_MODULE_1__modal__["a" /* ModalHandler */]));



/***/ }),

/***/ "../../../../../src/app/authenticated/services/border.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BorderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BorderService = /** @class */ (function () {
    function BorderService(http) {
        this.http = http;
        this.bordersUrl = 'api/borders';
    }
    BorderService.prototype.getBorders = function () {
        return this.http.get(this.bordersUrl);
    };
    BorderService.prototype.create = function (name) {
        // make http call
    };
    BorderService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], BorderService);
    return BorderService;
}());



/***/ }),

/***/ "../../../../../src/app/authenticated/services/job.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var JobService = /** @class */ (function () {
    function JobService(http) {
        this.http = http;
        this.jobsUrl = 'api/jobs';
    }
    JobService.prototype.getJobs = function () {
        return this.http.get(this.jobsUrl);
    };
    JobService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], JobService);
    return JobService;
}());



/***/ }),

/***/ "../../../../../src/app/authenticated/services/month.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MonthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MonthService = /** @class */ (function () {
    function MonthService() {
    }
    MonthService.prototype.getMonths = function () {
        return [[1, 'January'], [2, 'February'], [3, 'March'], [4, 'April'], [5, 'May'], [6, 'June'], [7, 'July'],
            [8, 'August'], [9, 'September'], [10, 'October'], [11, 'November'], [12, 'December']];
    };
    MonthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], MonthService);
    return MonthService;
}());



/***/ }),

/***/ "../../../../../src/app/authenticated/services/plant.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlantService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PlantService = /** @class */ (function () {
    function PlantService(http) {
        this.http = http;
        this.plantsUrl = 'api/plants';
    }
    PlantService.prototype.getPlants = function () {
        return this.http.get(this.plantsUrl);
    };
    PlantService.prototype.create = function (name) {
        // make http call
    };
    PlantService.prototype.update = function () {
    };
    PlantService.prototype.delete = function (id) {
    };
    PlantService.prototype.addPlantToBorder = function () {
    };
    PlantService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], PlantService);
    return PlantService;
}());



/***/ }),

/***/ "../../../../../src/app/landing/landing.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\ndiv.splash {\r\n  background-image: url(" + __webpack_require__("../../../../../src/assets/tomatoes.jpg") + ");\r\n  background-size: cover;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/landing/landing.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar primary-color\">\r\n    <div class=\"navbar-brand\">\r\n    </div>\r\n\r\n    <div class=\"navbar-menu\">\r\n        <div class=\"navbar-start\">\r\n        </div>\r\n\r\n        <div class=\"navbar-end\">\r\n            <!-- navbar items -->\r\n            <div class=\"navbar-item has-text-white\">\r\n                <p>Already a member?</p>\r\n            </div>\r\n\r\n            <div class=\"navbar-item\">\r\n                <div class=\"field is-grouped\">\r\n                    <p class=\"control\">\r\n                        <a class=\"bd-tw-button button\" routerLink=\"/login\">Login</a>\r\n                    </p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</nav>\r\n\r\n<section class=\"hero is-primary is-medium\">\r\n    <div class=\"hero-body\">\r\n        <div class=\"container\">\r\n            <h1 class=\"title is-size-1\">\r\n                Tomato Stake\r\n            </h1>\r\n            <h2 class=\"subtitle is-size-4\">\r\n                Your garden planner\r\n            </h2>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n<section class=\"section\">\r\n    <div class=\"tile is-ancestor\">\r\n        <div class=\"tile is-5 is-vertical is-parent\">\r\n            <div class=\"tile is-child box\">\r\n                <p>Create a catalog of your plants, beds and borders.</p>\r\n                <br />\r\n                <p>Keep notes such as which plants to cut back, which plants to dead head and which are better to leave as is.</p>\r\n            </div>\r\n\r\n            <div class=\"tile is-child box\">\r\n                <p>Plan flexible jobs for your garden and keep track of them through our calendar.</p>\r\n                <br />\r\n                <p>Things like dividing your perenials, starting seeds or when to trim your box.</p>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"tile is-parent\">\r\n            <div class=\"tile is-child box splash\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n<section class=\"section has-text-centered\">\r\n    <a class=\"button is-primary is-medium\" href=\"join.html\">Join</a>\r\n    <a class=\"button is-info is-medium\" routerLink=\"/login\">Login</a>\r\n</section>"

/***/ }),

/***/ "../../../../../src/app/landing/landing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
// The landing page for users who are not logged in. Provides details about the service and links to login methods.
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LandingComponent = /** @class */ (function () {
    function LandingComponent() {
    }
    LandingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ts-landing',
            template: __webpack_require__("../../../../../src/app/landing/landing.component.html"),
            styles: [__webpack_require__("../../../../../src/app/landing/landing.component.css")]
        })
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\ndiv.login-splash {\r\n  background-image: url(" + __webpack_require__("../../../../../src/assets/lettuce.jpg") + ");\r\n  background-size: cover;\r\n}\r\n\r\n.login-control {\r\n  margin: 0.5em;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"login-wrapper columns\">\r\n  <div class=\"column is-8 is-hidden-mobile hero-banner\">\r\n    <section class=\"hero is-fullheight is-dark\">\r\n      <div class=\"hero-body login-splash\">\r\n      </div>\r\n      <div class=\"hero-footer\">\r\n      </div>\r\n    </section>\r\n  </div>\r\n  <div class=\"column is-4\">\r\n    <section class=\"hero is-fullheight\">\r\n      <div class=\"hero-heading\">\r\n        <div class=\"section has-text-centered\">\r\n          <h1 class=\"title is-size-1\">\r\n            Tomato Stake\r\n          </h1>\r\n        </div>\r\n      </div>\r\n      <div class=\"hero-body\">\r\n        <div class=\"container\">\r\n          <div class=\"columns\">\r\n            <div class=\"column is-8 is-offset-2\">\r\n              <div class=\"login-form\">\r\n                <p class=\"control has-icon has-icon-right login-control\">\r\n                  <input class=\"input email-input\" type=\"text\" placeholder=\"jsmith@example.org\">\r\n                  <span class=\"icon user\">\r\n                    <i class=\"fa fa-user\"></i>\r\n                  </span>\r\n                </p>\r\n                <p class=\"control has-icon has-icon-right login-control\">\r\n                  <input class=\"input password-input\" type=\"password\" placeholder=\"●●●●●●●\">\r\n                  <span class=\"icon user\">\r\n                    <i class=\"fa fa-lock\"></i>\r\n                  </span>\r\n                </p>\r\n                <p class=\"control login login-control\">\r\n                  <button class=\"button is-success is-outlined is-large is-fullwidth\" (click)=\"login()\">Login</button>\r\n                </p>\r\n              </div>\r\n              <div class=\"section forgot-password\">\r\n                <p class=\"has-text-centered\">\r\n                  <a href=\"#\">Forgot password?</a>\r\n                  <br />\r\n                  <a href=\"#\">No account?</a>\r\n                </p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </section>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.setMessage();
    }
    LoginComponent.prototype.setMessage = function () {
        this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.message = 'Trying to log in ...';
        this.authService.login().subscribe(function () {
            _this.setMessage();
            if (_this.authService.isLoggedIn) {
                // Get the redirect URL from our auth service
                // If no redirect has been set, use the default
                var redirect = _this.authService.redirectUrl ? _this.authService.redirectUrl : '/planner';
                // Redirect the user
                _this.router.navigate([redirect]);
            }
        });
    };
    LoginComponent.prototype.logout = function () {
        this.authService.logout();
        this.setMessage();
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/alert.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertService = /** @class */ (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */]();
        this.keepAfterRouteChange = false;
        // clear alert messages on route change unless 'keepAfterRouteChange' flag is true
        router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* NavigationStart */]) {
                if (_this.keepAfterRouteChange) {
                    // only keep for a single route change
                    _this.keepAfterRouteChange = false;
                }
                else {
                    // clear alert messages
                    _this.clear();
                }
            }
        });
    }
    AlertService.prototype.getAlert = function () {
        return this.subject.asObservable();
    };
    AlertService.prototype.alert = function (message, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
        this.keepAfterRouteChange = keepAfterRouteChange;
        this.subject.next(message);
    };
    AlertService.prototype.clear = function () {
        // clear alerts
        this.subject.next();
    };
    AlertService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var url = state.url;
        return this.checkLogin(url);
    };
    AuthGuard.prototype.checkLogin = function (url) {
        if (this.authService.isLoggedIn) {
            return true;
        }
        // Store the attempted URL for redirecting
        this.authService.redirectUrl = url;
        // Navigate to the login page with extras
        this.router.navigate(['/login']);
        return false;
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_delay__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/delay.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AuthService = /** @class */ (function () {
    function AuthService() {
        this.isLoggedIn = false;
    }
    AuthService.prototype.login = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].of(true).delay(1000).do(function (val) { return _this.isLoggedIn = true; });
    };
    AuthService.prototype.logout = function () {
        this.isLoggedIn = false;
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/services/in-memory-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InMemoryDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authenticated_jobSchedule__ = __webpack_require__("../../../../../src/app/authenticated/jobSchedule.ts");


var InMemoryDataService = /** @class */ (function () {
    function InMemoryDataService() {
        this.borders = [
            { id: 1, name: 'Front border' },
            { id: 2, name: 'Potager' },
            { id: 3, name: 'Back lawn' },
            { id: 4, name: 'Front lawn' },
            { id: 5, name: 'Patio pots' },
            { id: 6, name: 'Indoor plants' },
        ];
        this.plants = [
            { id: 1, name: 'Geranium', locations: [{ id: 1, name: 'Front border' }], notes: '', jobs: [] },
            { id: 2, name: 'Tulip', locations: [{ id: 1, name: 'Front border' }, { id: 2, name: 'Potager' }],
                notes: '', jobs: [] },
        ];
        var dateTimeNow = new Date();
        this.jobs = [
            { id: 1, name: 'Sow Carrots', locations: [{ id: 2, name: 'Potager' }], description: 'Direct sow',
                schedule: new __WEBPACK_IMPORTED_MODULE_1__authenticated_jobSchedule__["b" /* JobSchedule */](__WEBPACK_IMPORTED_MODULE_0_moment__(dateTimeNow).subtract(3, 'days'), __WEBPACK_IMPORTED_MODULE_0_moment__(dateTimeNow).add(3, 'days')) },
            { id: 2, name: 'Fertilize', locations: [{ id: 1, name: 'Front border' }, { id: 2, name: 'Potager' }],
                description: 'Fertilize the whole yard',
                schedule: new __WEBPACK_IMPORTED_MODULE_1__authenticated_jobSchedule__["b" /* JobSchedule */](__WEBPACK_IMPORTED_MODULE_0_moment__(dateTimeNow).add(4, 'days'), __WEBPACK_IMPORTED_MODULE_0_moment__(dateTimeNow).add(4, 'days')) },
            { id: 3, name: 'Cut Back Delphinium', locations: [], description: '',
                schedule: new __WEBPACK_IMPORTED_MODULE_1__authenticated_jobSchedule__["b" /* JobSchedule */](__WEBPACK_IMPORTED_MODULE_0_moment__(dateTimeNow).add(30, 'days'), __WEBPACK_IMPORTED_MODULE_0_moment__(dateTimeNow).add(60, 'days')) },
            { id: 4, name: 'Sow Pumpkins', locations: [], description: 'Sow indoors',
                schedule: new __WEBPACK_IMPORTED_MODULE_1__authenticated_jobSchedule__["b" /* JobSchedule */](__WEBPACK_IMPORTED_MODULE_0_moment__(dateTimeNow).add(16, 'days'), __WEBPACK_IMPORTED_MODULE_0_moment__(dateTimeNow).add(16, 'days')) },
            { id: 5, name: 'Apply wood chip mulch', locations: [], description: '',
                schedule: new __WEBPACK_IMPORTED_MODULE_1__authenticated_jobSchedule__["b" /* JobSchedule */](__WEBPACK_IMPORTED_MODULE_0_moment__(dateTimeNow).add(2, 'months'), __WEBPACK_IMPORTED_MODULE_0_moment__(dateTimeNow).add(3, 'months')) },
            { id: 6, name: 'Prep garden', locations: [], description: 'Remove winter protection from the garden, open beds',
                schedule: new __WEBPACK_IMPORTED_MODULE_1__authenticated_jobSchedule__["b" /* JobSchedule */](__WEBPACK_IMPORTED_MODULE_0_moment__(dateTimeNow).subtract(4, 'months'), __WEBPACK_IMPORTED_MODULE_0_moment__(dateTimeNow).subtract(4, 'months')) },
        ];
    }
    InMemoryDataService.prototype.createDb = function () {
        return { borders: this.borders, plants: this.plants, jobs: this.jobs };
    };
    return InMemoryDataService;
}());



/***/ }),

/***/ "../../../../../src/assets/lettuce.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "lettuce.2a7211339a50d3d2ac62.jpg";

/***/ }),

/***/ "../../../../../src/assets/tomatoes.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "tomatoes.66ca95fd17fa5311d2c7.jpg";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bm": "../../../../moment/locale/bm.js",
	"./bm.js": "../../../../moment/locale/bm.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es-us": "../../../../moment/locale/es-us.js",
	"./es-us.js": "../../../../moment/locale/es-us.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./gu": "../../../../moment/locale/gu.js",
	"./gu.js": "../../../../moment/locale/gu.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map