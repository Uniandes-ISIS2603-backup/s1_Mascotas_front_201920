import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MascotaEncontrada } from './mascotaencontrada';
import { Observable } from 'rxjs';
import { MascotaEncontradaDetail } from './mascotaencontrada-detail';
import { Multimedia } from '../multimedia/multimedia';
import { environment } from '../../environments/environment';

const API_URL = environment.apiURL;
const mascotasencontradas = '/mascotasencontradas';
const multimedia = '/multimedia';

@Injectable()
export class MascotaEncontradaService {

    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) { }

    getMascotasEncontradas(): Observable<MascotaEncontrada[]> {
        return this.http.get<MascotaEncontrada[]>(API_URL + mascotasencontradas);
    }

    /**
    * Creates a new mascota encontrada
    * @param mascota La mascota encontrada
    * @returns The mascota encontrada with its new id if it was created, false if it wasn't
    */
    createMascotaEncontrada(mascota): Observable<MascotaEncontrada> {
        return this.http.post<MascotaEncontradaDetail>(API_URL + mascotasencontradas, mascota);
    }

    /**
    * Returns the Observable object with the details of a mascota encontrada retrieved from the API
    * @param mascotaId The id of the mascota encontrada
    * @returns The mascota encontrada details
    */
    getMascotaEncontradaDetail(mascotaId): Observable<MascotaEncontradaDetail> {
        return this.http.get<MascotaEncontradaDetail>(API_URL + mascotasencontradas + '/' + mascotaId);
    }

    /**
     * Deletes the mascota from the server database through API
     * @param mascotaId Id de la mascota a borrar
     * @returns la mascota borrada
     */
    deleteMascotaEncontrada(mascotaId): Observable<MascotaEncontrada> {
        return this.http.delete<MascotaEncontrada>(API_URL + mascotasencontradas + '/' + mascotaId);
    }

    /**
    * Creates a multimedia
    * @param multimediaO The multimedia
    * @returns True if the multimedia was posted, false otherwise
    */
    createMultimedia(mascotaId, multimediaO): Observable<Multimedia> {
        return this.http.post<Multimedia>(API_URL + mascotasencontradas + '/' + mascotaId + multimedia, multimediaO);
    }
}