import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { NotipanelComponent } from './notipanel/notipanel.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { PopupComponent } from './popup/popup.component';
import { FormsModule } from '@angular/forms';
import { LoaderComponent } from './loader/loader.component';
import { SqliteService } from './sqlite.service';


@NgModule({
  declarations: [AppComponent,NotipanelComponent,PopupComponent,LoaderComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot({ scrollPadding: true}),
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  SqliteService],
  bootstrap: [AppComponent],
})
export class AppModule {}
