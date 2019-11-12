import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { UsuarioService } from './usuario.service';
import { UsuarioCreateComponent } from './usuario-create/usuario-create.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsuarioDetailComponent } from './usuario-detail/usuario-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [UsuarioListComponent, UsuarioCreateComponent, UsuarioDetailComponent],
  exports: [UsuarioListComponent],
  providers: [UsuarioService]
})
export class UsuarioModule { }