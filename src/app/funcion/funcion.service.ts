import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Funcion} from "./funcion";

const API_URL = "../../assets/funciones/";
const guest = "guest.json";
const admin = "admin.json";
const client = "client.json";

@Injectable()
export class FuncionService {

  constructor(private http: HttpClient) { }


  getGuest(): Observable<Funcion[]> {
    return this.http.get<Funcion[]>(API_URL + guest);
  }

  getAdmin(): Observable<Funcion[]> {
    return this.http.get<Funcion[]>(API_URL + admin);
  }

  getClient(): Observable<Funcion[]> {
    return this.http.get<Funcion[]>(API_URL + client);
  }



}
