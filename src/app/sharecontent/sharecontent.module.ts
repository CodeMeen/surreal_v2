import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharecontentPageRoutingModule } from './sharecontent-routing.module';

import { SharecontentPage } from './sharecontent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharecontentPageRoutingModule
  ],
  declarations: [SharecontentPage]
})
export class SharecontentPageModule {}
