import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import {
  AdminComponent,
  HistoryComponent,
  HomeComponent,
  HowItWorksComponent,
  IdeaComponent,
  IdeasComponent,
  LoginComponent,
  MergeComponent,
  ModificationComponent,
  NewIdeaComponent,
  SignupComponent
} from './_directives/index';

import {
  AuthGuard,
  IdeaOwnerAuthGuard
} from './_guards/index';

export const routing = RouterModule.forRoot([
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  }, {
    path: 'admin',
    component: AdminComponent
//    canActivate: [AdminGuard]
  }, {
    path: 'ideas/new',
    component: NewIdeaComponent,
    canActivate: [AuthGuard]
  }, {
    path: 'ideas/:id',
    component: IdeaComponent
  }, {
    path: 'ideas/:id/history',
    component: HistoryComponent
  }, {
    path: 'ideas/:ideaId/modifications/:modificationId',
    component: ModificationComponent
  }, {
    path: 'ideas/:ideaId/modifications/:modificationId/merge',
    component: MergeComponent
    //   canActivate: [IdeaOwnerAuthGuard]
  }, {
    path: 'ideas',
    component: IdeasComponent
  }, {
    path: 'login',
    component: LoginComponent
  }, {
    path: 'how-it-works',
    component: HowItWorksComponent
  }, {
    path: 'signup',
    component: SignupComponent
  }, {
    path: '**',
    redirectTo: '' // redirect unknown pages to homepage
  }
]);

export class AppRoutingModule {}
