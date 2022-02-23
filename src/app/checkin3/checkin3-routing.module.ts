import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Checkin3Page } from './checkin3.page';

const routes: Routes = [
  {
    path: '',
    component: Checkin3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Checkin3PageRoutingModule {}
