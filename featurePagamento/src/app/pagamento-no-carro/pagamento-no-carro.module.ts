import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagamentoNoCarroPageRoutingModule } from './pagamento-no-carro-routing.module';

import { PagamentoNoCarroPage } from './pagamento-no-carro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagamentoNoCarroPageRoutingModule
  ],
  declarations: [PagamentoNoCarroPage]
})
export class PagamentoNoCarroPageModule {}
