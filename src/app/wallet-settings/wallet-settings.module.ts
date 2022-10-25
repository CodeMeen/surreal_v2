import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalletSettingsPageRoutingModule } from './wallet-settings-routing.module';

import { WalletSettingsPage } from './wallet-settings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalletSettingsPageRoutingModule
  ],
  declarations: [WalletSettingsPage]
})
export class WalletSettingsPageModule {}
