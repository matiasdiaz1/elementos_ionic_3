import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeccionproPageRoutingModule } from './seccionpro-routing.module';

import { SeccionproPage } from './seccionpro.page';
import { ComponentsModule } from "../../components/components.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeccionproPageRoutingModule,
    ComponentsModule
],
  declarations: [SeccionproPage]
})
export class SeccionproPageModule {}
