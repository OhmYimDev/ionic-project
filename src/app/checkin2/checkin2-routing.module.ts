import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Checkin2Page } from './checkin2.page';

const routes: Routes = [
  {
    path: '',
    component: Checkin2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Checkin2PageRoutingModule {}
