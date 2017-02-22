import { Routes, RouterModule } from '@angular/router';
import { NgModule }             from '@angular/core';

import { DashboardComponent, IdeasComponent, IdeaDetailComponent, IdeaEditComponent, IdeaAddComponent }   from './_directives/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { AuthGuard } from './_guards/index';

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
      component: IdeaEditComponent, canActivate: [AuthGuard]
    },
    {
      path: 'idea-add/:id',
      component: IdeaAddComponent, canActivate: [AuthGuard]
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
