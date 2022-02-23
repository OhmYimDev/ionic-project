import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Review5Page } from './review5.page';

const routes: Routes = [
  {
    path: '',
    component: Review5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Review5PageRoutingModule {}
