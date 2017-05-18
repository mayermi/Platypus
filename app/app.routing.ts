import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import {
  HomeComponent,
  IdeaComponent,
  IdeasComponent,
  LoginComponent,
  NewIdeaComponent,
  SignupComponent,
  RulesAndEtiquetteComponent,

  IdeaEditComponent,
} from './_directives/index';
import { AuthGuard, IdeaOwnerAuthGuard } from './_guards/index';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  }, {
    path: 'idea/:id',
    component: IdeaComponent
  }, {
    path: 'ideas',
    component: IdeasComponent
  }, {
    path: 'ideas/new',
    component: NewIdeaComponent,
    canActivate: [AuthGuard]
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


  {
    path: 'idea-edit/:_id',
    component: IdeaEditComponent,
    canActivate: [IdeaOwnerAuthGuard]
  },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);

export class AppRoutingModule {}
