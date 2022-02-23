import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WiangkumkamPage } from './wiangkumkam.page';

const routes: Routes = [
  {
    path: '',
    component: WiangkumkamPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WiangkumkamPageRoutingModule {}
