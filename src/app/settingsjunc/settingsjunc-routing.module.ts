import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsjuncPage } from './settingsjunc.page';

const routes: Routes = [
  {
    path: '',
    component: SettingsjuncPage,
    children: [
      {path:'',redirectTo: 'settings', pathMatch:'full'},
      {path: 'settings', loadChildren: ()=> import('../settings/settings.module').then( m => m.SettingsPageModule)}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsjuncPageRoutingModule {}
