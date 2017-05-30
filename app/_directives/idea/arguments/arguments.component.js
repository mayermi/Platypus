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
var index_1 = require("../../../_models/index");
var index_2 = require("../../../_services/index");
var router_2 = require("@angular/router");
var ArgumentsComponent = (function () {
    function ArgumentsComponent(ideaService, route, location, router) {
        this.ideaService = ideaService;
        this.route = route;
        this.location = location;
        this.router = router;
        this.addModificationVisible = false;
        this.argumentsIsVisible = false;
    }
    ArgumentsComponent.prototype.ngOnInit = function () {
    };
    return ArgumentsComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", index_1.Idea)
], ArgumentsComponent.prototype, "idea", void 0);
ArgumentsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'arguments',
        templateUrl: 'arguments.component.html',
    }),
    __metadata("design:paramtypes", [index_2.IdeaService,
        router_1.ActivatedRoute,
        common_1.Location,
        router_2.Router])
], ArgumentsComponent);
exports.ArgumentsComponent = ArgumentsComponent;
//# sourceMappingURL=arguments.component.js.map