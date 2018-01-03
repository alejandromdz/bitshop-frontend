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
import { NbMenuInternalService } from '@nebular/theme/components/menu/menu.service';

import * as Components from './component'
import * as Services from './service'

export function initUserFactory(userService: Services.UserService) {
    return () => userService.initUser();
}

@NgModule({
  declarations: [
    //...Components
    ...Object.keys(Components).map((k) => Components[k]),
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
    //...Services
    ...Object.keys(Services).map((k) => Services[k]),
    NbSidebarService,
    NbMenuInternalService,
    NbMenuService,
    MatIconRegistry,
    {
      'provide': APP_INITIALIZER,
      'useFactory': initUserFactory,
      'deps': [Services.UserService],
      'multi': true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
