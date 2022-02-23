import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Checkin7PageRoutingModule } from './checkin7-routing.module';

import { Checkin7Page } from './checkin7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Checkin7PageRoutingModule
  ],
  declarations: [Checkin7Page]
})
export class Checkin7PageModule {}
