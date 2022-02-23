import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoisuthepPageRoutingModule } from './doisuthep-routing.module';

import { DoisuthepPage } from './doisuthep.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoisuthepPageRoutingModule
  ],
  declarations: [DoisuthepPage]
})
export class DoisuthepPageModule {}
