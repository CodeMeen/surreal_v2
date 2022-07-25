import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { NotipanelComponent } from './notipanel/notipanel.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { QRCodeModule } from 'angular2-qrcode';

@NgModule({
  declarations: [AppComponent,NotipanelComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot({}), 
    AppRoutingModule,
    HttpClientModule,
    QRCodeModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
