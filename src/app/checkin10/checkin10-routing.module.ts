import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Checkin10Page } from './checkin10.page';

const routes: Routes = [
  {
    path: '',
    component: Checkin10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Checkin10PageRoutingModule {}
