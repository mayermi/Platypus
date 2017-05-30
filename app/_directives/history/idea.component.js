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
var IdeaComponent = (function () {
    function IdeaComponent(ideaService, modificationService, route) {
        this.ideaService = ideaService;
        this.modificationService = modificationService;
        this.route = route;
        this.hasLoadedModifications = false;
        this.hasOpenModifications = false;
        this.isModificationFormVisible = false;
        this.modification = new index_1.Modification();
    }
    IdeaComponent.prototype.closeModificationForm = function () {
        this.isModificationFormVisible = false;
    };
    IdeaComponent.prototype.openModificationForm = function () {
        this.isModificationFormVisible = true;
    };
    IdeaComponent.prototype.saveModification = function () {
        var _this = this;
        this.ideaService.createModificationForIdea(this.idea, this.modification)
            .then(function () {
            _this.closeModificationForm();
            _this.hasLoadedModifications = _this.hasOpenModifications = true;
            _this.openModifications.push();
        });
    };
    IdeaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.ideaService.getIdea(params.id); })
            .subscribe(function (idea) {
            _this.idea = idea;
            _this.createdAt = (new Date(idea.createdAt)).toLocaleString();
            _this.updatedAt = (new Date(idea.updatedAt)).toLocaleString();
            _this.ideaService.getModificationsForIdea(idea).then(function (modifications) {
                idea.modifications = modifications;
                _this.hasLoadedModifications = true;
                _this.openModifications = modifications.filter(function (modification) { return !modification.isMerged; });
                _this.hasOpenModifications = _this.openModifications.length > 0;
            });
        });
    };
    return IdeaComponent;
}());
IdeaComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'idea.component.html',
        styleUrls: ['idea.component.css']
    }),
    __metadata("design:paramtypes", [index_2.IdeaService,
        index_2.ModificationService,
        router_1.ActivatedRoute])
], IdeaComponent);
exports.IdeaComponent = IdeaComponent;
//# sourceMappingURL=idea.component.js.map