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
var index_1 = require('../../_services/index');
var HomeComponent = (function () {
    function HomeComponent(ideaService, userService) {
        this.ideaService = ideaService;
        this.userService = userService;
    }
    HomeComponent.prototype.getContributors = function () {
        var _this = this;
        this.userService.getContributors()
            .then(function (contributors) { return _this.contributors = contributors; });
    };
    HomeComponent.prototype.getCreators = function () {
        var _this = this;
        this.userService.getCreators()
            .then(function (creators) { return _this.creators = creators; });
    };
    HomeComponent.prototype.getTopIdeas = function () {
        var _this = this;
        this.ideaService.getTopIdeas()
            .then(function (topIdeas) { return _this.topIdeas = topIdeas; });
    };
    HomeComponent.prototype.ngOnInit = function () {
        this.getContributors();
        this.getCreators();
        this.getTopIdeas();
    };
    HomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            styleUrls: ['home.component.css'],
            templateUrl: 'home.component.html'
        }), 
        __metadata('design:paramtypes', [index_1.IdeaService, index_1.UserService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map