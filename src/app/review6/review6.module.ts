import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Review6PageRoutingModule } from './review6-routing.module';

import { Review6Page } from './review6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Review6PageRoutingModule
  ],
  declarations: [Review6Page]
})
export class Review6PageModule {}
