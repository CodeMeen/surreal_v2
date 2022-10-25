import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalletSettingsPage } from './wallet-settings.page';

const routes: Routes = [
  {
    path: '',
    component: WalletSettingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalletSettingsPageRoutingModule {}
