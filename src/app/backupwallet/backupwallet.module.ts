import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BackupwalletPageRoutingModule } from './backupwallet-routing.module';

import { BackupwalletPage } from './backupwallet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BackupwalletPageRoutingModule
  ],
  declarations: [BackupwalletPage]
})
export class BackupwalletPageModule {}
