import {NgModule} from '@angular/core';
import { LoginComponent } from './login/login.component';
import {CommonModule} from '@angular/common';
import {AuthRoutingModule} from './auth-routing.module';
import { RegistrationComponent } from './registration/registration.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent
  ],
   imports: [
     CommonModule,
     AuthRoutingModule,
     ReactiveFormsModule,
     FormsModule
   ]
})

export class AuthModule {

}
