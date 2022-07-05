import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SendingselectPage } from './sendingselect.page';

const routes: Routes = [
  {
    path: '',
    component: SendingselectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SendingselectPageRoutingModule {}
