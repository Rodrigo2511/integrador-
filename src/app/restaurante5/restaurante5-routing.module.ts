import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Restaurante5Page } from './restaurante5.page';

const routes: Routes = [
  {
    path: '',
    component: Restaurante5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Restaurante5PageRoutingModule {}
