import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServicioproPageRoutingModule } from './serviciopro-routing.module';

import { ServicioproPage } from './serviciopro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServicioproPageRoutingModule
  ],
  declarations: [ServicioproPage]
})
export class ServicioproPageModule {}
