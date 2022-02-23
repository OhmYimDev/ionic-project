import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Review6Page } from './review6.page';

const routes: Routes = [
  {
    path: '',
    component: Review6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Review6PageRoutingModule {}
