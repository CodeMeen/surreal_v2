import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JuncPageRoutingModule } from './junc-routing.module';

import { JuncPage } from './junc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JuncPageRoutingModule
  ],
  declarations: [JuncPage]
})
export class JuncPageModule {}
