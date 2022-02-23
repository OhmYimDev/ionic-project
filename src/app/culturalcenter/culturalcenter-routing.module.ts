import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CulturalcenterPage } from './culturalcenter.page';

const routes: Routes = [
  {
    path: '',
    component: CulturalcenterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CulturalcenterPageRoutingModule {}
