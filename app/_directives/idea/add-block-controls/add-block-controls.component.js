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
var AddBlockControlsComponent = (function () {
    function AddBlockControlsComponent() {
        this.onCancel = new core_1.EventEmitter();
        this.onSave = new core_1.EventEmitter();
        this.isSaving = false;
    }
    AddBlockControlsComponent.prototype.cancel = function () {
        this.onCancel.emit();
    };
    AddBlockControlsComponent.prototype.save = function () {
        this.isSaving = true;
        this.onSave.emit();
    };
    return AddBlockControlsComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], AddBlockControlsComponent.prototype, "onCancel", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], AddBlockControlsComponent.prototype, "onSave", void 0);
AddBlockControlsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'add-block-controls',
        styleUrls: ['add-block-controls.component.css'],
        templateUrl: 'add-block-controls.component.html'
    }),
    __metadata("design:paramtypes", [])
], AddBlockControlsComponent);
exports.AddBlockControlsComponent = AddBlockControlsComponent;
//# sourceMappingURL=add-block-controls.component.js.map