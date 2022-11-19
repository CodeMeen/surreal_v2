import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AirdropstartPage } from './airdropstart.page';

const routes: Routes = [
  {
    path: '',
    component: AirdropstartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AirdropstartPageRoutingModule {}
