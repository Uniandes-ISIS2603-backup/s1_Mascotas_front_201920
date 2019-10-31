import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MascotaAdopcion } from './mascotaadopcion';
import { Observable } from 'rxjs';

const API_URL = "../../assets/";
const mascotas = 'mascotasadopcion.json';

@Injectable()
export class MascotaAdopcionService {
    
    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) { }
    
    getMascotas() : Observable<MascotaAdopcion[]> {
        return this.http.get<MascotaAdopcion[]>(API_URL + mascotas);
    }
    
}