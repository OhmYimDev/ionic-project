import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RatchapruekPageRoutingModule } from './ratchapruek-routing.module';

import { RatchapruekPage } from './ratchapruek.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RatchapruekPageRoutingModule
  ],
  declarations: [RatchapruekPage]
})
export class RatchapruekPageModule {}
