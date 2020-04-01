import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DinheiroPageRoutingModule } from './dinheiro-routing.module';

import { DinheiroPage } from './dinheiro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DinheiroPageRoutingModule
  ],
  declarations: [DinheiroPage]
})
export class DinheiroPageModule {}
