import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VirtuePage } from './virtue.page';

const routes: Routes = [
  {
    path: '',
    component: VirtuePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VirtuePageRoutingModule {}
