import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreditosAdicionarPageRoutingModule } from './creditos-adicionar-routing.module';

import { CreditosAdicionarPage } from './creditos-adicionar.page';
import { NgxBarcodeModule } from 'ngx-barcode';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreditosAdicionarPageRoutingModule,
    NgxBarcodeModule
  ],
  declarations: [CreditosAdicionarPage]
})
export class CreditosAdicionarPageModule {}
