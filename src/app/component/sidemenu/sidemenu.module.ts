import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidemenuComponent } from './sidemenu.component';
import { AppRoutingModule } from '../../routing/app-routing.module';

@NgModule({
  imports: [
    AppRoutingModule,
    CommonModule
  ],
  exports:[SidemenuComponent],
  declarations: [SidemenuComponent]
})
export class SidemenuModule {
  static forRoot(){
    return{ngModule:SidemenuModule}
  }
 }
