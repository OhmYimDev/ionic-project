import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Review7Page } from './review7.page';

const routes: Routes = [
  {
    path: '',
    component: Review7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Review7PageRoutingModule {}
