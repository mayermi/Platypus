import { Routes, RouterModule } from '@angular/router';
import { NgModule }             from '@angular/core';

import { DashboardComponent, IdeasComponent, IdeaDetailComponent, IdeaEditComponent }   from './_directives/index';
// import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { AuthGuard } from './_guards/index';

const appRoutes: Routes = [
    {
      path: 'dashboard',
      component: DashboardComponent, canActivate: [AuthGuard],
      pathMatch: 'full'
    },
    {
      path: 'detail/:id',
      component: IdeaDetailComponent
    },
    {
      path: 'idea-edit',
      component: IdeaEditComponent
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
