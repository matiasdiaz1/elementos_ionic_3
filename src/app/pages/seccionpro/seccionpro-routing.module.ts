import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeccionproPage } from './seccionpro.page';

const routes: Routes = [
  {
    path: '',
    component: SeccionproPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeccionproPageRoutingModule {}
