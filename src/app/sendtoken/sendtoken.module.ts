import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SendtokenPageRoutingModule } from './sendtoken-routing.module';

import { SendtokenPage } from './sendtoken.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SendtokenPageRoutingModule
  ],
  declarations: [SendtokenPage]
})
export class SendtokenPageModule {}
