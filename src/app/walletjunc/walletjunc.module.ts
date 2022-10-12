import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalletjuncPageRoutingModule } from './walletjunc-routing.module';

import { WalletjuncPage } from './walletjunc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalletjuncPageRoutingModule
  ],
  declarations: [WalletjuncPage]
})
export class WalletjuncPageModule {}
