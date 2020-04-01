import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaquininhaPageRoutingModule } from './maquininha-routing.module';

import { MaquininhaPage } from './maquininha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaquininhaPageRoutingModule
  ],
  declarations: [MaquininhaPage]
})
export class MaquininhaPageModule {}
