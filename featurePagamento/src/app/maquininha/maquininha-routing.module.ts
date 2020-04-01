import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaquininhaPage } from './maquininha.page';

const routes: Routes = [
  {
    path: '',
    component: MaquininhaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaquininhaPageRoutingModule {}
