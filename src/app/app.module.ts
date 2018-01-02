import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import {
  MatButtonModule,
  MatMenuModule,
  MatIconModule,
  MatToolbarModule,
  MatTooltipModule,
  MatCardModule,
  MatChipsModule,
  MatInputModule,
  MatIconRegistry,
  MatProgressSpinnerModule,
  MatListModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { 
  NbThemeModule,
  NbSidebarModule, 
  NbLayoutModule, 
  NbSidebarService,
  NbMenuService,
  NbMenuModule,
  NbCardModule,
  NbCheckboxModule
  
} from '@nebular/theme';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './routing/app-routing.module';
import {
  DashboardComponent,
  JumbotronComponent,
  LandingComponent,
  LoginComponent,
  PageNotFoundComponent,
  PaymentsComponent,
  PublicationComponent,
  ProfileComponent,
  PurchasesComponent,
  SearchMain,
  SidemenuComponent,
  SignUpComponent,
  SpacerComponent,
  TopnavComponent,
  PaymentDashboardComponent,
  BrowseDashboardComponent,
  PurchaseDashboardComponent,
  ProfileDashboardComponent,
  MypublicationsDashboardComponent,
  NewpublicationDashboardComponent,
  S3UploadComponent,
  S3UploadDirective
} from './component';
import {
  ApiService,
  AuthService,
  UserService,
  ConfigService,
  StateService,
  S3UploadService
} from './service';
import { NbMenuInternalService } from '@nebular/theme/components/menu/menu.service';

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
    PublicationComponent,
    ProfileComponent,
    PurchasesComponent,
    SearchMain,
    SidemenuComponent,
    SignUpComponent,
    SpacerComponent,
    TopnavComponent,
    PaymentDashboardComponent,
    BrowseDashboardComponent,
    PurchaseDashboardComponent,
    ProfileDashboardComponent,
    MypublicationsDashboardComponent,
    NewpublicationDashboardComponent,
    S3UploadComponent,
    S3UploadDirective,

    AppComponent,
    
  ],
  
  imports: [
    NgbModule.forRoot(),
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbSidebarModule,
    NbMenuModule,
    NbCardModule,
    NbCheckboxModule,
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
    MatChipsModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatListModule,
    FlexLayoutModule
  ],
  providers: [
    NbSidebarService,
    NbMenuInternalService,
    NbMenuService,
    AuthService,
    ApiService,
    UserService,
    ConfigService,
    StateService,
    S3UploadService,

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
