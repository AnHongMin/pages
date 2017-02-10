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
/**
 * 아이템의 목록이 있으며 아이템은 detail 정보를 기본적으로 드러내지 않음
 * 사용자가 아이템 클릭 시에 해당 아이템의 detail 정보가 펼쳐짐
 * 이 때 클릭 안 한 아이템들은 grey로 색 변경
 * 클릭한 아이템을 재클릭 시, detail 정보는 다시 감추고 원래 상태로 돌아감
 * 클릭해서 펼쳤던 아이템 외에 다른 아이템 클릭 시 펼쳤던 아이템은 닫히고 클릭한 아이템을 펼침
 *
 * template: 뷰 역할
 * component: 뷰와 모델, 상태 관리
 * service: 비즈니스 로직
 */
var core_1 = require('@angular/core');
var product_service_1 = require('./services/product.service');
var Page6Component = (function () {
    // providers에 의존성 선언 후에는 
    // construtor 메서드 안에 파라미터로 해당 의존성을 선언해 주면 의존성 주입이 자동으로 이루어집니다
    function Page6Component(productService) {
        this.products = productService.getProducts();
        this.noneSelected = true;
    }
    Page6Component.prototype.handleProductClick = function (selectedItem) {
        if (this.selectedItemId === selectedItem.id) {
            this.selectedItemId = null;
            this.noneSelected = true;
            return;
        }
        this.noneSelected = false;
        this.selectedItemId = selectedItem.id;
    };
    Page6Component = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'page6',
            // templateUrl을 통해서 해당 컴포넌트의 뷰
            templateUrl: "page6.component.html",
            //  styleUrls에서 해당 컴포넌트를 위한 스타일 파일을 선언
            styleUrls: ['./css/products.component.css'],
            //  Component에서 사용할 의존성을 선언
            providers: [product_service_1.ProductService]
        }), 
        __metadata('design:paramtypes', [product_service_1.ProductService])
    ], Page6Component);
    return Page6Component;
}());
exports.Page6Component = Page6Component;
//# sourceMappingURL=page6.component.js.map