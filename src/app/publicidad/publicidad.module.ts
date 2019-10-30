import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicidadListComponent } from './publicidad-list/publicidad-list.component';
import { PublicidadService } from './publicidad.service';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PublicidadListComponent],
  exports : [PublicidadListComponent],
  providers: [PublicidadService]
})
export class PublicidadModule { }