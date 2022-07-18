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
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }