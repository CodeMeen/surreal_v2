import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalletinfoPageRoutingModule } from './walletinfo-routing.module';

import { WalletinfoPage } from './walletinfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalletinfoPageRoutingModule
  ],
  declarations: [WalletinfoPage]
})
export class WalletinfoPageModule {}
