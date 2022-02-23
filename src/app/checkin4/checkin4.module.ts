import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Checkin4PageRoutingModule } from './checkin4-routing.module';

import { Checkin4Page } from './checkin4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Checkin4PageRoutingModule
  ],
  declarations: [Checkin4Page]
})
export class Checkin4PageModule {}
