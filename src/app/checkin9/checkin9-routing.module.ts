import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Checkin9Page } from './checkin9.page';

const routes: Routes = [
  {
    path: '',
    component: Checkin9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Checkin9PageRoutingModule {}
