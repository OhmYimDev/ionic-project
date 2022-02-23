import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhrasinghPageRoutingModule } from './phrasingh-routing.module';

import { PhrasinghPage } from './phrasingh.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhrasinghPageRoutingModule
  ],
  declarations: [PhrasinghPage]
})
export class PhrasinghPageModule {}
