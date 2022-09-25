import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomtokenPage } from './customtoken.page';

const routes: Routes = [
  {
    path: '',
    component: CustomtokenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomtokenPageRoutingModule {}
