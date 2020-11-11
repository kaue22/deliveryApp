import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MostrarProdutosPageRoutingModule } from './mostrar-produtos-routing.module';

import { MostrarProdutosPage } from './mostrar-produtos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MostrarProdutosPageRoutingModule
  ],
  declarations: [MostrarProdutosPage]
})
export class MostrarProdutosPageModule {}
