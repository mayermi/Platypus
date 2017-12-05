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
var index_1 = require('./index');
var IdeaService = (function () {
    function IdeaService(apiService) {
        this.apiService = apiService;
    }
    IdeaService.prototype.getIdeas = function () {
        return this.apiService.get('/ideas')
            .then(function (ideas) { return ideas; });
    };
    IdeaService.prototype.getIdea = function (id) {
        return this.apiService.get("/ideas/" + id)
            .then(function (idea) { return idea; });
    };
    IdeaService.prototype.getTopIdeas = function () {
        return this.apiService.get('/ideas')
            .then(function (ideas) { return ideas.reverse().slice(0, 3); });
    };
    IdeaService.prototype.delete = function (idea) {
        return this.apiService.delete("/ideas/" + idea.id)
            .then(function () { return null; });
    };
    IdeaService.prototype.create = function (idea) {
        return this.apiService.post('/ideas', idea)
            .then(function (idea) { return idea; });
    };
    IdeaService.prototype.updateIdeaWithModification = function (idea, modification) {
        return this.apiService.put("/ideas/" + idea.id, { idea: idea, modification: modification })
            .then(function (idea) { return idea; });
    };
    /* histories */
    IdeaService.prototype.getHistoriesForIdea = function (idea) {
        return this.apiService.get("/ideas/" + idea.id + "/histories")
            .then(function (histories) { return histories; });
    };
    IdeaService.prototype.getStatesForIdea = function (idea) {
        return this.apiService.get("/ideas/" + idea.id + "/states")
            .then(function (states) { return states; });
    };
    IdeaService.prototype.setPhaseForIdea = function (idea, phase) {
        return this.apiService.post("/ideas/" + idea.id + "/states", { phase: phase })
            .then(function (state) { return state; });
    };
    /* modifications */
    IdeaService.prototype.getModification = function (ideaId, modificationId) {
        console.log({ ideaId: ideaId, modificationId: modificationId });
        return this.apiService.get("/ideas/" + ideaId + "/modifications/" + modificationId)
            .then(function (modification) { return modification; });
    };
    IdeaService.prototype.getModificationsForIdea = function (idea) {
        return this.apiService.get("/ideas/" + idea.id + "/modifications")
            .then(function (modifications) { return modifications; });
    };
    IdeaService.prototype.createModificationForIdea = function (idea, modification) {
        return this.apiService.post("/ideas/" + idea.id + "/modifications", modification)
            .then(function (modification) { return modification; });
    };
    IdeaService.prototype.setModificationMergeable = function (idea, modification) {
        return this.apiService.post("/ideas/" + idea.id + "/modifications/" + modification.id + "/setMergeable")
            .then(function (modification) { return modification; });
    };
    /* additions */
    IdeaService.prototype.getAdditionsForModification = function (idea, modification) {
        return this.apiService.get("/ideas/" + idea.id + "/modifications/" + modification.id + "/additions")
            .then(function (additions) { return additions; });
    };
    IdeaService.prototype.createAdditionForModification = function (idea, modification, addition) {
        return this.apiService.post("/ideas/" + idea.id + "/modifications/" + modification.id + "/additions", addition)
            .then(function (addition) { return addition; });
    };
    /* reactions */
    IdeaService.prototype.getReactionsForModification = function (idea, modification) {
        return this.apiService.get("/ideas/" + idea.id + "/modifications/" + modification.id + "/reactions")
            .then(function (reactions) { return reactions; });
    };
    IdeaService.prototype.createReactionForModification = function (idea, modification, reaction) {
        return this.apiService.post("/ideas/" + idea.id + "/modifications/" + modification.id + "/reactions", reaction)
            .then(function (reaction) {
            // replace reaction if one with this ID already exists in list, push otherwise
            var existingReaction = modification.reactions.find(function (existingReaction) { return existingReaction.id === reaction.id; });
            if (existingReaction) {
                modification.reactions.splice(modification.reactions.indexOf(existingReaction), 1, reaction);
            }
            else {
                modification.reactions.push(reaction);
            }
            return reaction;
        });
    };
    IdeaService.prototype.deleteReactionForModification = function (idea, modification) {
        return this.apiService.delete("/ideas/" + idea.id + "/modifications/" + modification.id + "/reactions")
            .then(function (reaction) {
            // replace reaction if one with this ID already exists in list, push otherwise
            var previousReaction = modification.reactions.find(function (previousReaction) { return previousReaction.id === reaction.id; });
            modification.reactions.splice(modification.reactions.indexOf(previousReaction), 1);
            return reaction;
        });
    };
    IdeaService.prototype.getReactionsForAddition = function (idea, modification, addition) {
        return this.apiService.get("/ideas/" + idea.id + "/modifications/" + modification.id + "/additions/" + addition.id + "/reactions")
            .then(function (response) { return response; });
    };
    IdeaService.prototype.createReactionForAddition = function (idea, modification, addition, reaction) {
        return this.apiService.post("/ideas/" + idea.id + "/modifications/" + modification.id + "/additions/" + addition.id + "/reactions", reaction)
            .then(function (reaction) {
            // replace reaction if one with this ID already exists in list, push otherwise
            var existingReaction = addition.reactions.find(function (existingReaction) { return existingReaction.id === reaction.id; });
            if (existingReaction) {
                addition.reactions.splice(addition.reactions.indexOf(existingReaction), 1, reaction);
            }
            else {
                addition.reactions.push(reaction);
            }
            return reaction;
        });
    };
    IdeaService.prototype.deleteReactionForAddition = function (idea, modification, addition) {
        return this.apiService.delete("/ideas/" + idea.id + "/modifications/" + modification.id + "/additions/" + addition.id + "/reactions")
            .then(function (reaction) {
            // replace reaction if one with this ID already exists in list, push otherwise
            var previousReaction = addition.reactions.find(function (previousReaction) { return previousReaction.id === reaction.id; });
            addition.reactions.splice(addition.reactions.indexOf(previousReaction), 1);
            return reaction;
        });
    };
    IdeaService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [index_1.APIService])
    ], IdeaService);
    return IdeaService;
}());
exports.IdeaService = IdeaService;
//# sourceMappingURL=idea.service.js.map