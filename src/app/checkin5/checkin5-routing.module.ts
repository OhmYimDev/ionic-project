import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Checkin5Page } from './checkin5.page';

const routes: Routes = [
  {
    path: '',
    component: Checkin5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Checkin5PageRoutingModule {}
