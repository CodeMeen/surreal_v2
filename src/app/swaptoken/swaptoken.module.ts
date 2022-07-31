import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SwaptokenPageRoutingModule } from './swaptoken-routing.module';

import { SwaptokenPage } from './swaptoken.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SwaptokenPageRoutingModule
  ],
  declarations: [SwaptokenPage]
})
export class SwaptokenPageModule {



  
}
