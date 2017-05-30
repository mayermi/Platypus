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
var ModificationRowComponent = (function () {
    function ModificationRowComponent(ideaService) {
        this.ideaService = ideaService;
    }
    ModificationRowComponent.prototype.setMergeable = function () {
        var _this = this;
        this.ideaService.setModificationMergeable(this.idea, this.modification).then(function (modification) {
            _this.modification = modification;
        });
    };
    ModificationRowComponent.prototype.getAbsoluteDate = function (date) {
        return index_3.formatDate.absolute(date);
    };
    ModificationRowComponent.prototype.getRelativeDate = function (date) {
        return index_3.formatDate.relative(date);
    };
    return ModificationRowComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", index_1.Idea)
], ModificationRowComponent.prototype, "idea", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", index_1.Modification)
], ModificationRowComponent.prototype, "modification", void 0);
ModificationRowComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'modification-row',
        styleUrls: ['modification-row.component.css'],
        templateUrl: 'modification-row.component.html'
    }),
    __metadata("design:paramtypes", [index_2.IdeaService])
], ModificationRowComponent);
exports.ModificationRowComponent = ModificationRowComponent;
//# sourceMappingURL=modification-row.component.js.map