import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharetextcontentPage } from './sharetextcontent.page';

const routes: Routes = [
  {
    path: '',
    component: SharetextcontentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SharetextcontentPageRoutingModule {}
