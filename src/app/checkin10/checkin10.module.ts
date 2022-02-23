import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Checkin10PageRoutingModule } from './checkin10-routing.module';

import { Checkin10Page } from './checkin10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Checkin10PageRoutingModule
  ],
  declarations: [Checkin10Page]
})
export class Checkin10PageModule {}
