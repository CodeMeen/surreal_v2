import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReceivingselectPage } from './receivingselect.page';

const routes: Routes = [
  {
    path: '',
    component: ReceivingselectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReceivingselectPageRoutingModule {}
