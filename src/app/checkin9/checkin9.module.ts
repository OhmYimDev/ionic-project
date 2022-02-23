import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Checkin9PageRoutingModule } from './checkin9-routing.module';

import { Checkin9Page } from './checkin9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Checkin9PageRoutingModule
  ],
  declarations: [Checkin9Page]
})
export class Checkin9PageModule {}
