import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReceivingselectPageRoutingModule } from './receivingselect-routing.module';

import { ReceivingselectPage } from './receivingselect.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReceivingselectPageRoutingModule
  ],
  declarations: [ReceivingselectPage]
})
export class ReceivingselectPageModule {}
