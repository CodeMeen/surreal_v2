import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenujuncPage } from './menujunc.page';

const routes: Routes = [
  {
    path: '',
    component: MenujuncPage,
    children: [
      {path:'',redirectTo: 'swaptoken', pathMatch:'full'},
      {path: 'settings', loadChildren: ()=> import('../settings/settings.module').then( m => m.SettingsPageModule)},
      {
        path: 'swaptoken',
        loadChildren: () => import('../swaptoken/swaptoken.module').then( m => m.SwaptokenPageModule)
      }
    ]

   
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenujuncPageRoutingModule {}
