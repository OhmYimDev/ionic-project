import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChantPageRoutingModule } from './chant-routing.module';

import { ChantPage } from './chant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChantPageRoutingModule
  ],
  declarations: [ChantPage]
})
export class ChantPageModule {}
