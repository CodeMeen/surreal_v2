import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StartairdroprefcodePageRoutingModule } from './startairdroprefcode-routing.module';

import { StartairdroprefcodePage } from './startairdroprefcode.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StartairdroprefcodePageRoutingModule
  ],
  declarations: [StartairdroprefcodePage]
})
export class StartairdroprefcodePageModule {}
