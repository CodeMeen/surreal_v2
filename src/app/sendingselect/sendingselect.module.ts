import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SendingselectPageRoutingModule } from './sendingselect-routing.module';

import { SendingselectPage } from './sendingselect.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SendingselectPageRoutingModule
  ],
  declarations: [SendingselectPage]
})
export class SendingselectPageModule {}
