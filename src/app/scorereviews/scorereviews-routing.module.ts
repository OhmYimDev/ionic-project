import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScorereviewsPage } from './scorereviews.page';

const routes: Routes = [
  {
    path: '',
    component: ScorereviewsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScorereviewsPageRoutingModule {}
