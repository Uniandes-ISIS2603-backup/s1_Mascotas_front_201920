import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Publicidad } from './publicidad';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/s1_mascotas-api/api/';
const editorials = 'publicidades/';

@Injectable()
export class PublicidadService {

  constructor(private http: HttpClient) {}

  getPublicidad(): Observable<Publicidad[]>
  {
    return this.http.get<Publicidad[]>(API_URL+editorials);
  }

}