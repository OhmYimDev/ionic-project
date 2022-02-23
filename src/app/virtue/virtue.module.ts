import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VirtuePageRoutingModule } from './virtue-routing.module';

import { VirtuePage } from './virtue.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VirtuePageRoutingModule
  ],
  declarations: [VirtuePage]
})
export class VirtuePageModule {}
