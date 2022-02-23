import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DatapassService } from './datapass.service';
import { IonicRatingComponentModule } from 'ionic-rating-component';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule,IonicRatingComponentModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },DatapassService],
  bootstrap: [AppComponent],
})
export class AppModule {}
