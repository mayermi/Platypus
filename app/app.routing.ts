import { Routes, RouterModule } from '@angular/router';
import { NgModule }             from '@angular/core';

import { DashboardComponent, HeroesComponent, HeroDetailComponent }   from './_directives/index';
import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { AuthGuard } from './_guards/index';

const appRoutes: Routes = [
    {
      path: '',
      component: HomeComponent,
      pathMatch: 'full'
    },
    {
      path: 'dashboard',
      component: DashboardComponent
    },
    {
      path: 'detail/:id',
      component: HeroDetailComponent, canActivate: [AuthGuard]
    },
    {
      path: 'heroes',
      component: HeroesComponent
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
    { path: '**', redirectTo: '' }
];

// @NgModule({
//   imports: [ RouterModule.forRoot(appRoutes) ],
//   exports: [ RouterModule]
// })
export const routing = RouterModule.forRoot(appRoutes);

export class AppRoutingModule {}
