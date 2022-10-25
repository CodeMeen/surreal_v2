import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },

  {
    path: 'account',
    loadChildren: () => import('./account/account.module').then( m => m.AccountPageModule)
  },
  {
    path: 'addtoken',
    loadChildren: () => import('./addtoken/addtoken.module').then( m => m.AddtokenPageModule)
  },
  {
    path: 'showtoken/:name/:type',
    loadChildren: () => import('./showtoken/showtoken.module').then( m => m.ShowtokenPageModule)
  },
  {
    path: 'sendtoken/:name/:type',
    loadChildren: () => import('./sendtoken/sendtoken.module').then( m => m.SendtokenPageModule)
  },
  {
    path: 'receivetoken/:name/:type',
    loadChildren: () => import('./receivetoken/receivetoken.module').then( m => m.ReceivetokenPageModule)
  },
  {
    path: 'receivingselect',
    loadChildren: () => import('./receivingselect/receivingselect.module').then( m => m.ReceivingselectPageModule)
  },
  {
    path: 'sendingselect',
    loadChildren: () => import('./sendingselect/sendingselect.module').then( m => m.SendingselectPageModule)
  },
  {
    path: 'swaptoken',
    loadChildren: () => import('./swaptoken/swaptoken.module').then( m => m.SwaptokenPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'tx',
    loadChildren: () => import('./tx/tx.module').then( m => m.TxPageModule)
  },
  {
    path: 'viewnft/:nftaddr',
    loadChildren: () => import('./viewnft/viewnft.module').then( m => m.ViewnftPageModule)
  },
  {
    path: 'confirmtx',
    loadChildren: () => import('./confirmtx/confirmtx.module').then( m => m.ConfirmtxPageModule)
  },
  {
    path: 'customtoken',
    loadChildren: () => import('./customtoken/customtoken.module').then( m => m.CustomtokenPageModule)
  },
  {
    path: 'nft-txs/:contractaddr/:name',
    loadChildren: () => import('./nft-txs/nft-txs.module').then( m => m.NftTxsPageModule)
  },
  {
    path: 'add-wallet',
    loadChildren: () => import('./add-wallet/add-wallet.module').then( m => m.AddWalletPageModule)
  },
  {
    path: 'wallet-settings',
    loadChildren: () => import('./wallet-settings/wallet-settings.module').then( m => m.WalletSettingsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
