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
      pathMatch: 'full'
    },
    {
      path: 'detail/:id',
      component: IdeaDetailComponent
    },
    {
      path: 'idea-edit/:id',
      component: IdeaEditComponent, canActivate: [IdeaOwnerAuthGuard]
    },
    {
      path: 'idea-add',
      component: IdeaAddComponent, canActivate: [AuthGuard]
    },
    {
      path: 'idea-add-contribution/:id',
      component: IdeaAddContributionComponent, canActivate: [AuthGuard]
    },
    {
      path: 'ideas',
      component: IdeasComponent
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
    { path: '**', redirectTo: 'dashboard' }
];

export const routing = RouterModule.forRoot(appRoutes);

export class AppRoutingModule {}
