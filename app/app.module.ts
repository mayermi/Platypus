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
  AdditionTeaserComponent,
  AdminComponent,
  CustomButtonComponent,
  HistoryComponent,
  HomeComponent,
  HowItWorksComponent,
  IdeaComponent,
  IdeasComponent,
  IdeaRowComponent,
  IdeaTeaserComponent,
  InputBlockComponent,
  LoginComponent,
  MarkdownComponent,
  MergeComponent,
  ModificationComponent,
  ModificationRowComponent,
  ModificationTeaserComponent,
  NavigationComponent,
  NewIdeaComponent,
  ReactionsComponent,
  SignupComponent,

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
    AdditionTeaserComponent,
    AdminComponent,
    CustomButtonComponent,
    HistoryComponent,
    HomeComponent,
    IdeaComponent,
    IdeasComponent,
    IdeaRowComponent,
    IdeaTeaserComponent,
    InputBlockComponent,
    LoginComponent,
    MarkdownComponent,
    MergeComponent,
    ModificationComponent,
    ModificationRowComponent,
    ModificationTeaserComponent,
    NavigationComponent,
    NewIdeaComponent,
    ReactionsComponent,
    SignupComponent,

    AppComponent,
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
