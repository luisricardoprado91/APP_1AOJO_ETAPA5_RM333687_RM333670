import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagamentoQRCodePage } from './pagamento-qrcode.page';

const routes: Routes = [
  {
    path: '',
    component: PagamentoQRCodePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagamentoQRCodePageRoutingModule {}
