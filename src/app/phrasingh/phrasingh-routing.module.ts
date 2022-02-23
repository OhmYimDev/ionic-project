import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhrasinghPage } from './phrasingh.page';

const routes: Routes = [
  {
    path: '',
    component: PhrasinghPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhrasinghPageRoutingModule {}
