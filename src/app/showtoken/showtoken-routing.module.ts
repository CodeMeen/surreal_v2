import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowtokenPage } from './showtoken.page';

const routes: Routes = [
  {
    path: '',
    component: ShowtokenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowtokenPageRoutingModule {}
