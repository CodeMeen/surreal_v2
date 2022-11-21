import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartairdroprefcodePage } from './startairdroprefcode.page';

const routes: Routes = [
  {
    path: '',
    component: StartairdroprefcodePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StartairdroprefcodePageRoutingModule {}
