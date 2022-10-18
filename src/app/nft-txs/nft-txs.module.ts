import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NftTxsPageRoutingModule } from './nft-txs-routing.module';

import { NftTxsPage } from './nft-txs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NftTxsPageRoutingModule
  ],
  declarations: [NftTxsPage]
})
export class NftTxsPageModule {}
