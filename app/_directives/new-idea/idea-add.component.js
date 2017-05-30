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
require("rxjs/add/operator/switchMap");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var index_1 = require("../../_services/index");
// add(title: string): void {
//   title = title.trim();
//   if (!title) { return; }
//   this.ideaService.create(title).then(idea => {
//     this.ideas.push(idea);
//     // this.selectedIdea = null;
//   });
// }
var IdeaAddComponent = (function () {
    // ideaService = IdeaService;
    function IdeaAddComponent(ideaService, route, location) {
        this.ideaService = ideaService;
        this.route = route;
        this.location = location;
    }
    IdeaAddComponent.prototype.add = function () {
        var _this = this;
        // title = title.trim();
        // if (!title) { return; }
        this.ideaService.create(this.title)
            .then(function (idea) { _this.ideas.push(idea); });
    };
    IdeaAddComponent.prototype.ngOnInit = function () {
    };
    // !!! Going back too far could take us out of the application. That's acceptable in a demo. We'd guard against it in a real application, perhaps with the CanDeactivate guard.
    IdeaAddComponent.prototype.goBack = function () {
        this.location.back();
    };
    return IdeaAddComponent;
}());
IdeaAddComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'idea-add',
        templateUrl: 'idea-add.component.html',
    }),
    __metadata("design:paramtypes", [index_1.IdeaService,
        router_1.ActivatedRoute,
        common_1.Location])
], IdeaAddComponent);
exports.IdeaAddComponent = IdeaAddComponent;
//# sourceMappingURL=idea-add.component.js.map