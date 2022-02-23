import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OtherAttrPage } from './other-attr.page';

const routes: Routes = [
  {
    path: '',
    component: OtherAttrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OtherAttrPageRoutingModule {}
