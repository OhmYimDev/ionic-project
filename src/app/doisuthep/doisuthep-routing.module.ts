import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoisuthepPage } from './doisuthep.page';

const routes: Routes = [
  {
    path: '',
    component: DoisuthepPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoisuthepPageRoutingModule {}
