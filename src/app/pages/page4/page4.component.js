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
var Page4Component = (function () {
    function Page4Component() {
        this.clickMessage = '';
        this.values = '';
        this.values1 = '';
        this.values2 = '';
        this.values3 = '';
    }
    Page4Component.prototype.onClickMe = function () {
        this.clickMessage = 'You are my hero!';
    };
    Page4Component.prototype.onKey = function (event) {
        this.values += event.target.value + ' | ';
    };
    Page4Component.prototype.onKey1 = function (value) {
        this.values1 += value + ' | ';
    };
    Page4Component.prototype.onKey2 = function (event) {
        this.values2 += event.target.value + ' | ';
    };
    Page4Component.prototype.onEnter = function (value) {
        this.values3 = value;
    };
    Page4Component = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'page4',
            templateUrl: "page4.component.html"
        }), 
        __metadata('design:paramtypes', [])
    ], Page4Component);
    return Page4Component;
}());
exports.Page4Component = Page4Component;
//# sourceMappingURL=page4.component.js.map