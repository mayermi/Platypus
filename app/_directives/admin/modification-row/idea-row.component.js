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
var index_1 = require("../../../_models/index");
var index_2 = require("../../../_services/index");
var index_3 = require("../../../_helpers/index");
var IdeaRowComponent = (function () {
    function IdeaRowComponent(ideaService) {
        this.ideaService = ideaService;
        this.hasLoadedStates = false;
    }
    IdeaRowComponent.prototype.forwardToNextPhase = function () {
        var _this = this;
        this.ideaService.setPhaseForIdea(this.idea, this.currentState.phase.number + 1).then(function (state) {
            _this.idea.states.push(state);
            _this.currentState = state;
        });
    };
    IdeaRowComponent.prototype.getAbsoluteDate = function (date) {
        return index_3.formatDate.absolute(date);
    };
    IdeaRowComponent.prototype.getRelativeDate = function (date) {
        return index_3.formatDate.relative(date);
    };
    IdeaRowComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ideaService.getStatesForIdea(this.idea).then(function (states) {
            _this.idea.states = states;
            _this.currentState = states[states.length - 1];
            _this.hasLoadedStates = true;
        });
    };
    return IdeaRowComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", index_1.Idea)
], IdeaRowComponent.prototype, "idea", void 0);
IdeaRowComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'idea-row',
        styleUrls: ['idea-row.component.css'],
        templateUrl: 'idea-row.component.html'
    }),
    __metadata("design:paramtypes", [index_2.IdeaService])
], IdeaRowComponent);
exports.IdeaRowComponent = IdeaRowComponent;
//# sourceMappingURL=idea-row.component.js.map