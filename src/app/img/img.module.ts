import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IMGPageRoutingModule } from './img-routing.module';

import { IMGPage } from './img.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IMGPageRoutingModule
  ],
  declarations: [IMGPage]
})
export class IMGPageModule {}
