import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FromMnemonicPage } from './from-mnemonic.page';

const routes: Routes = [
  {
    path: '',
    component: FromMnemonicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FromMnemonicPageRoutingModule {}
