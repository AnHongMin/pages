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
var highlight_directive_1 = require('../../components/highlight.directive');
var spy_directive_1 = require('../../components/spy.directive');
var posts_component_1 = require('./components/posts.component');
var new_post_component_1 = require('./components/new-post.component');
var jquery_component_1 = require('./components/jquery.component');
var routes = [
    { path: '', component: page3_component_1.Page3Component,
        children: []
    },
    { path: 'newPost/:id', component: new_post_component_1.NewPostComponent }
];
var Page3Module = (function () {
    function Page3Module() {
    }
    Page3Module = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, router_1.RouterModule.forChild(routes), forms_1.FormsModule, http_1.HttpModule, http_1.JsonpModule],
            declarations: [page3_component_1.Page3Component, highlight_directive_1.HighlightDirective, spy_directive_1.SpyDirective, posts_component_1.PostsComponent, new_post_component_1.NewPostComponent, jquery_component_1.jQueryComponent],
            bootstrap: [page3_component_1.Page3Component]
        }), 
        __metadata('design:paramtypes', [])
    ], Page3Module);
    return Page3Module;
}());
exports.Page3Module = Page3Module;
//# sourceMappingURL=page3.module.js.map