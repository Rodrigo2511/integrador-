import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Restaurante3Page } from './restaurante3.page';

const routes: Routes = [
  {
    path: '',
    component: Restaurante3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Restaurante3PageRoutingModule {}
