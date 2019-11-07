import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { UsuarioService } from './usuario.service';
import { UsuarioCreateComponent } from './usuario-create/usuario-create.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UsuarioListComponent, UsuarioCreateComponent],
  exports: [UsuarioListComponent],
  providers: [UsuarioService]
})
export class UsuarioModule { }