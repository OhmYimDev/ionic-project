import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Checkin4Page } from './checkin4.page';

const routes: Routes = [
  {
    path: '',
    component: Checkin4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Checkin4PageRoutingModule {}
