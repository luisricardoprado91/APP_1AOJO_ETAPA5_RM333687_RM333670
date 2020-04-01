import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DinheiroPage } from './dinheiro.page';

const routes: Routes = [
  {
    path: '',
    component: DinheiroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DinheiroPageRoutingModule {}
