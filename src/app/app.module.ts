import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './guards/auth.guard';
import { CookieService, CookieOptions } from 'angular2-cookie/core';
import { ApiService, EventService, CandidateService } from './services/index';
import { TOASTR_TOKEN, JQ_TOKEN, Toastr } from "./common/index";

let toastr : Toastr = window['toastr'];
let jQuery : Object = window['$'];

export function cookieServiceFactory() {
  return new CookieService();
}

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    HomeModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent,
  ],
  providers: [
    ApiService,
    AuthGuard,
    { provide: CookieService, useFactory: cookieServiceFactory },
    { provide: TOASTR_TOKEN, useValue: toastr },
    { provide: JQ_TOKEN, useValue: jQuery },
    EventService,
    CandidateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { toastr: any; }
