"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
//import { BrowserModule } from '@angular/platform-browser';
var common_1 = require('@angular/common');
var router_1 = require('@angular/router');
var page1_component_1 = require('./page1.component');
// app.module.ts 와 마찬가지로 사용할 컴포넌트를 import 한다.
var page1_welcome_component_1 = require('./components/page1-welcome.component');
var routes = [
    { path: '', component: page1_component_1.Page1Component,
        children: []
    }
];
var Page1Module = (function () {
    function Page1Module() {
    }
    Page1Module = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, router_1.RouterModule.forChild(routes)],
            declarations: [page1_component_1.Page1Component, page1_welcome_component_1.Page1WelcomeComponent],
            bootstrap: [page1_component_1.Page1Component]
        }), 
        __metadata('design:paramtypes', [])
    ], Page1Module);
    return Page1Module;
}());
exports.Page1Module = Page1Module;
//# sourceMappingURL=page1.module.js.map