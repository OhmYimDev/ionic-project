import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Review3PageRoutingModule } from './review3-routing.module';

import { Review3Page } from './review3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Review3PageRoutingModule
  ],
  declarations: [Review3Page]
})
export class Review3PageModule {}
