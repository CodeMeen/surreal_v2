import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExportwalletPage } from './exportwallet.page';

const routes: Routes = [
  {
    path: '',
    component: ExportwalletPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExportwalletPageRoutingModule {}
