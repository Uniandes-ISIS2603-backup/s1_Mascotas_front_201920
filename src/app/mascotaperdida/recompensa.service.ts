import { Injectable } from "@angular/core";
import { Recompensa } from "./recompensa";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, map, tap } from "rxjs/operators";

const API_URL = 'http://localhost:8080/s1_mascotas-api/api/';
const editorials = 'recompensas';


@Injectable()
export class RecompensaService {
  
  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };
  constructor(private http: HttpClient) {}

  getRecompensas(): Observable<Recompensa[]> {
    return this.http.get<Recompensa[]>(API_URL + editorials);
  }

  getRecompensa(id: number): Observable<Recompensa> 
  {
    return this.http.get<Recompensa>(API_URL + editorials +"/"+ id);
  }

  createRecompensa(recompensa: Recompensa): Observable<Recompensa> {
    return this.http
      .post<Recompensa>(API_URL + editorials, recompensa, this.httpOptions);
  }
}
