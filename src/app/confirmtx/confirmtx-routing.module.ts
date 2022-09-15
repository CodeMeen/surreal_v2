import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmtxPage } from './confirmtx.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmtxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmtxPageRoutingModule {}
