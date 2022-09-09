import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewnftPage } from './viewnft.page';

const routes: Routes = [
  {
    path: '',
    component: ViewnftPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewnftPageRoutingModule {}
