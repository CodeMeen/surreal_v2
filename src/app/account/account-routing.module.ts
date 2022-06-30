import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountPage } from './account.page';

const routes: Routes = [
  {
    path: '',
    component: AccountPage,
    children: [
      {path:'',redirectTo: 'wallet', pathMatch:'full'},
      {path: 'wallet', loadChildren: () => import('../wallet/wallet.module').then( m => m.WalletPageModule)},
      {path:'addtoken', loadChildren: () => import('../addtoken/addtoken.module').then(m=> m.AddtokenPageModule)},
      {path:'showtoken/:tokenname/:tokensymbol',loadChildren:()=>import('../showtoken/showtoken.module').then(m=> m.ShowtokenPageModule)}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountPageRoutingModule {}
