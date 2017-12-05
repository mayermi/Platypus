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
var AdditionTeaserComponent = (function () {
    function AdditionTeaserComponent(ideaService) {
        this.ideaService = ideaService;
        this.isApplicable = false;
    }
    AdditionTeaserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ideaService.getReactionsForAddition(this.idea, this.modification, this.addition).then(function (reactions) {
            _this.type = index_3.getTypeForReactions(reactions);
            var dislikesCount = reactions.filter(function (reaction) { return reaction.type === 'dislike'; }).length || 0;
            var likesCount = reactions.filter(function (reaction) { return reaction.type === 'like'; }).length || 0;
            _this.isApplicable = _this.currentPhase === 3 ? (likesCount - dislikesCount > 0) : (likesCount > 0 && dislikesCount === 0);
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', index_1.Addition)
    ], AdditionTeaserComponent.prototype, "addition", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], AdditionTeaserComponent.prototype, "content", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], AdditionTeaserComponent.prototype, "currentPhase", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', index_1.Idea)
    ], AdditionTeaserComponent.prototype, "idea", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', index_1.Modification)
    ], AdditionTeaserComponent.prototype, "modification", void 0);
    AdditionTeaserComponent = __decorate([
        core_1.Component({
            encapsulation: core_1.ViewEncapsulation.None,
            moduleId: module.id,
            selector: 'addition-teaser',
            styleUrls: ['addition-teaser.component.css'],
            templateUrl: 'addition-teaser.component.html'
        }), 
        __metadata('design:paramtypes', [index_2.IdeaService])
    ], AdditionTeaserComponent);
    return AdditionTeaserComponent;
}());
exports.AdditionTeaserComponent = AdditionTeaserComponent;
//# sourceMappingURL=addition-teaser.component.js.map