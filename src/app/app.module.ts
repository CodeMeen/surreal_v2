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

import { Drivers, Storage } from '@ionic/storage';
import { IonicStorageModule } from '@ionic/storage-angular';
import * as CordovaSQLiteDriver from 'localforage-cordovasqlitedriver';


@NgModule({
  declarations: [AppComponent,NotipanelComponent,PopupComponent,LoaderComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot({}),
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    IonicStorageModule.forRoot({

        name: 'surrealwallet',
     driverOrder: [CordovaSQLiteDriver._driver,Drivers.IndexedDB, Drivers.LocalStorage]

      })
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  SqliteService],
  bootstrap: [AppComponent],
})
export class AppModule {}
