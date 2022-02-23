import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Checkin8Page } from './checkin8.page';

const routes: Routes = [
  {
    path: '',
    component: Checkin8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Checkin8PageRoutingModule {}
