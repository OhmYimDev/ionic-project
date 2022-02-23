import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Review1PageRoutingModule } from './review1-routing.module';

import { Review1Page } from './review1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Review1PageRoutingModule
  ],
  declarations: [Review1Page]
})
export class Review1PageModule {}
