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
var Page7Component = (function () {
    function Page7Component() {
        this.positions = [];
    }
    Page7Component.prototype.clickedButton = function ($event) {
        console.log($event);
        alert("Clicked!");
    };
    Page7Component.prototype.printMousePosition = function ($event) {
        var newPosition = "X: " + $event.clientX + " Y: " + $event.clientY;
        console.log(newPosition);
        this.positions.push(newPosition);
    };
    Page7Component = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'page7',
            providers: [],
            styles: ["\n        .box {\n            width: 200px;\n            height: 200px;\n            display: inline-block;\n            background-color: yellow;\n        }\n    \n        .scrollable {\n            overflow-y: scroll;\n            border: 1px solid grey;\n            width: 160px;\n            height: 300px;\n        }\n    "],
            templateUrl: "page7.component.html"
        }), 
        __metadata('design:paramtypes', [])
    ], Page7Component);
    return Page7Component;
}());
exports.Page7Component = Page7Component;
//# sourceMappingURL=page7.component.js.map