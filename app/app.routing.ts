import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import {
  HistoryComponent,
  HomeComponent,
  IdeaComponent,
  IdeasComponent,
  MergeComponent,
  ModificationComponent,
  LoginComponent,
  NewIdeaComponent,
  SignupComponent,
  RulesAndEtiquetteComponent
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
    path: 'rules-and-etiquette',
    component: RulesAndEtiquetteComponent
  }, {
    path: 'signup',
    component: SignupComponent
  }, {
    path: '**',
    redirectTo: '' // redirect unknown pages to homepage
  }
]);

export class AppRoutingModule {}
