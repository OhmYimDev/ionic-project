import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SrisuphanPageRoutingModule } from './srisuphan-routing.module';

import { SrisuphanPage } from './srisuphan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SrisuphanPageRoutingModule
  ],
  declarations: [SrisuphanPage]
})
export class SrisuphanPageModule {}
