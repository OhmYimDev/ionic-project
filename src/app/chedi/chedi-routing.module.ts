import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChediPage } from './chedi.page';

const routes: Routes = [
  {
    path: '',
    component: ChediPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChediPageRoutingModule {}
