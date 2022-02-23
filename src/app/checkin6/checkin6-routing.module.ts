import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Checkin6Page } from './checkin6.page';

const routes: Routes = [
  {
    path: '',
    component: Checkin6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Checkin6PageRoutingModule {}
