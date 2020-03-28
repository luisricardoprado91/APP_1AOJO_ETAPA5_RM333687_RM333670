import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagamentoNoCarroPage } from './pagamento-no-carro.page';

const routes: Routes = [
  {
    path: '',
    component: PagamentoNoCarroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagamentoNoCarroPageRoutingModule {}
