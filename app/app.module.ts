import './rxjs-extensions';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { BaseRequestOptions } from '@angular/http';

import { AppComponent }  from './app.component';
import { routing } from './app.routing';

import {
  AddBlockControlsComponent,
  AdditionComponent,
  CustomButtonComponent,
  HomeComponent,
  HowItWorksComponent,
  IdeaComponent,
  IdeasComponent,
  IdeaTeaserComponent,
  InputBlockComponent,
  LoginComponent,
  MarkdownComponent,
  ModificationComponent,
  ModificationTeaserComponent,
  NavigationComponent,
  NewIdeaComponent,
  ReactionsComponent,
  RulesAndEtiquetteComponent,
  SignupComponent,

  IdeaEditComponent,
  ArgumentsComponent,
} from './_directives/index';

import {
  AuthGuard,
  IdeaOwnerAuthGuard
} from './_guards/index';

import {
  AdditionService,
  APIService,
  ModificationService,

  AuthenticationService,
  UserService,
  IdeaService
} from './_services/index';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  declarations: [
    AddBlockControlsComponent,
    AdditionComponent,
    CustomButtonComponent,
    HomeComponent,
    IdeaComponent,
    IdeasComponent,
    IdeaTeaserComponent,
    ModificationTeaserComponent,
    InputBlockComponent,
    LoginComponent,
    MarkdownComponent,
    ModificationComponent,
    NavigationComponent,
    NewIdeaComponent,
    ReactionsComponent,
    RulesAndEtiquetteComponent,
    SignupComponent,

    AppComponent,
    IdeaEditComponent,
    ArgumentsComponent,
    HowItWorksComponent,
  ],
  providers: [
    AdditionService,
    ModificationService,

    AuthGuard,
    IdeaOwnerAuthGuard,
    AuthenticationService,
    UserService,
    IdeaService,
    APIService
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule {}
