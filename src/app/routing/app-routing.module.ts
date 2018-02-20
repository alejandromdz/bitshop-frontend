import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  DashboardComponent,
  LandingComponent,
  LoginComponent,
  PageNotFoundComponent,
  PaymentsComponent,
  PurchasesComponent,
  SignUpComponent,
  PaymentDashboardComponent,
  BrowseDashboardComponent,
  PurchaseDashboardComponent,
  ProfileDashboardComponent,
  MypublicationsDashboardComponent,
  NewpublicationDashboardComponent
} from 'app/component';

import { AuthGuardService } from 'app/service/auth-guard.service'



const appRoutes: Routes = [
  { path: '', component: LandingComponent ,canActivate: [AuthGuardService]},
  { path: 'login', component: LoginComponent ,canActivate: [AuthGuardService]},
  { path: 'signup', component: SignUpComponent ,canActivate: [AuthGuardService]},
  { path: 'logout', component: LandingComponent,canActivate:[AuthGuardService]},
  {
    path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuardService],
    children: [
      { path:'',redirectTo:'browse',pathMatch: 'full'},
      { path: 'browse', component: BrowseDashboardComponent  },
      { path: 'profile',component: ProfileDashboardComponent },
      { path: 'mypublications',component: MypublicationsDashboardComponent },
      { path: 'newpublication',component: NewpublicationDashboardComponent },
      { path: 'purchases', component: PurchaseDashboardComponent },
      { path: 'payments', component: PaymentDashboardComponent }
      
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
