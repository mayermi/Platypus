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
var ModificationTeaserComponent = (function () {
    function ModificationTeaserComponent(ideaService) {
        this.ideaService = ideaService;
        this.additionCount = 0;
        this.dislikeCount = 0;
        this.hasAdditions = false;
        this.likeCount = 0;
    }
    ModificationTeaserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ideaService.getReactionsForModification(this.idea, this.modification).then(function (reactions) {
            _this.likeCount = reactions.filter(function (reaction) { return reaction.type === 'like'; }).length;
            _this.dislikeCount = reactions.filter(function (reaction) { return reaction.type === 'dislike'; }).length;
            _this.type = index_3.getTypeForReactions(reactions);
        });
        this.ideaService.getAdditionsForModification(this.idea, this.modification).then(function (additions) {
            _this.additionCount = additions.length;
            _this.hasAdditions = additions.length > 0;
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', index_1.Idea)
    ], ModificationTeaserComponent.prototype, "idea", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', index_1.Modification)
    ], ModificationTeaserComponent.prototype, "modification", void 0);
    ModificationTeaserComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'modification-teaser',
            styleUrls: ['modification-teaser.component.css'],
            templateUrl: 'modification-teaser.component.html'
        }), 
        __metadata('design:paramtypes', [index_2.IdeaService])
    ], ModificationTeaserComponent);
    return ModificationTeaserComponent;
}());
exports.ModificationTeaserComponent = ModificationTeaserComponent;
//# sourceMappingURL=modification-teaser.component.js.map