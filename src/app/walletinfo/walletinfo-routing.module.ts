import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalletinfoPage } from './walletinfo.page';

const routes: Routes = [
  {
    path: '',
    component: WalletinfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalletinfoPageRoutingModule {}
