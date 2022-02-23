import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Review10PageRoutingModule } from './review10-routing.module';

import { Review10Page } from './review10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Review10PageRoutingModule
  ],
  declarations: [Review10Page]
})
export class Review10PageModule {}
