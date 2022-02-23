import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Checkin8PageRoutingModule } from './checkin8-routing.module';

import { Checkin8Page } from './checkin8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Checkin8PageRoutingModule
  ],
  declarations: [Checkin8Page]
})
export class Checkin8PageModule {}
