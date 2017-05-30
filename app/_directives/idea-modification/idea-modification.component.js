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
var index_1 = require("../../_models/index");
var IdeaModificationComponent = (function () {
    function IdeaModificationComponent(router) {
        this.router = router;
    }
    IdeaModificationComponent.prototype.goToIdea = function () {
        this.router.navigateByUrl("/ideas/" + this.idea.id);
    };
    return IdeaModificationComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", index_1.Idea)
], IdeaModificationComponent.prototype, "idea", void 0);
IdeaModificationComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        styleUrls: ['idea-modification.component.css'],
        templateUrl: 'idea-modification.component.html',
    }),
    __metadata("design:paramtypes", [router_1.Router])
], IdeaModificationComponent);
exports.IdeaModificationComponent = IdeaModificationComponent;
//# sourceMappingURL=idea-modification.component.js.map