import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Restaurante4PageRoutingModule } from './restaurante4-routing.module';

import { Restaurante4Page } from './restaurante4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Restaurante4PageRoutingModule
  ],
  declarations: [Restaurante4Page]
})
export class Restaurante4PageModule {}
