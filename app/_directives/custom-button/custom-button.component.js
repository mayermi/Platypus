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
var CustomButtonComponent = (function () {
    function CustomButtonComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], CustomButtonComponent.prototype, "type", void 0);
    CustomButtonComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'custom-button',
            styleUrls: ['custom-button.component.css'],
            templateUrl: 'custom-button.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], CustomButtonComponent);
    return CustomButtonComponent;
}());
exports.CustomButtonComponent = CustomButtonComponent;
//# sourceMappingURL=custom-button.component.js.map