"use strict";
var router_1 = require('@angular/router');
var index_1 = require('./_directives/index');
var index_2 = require('./_guards/index');
exports.routing = router_1.RouterModule.forRoot([
    {
        path: '',
        component: index_1.HomeComponent,
        pathMatch: 'full'
    }, {
        path: 'admin',
        component: index_1.AdminComponent
    }, {
        path: 'ideas/new',
        component: index_1.NewIdeaComponent,
        canActivate: [index_2.AuthGuard]
    }, {
        path: 'ideas/:id',
        component: index_1.IdeaComponent
    }, {
        path: 'ideas/:id/history',
        component: index_1.HistoryComponent
    }, {
        path: 'ideas/:ideaId/modifications/:modificationId',
        component: index_1.ModificationComponent
    }, {
        path: 'ideas/:ideaId/modifications/:modificationId/merge',
        component: index_1.MergeComponent
    }, {
        path: 'ideas',
        component: index_1.IdeasComponent
    }, {
        path: 'login',
        component: index_1.LoginComponent
    }, {
        path: 'how-it-works',
        component: index_1.HowItWorksComponent
    }, {
        path: 'signup',
        component: index_1.SignupComponent
    }, {
        path: '**',
        redirectTo: '' // redirect unknown pages to homepage
    }
]);
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app.routing.js.map