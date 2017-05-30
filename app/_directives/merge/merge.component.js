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
var MergeComponent = (function () {
    function MergeComponent(ideaService, route, router) {
        this.ideaService = ideaService;
        this.route = route;
        this.router = router;
        this.hasAdditions = false;
        this.hasState = false;
        this.updatedIdea = new index_1.Idea();
    }
    MergeComponent.prototype.save = function () {
        var _this = this;
        this.ideaService.updateIdeaWithModification(this.updatedIdea, this.modification).then(function () {
            _this.router.navigateByUrl("/ideas/" + _this.idea.id);
        });
    };
    MergeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.ideaService.getModification(params.ideaId, params.modificationId); })
            .subscribe(function (modification) {
            _this.modification = modification;
            _this.idea = modification.idea;
            _this.updatedIdea = Object.assign({}, _this.idea);
            _this.ideaService.getStatesForIdea(_this.idea).then(function (states) {
                _this.currentState = states[states.length - 1];
                _this.hasState = true;
            });
            _this.ideaService.getAdditionsForModification(_this.idea, _this.modification).then(function (additions) {
                _this.modification.additions = additions;
                _this.hasAdditions = additions.length > 0;
            });
        });
    };
    return MergeComponent;
}());
MergeComponent = __decorate([
    core_1.Component({
        encapsulation: core_1.ViewEncapsulation.None,
        moduleId: module.id,
        styleUrls: ['merge.component.css'],
        templateUrl: 'merge.component.html'
    }),
    __metadata("design:paramtypes", [index_2.IdeaService,
        router_1.ActivatedRoute,
        router_1.Router])
], MergeComponent);
exports.MergeComponent = MergeComponent;
//# sourceMappingURL=merge.component.js.map