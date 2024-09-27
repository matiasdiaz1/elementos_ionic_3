import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServicioalumPage } from './servicioalum.page';

const routes: Routes = [
  {
    path: '',
    component: ServicioalumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicioalumPageRoutingModule {}
