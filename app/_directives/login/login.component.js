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
var router_1 = require('@angular/router');
var index_1 = require('../../_services/index');
var LoginComponent = (function () {
    function LoginComponent(route, router, zone, authenticationService) {
        this.route = route;
        this.router = router;
        this.zone = zone;
        this.authenticationService = authenticationService;
        this.isLoading = false;
        this.password = '';
        this.username = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
        // reset login status
        this.authenticationService.logout();
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.isLoading = true;
        this.authenticationService.login(this.username, this.password)
            .then(function (data) {
            _this.zone.run(function () {
                _this.router.navigateByUrl(_this.returnUrl);
            });
        }).catch(function (error) {
            _this.isLoading = false;
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            styleUrls: ['login.component.css'],
            templateUrl: 'login.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, core_1.NgZone, index_1.AuthenticationService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map