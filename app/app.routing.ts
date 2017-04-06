﻿import { Routes, RouterModule } from '@angular/router';
import { NgModule }             from '@angular/core';

import { DashboardComponent, IdeasComponent, IdeaDetailComponent, IdeaEditComponent, IdeaAddComponent, IdeaAddContributionComponent }   from './_directives/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { AuthGuard, IdeaOwnerAuthGuard } from './_guards/index';

const appRoutes: Routes = [
    {
      path: 'dashboard',
      component: DashboardComponent,
    },
    {
      path: 'detail/:_id',
      component: IdeaDetailComponent
    },
    {
      path: 'idea-edit/:_id',
      component: IdeaEditComponent, canActivate: [IdeaOwnerAuthGuard]
    },
    {
      path: 'idea-add',
      component: IdeaAddComponent, canActivate: [AuthGuard]
    },
    {
      path: 'idea-add-contribution/:_id',
      component: IdeaAddContributionComponent, canActivate: [AuthGuard]
    },
    {
      path: 'ideas',
      component: IdeasComponent,
      pathMatch: 'full'
    },
    {
      path: 'login',
      component: LoginComponent
    },
    {
      path: 'register',
      component: RegisterComponent
    },

    // otherwise redirect to home
    { path: '**', redirectTo: 'ideas' }
];

export const routing = RouterModule.forRoot(appRoutes);

export class AppRoutingModule {}
