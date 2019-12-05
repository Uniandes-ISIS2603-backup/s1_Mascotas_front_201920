import { Injectable } from "@angular/core";
import { Recompensa } from "./recompensa";
import { MascotaPerdida } from "../mascotaperdida/mascotaperdida";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, map, tap } from "rxjs/operators";

const API_URL = 'http://localhost:8080/s1_mascotas-api/api/';
const editorials = 'recompensas/';
const editorials2 =  'mascotasperdidas/';


@Injectable()
export class RecompensaService {

  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };
  constructor(private http: HttpClient) { }

  getRecompensas(): Observable<Recompensa[]> {
    return this.http.get<Recompensa[]>(API_URL + editorials);
  }

  getRecompensa(id: number): Observable<Recompensa> {
    return this.http.get<Recompensa>(API_URL + editorials + "/" + id);
  }

  createRecompensa(recompensa: Recompensa): Observable<Recompensa> {
    console.log ("Create "+API_URL +editorials );
    return this.http
      .post<Recompensa>(API_URL + editorials, recompensa, this.httpOptions);

  }
 
  updateRecompensa(recompensa): Observable<Recompensa> {
    console.log ("UPDATE "+API_URL +editorials + recompensa.id);
    return this.http.put<Recompensa>(API_URL +editorials + recompensa.id, recompensa);
  }
  getMascotaPerdida(id: number): Observable<MascotaPerdida> {
    console.log ("GET recomp "+API_URL + editorials2 + id);
    return this.http.get<MascotaPerdida>(API_URL + editorials2 + id);
  }

  
}
