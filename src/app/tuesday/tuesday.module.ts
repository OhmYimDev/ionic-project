import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TuesdayPageRoutingModule } from './tuesday-routing.module';

import { TuesdayPage } from './tuesday.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TuesdayPageRoutingModule
  ],
  declarations: [TuesdayPage]
})
export class TuesdayPageModule {}
