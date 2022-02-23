import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhotharamPage } from './photharam.page';

const routes: Routes = [
  {
    path: '',
    component: PhotharamPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhotharamPageRoutingModule {}
