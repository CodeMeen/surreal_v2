import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BackupwalletPage } from './backupwallet.page';

const routes: Routes = [
  {
    path: '',
    component: BackupwalletPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BackupwalletPageRoutingModule {}
