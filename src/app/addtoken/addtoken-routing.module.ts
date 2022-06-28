import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddtokenPage } from './addtoken.page';

const routes: Routes = [
  {
    path: '',
    component: AddtokenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddtokenPageRoutingModule {}
