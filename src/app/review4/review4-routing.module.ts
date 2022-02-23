import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Review4Page } from './review4.page';

const routes: Routes = [
  {
    path: '',
    component: Review4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Review4PageRoutingModule {}
