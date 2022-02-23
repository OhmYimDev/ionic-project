import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Review8PageRoutingModule } from './review8-routing.module';

import { Review8Page } from './review8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Review8PageRoutingModule
  ],
  declarations: [Review8Page]
})
export class Review8PageModule {}
