import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MascotaEncontrada } from './mascotaencontrada';
import { Observable } from 'rxjs';

const API_URL = '../../assets/';
const mascotasencontradas = 'mascotasencontradas.json';

@Injectable()
export class MascotaEncontradaService {
    
    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) { }    
  
    getMascotasEncontradas() : Observable<MascotaEncontrada[]> {
        return this.http.get<MascotaEncontrada[]>(API_URL + mascotasencontradas);
    }
    
}