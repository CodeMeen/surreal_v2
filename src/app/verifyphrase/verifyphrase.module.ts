import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerifyphrasePageRoutingModule } from './verifyphrase-routing.module';

import { VerifyphrasePage } from './verifyphrase.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerifyphrasePageRoutingModule
  ],
  declarations: [VerifyphrasePage]
})
export class VerifyphrasePageModule {}
