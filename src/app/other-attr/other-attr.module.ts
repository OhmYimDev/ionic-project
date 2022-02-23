import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OtherAttrPageRoutingModule } from './other-attr-routing.module';

import { OtherAttrPage } from './other-attr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OtherAttrPageRoutingModule
  ],
  declarations: [OtherAttrPage]
})
export class OtherAttrPageModule {}
