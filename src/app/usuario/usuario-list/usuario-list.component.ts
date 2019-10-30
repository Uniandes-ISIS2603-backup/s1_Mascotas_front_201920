import { Component, OnInit } from '@angular/core';
import {Usuario} from '../iusuario';
import {UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {

  /**
     * Constructor for the component
     * @param usuarioService
     */
    constructor(private usuarioService: UsuarioService) { }
    
    /**
     * Lista de usuarios
     */
    usuarios: Usuario[];

    /**
     * Pedir al servicio que actualice la lista de usuarios
     */
    getUsuarios(): void {
        this.usuarioService.getUsuarios().subscribe(usuarios => this.usuarios = usuarios);
    }

    /**
     * Inicializa el componente al adquirir la lista de usuarios.
     * This method will be called when the component is created
     */
    ngOnInit() {
        this.getUsuarios();
    }
}