import { Injectable } from "@angular/core";
import { MascotaPerdida } from "./mascotaperdida";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, map, tap } from "rxjs/operators";
import { MascotaPerdidaDetail} from "./mascotaperdida-detail";

const API_URL = 'http://localhost:8080/s1_mascotas-api/api/';
const editorials = 'mascotasperdidas/';


@Injectable()
export class MascotaPerdidaService {
  
  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };
  constructor(private http: HttpClient) {}

  getMascotaPerdidas(): Observable<MascotaPerdida[]> {
    return this.http.get<MascotaPerdida[]>(API_URL + editorials);
  }

  getMascotaPerdida(id: number): Observable<MascotaPerdida> {
    return this.http.get<MascotaPerdida>(API_URL + editorials + id);
  }

  createMascotaPerdida(mascotaperdida: MascotaPerdida): Observable<MascotaPerdida> {
    return this.http
      .post<MascotaPerdida>(API_URL + editorials, mascotaperdida, this.httpOptions);
  }
  /*updateMascotaPerdida(mascotaPerdida:MascotaPerdidaDetail): Observable<MascotaPerdida> {
    return this.http.put<MascotaPerdida>(API_URL + '/' + editorials + mascotaPerdida.id, mascotaPerdida);
  }
*/
}
