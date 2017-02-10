/**
 * http://www.notforme.kr/archives/1682
 * Angular2에서는 상태정보를 Component의 멤버변수로 선언하여
 * 이를 체크박스의 체크 상태와 자동으로 연결해 준다는 것입니다.
 * 이로 인해 우리는 DOM API나, jQuery와 같이 직접 DOM에 접근해서 상태정보를 읽는 노력을 할 필요가 없습니다.
 * Component안에서 상태정보를 직접 관리할 수 있습니다.
 */
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
// 클래스에 angular에게 Component라는 것을 알려주기 위한 Decorator를 사용하기 위해 import 한 것입니다.
var core_1 = require('@angular/core');
var Page5Component = (function () {
    // 클래스의 constructor 메서드 안에 isChecked를 true로 초기화 
    function Page5Component() {
        this.isChecked = true;
    }
    // 버튼의  click 이벤트 시 호출할 메서드
    Page5Component.prototype.confirmMe = function () {
        alert('동의 여부: ' + this.isChecked);
    };
    Page5Component = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'page5',
            //  Component의 뷰를 구성하는 마크업 정보
            templateUrl: "page5.component.html"
        }), 
        __metadata('design:paramtypes', [])
    ], Page5Component);
    return Page5Component;
}());
exports.Page5Component = Page5Component;
//# sourceMappingURL=page5.component.js.map