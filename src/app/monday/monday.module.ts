import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MondayPageRoutingModule } from './monday-routing.module';

import { MondayPage } from './monday.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MondayPageRoutingModule
  ],
  declarations: [MondayPage]
})
export class MondayPageModule {}
