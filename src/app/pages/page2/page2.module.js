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
var page2_component_1 = require('./page2.component');
var routes = [
    { path: '', component: page2_component_1.Page2Component,
        children: []
    }
];
var Page2Module = (function () {
    function Page2Module() {
    }
    Page2Module = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, router_1.RouterModule.forChild(routes)],
            declarations: [page2_component_1.Page2Component],
            bootstrap: [page2_component_1.Page2Component]
        }), 
        __metadata('design:paramtypes', [])
    ], Page2Module);
    return Page2Module;
}());
exports.Page2Module = Page2Module;
//# sourceMappingURL=page2.module.js.map