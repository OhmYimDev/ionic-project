import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OtherReviewsPageRoutingModule } from './other-reviews-routing.module';

import { OtherReviewsPage } from './other-reviews.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OtherReviewsPageRoutingModule
  ],
  declarations: [OtherReviewsPage]
})
export class OtherReviewsPageModule {}
