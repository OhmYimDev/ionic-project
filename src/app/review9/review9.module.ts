import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Review9PageRoutingModule } from './review9-routing.module';

import { Review9Page } from './review9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Review9PageRoutingModule
  ],
  declarations: [Review9Page]
})
export class Review9PageModule {}
