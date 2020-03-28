import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagamentoDinheiroPageRoutingModule } from './pagamento-dinheiro-routing.module';

import { PagamentoDinheiroPage } from './pagamento-dinheiro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagamentoDinheiroPageRoutingModule
  ],
  declarations: [PagamentoDinheiroPage]
})
export class PagamentoDinheiroPageModule {}
