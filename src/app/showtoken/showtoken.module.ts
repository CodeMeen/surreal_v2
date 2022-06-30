import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowtokenPageRoutingModule } from './showtoken-routing.module';

import { ShowtokenPage } from './showtoken.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowtokenPageRoutingModule
  ],
  declarations: [ShowtokenPage]
})
export class ShowtokenPageModule {}
