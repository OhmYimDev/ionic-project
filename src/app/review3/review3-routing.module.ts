import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Review3Page } from './review3.page';

const routes: Routes = [
  {
    path: '',
    component: Review3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Review3PageRoutingModule {}
