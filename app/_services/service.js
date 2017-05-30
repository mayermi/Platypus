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
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
require("rxjs/add/operator/map");
var APIService = (function () {
    function APIService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.options = new http_1.RequestOptions({ headers: this.headers });
        this.url_local = 'http://localhost:3100/app';
        this.url = 'https://cityidea.herokuapp.com/app';
    }
    APIService.prototype.getUrl = function () { return this.url_local; };
    APIService.prototype.put = function (urlAppend, params, body) {
        if (urlAppend === void 0) { urlAppend = ''; }
        if (params === void 0) { params = ''; }
        if (body === void 0) { body = ''; }
        return this.http.put(this.getUrl() + urlAppend + params, body, this.jwt())
            .toPromise()
            .then(function (res) { return res.json().response; })
            .catch(this.handleError);
    };
    APIService.prototype.post = function (urlAppend, params, body) {
        if (urlAppend === void 0) { urlAppend = ''; }
        if (params === void 0) { params = ''; }
        if (body === void 0) { body = ''; }
        return this.http.post(this.getUrl() + urlAppend + params, body, this.jwt())
            .toPromise()
            .then(function (res) { return res.json().response; })
            .catch(this.handleError);
    };
    APIService.prototype.delete = function (urlAppend, params) {
        if (urlAppend === void 0) { urlAppend = ''; }
        if (params === void 0) { params = ''; }
        return this.http.delete(this.getUrl() + urlAppend + params, this.jwt())
            .toPromise()
            .then(function (res) { return res.json().response; })
            .catch(this.handleError);
    };
    APIService.prototype.get = function (urlAppend, params) {
        if (params === void 0) { params = ''; }
        return this.http.get(this.getUrl() + urlAppend + params, this.jwt())
            .toPromise()
            .then(function (res) { return res.json().response; })
            .catch(this.handleError);
    };
    APIService.prototype.jwt = function () {
        if (window.sessionStorage.token) {
            var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
            headers.set('Authorization', 'Bearer ' + window.sessionStorage.token);
            return new http_1.RequestOptions({ headers: headers });
            ;
        }
    };
    APIService.prototype.handleError = function (error) {
        //console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return APIService;
}());
APIService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], APIService);
exports.APIService = APIService;
//# sourceMappingURL=service.js.map