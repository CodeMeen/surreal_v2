import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AirdropstartPageRoutingModule } from './airdropstart-routing.module';

import { AirdropstartPage } from './airdropstart.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AirdropstartPageRoutingModule
  ],
  declarations: [AirdropstartPage]
})
export class AirdropstartPageModule {}
