import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Review8Page } from './review8.page';

const routes: Routes = [
  {
    path: '',
    component: Review8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Review8PageRoutingModule {}
