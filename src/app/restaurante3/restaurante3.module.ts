import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Restaurante3PageRoutingModule } from './restaurante3-routing.module';

import { Restaurante3Page } from './restaurante3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Restaurante3PageRoutingModule
  ],
  declarations: [Restaurante3Page]
})
export class Restaurante3PageModule {}
