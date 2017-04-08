﻿import './rxjs-extensions';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

// used to create fake backend
// import { fakeBackendProvider } from './_helpers/index';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

import { AppComponent }  from './app.component';
import { routing }        from './app.routing';

import { AlertComponent, DashboardComponent, IdeasComponent, IdeaDetailComponent, IdeaEditComponent, IdeaAddComponent, IdeaAddModificationComponent, IdeaSearchComponent } from './_directives/index';
import { AuthGuard, IdeaOwnerAuthGuard } from './_guards/index';
import { AlertService, AuthenticationService, UserService, IdeaService } from './_services/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';

// import 'hammerjs';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing,
        MaterialModule
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        LoginComponent,
        RegisterComponent,
        DashboardComponent,
        IdeaDetailComponent,
        IdeaEditComponent,
        IdeaAddComponent,
        IdeaAddModificationComponent,
        IdeasComponent,
        IdeaSearchComponent
    ],
    providers: [
        AuthGuard,
        IdeaOwnerAuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        IdeaService,

        // providers used to create fake backend
        // fakeBackendProvider,
        MockBackend,
        BaseRequestOptions
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }