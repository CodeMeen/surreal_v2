import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SettingsjuncPageRoutingModule } from './settingsjunc-routing.module';

import { SettingsjuncPage } from './settingsjunc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SettingsjuncPageRoutingModule
  ],
  declarations: [SettingsjuncPage]
})
export class SettingsjuncPageModule {}
