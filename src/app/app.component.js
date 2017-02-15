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
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n  <ul>\n  <li><a [routerLink]=\"['/']\">Home</a></li>\n  <li><a [routerLink]=\"['/page2']\">Page2</a></li>\n  <li><a [routerLink]=\"['/page3']\">Page3</a></li>\n  <li><a [routerLink]=\"['/page4']\">Page4</a></li>\n  <li><a [routerLink]=\"['/page5']\">Page5</a></li>\n  <li><a [routerLink]=\"['/page6']\">Page6</a></li>\n  <li><a [routerLink]=\"['/page7']\">Page7</a></li>\n  <li><a [routerLink]=\"['/page8']\">Page8</a></li>\n  <li><a [routerLink]=\"['/page9']\">Page9</a></li>\n  <li><a [routerLink]=\"['/page10']\">Page10</a></li>\n  <li><a [routerLink]=\"['/page11']\">Page11</a></li>\n  <li><a [routerLink]=\"['/app1']\">App1</a></li>  \n  </ul>\n  <router-outlet></router-outlet>\n  ",
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map