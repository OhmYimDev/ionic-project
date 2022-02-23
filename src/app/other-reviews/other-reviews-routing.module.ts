import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OtherReviewsPage } from './other-reviews.page';

const routes: Routes = [
  {
    path: '',
    component: OtherReviewsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OtherReviewsPageRoutingModule {}
