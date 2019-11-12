import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";

import { Usuario } from './usuario';
import { UsuarioDetail } from './usuario-detail';

@Injectable({ providedIn: "root" })
export class UsuarioService {

private usuariosURL = "http://localhost:8080/s1_mascotas-api/api/usuarios"; // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

  constructor(private http: HttpClient) {}

  /** GET clientes from the server */
  getUsuarios(): Observable<UsuarioDetail[]> {
    return this.http.get<UsuarioDetail[]>(this.usuariosURL);
  }

  /** GET client by id. Will 404 if id not found */
  getUsuario(id: number): Observable<UsuarioDetail> {
    const url = `${this.usuariosURL}/${id}`;
    return this.http.get<UsuarioDetail>(url);
  }

  /** POST: add a new client to the server */
  createUsuario(usuario: UsuarioDetail): Observable<UsuarioDetail> {
    return this.http.post<UsuarioDetail>(this.usuariosURL, usuario, this.httpOptions).pipe(tap((usuario: UsuarioDetail) => console.log(`added usuario w/ ${usuario.correo} id=${usuario.id}`)));
  }

  /** DELETE: delete the client from the server */
  deleteUsuario(usuario: UsuarioDetail | number): Observable<Usuario> {
    const id = typeof usuario === "number" ? usuario : usuario.id;
    const url = `${this.usuariosURL}/${id}`;

    return this.http.delete<Usuario>(url, this.httpOptions);
  }

  /** PUT: update the client on the server */
  updateUsuario(usuario: Usuario): Observable<any> {
    return this.http.put(this.usuariosURL, usuario, this.httpOptions);
  }
}