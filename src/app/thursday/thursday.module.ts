import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ThursdayPageRoutingModule } from './thursday-routing.module';

import { ThursdayPage } from './thursday.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ThursdayPageRoutingModule
  ],
  declarations: [ThursdayPage]
})
export class ThursdayPageModule {}
