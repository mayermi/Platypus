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
require("rxjs/add/operator/switchMap");
var index_1 = require("../../_models/index");
var index_2 = require("../../_services/index");
var index_3 = require("../../_helpers/index");
var ModificationComponent = (function () {
    function ModificationComponent(authenticationService, ideaService, route) {
        this.authenticationService = authenticationService;
        this.ideaService = ideaService;
        this.route = route;
        this.addition = new index_1.Addition();
        this.hasLoadedAdditions = false;
        this.isAdditionFormVisible = false;
        this.isMergeable = false;
    }
    ModificationComponent.prototype.dislike = function () {
        var user = this.authenticationService.getLoggedInUser();
        var existingReaction = (this.modification.reactions || []).find(function (reaction) { return reaction.user.id === user.id; });
        var isDislikedByCurrentUser = existingReaction ? existingReaction.type === 'dislike' : false;
        if (isDislikedByCurrentUser) {
            this.ideaService.deleteReactionForModification(this.idea, this.modification);
        }
        else {
            var reaction = new index_1.Reaction();
            reaction.type = 'dislike';
            this.ideaService.createReactionForModification(this.idea, this.modification, reaction);
        }
    };
    ModificationComponent.prototype.getAbsoluteDate = function (date) {
        return index_3.formatDate.absolute(date);
    };
    ModificationComponent.prototype.getDislikes = function () {
        return this.modification.reactions ? this.modification.reactions.filter(function (reaction) { return reaction.type === 'dislike'; }).length : 0;
    };
    ModificationComponent.prototype.getLikes = function () {
        return this.modification.reactions ? this.modification.reactions.filter(function (reaction) { return reaction.type === 'like'; }).length : 0;
    };
    ModificationComponent.prototype.getRelativeDate = function (date) {
        return index_3.formatDate.relative(date);
    };
    ModificationComponent.prototype.getType = function () {
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
    ModificationComponent.prototype.hideAdditionForm = function () {
        this.isAdditionFormVisible = false;
    };
    ModificationComponent.prototype.like = function () {
        var user = this.authenticationService.getLoggedInUser();
        var existingReaction = (this.modification.reactions || []).find(function (reaction) { return reaction.user.id === user.id; });
        var isLikedByCurrentUser = existingReaction ? existingReaction.type === 'like' : false;
        if (isLikedByCurrentUser) {
            this.ideaService.deleteReactionForModification(this.idea, this.modification);
        }
        else {
            var reaction = new index_1.Reaction();
            reaction.type = 'like';
            this.ideaService.createReactionForModification(this.idea, this.modification, reaction);
        }
    };
    ModificationComponent.prototype.saveAddition = function () {
        var _this = this;
        this.ideaService.createAdditionForModification(this.idea, this.modification, this.addition)
            .then(function (addition) {
            _this.modification.additions.unshift(addition);
            _this.hasLoadedAdditions = true;
            _this.hideAdditionForm();
        });
    };
    ModificationComponent.prototype.showAdditionForm = function () {
        this.isAdditionFormVisible = true;
    };
    ModificationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.ideaService.getModification(params.ideaId, params.modificationId); })
            .subscribe(function (modification) {
            _this.modification = modification;
            _this.idea = modification.idea;
            _this.isMergeable = !modification.isMerged && modification.isMergeable && modification.user.id === _this.authenticationService.getLoggedInUser().id;
            _this.ideaService.getAdditionsForModification(_this.idea, _this.modification).then(function (additions) {
                _this.modification.additions = additions.reverse();
                _this.hasLoadedAdditions = true;
            });
            _this.ideaService.getReactionsForModification(_this.idea, _this.modification).then(function (reactions) {
                _this.modification.reactions = reactions;
            });
        });
    };
    return ModificationComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", index_1.Idea)
], ModificationComponent.prototype, "idea", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", index_1.Modification)
], ModificationComponent.prototype, "modification", void 0);
ModificationComponent = __decorate([
    core_1.Component({
        encapsulation: core_1.ViewEncapsulation.None,
        moduleId: module.id,
        styleUrls: ['modification.component.css'],
        templateUrl: 'modification.component.html'
    }),
    __metadata("design:paramtypes", [index_2.AuthenticationService,
        index_2.IdeaService,
        router_1.ActivatedRoute])
], ModificationComponent);
exports.ModificationComponent = ModificationComponent;
//# sourceMappingURL=modification.component.js.map