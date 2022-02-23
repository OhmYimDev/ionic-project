import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WednesdayPageRoutingModule } from './wednesday-routing.module';

import { WednesdayPage } from './wednesday.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WednesdayPageRoutingModule
  ],
  declarations: [WednesdayPage]
})
export class WednesdayPageModule {}
