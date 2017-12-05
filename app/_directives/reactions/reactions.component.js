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
var ReactionsComponent = (function () {
    function ReactionsComponent(authenticationService) {
        this.authenticationService = authenticationService;
        this.onDislike = new core_1.EventEmitter();
        this.onLike = new core_1.EventEmitter();
    }
    ReactionsComponent.prototype.isDislike = function (reaction) {
        return reaction.type === 'dislike';
    };
    ReactionsComponent.prototype.isLike = function (reaction) {
        return reaction.type === 'like';
    };
    ReactionsComponent.prototype.getDislikes = function () {
        var _this = this;
        return this.reactions.filter(function (reaction) { return _this.isDislike(reaction); }).length;
    };
    ReactionsComponent.prototype.getLikes = function () {
        var _this = this;
        return this.reactions.filter(function (reaction) { return _this.isLike(reaction); }).length;
    };
    ReactionsComponent.prototype.dislike = function () {
        this.onDislike.emit();
    };
    ReactionsComponent.prototype.like = function () {
        this.onLike.emit();
    };
    ReactionsComponent.prototype.wasDislikedByCurrentUser = function () {
        var user = this.authenticationService.getLoggedInUser();
        var reaction = this.reactions.find(function (reaction) { return reaction.user.id === user.id; });
        return reaction ? this.isDislike(reaction) : false;
    };
    ReactionsComponent.prototype.wasLikedByCurrentUser = function () {
        var user = this.authenticationService.getLoggedInUser();
        var reaction = this.reactions.find(function (reaction) { return reaction.user.id === user.id; });
        return reaction ? this.isLike(reaction) : false;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], ReactionsComponent.prototype, "isViewOnly", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], ReactionsComponent.prototype, "reactions", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ReactionsComponent.prototype, "onDislike", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ReactionsComponent.prototype, "onLike", void 0);
    ReactionsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'reactions',
            styleUrls: ['reactions.component.css'],
            templateUrl: 'reactions.component.html'
        }), 
        __metadata('design:paramtypes', [index_1.AuthenticationService])
    ], ReactionsComponent);
    return ReactionsComponent;
}());
exports.ReactionsComponent = ReactionsComponent;
//# sourceMappingURL=reactions.component.js.map