import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenujuncPageRoutingModule } from './menujunc-routing.module';

import { MenujuncPage } from './menujunc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenujuncPageRoutingModule
  ],
  declarations: [MenujuncPage]
})
export class MenujuncPageModule {}
