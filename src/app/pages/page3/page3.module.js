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
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var common_1 = require('@angular/common');
var router_1 = require('@angular/router');
var page3_component_1 = require('./page3.component');
var routes = [
    { path: '', component: page3_component_1.Page3Component,
        children: []
    }
];
var Page3Module = (function () {
    function Page3Module() {
    }
    Page3Module = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, router_1.RouterModule.forChild(routes), forms_1.FormsModule, http_1.HttpModule],
            declarations: [page3_component_1.Page3Component],
            bootstrap: [page3_component_1.Page3Component]
        }), 
        __metadata('design:paramtypes', [])
    ], Page3Module);
    return Page3Module;
}());
exports.Page3Module = Page3Module;
//# sourceMappingURL=page3.module.js.map