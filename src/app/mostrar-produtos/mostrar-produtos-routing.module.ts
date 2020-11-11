import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MostrarProdutosPage } from './mostrar-produtos.page';

const routes: Routes = [
  {
    path: '',
    component: MostrarProdutosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MostrarProdutosPageRoutingModule {}
