import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChantPage } from './chant.page';

const routes: Routes = [
  {
    path: '',
    component: ChantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChantPageRoutingModule {}
