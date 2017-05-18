import './rxjs-extensions';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

// used to create fake backend
// import { fakeBackendProvider } from './_helpers/index';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

import { AppComponent }  from './app.component';
import { routing }        from './app.routing';

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
  ModificationComponent,
  NavigationComponent,
  NewIdeaComponent,
  ReactionsComponent,
  RulesAndEtiquetteComponent,
  SignupComponent,

  IdeaEditComponent,
  ArgumentsComponent,
} from './_directives/index';
import { AuthGuard, IdeaOwnerAuthGuard } from './_guards/index';
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
    NoopAnimationsModule,
    FormsModule,
    HttpModule,
    routing,
    MaterialModule
  ],
  declarations: [
    AddBlockControlsComponent,
    AdditionComponent,
    CustomButtonComponent,
    HomeComponent,
    IdeaComponent,
    IdeasComponent,
    IdeaTeaserComponent,
    InputBlockComponent,
    LoginComponent,
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
    APIService,

    // providers used to create fake backend
    // fakeBackendProvider,
    MockBackend,
    BaseRequestOptions
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }
