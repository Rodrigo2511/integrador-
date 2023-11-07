import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Restaurante4Page } from './restaurante4.page';

const routes: Routes = [
  {
    path: '',
    component: Restaurante4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Restaurante4PageRoutingModule {}
