import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Restaurante2Page } from './restaurante2.page';

const routes: Routes = [
  {
    path: '',
    component: Restaurante2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Restaurante2PageRoutingModule {}
