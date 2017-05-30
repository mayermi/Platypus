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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var index_1 = require("../../_services/index");
var NavigationComponent = (function () {
    function NavigationComponent(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
    }
    NavigationComponent.prototype.ngDoCheck = function () {
        this.isLoggedIn = this.authenticationService.isLoggedIn();
    };
    NavigationComponent.prototype.logout = function () {
        var _this = this;
        this.authenticationService.logout()
            .then(function (response) { return _this.router.navigateByUrl('/'); });
    };
    return NavigationComponent;
}());
NavigationComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'navigation',
        styleUrls: ['navigation.component.css'],
        templateUrl: 'navigation.component.html'
    }),
    __metadata("design:paramtypes", [index_1.AuthenticationService,
        router_1.Router])
], NavigationComponent);
exports.NavigationComponent = NavigationComponent;
//# sourceMappingURL=navigation.component.js.map