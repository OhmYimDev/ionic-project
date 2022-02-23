import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Review9Page } from './review9.page';

const routes: Routes = [
  {
    path: '',
    component: Review9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Review9PageRoutingModule {}
