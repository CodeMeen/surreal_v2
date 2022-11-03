import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerifyphrasePage } from './verifyphrase.page';

const routes: Routes = [
  {
    path: '',
    component: VerifyphrasePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerifyphrasePageRoutingModule {}
