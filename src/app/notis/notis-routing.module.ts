import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotisPage } from './notis.page';

const routes: Routes = [
  {
    path: '',
    component: NotisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotisPageRoutingModule {}
