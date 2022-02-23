import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Review2PageRoutingModule } from './review2-routing.module';

import { Review2Page } from './review2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Review2PageRoutingModule
  ],
  declarations: [Review2Page]
})
export class Review2PageModule {}
