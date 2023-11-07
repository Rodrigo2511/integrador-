import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Restaurante5PageRoutingModule } from './restaurante5-routing.module';

import { Restaurante5Page } from './restaurante5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Restaurante5PageRoutingModule
  ],
  declarations: [Restaurante5Page]
})
export class Restaurante5PageModule {}
