import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RatchapruekPage } from './ratchapruek.page';

const routes: Routes = [
  {
    path: '',
    component: RatchapruekPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RatchapruekPageRoutingModule {}
