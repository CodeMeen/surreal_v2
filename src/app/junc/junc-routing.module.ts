import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JuncPage } from './junc.page';

const routes: Routes = [
  {
    path: '',
    component: JuncPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JuncPageRoutingModule {}
