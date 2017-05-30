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
var IdeaOwnerAuthGuard = (function () {
    function IdeaOwnerAuthGuard(router) {
        this.router = router;
    }
    IdeaOwnerAuthGuard.prototype.canActivate = function (route, state) {
        return true;
        // TODO temporarily deactivated as we only check token-existence at the moment
        // if (localStorage.getItem('currentUser')) {
        //   // return `true` if "fake-admin" user
        //   return JSON.parse(localStorage.getItem('currentUser')).username === 'm';
        // }
        // not logged in so redirect to login page with return-URL
        // this.router.navigateByUrl('/login', {
        //   queryParams: {
        //     returnUrl: state.url
        //   }
        // });
        //
        // return false;
    };
    return IdeaOwnerAuthGuard;
}());
IdeaOwnerAuthGuard = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router])
], IdeaOwnerAuthGuard);
exports.IdeaOwnerAuthGuard = IdeaOwnerAuthGuard;
//# sourceMappingURL=idea-owner-auth.guard.js.map