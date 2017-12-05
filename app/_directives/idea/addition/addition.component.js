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
var index_1 = require('../../../_models/index');
var index_2 = require('../../../_services/index');
var index_3 = require('../../../_helpers/index');
var AdditionComponent = (function () {
    function AdditionComponent(authenticationService, ideaService) {
        this.authenticationService = authenticationService;
        this.ideaService = ideaService;
    }
    AdditionComponent.prototype.getAbsoluteDate = function (date) {
        return index_3.formatDate.absolute(date);
    };
    AdditionComponent.prototype.getDislikes = function () {
        return this.addition.reactions ? this.addition.reactions.filter(function (reaction) { return reaction.type === 'dislike'; }).length : 0;
    };
    AdditionComponent.prototype.getLikes = function () {
        return this.addition.reactions ? this.addition.reactions.filter(function (reaction) { return reaction.type === 'like'; }).length : 0;
    };
    AdditionComponent.prototype.getRelativeDate = function (date) {
        return index_3.formatDate.relative(date);
    };
    AdditionComponent.prototype.dislike = function () {
        var user = this.authenticationService.getLoggedInUser();
        var existingReaction = (this.addition.reactions || []).find(function (reaction) { return reaction.user.id === user.id; });
        var isDislikedByCurrentUser = existingReaction ? existingReaction.type === 'dislike' : false;
        if (isDislikedByCurrentUser) {
            this.ideaService.deleteReactionForAddition(this.idea, this.modification, this.addition);
        }
        else {
            var reaction = new index_1.Reaction();
            reaction.type = 'dislike';
            this.ideaService.createReactionForAddition(this.idea, this.modification, this.addition, reaction);
        }
    };
    // TODO move logic to helper file
    AdditionComponent.prototype.getType = function () {
        var dislikes = this.getDislikes();
        var likes = this.getLikes();
        if (likes > 0 && dislikes === 0) {
            return 'likes-only';
        }
        else if (likes === 0 && dislikes > 0) {
            return 'dislikes-only';
        }
        return 'mixed';
    };
    AdditionComponent.prototype.like = function () {
        var user = this.authenticationService.getLoggedInUser();
        var existingReaction = (this.addition.reactions || []).find(function (reaction) { return reaction.user.id === user.id; });
        var isLikedByCurrentUser = existingReaction ? existingReaction.type === 'like' : false;
        if (isLikedByCurrentUser) {
            this.ideaService.deleteReactionForAddition(this.idea, this.modification, this.addition);
        }
        else {
            var reaction = new index_1.Reaction();
            reaction.type = 'like';
            this.ideaService.createReactionForAddition(this.idea, this.modification, this.addition, reaction);
        }
    };
    AdditionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ideaService.getReactionsForAddition(this.idea, this.modification, this.addition).then(function (reactions) {
            _this.addition.reactions = reactions;
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', index_1.Addition)
    ], AdditionComponent.prototype, "addition", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', index_1.Idea)
    ], AdditionComponent.prototype, "idea", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', index_1.Modification)
    ], AdditionComponent.prototype, "modification", void 0);
    AdditionComponent = __decorate([
        core_1.Component({
            encapsulation: core_1.ViewEncapsulation.None,
            moduleId: module.id,
            selector: 'addition',
            styleUrls: ['addition.component.css'],
            templateUrl: 'addition.component.html'
        }), 
        __metadata('design:paramtypes', [index_2.AuthenticationService, index_2.IdeaService])
    ], AdditionComponent);
    return AdditionComponent;
}());
exports.AdditionComponent = AdditionComponent;
//# sourceMappingURL=addition.component.js.map