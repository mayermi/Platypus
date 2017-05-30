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
var SignupComponent = (function () {
    function SignupComponent(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.isLoading = false;
        this.password = '';
        this.username = '';
    }
    SignupComponent.prototype.signup = function () {
        var _this = this;
        this.isLoading = true;
        this.authenticationService.signup(this.username, this.password)
            .then(function (data) {
            _this.router.navigateByUrl('/');
        }).catch(function (error) {
            _this.isLoading = false;
        });
    };
    return SignupComponent;
}());
SignupComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        styleUrls: ['signup.component.css'],
        templateUrl: 'signup.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router,
        index_1.AuthenticationService])
], SignupComponent);
exports.SignupComponent = SignupComponent;
//# sourceMappingURL=signup.component.js.map