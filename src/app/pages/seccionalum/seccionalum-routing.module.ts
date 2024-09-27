import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeccionalumPage } from './seccionalum.page';

const routes: Routes = [
  {
    path: '',
    component: SeccionalumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeccionalumPageRoutingModule {}
