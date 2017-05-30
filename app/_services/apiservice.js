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
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var APIService = (function () {
    function APIService(http) {
        this.http = http;
        this.headers = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        this.options = new http_1.RequestOptions({
            headers: this.headers
        });
        // local: 'http://localhost:3000/app';
        this.url = 'https://cityidea.herokuapp.com/app';
    }
    APIService.prototype.handleRequest = function (request) {
        var _this = this;
        return request
            .toPromise()
            .then(function (response) { return response.json().response; })
            .catch(function (error) { return _this.handleError(error); });
    };
    APIService.prototype.delete = function (url) {
        return this.handleRequest(this.http.delete("" + this.url + url, this.jwt()));
    };
    APIService.prototype.get = function (url) {
        return this.handleRequest(this.http.get("" + this.url + url, this.jwt()));
    };
    APIService.prototype.post = function (url, body) {
        if (body === void 0) { body = ''; }
        return this.handleRequest(this.http.post("" + this.url + url, body, this.jwt()));
    };
    APIService.prototype.put = function (url, body) {
        if (body === void 0) { body = ''; }
        //    return this.handleRequest(this.http.put(`http://localhost:3100/app${url}`, body, this.jwt()));
        return this.handleRequest(this.http.put("" + this.url + url, body, this.jwt()));
    };
    APIService.prototype.jwt = function () {
        if (window.sessionStorage.token) {
            var headers = new http_1.Headers({
                'Content-Type': 'application/json'
            });
            headers.append('Authorization', window.sessionStorage.token);
            return new http_1.RequestOptions({
                headers: headers
            });
        }
        else {
            return this.options;
        }
    };
    APIService.prototype.handleError = function (error) {
        if (error.status === 401) {
            console.log('I WAS going to delete your session, but I won’t just yet.');
            // this.deleteSession();
        }
        return Promise.reject(error.message || error);
    };
    APIService.prototype.startSession = function (user, token) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        window.sessionStorage.token = token;
    };
    APIService.prototype.deleteSession = function () {
        localStorage.removeItem('currentUser');
        delete window.sessionStorage.token;
    };
    return APIService;
}());
APIService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], APIService);
exports.APIService = APIService;
//# sourceMappingURL=apiservice.js.map