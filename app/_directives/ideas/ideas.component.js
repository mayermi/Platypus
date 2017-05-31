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
var index_1 = require("../../_services/index");
var containsTerm = function (haystack, needle) {
    return haystack && haystack.toLowerCase().indexOf(needle.toLowerCase()) !== -1;
};
var IdeasComponent = (function () {
    function IdeasComponent(ideaService) {
        this.ideaService = ideaService;
    }
    IdeasComponent.prototype.search = function () {
        if (this.query.trim() === '') {
            this.filteredIdeas = this.ideas;
        }
        else {
            var queries_1 = this.query.replace(/\s+/g, ' ').split(' ');
            this.filteredIdeas = this.ideas.filter(function (idea) {
                return queries_1.map(function (term) {
                    return containsTerm(idea.title, term) ||
                        containsTerm(idea.description, term) ||
                        containsTerm(idea.location, term) ||
                        containsTerm(idea.reasoning, term);
                }).reduce(function (accumulator, wasTermFound) {
                    return accumulator && wasTermFound;
                }, true);
            });
        }
    };
    IdeasComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ideaService.getIdeas().then(function (ideas) {
            _this.ideas = _this.filteredIdeas = ideas.reverse();
        });
    };
    return IdeasComponent;
}());
IdeasComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        styleUrls: ['ideas.component.css'],
        templateUrl: 'ideas.component.html'
    }),
    __metadata("design:paramtypes", [index_1.IdeaService])
], IdeasComponent);
exports.IdeasComponent = IdeasComponent;
//# sourceMappingURL=ideas.component.js.map