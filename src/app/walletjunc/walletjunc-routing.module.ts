import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalletjuncPage } from './walletjunc.page';

const routes: Routes = [
  {
    path: '',
    component: WalletjuncPage,
    children: [
      {path:'',redirectTo: 'wallet', pathMatch:'full'},
      {path: 'wallet', loadChildren: () => import('../wallet/wallet.module').then( m => m.WalletPageModule)},
      {
        path: 'addtoken',
        loadChildren: () => import('../addtoken/addtoken.module').then( m => m.AddtokenPageModule)
      },
      {
        path: 'showtoken/:name/:type',
        loadChildren: () => import('../showtoken/showtoken.module').then( m => m.ShowtokenPageModule)
      },
      {
        path: 'sendtoken/:name/:type',
        loadChildren: () => import('../sendtoken/sendtoken.module').then( m => m.SendtokenPageModule)
      },
      {
        path: 'receivetoken/:name/:type',
        loadChildren: () => import('../receivetoken/receivetoken.module').then( m => m.ReceivetokenPageModule)
      },
      {
        path: 'receivingselect',
        loadChildren: () => import('../receivingselect/receivingselect.module').then( m => m.ReceivingselectPageModule)
      },
      {
        path: 'sendingselect',
        loadChildren: () => import('../sendingselect/sendingselect.module').then( m => m.SendingselectPageModule)
      },
     
      {
        path: 'tx',
        loadChildren: () => import('../tx/tx.module').then( m => m.TxPageModule)
      },
      {
        path: 'viewnft/:nftaddr',
        loadChildren: () => import('../viewnft/viewnft.module').then( m => m.ViewnftPageModule)
      },
      {
        path: 'confirmtx',
        loadChildren: () => import('../confirmtx/confirmtx.module').then( m => m.ConfirmtxPageModule)
      },
      {
        path: 'customtoken',
        loadChildren: () => import('../customtoken/customtoken.module').then( m => m.CustomtokenPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalletjuncPageRoutingModule {}
