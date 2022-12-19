import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharecontentPage } from './sharecontent.page';

const routes: Routes = [
  {
    path: '',
    component: SharecontentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SharecontentPageRoutingModule {}
