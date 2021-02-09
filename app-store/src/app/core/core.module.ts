import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from './services/products.service';

// Aqui lo que importa es que se metan todo lo relacionado a SERVICIOS
// mientras que en el shared module se metan, componentes, directivas, pipes, etc.

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    ProductsService,
  ]
})
export class CoreModule { }
