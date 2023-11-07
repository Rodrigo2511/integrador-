import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Restaurante2PageRoutingModule } from './restaurante2-routing.module';

import { Restaurante2Page } from './restaurante2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Restaurante2PageRoutingModule
  ],
  declarations: [Restaurante2Page]
})
export class Restaurante2PageModule {}
