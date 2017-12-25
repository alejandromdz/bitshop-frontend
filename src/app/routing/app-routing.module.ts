import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuardService } from '../service/auth-guard.service'

import { LandingComponent } from '../component/landing/landing.component';
import { PageNotFoundComponent } from '../component/page-not-found/page-not-found.component';
import { DashboardComponent } from '../component/dashboard/dashboard.component';

import { LoginComponent } from '../component/login/login.component';
import { SignUpComponent } from '../component/sign-up/sign-up.component';
import { ProfileComponent } from '../component/profile/profile.component';
import { ProductComponent } from '../component/products/products.component'
import { PaymentsComponent } from '../component/payments/payments.component';
import { PurchasesComponent } from '../component/purchases/purchases.component';


const appRoutes: Routes = [
  { path: '', component: LandingComponent ,canActivate: [AuthGuardService]},
  { path: 'login', component: LoginComponent ,canActivate: [AuthGuardService]},
  { path: 'signup', component: SignUpComponent ,canActivate: [AuthGuardService]},
  { path: 'profile', component: ProfileComponent ,canActivate: [AuthGuardService]}, /* work in progress */
  
  {
    path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuardService],
    children: [
      { path:'',redirectTo:'myproducts',pathMatch: 'full'},
      { path: 'myproducts', component: ProductComponent  },
      { path: 'mypayments', component: PaymentsComponent },
      { path: 'mypurchases', component: PurchasesComponent },
      
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
