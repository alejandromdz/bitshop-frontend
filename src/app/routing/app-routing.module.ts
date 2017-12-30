import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
  SearchMain,
  SidemenuComponent,
  SignUpComponent,
  SpacerComponent,
  TopnavComponent,
  PaymentDashboardComponent,
  ProductDashboardComponent,
  PurchaseDashboardComponent
} from 'app/component';

import { AuthGuardService } from 'app/service/auth-guard.service'



const appRoutes: Routes = [
  { path: '', component: LandingComponent ,canActivate: [AuthGuardService]},
  { path: 'login', component: LoginComponent ,canActivate: [AuthGuardService]},
  { path: 'signup', component: SignUpComponent ,canActivate: [AuthGuardService]},
  { path: 'profile', component: ProfileComponent ,canActivate: [AuthGuardService]}, /* work in progress */
  
  {
    path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuardService],
    children: [
      //{ path:'',redirectTo:'myproducts',pathMatch: 'full'},
      { path: 'myproducts', component: ProductDashboardComponent  },
      { path: 'mypayments', component: PaymentDashboardComponent },
      { path: 'mypurchases', component: PurchaseDashboardComponent },
      
    ]
  },
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthGuardService
  ]
})
export class AppRoutingModule { }
