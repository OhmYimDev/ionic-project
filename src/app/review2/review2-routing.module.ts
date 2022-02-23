import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Review2Page } from './review2.page';

const routes: Routes = [
  {
    path: '',
    component: Review2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Review2PageRoutingModule {}
