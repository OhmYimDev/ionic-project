import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Review1Page } from './review1.page';

const routes: Routes = [
  {
    path: '',
    component: Review1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Review1PageRoutingModule {}
