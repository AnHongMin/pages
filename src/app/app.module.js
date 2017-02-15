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
var platform_browser_1 = require('@angular/platform-browser');
var router_1 = require('@angular/router');
var app_component_1 = require('./app.component');
//////////////////////
// 추가
var app1_component_1 = require('./components/app1.component');
var page1_module_1 = require('./pages/page1/page1.module');
var page2_module_1 = require('./pages/page2/page2.module');
var page3_module_1 = require('./pages/page3/page3.module');
var page4_module_1 = require('./pages/page4/page4.module');
var page5_module_1 = require('./pages/page5/page5.module');
var page6_module_1 = require('./pages/page6/page6.module');
var page7_module_1 = require('./pages/page7/page7.module');
var page8_module_1 = require('./pages/page8/page8.module');
var page9_module_1 = require('./pages/page9/page9.module');
var page10_module_1 = require('./pages/page10/page10.module');
var page11_module_1 = require('./pages/page11/page11.module');
var appRoutes = [
    { path: '', loadChildren: 'app/pages/page1/page1.module#Page1Module' },
    { path: 'page2', loadChildren: 'app/pages/page2/page2.module#Page2Module' },
    { path: 'page3', loadChildren: 'app/pages/page3/page3.module#Page3Module' },
    { path: 'page4', loadChildren: 'app/pages/page4/page4.module#Page4Module' },
    { path: 'page5', loadChildren: 'app/pages/page5/page5.module#Page5Module' },
    { path: 'page6', loadChildren: 'app/pages/page6/page6.module#Page6Module' },
    { path: 'page7', loadChildren: 'app/pages/page7/page7.module#Page7Module' },
    { path: 'page8', loadChildren: 'app/pages/page8/page8.module#Page8Module' },
    { path: 'page9', loadChildren: 'app/pages/page9/page9.module#Page9Module' },
    { path: 'page10', loadChildren: 'app/pages/page10/page10.module#Page10Module' },
    { path: 'page11', loadChildren: 'app/pages/page11/page11.module#Page11Module' },
    { path: 'app1', component: app1_component_1.App1Component }
];
// 추가 종료
/////////////////////////////
// imports 에 RouterModule.forRoot(appRoutes), Page1Module, Page2Module 추가
// declarations 에 App1Component 추가
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule, router_1.RouterModule.forRoot(appRoutes),
                page1_module_1.Page1Module, page2_module_1.Page2Module, page3_module_1.Page3Module, page4_module_1.Page4Module,
                page5_module_1.Page5Module, page6_module_1.Page6Module, page7_module_1.Page7Module, page8_module_1.Page8Module,
                page9_module_1.Page9Module, page10_module_1.Page10Module, page11_module_1.Page11Module
            ],
            declarations: [app_component_1.AppComponent, app1_component_1.App1Component],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map