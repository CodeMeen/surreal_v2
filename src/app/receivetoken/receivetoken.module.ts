import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReceivetokenPageRoutingModule } from './receivetoken-routing.module';

import { ReceivetokenPage } from './receivetoken.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReceivetokenPageRoutingModule
  ],
  declarations: [ReceivetokenPage]
})
export class ReceivetokenPageModule {}
