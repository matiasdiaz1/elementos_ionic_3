import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeccionalumPageRoutingModule } from './seccionalum-routing.module';

import { SeccionalumPage } from './seccionalum.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeccionalumPageRoutingModule
  ],
  declarations: [SeccionalumPage]
})
export class SeccionalumPageModule {}
