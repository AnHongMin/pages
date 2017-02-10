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
var Page10Component = (function () {
    function Page10Component() {
        //  this.name = 'Sam';
        // console.log(' constructor ran');
        this.name = 'Hongmin.An';
        this.email = "hmahn@mpc.co.kr";
        this.address = {
            street: "1",
            city: '2',
            state: '2'
        };
        this.hobbies = [
            'music', 'game'
        ];
        this.showHobbies = false;
    }
    Page10Component.prototype.toggleHobbies = function () {
        if (this.showHobbies == true) {
            this.showHobbies = false;
        }
        else {
            this.showHobbies = true;
        }
    };
    Page10Component.prototype.addHobby = function (hobby) {
        this.hobbies.push(hobby);
    };
    Page10Component.prototype.deleteHobby = function (i) {
        this.hobbies.splice(i, 1);
    };
    Page10Component = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'page10',
            templateUrl: "page10.component.html"
        }), 
        __metadata('design:paramtypes', [])
    ], Page10Component);
    return Page10Component;
}());
exports.Page10Component = Page10Component;
//# sourceMappingURL=page10.component.js.map