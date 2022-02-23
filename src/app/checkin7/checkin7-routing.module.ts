import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Checkin7Page } from './checkin7.page';

const routes: Routes = [
  {
    path: '',
    component: Checkin7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Checkin7PageRoutingModule {}
