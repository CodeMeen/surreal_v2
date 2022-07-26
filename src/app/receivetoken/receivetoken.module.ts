import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReceivetokenPageRoutingModule } from './receivetoken-routing.module';

import { ReceivetokenPage } from './receivetoken.page';
import { QRCodeModule } from 'angular2-qrcode';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReceivetokenPageRoutingModule,
    QRCodeModule
  ],
  declarations: [ReceivetokenPage]
})
export class ReceivetokenPageModule {}
