import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServicioalumPageRoutingModule } from './servicioalum-routing.module';

import { ServicioalumPage } from './servicioalum.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServicioalumPageRoutingModule
  ],
  declarations: [ServicioalumPage]
})
export class ServicioalumPageModule {}
