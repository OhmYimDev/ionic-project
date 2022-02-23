import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WiangkumkamPageRoutingModule } from './wiangkumkam-routing.module';

import { WiangkumkamPage } from './wiangkumkam.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WiangkumkamPageRoutingModule
  ],
  declarations: [WiangkumkamPage]
})
export class WiangkumkamPageModule {}
