import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewnftPageRoutingModule } from './viewnft-routing.module';

import { ViewnftPage } from './viewnft.page';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewnftPageRoutingModule,
    SwiperModule
  ],
  declarations: [ViewnftPage]
})
export class ViewnftPageModule {}
