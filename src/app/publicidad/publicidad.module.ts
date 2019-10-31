import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicidadListComponent } from './publicidad-list/publicidad-list.component';
import { PublicidadService } from './publicidad.service';
import { UsuarioDetalleComponent } from './usuario-detalle/usuario-detalle.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PublicidadListComponent, UsuarioDetalleComponent],
  exports : [PublicidadListComponent],
  providers: [PublicidadService]
})
export class PublicidadModule { }