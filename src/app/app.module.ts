import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {HttpModule} from "@angular/http";
import {AuthModule} from "./auth/auth.module";
import {AppRoutingModule} from "./app-routing.module";
import {UsersService} from "./shared/services/users.service";
import {AuthService} from "./shared/services/auth.service";
import {SystemModule} from "./system/system.module";
import {BillService} from "./shared/services/bill.service";
import {AuthGuard} from "./shared/services/auth.guard";
import {NotFoundComponent} from "./shared/components/not-found/not-found.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";






@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AuthModule,
    AppRoutingModule,
    SystemModule,
    BrowserAnimationsModule
  ],
  providers: [UsersService, AuthService, BillService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
