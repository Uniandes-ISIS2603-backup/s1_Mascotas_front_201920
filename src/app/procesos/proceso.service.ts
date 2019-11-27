import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Proceso } from './proceso';
import { Observable } from 'rxjs';
import { ProcesosDetail } from './procesos-detail';
import { Multimedia } from '../multimedia/multimedia';
import { environment } from '../../environments/environment';

const API_URL = environment.apiURL;
const procesos = '/procesos';




@Injectable({
  providedIn: 'root'
})
export class ProcesoService {

   /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
   constructor(private http: HttpClient) { }

   getProcesos(): Observable<Proceso[]> {
       return this.http.get<Proceso[]>(API_URL + procesos);
   }

   /**
   * Creates a new mascota encontrada
   * @param proceso La mascota encontrada
   * @returns The mascota encontrada with its new id if it was created, false if it wasn't
   */
   createProceso(proceso): Observable<Proceso> {
       return this.http.post<Proceso>(API_URL + procesos, proceso);
   }

   /**
   * Returns the Observable object with the details of a mascota encontrada retrieved from the API
   * @param procesoId The id of the mascota encontrada
   * @returns The mascota encontrada details
   */
   getProcesoDetail(procesoId): Observable<ProcesosDetail> {
       return this.http.get<ProcesosDetail>(API_URL + procesos + '/' + procesoId);
   }

   /**
    * Deletes the mascota from the server database through API
    * @param procesoId Id de la mascota a borrar
    * @returns la mascota borrada
    */
   deleteProceso(procesoId): Observable<Proceso> {
       return this.http.delete<Proceso>(API_URL + procesos + '/' + procesoId);
   }


}
