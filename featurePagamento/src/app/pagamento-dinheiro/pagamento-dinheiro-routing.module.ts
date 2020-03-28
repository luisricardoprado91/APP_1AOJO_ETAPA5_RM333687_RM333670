import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagamentoDinheiroPage } from './pagamento-dinheiro.page';

const routes: Routes = [
  {
    path: '',
    component: PagamentoDinheiroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagamentoDinheiroPageRoutingModule {}
