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
require('./rxjs-extensions');
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var app_routing_1 = require('./app.routing');
var index_1 = require('./_directives/index');
var index_2 = require('./_guards/index');
var index_3 = require('./_services/index');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                app_routing_1.routing
            ],
            declarations: [
                index_1.AddBlockControlsComponent,
                index_1.AdditionComponent,
                index_1.AdditionTeaserComponent,
                index_1.AdminComponent,
                index_1.CustomButtonComponent,
                index_1.HistoryComponent,
                index_1.HomeComponent,
                index_1.IdeaComponent,
                index_1.IdeasComponent,
                index_1.IdeaRowComponent,
                index_1.IdeaTeaserComponent,
                index_1.InputBlockComponent,
                index_1.LoginComponent,
                index_1.MarkdownComponent,
                index_1.MergeComponent,
                index_1.ModificationComponent,
                index_1.ModificationRowComponent,
                index_1.ModificationTeaserComponent,
                index_1.NavigationComponent,
                index_1.NewIdeaComponent,
                index_1.ReactionsComponent,
                index_1.SignupComponent,
                app_component_1.AppComponent,
                index_1.ArgumentsComponent,
                index_1.HowItWorksComponent,
            ],
            providers: [
                index_3.AdditionService,
                index_3.ModificationService,
                index_2.AuthGuard,
                index_2.IdeaOwnerAuthGuard,
                index_3.AuthenticationService,
                index_3.UserService,
                index_3.IdeaService,
                index_3.APIService
            ],
            bootstrap: [
                app_component_1.AppComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map