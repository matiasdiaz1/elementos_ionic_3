import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServicioproPage } from './serviciopro.page';

const routes: Routes = [
  {
    path: '',
    component: ServicioproPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicioproPageRoutingModule {}
