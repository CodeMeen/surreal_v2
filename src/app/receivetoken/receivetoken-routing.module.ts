import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReceivetokenPage } from './receivetoken.page';

const routes: Routes = [
  {
    path: '',
    component: ReceivetokenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReceivetokenPageRoutingModule {}
