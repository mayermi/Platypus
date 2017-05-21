import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import {
  HomeComponent,
  IdeaComponent,
  IdeasComponent,
  ModificationComponent,
  LoginComponent,
  NewIdeaComponent,
  SignupComponent,
  RulesAndEtiquetteComponent,

  IdeaEditComponent,
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
    path: 'ideas/:ideaId/modifications/:modificationId',
    component: ModificationComponent
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
  },

  // {
  //   path: 'idea-edit/:_id',
  //   component: IdeaEditComponent,
  //   canActivate: [IdeaOwnerAuthGuard]
  // },

  // otherwise redirect to home
  {
    path: '**',
    redirectTo: ''
  }
]);

export class AppRoutingModule {}
