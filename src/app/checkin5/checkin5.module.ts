import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Checkin5PageRoutingModule } from './checkin5-routing.module';

import { Checkin5Page } from './checkin5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Checkin5PageRoutingModule
  ],
  declarations: [Checkin5Page]
})
export class Checkin5PageModule {}
