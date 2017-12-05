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
var router_1 = require('@angular/router');
var moment = require('moment');
var index_1 = require('../../_models/index');
var index_2 = require('../../_services/index');
var IdeaTeaserComponent = (function () {
    function IdeaTeaserComponent(ideaService, router) {
        this.ideaService = ideaService;
        this.router = router;
        this.hasLoadedStates = false;
    }
    IdeaTeaserComponent.prototype.goToIdea = function () {
        this.router.navigateByUrl("/ideas/" + this.idea.id);
    };
    IdeaTeaserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ideaService.getStatesForIdea(this.idea).then(function (states) {
            var currentState = states.sort(function (stateA, stateB) { return stateB.phase.number - stateA.phase.number; })[0];
            _this.timeToPhaseEnd = moment(currentState.endsAt).fromNow(false);
            _this.currentPhase = currentState.phase;
            _this.hasLoadedStates = true;
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', index_1.Idea)
    ], IdeaTeaserComponent.prototype, "idea", void 0);
    IdeaTeaserComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'idea-teaser',
            styleUrls: ['idea-teaser.component.css'],
            templateUrl: 'idea-teaser.component.html',
        }), 
        __metadata('design:paramtypes', [index_2.IdeaService, router_1.Router])
    ], IdeaTeaserComponent);
    return IdeaTeaserComponent;
}());
exports.IdeaTeaserComponent = IdeaTeaserComponent;
//# sourceMappingURL=idea-teaser.component.js.map