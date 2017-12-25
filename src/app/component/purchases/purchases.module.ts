import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchasesComponent } from './purchases.component';
import { MatList } from '@angular/material'
@NgModule({
  imports: [
    CommonModule,
    MatList
  ],
  declarations: [PurchasesComponent]
})
export class PurchasesModule { }
