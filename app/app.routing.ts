import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import {
  HomeComponent,
  IdeaComponent,
  IdeasComponent,
  IdeaEditComponent,
  IdeaAddComponent
} from './_directives/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
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
  },

  {
    path: 'idea-edit/:_id',
    component: IdeaEditComponent, canActivate: [IdeaOwnerAuthGuard]
  },
  {
    path: 'idea-add',
    component: IdeaAddComponent, canActivate: [AuthGuard]
  },
  // {
  //   path: 'idea-add-modification/:_id',
  //   component: IdeaAddModificationComponent, canActivate: [AuthGuard]
  // },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);

export class AppRoutingModule {}
