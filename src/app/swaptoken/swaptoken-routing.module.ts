import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SwaptokenPage } from './swaptoken.page';

const routes: Routes = [
  {
    path: '',
    component: SwaptokenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SwaptokenPageRoutingModule {}
