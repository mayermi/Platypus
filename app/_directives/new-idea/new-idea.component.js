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
var index_1 = require('../../_models/index');
var index_2 = require('../../_services/index');
var NewIdeaComponent = (function () {
    function NewIdeaComponent(ideaService, router) {
        this.ideaService = ideaService;
        this.router = router;
        this.categories = [
            {
                value: 'economical',
                checked: false,
            }, {
                value: 'environmental',
                checked: false,
            }, {
                value: 'political',
                checked: false,
            }, {
                value: 'social',
                checked: false,
            }, {
                value: 'technological',
                checked: false,
            }
        ];
        this.idea = new index_1.Idea();
        this.isSaving = false;
    }
    NewIdeaComponent.prototype.save = function () {
        var _this = this;
        this.isSaving = true;
        // TODO trim inputs
        this.idea.categories = this.categories
            .filter(function (category) { return category.checked; })
            .map(function (category) { return category.value; });
        this.ideaService.create(this.idea)
            .then(function (idea) {
            _this.isSaving = false;
            _this.router.navigateByUrl("/ideas/" + idea.id);
        });
    };
    NewIdeaComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            styleUrls: ['new-idea.component.css'],
            templateUrl: 'new-idea.component.html'
        }), 
        __metadata('design:paramtypes', [index_2.IdeaService, router_1.Router])
    ], NewIdeaComponent);
    return NewIdeaComponent;
}());
exports.NewIdeaComponent = NewIdeaComponent;
//# sourceMappingURL=new-idea.component.js.map