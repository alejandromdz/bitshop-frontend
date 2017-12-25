import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
// material
import {
  MatButtonModule,
  MatMenuModule,
  MatIconModule,
  MatToolbarModule,
  MatTooltipModule,
  MatCardModule,
  MatInputModule,
  MatIconRegistry,
  MatProgressSpinnerModule,
  MatListModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './routing/app-routing.module';
import {
  DashboardComponent,
  JumbotronComponent,
  LandingComponent,
  LoginComponent,
  PageNotFoundComponent,
  PaymentsComponent,
  ProductComponent,
  ProfileComponent,
  PurchasesComponent,
  SidemenuComponent,
  SignUpComponent,
  SpacerComponent,
  TopnavComponent
} from './component';


import {
  ApiService,
  AuthService,
  UserService,
  FooService,
  ConfigService
} from './service';

export function initUserFactory(userService: UserService) {
    return () => userService.initUser();
}

@NgModule({
  declarations: [
    // './component'
    DashboardComponent,
    JumbotronComponent,
    LandingComponent,
    LoginComponent,
    PageNotFoundComponent,
    PaymentsComponent,
    ProductComponent,
    ProfileComponent,
    PurchasesComponent,
    SidemenuComponent,
    SignUpComponent,
    SpacerComponent,
    TopnavComponent,

    AppComponent,
    
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    MatMenuModule,
    MatTooltipModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatListModule,
    FlexLayoutModule
  ],
  providers: [
    FooService,
    AuthService,
    ApiService,
    UserService,
    ConfigService,
    MatIconRegistry,
    {
      'provide': APP_INITIALIZER,
      'useFactory': initUserFactory,
      'deps': [UserService],
      'multi': true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
