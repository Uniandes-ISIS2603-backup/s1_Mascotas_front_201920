import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";



import { MascotaAdopcion } from './mascotaadopcion';


const API_URL = "../../assets/";
const mascotas = 'mascotasadopcion.json';

@Injectable({ providedIn: "root" })
export class MascotaAdopcionService {
    
    private mascotasURL = "api/mascotas"; // URL to web api

    httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    };
  
    constructor(private http: HttpClient) {}
  
    /** GET clientes from the server */
    getMascotas(): Observable<MascotaAdopcion[]> {
      return this.http.get<MascotaAdopcion[]>(this.mascotasURL);
    }
  
    /** GET client by id. Will 404 if id not found */
    getMascotaDetail(id: number): Observable<MascotaAdopcion> {
      const url = `${this.mascotasURL}/${id}`;
      return this.http.get<MascotaAdopcion>(url);
    }
    /** POST: add a new client to the server */
    createMascota(mascota: MascotaAdopcion): Observable<MascotaAdopcion> {
      return this.http.post<MascotaAdopcion>(this.mascotasURL, mascota, this.httpOptions).pipe(tap((mascota: MascotaAdopcion) => console.log(`added mascota w/ ${mascota.raza} id=${mascota.id}`)));
    }
  
    /** DELETE: delete the client from the server */
    deleteMascota(mascota: MascotaAdopcion | number): Observable<MascotaAdopcion> {
      const id = typeof mascota === "number" ? mascota : mascota.id;
      const url = `${this.mascotasURL}/${id}`;
  
      return this.http.delete<MascotaAdopcion>(url, this.httpOptions);
    }
  
    /** PUT: update the client on the server */
    updateMascota(mascota: MascotaAdopcion): Observable<any> {
      return this.http.put(this.mascotasURL, mascota, this.httpOptions);
    }
  }