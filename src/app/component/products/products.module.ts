import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './products.component';
import {MatCard,MatButton} from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    MatCard,
    MatButton
  ],
  exports:[ProductComponent],
  declarations: [ProductComponent]
})
export class ProductModule {
  static forRoot(){
    return{ngModule:ProductModule}
  }
 }
