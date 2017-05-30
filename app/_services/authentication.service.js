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
var index_1 = require("./index");
var AuthenticationService = (function () {
    function AuthenticationService(apiService) {
        this.apiService = apiService;
    }
    AuthenticationService.prototype.getLoggedInUser = function () {
        return JSON.parse(localStorage.getItem('user'));
    };
    AuthenticationService.prototype.isLoggedIn = function () {
        return !!window.sessionStorage.token;
    };
    AuthenticationService.prototype.login = function (username, password) {
        var _this = this;
        return this.apiService.post('/login', {
            username: username,
            password: password
        }).then(function (response) {
            _this.startSession(response);
            return response;
        }).catch(function (error) {
            _this.endSession();
            return error;
        });
    };
    AuthenticationService.prototype.logout = function () {
        var _this = this;
        if (this.isLoggedIn()) {
            return this.apiService.get('/logout')
                .then(function (response) {
                _this.endSession();
                return response;
            }).catch(function (error) {
                return error;
            });
        }
    };
    AuthenticationService.prototype.signup = function (username, password) {
        var _this = this;
        return this.apiService.post('/signup', {
            username: username,
            password: password
        }).then(function (response) {
            _this.startSession(response);
            return response;
        });
    };
    AuthenticationService.prototype.startSession = function (user) {
        window.sessionStorage.token = user.token;
        var userCopy = Object.assign({}, user);
        delete userCopy.token;
        localStorage.setItem('user', JSON.stringify(userCopy));
    };
    AuthenticationService.prototype.endSession = function () {
        delete window.sessionStorage.token;
        localStorage.removeItem('user');
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [index_1.APIService])
], AuthenticationService);
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=authentication.service.js.map