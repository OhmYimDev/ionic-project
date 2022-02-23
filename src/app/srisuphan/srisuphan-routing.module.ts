import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SrisuphanPage } from './srisuphan.page';

const routes: Routes = [
  {
    path: '',
    component: SrisuphanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SrisuphanPageRoutingModule {}
