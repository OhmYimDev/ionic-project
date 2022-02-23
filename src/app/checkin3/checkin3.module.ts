import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Checkin3PageRoutingModule } from './checkin3-routing.module';

import { Checkin3Page } from './checkin3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Checkin3PageRoutingModule
  ],
  declarations: [Checkin3Page]
})
export class Checkin3PageModule {}
