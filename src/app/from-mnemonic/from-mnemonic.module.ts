import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FromMnemonicPageRoutingModule } from './from-mnemonic-routing.module';

import { FromMnemonicPage } from './from-mnemonic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FromMnemonicPageRoutingModule
  ],
  declarations: [FromMnemonicPage]
})
export class FromMnemonicPageModule {}
