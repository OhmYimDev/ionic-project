import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Review4PageRoutingModule } from './review4-routing.module';

import { Review4Page } from './review4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Review4PageRoutingModule
  ],
  declarations: [Review4Page]
})
export class Review4PageModule {}
