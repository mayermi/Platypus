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
require('rxjs/add/operator/switchMap');
var diff = require('diff');
var index_1 = require('../../_services/index');
var index_2 = require('../../_helpers/index');
var HistoryComponent = (function () {
    function HistoryComponent(ideaService, route) {
        this.ideaService = ideaService;
        this.route = route;
        this.events = [];
        this.hasLoadedEvents = false;
        this.sortedEvents = [];
    }
    HistoryComponent.prototype.getDiffForHistory = function (history, attribute) {
        if (attribute === void 0) { attribute = 'description'; }
        var version = history.version;
        var nextHistory = this.idea.histories.find(function (history) { return history.version === version + 1; }) || this.idea;
        return diff.diffWords(history[attribute], nextHistory[attribute]).map(function (entry) {
            if (entry.removed) {
                return "~~" + entry.value.trim() + "~~";
            }
            if (entry.added) {
                return "<span class=\"md-added\">" + entry.value + "</span>";
            }
            return entry.value;
        }).join('');
    };
    HistoryComponent.prototype.getFormattedDate = function (date) {
        return index_2.formatDate.absolute(date);
    };
    HistoryComponent.prototype.getRelativeDate = function (date) {
        return index_2.formatDate.relative(date);
    };
    HistoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.ideaService.getIdea(params.id); })
            .subscribe(function (idea) {
            _this.idea = idea;
            _this.ideaService.getHistoriesForIdea(idea).then(function (histories) {
                _this.idea.histories = histories.reverse();
                _this.events = _this.events.concat(histories).sort(function (eventA, eventB) {
                    return (new Date(eventB.createdAt)).valueOf() - (new Date(eventA.createdAt)).valueOf();
                });
                _this.hasLoadedEvents = true;
            });
            _this.ideaService.getStatesForIdea(idea).then(function (states) {
                _this.idea.states = states;
                _this.events = _this.events.concat(states).sort(function (eventA, eventB) {
                    return (new Date(eventB.createdAt)).valueOf() - (new Date(eventA.createdAt)).valueOf();
                });
                _this.hasLoadedEvents = true;
            });
        });
    };
    HistoryComponent = __decorate([
        core_1.Component({
            encapsulation: core_1.ViewEncapsulation.None,
            moduleId: module.id,
            templateUrl: 'history.component.html',
            styleUrls: ['history.component.css']
        }), 
        __metadata('design:paramtypes', [index_1.IdeaService, router_1.ActivatedRoute])
    ], HistoryComponent);
    return HistoryComponent;
}());
exports.HistoryComponent = HistoryComponent;
//# sourceMappingURL=history.component.js.map