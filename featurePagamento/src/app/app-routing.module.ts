import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'payment',
    loadChildren: () => import('./payment/payment.module').then( m => m.PaymentPageModule)
  },
  {
    path: 'confirmation-page',
    loadChildren: () => import('./confirmation-page/confirmation-page.module').then( m => m.ConfirmationPagePageModule)
  },
  {
    path: 'pagamento-dinheiro',
    loadChildren: () => import('./pagamento-dinheiro/pagamento-dinheiro.module').then( m => m.PagamentoDinheiroPageModule)
  },
  {
    path: 'pagamento-no-carro',
    loadChildren: () => import('./pagamento-no-carro/pagamento-no-carro.module').then( m => m.PagamentoNoCarroPageModule)
  },
  {
    path: 'pagamento-qrcode',
    loadChildren: () => import('./pagamento-qrcode/pagamento-qrcode.module').then( m => m.PagamentoQRCodePageModule)
  },
  {
    path: 'pagamento-adicionar',
    loadChildren: () => import('./pagamento-adicionar/pagamento-adicionar.module').then( m => m.PagamentoAdicionarPageModule)
  },
  {
    path: 'descontos',
    loadChildren: () => import('./descontos/descontos.module').then( m => m.DescontosPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
