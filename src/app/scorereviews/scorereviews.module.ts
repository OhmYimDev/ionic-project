import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScorereviewsPageRoutingModule } from './scorereviews-routing.module';

import { ScorereviewsPage } from './scorereviews.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScorereviewsPageRoutingModule
  ],
  declarations: [ScorereviewsPage]
})
export class ScorereviewsPageModule {}
