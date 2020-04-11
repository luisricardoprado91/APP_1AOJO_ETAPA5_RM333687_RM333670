import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'dinheiro',
    loadChildren: () => import('./dinheiro/dinheiro.module').then( m => m.DinheiroPageModule)
  },
  {
    path: 'descontos',
    loadChildren: () => import('./descontos/descontos.module').then( m => m.DescontosPageModule)
  },
  {
    path: 'maquininha',
    loadChildren: () => import('./maquininha/maquininha.module').then( m => m.MaquininhaPageModule)
  },
  {
    path: 'saldo',
    loadChildren: () => import('./saldo/saldo.module').then( m => m.SaldoPageModule)
  },
  {
    path: 'creditos-adicionar',
    loadChildren: () => import('./creditos-adicionar/creditos-adicionar.module').then( m => m.CreditosAdicionarPageModule)
  }
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
