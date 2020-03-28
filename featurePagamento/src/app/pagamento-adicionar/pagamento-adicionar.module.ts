import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagamentoAdicionarPageRoutingModule } from './pagamento-adicionar-routing.module';

import { PagamentoAdicionarPage } from './pagamento-adicionar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagamentoAdicionarPageRoutingModule
  ],
  declarations: [PagamentoAdicionarPage]
})
export class PagamentoAdicionarPageModule {}
