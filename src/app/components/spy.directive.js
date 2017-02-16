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
// Spy on any element to which it is applied.
// Usage: <div mySpy>...</div>
var SpyDirective = (function () {
    function SpyDirective(el) {
        this.el = el;
    }
    // https://angular.io/docs/ts/latest/api/core/index/OnInit-class.html
    SpyDirective.prototype.ngOnInit = function () { this.logIt("onInit"); };
    // https://angular.io/docs/ts/latest/api/core/index/OnDestroy-class.html
    SpyDirective.prototype.ngOnDestroy = function () { this.logIt("onDestroy"); };
    SpyDirective.prototype.logIt = function (msg) {
        console.log('SpyDirective > ' + msg);
        console.log(this.el);
    };
    SpyDirective = __decorate([
        core_1.Directive({ selector: '[mySpy]' }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], SpyDirective);
    return SpyDirective;
}());
exports.SpyDirective = SpyDirective;
//# sourceMappingURL=spy.directive.js.map