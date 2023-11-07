import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IMGPage } from './img.page';

const routes: Routes = [
  {
    path: '',
    component: IMGPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IMGPageRoutingModule {}
