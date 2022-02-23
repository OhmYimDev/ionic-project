import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhotharamPageRoutingModule } from './photharam-routing.module';

import { PhotharamPage } from './photharam.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhotharamPageRoutingModule
  ],
  declarations: [PhotharamPage]
})
export class PhotharamPageModule {}
