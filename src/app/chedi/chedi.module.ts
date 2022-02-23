import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChediPageRoutingModule } from './chedi-routing.module';

import { ChediPage } from './chedi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChediPageRoutingModule
  ],
  declarations: [ChediPage]
})
export class ChediPageModule {}
