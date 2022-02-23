import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Review7PageRoutingModule } from './review7-routing.module';

import { Review7Page } from './review7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Review7PageRoutingModule
  ],
  declarations: [Review7Page]
})
export class Review7PageModule {}
