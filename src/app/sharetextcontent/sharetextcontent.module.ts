import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharetextcontentPageRoutingModule } from './sharetextcontent-routing.module';

import { SharetextcontentPage } from './sharetextcontent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharetextcontentPageRoutingModule
  ],
  declarations: [SharetextcontentPage]
})
export class SharetextcontentPageModule {}
