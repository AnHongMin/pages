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
//import { BrowserModule }        from '@angular/platform-browser';
var forms_1 = require('@angular/forms'); // <-- #1 import module
var common_1 = require('@angular/common');
var router_1 = require('@angular/router');
var page11_component_1 = require('./page11.component');
var hero_detail_component_1 = require('./hero-detail.component'); // <-- #1 import component
var hero_list_component_1 = require('./hero-list.component');
var hero_service_1 = require('./hero.service'); //  <-- #1 import service
var routes = [
    { path: '', component: page11_component_1.Page11Component,
        children: []
    }
];
var Page11Module = (function () {
    function Page11Module() {
    }
    Page11Module = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule, router_1.RouterModule.forChild(routes),
                forms_1.ReactiveFormsModule // <-- #2 add to Angular module imports 
            ],
            declarations: [
                page11_component_1.Page11Component,
                hero_detail_component_1.HeroDetailComponent,
                hero_list_component_1.HeroListComponent
            ],
            exports: [
                page11_component_1.Page11Component,
                hero_detail_component_1.HeroDetailComponent,
                hero_list_component_1.HeroListComponent
            ],
            providers: [hero_service_1.HeroService],
            bootstrap: [page11_component_1.Page11Component]
        }), 
        __metadata('design:paramtypes', [])
    ], Page11Module);
    return Page11Module;
}());
exports.Page11Module = Page11Module;
//# sourceMappingURL=page11.module.js.map