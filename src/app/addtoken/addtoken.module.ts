import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddtokenPageRoutingModule } from './addtoken-routing.module';

import { AddtokenPage } from './addtoken.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddtokenPageRoutingModule
  ],
  declarations: [AddtokenPage]
})
export class AddtokenPageModule {}
