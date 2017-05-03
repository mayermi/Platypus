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
  HomeComponent,
  IdeaTeaserComponent,
  NavigationComponent,

  AlertComponent,
  IdeasComponent,
  IdeaDetailComponent,
  IdeaEditComponent,
  IdeaAddComponent,
  HowItWorksComponent,
  IdeaAddModificationComponent,
  IdeaSearchComponent,
  ArgumentsComponent,
  ModificationDetailComponent,
} from './_directives/index';
import { AuthGuard, IdeaOwnerAuthGuard } from './_guards/index';
import { AlertService, AuthenticationService, UserService, IdeaService } from './_services/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import {APIService} from "./_services/apiservice";

//import 'hammerjs';

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
        HomeComponent,
        IdeaTeaserComponent,
        NavigationComponent,

        AppComponent,
        AlertComponent,
        LoginComponent,
        RegisterComponent,
        IdeaDetailComponent,
        IdeaEditComponent,
        IdeaAddComponent,
        IdeaAddModificationComponent,
        IdeasComponent,
        IdeaSearchComponent,
        ArgumentsComponent,
        HowItWorksComponent,
        ModificationDetailComponent,
    ],
    providers: [
        AuthGuard,
        IdeaOwnerAuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        IdeaService,
        APIService,

        // providers used to create fake backend
        // fakeBackendProvider,
        MockBackend,
        BaseRequestOptions
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
