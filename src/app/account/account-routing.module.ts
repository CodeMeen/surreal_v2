import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountPage } from './account.page';

const routes: Routes = [
  {
    path: '',
    component: AccountPage,
    children: [
      {path:'',redirectTo: '/account/wallet', pathMatch:'full'},
      {path: 'wallet', loadChildren: () => import('../wallet/wallet.module').then( m => m.WalletPageModule)}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountPageRoutingModule {}
