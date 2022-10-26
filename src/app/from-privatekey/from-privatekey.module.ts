import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FromPrivatekeyPageRoutingModule } from './from-privatekey-routing.module';

import { FromPrivatekeyPage } from './from-privatekey.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FromPrivatekeyPageRoutingModule
  ],
  declarations: [FromPrivatekeyPage]
})
export class FromPrivatekeyPageModule {}
