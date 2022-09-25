import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomtokenPageRoutingModule } from './customtoken-routing.module';

import { CustomtokenPage } from './customtoken.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomtokenPageRoutingModule
  ],
  declarations: [CustomtokenPage]
})
export class CustomtokenPageModule {}
