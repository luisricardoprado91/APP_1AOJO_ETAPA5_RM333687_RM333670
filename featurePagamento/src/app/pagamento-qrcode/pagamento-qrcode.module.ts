import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagamentoQRCodePageRoutingModule } from './pagamento-qrcode-routing.module';

import { PagamentoQRCodePage } from './pagamento-qrcode.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagamentoQRCodePageRoutingModule
  ],
  declarations: [PagamentoQRCodePage]
})
export class PagamentoQRCodePageModule {}
