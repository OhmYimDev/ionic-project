import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Review5PageRoutingModule } from './review5-routing.module';

import { Review5Page } from './review5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Review5PageRoutingModule
  ],
  declarations: [Review5Page]
})
export class Review5PageModule {}
