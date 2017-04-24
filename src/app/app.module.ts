import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { AppConfig } from './app.config';

//import { AlertComponent } from './_directives/index';
//import { AuthGuard } from './_guards/index';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
//import { HomeComponent } from './home/index';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent
    ],
    providers: [
        AppConfig,
        UserService,
        AuthService
    ],

    bootstrap: [AppComponent]
})

export class AppModule { }
