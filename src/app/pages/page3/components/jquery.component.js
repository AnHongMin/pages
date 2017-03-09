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
var core_2 = require('@angular/core');
//http://jqueryui.com/datepicker/#date-formats
var jQueryComponent = (function () {
    function jQueryComponent(_elRef) {
        this._elRef = _elRef;
        this.startDateChanged = new core_1.EventEmitter();
    }
    jQueryComponent.prototype.ngOnInit = function () {
        var _this = this;
        jQuery('#start_date').datepicker({
            autoclose: true,
            todayHighlight: true,
            endDate: new Date(),
            dateFormat: 'yy-mm-dd'
        }).change(function () {
            _this.startDateValue = jQuery('#start_date').val();
            _this.startDateChanged.emit(_this.startDateValue);
        });
        jQuery(this._elRef.nativeElement).find('button').on('click', function () {
            location.href = 'http://localhost:8080/csContactLog.do?method=getList' + '&date=' + jQuery('#start_date').val().replace(/[^0-9]/g, "");
        });
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], jQueryComponent.prototype, "startDateChanged", void 0);
    jQueryComponent = __decorate([
        core_1.Component({
            selector: 'my-jquery',
            template: "\n        <div>\n        <button>Click me</button>\n        <div class=\"form-group\">\n            <label>Date of birth</label>\n            <input \n                id=\"start_date\" \n                name=\"start_date\"\n                type=\"text\" \n                class=\"form-control\" \n                placeholder=\"yyyy-mm-dd\"\n                readonly=\"readonly\"\n                style=\"cursor: pointer;background: #fff;border-bottom: 2px solid #d8d8d8;\"\n            >\n            <p class=\"message-input error-input\">\n            {{!startDateValue?'Required':''}}\n            </p>\n        </div>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [core_2.ElementRef])
    ], jQueryComponent);
    return jQueryComponent;
}());
exports.jQueryComponent = jQueryComponent;
//# sourceMappingURL=jquery.component.js.map