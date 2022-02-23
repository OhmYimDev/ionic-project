import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Checkin2PageRoutingModule } from './checkin2-routing.module';

import { Checkin2Page } from './checkin2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Checkin2PageRoutingModule
  ],
  declarations: [Checkin2Page]
})
export class Checkin2PageModule {}
