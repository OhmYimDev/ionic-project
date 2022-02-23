import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Checkin6PageRoutingModule } from './checkin6-routing.module';

import { Checkin6Page } from './checkin6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Checkin6PageRoutingModule
  ],
  declarations: [Checkin6Page]
})
export class Checkin6PageModule {}
