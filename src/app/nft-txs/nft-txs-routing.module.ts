import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NftTxsPage } from './nft-txs.page';

const routes: Routes = [
  {
    path: '',
    component: NftTxsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NftTxsPageRoutingModule {}
