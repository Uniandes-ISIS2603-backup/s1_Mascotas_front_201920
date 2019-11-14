import { Injectable } from "@angular/core";
import { Publicidad } from "./publicidad";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, map, tap } from "rxjs/operators";
import {PublicidadDetail} from "./publicidad-detail";

const API_URL = 'http://localhost:8080/s1_mascotas-api/api/';
const editorials = 'publicidades';
//const API_URL = "../../assets/";
//const editorials = "publicidades.json";

//German Rozo
@Injectable()
export class PublicidadService {
  
  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };
  constructor(private http: HttpClient) {}

  getPublicidades(): Observable<Publicidad[]>
  {
    return this.http.get<Publicidad[]>(API_URL + editorials);
  }

  getPublicidad(id: number): Observable<PublicidadDetail>
  {
    console.log("que pasa?")
    console.log(API_URL + editorials +"/"+ id);
    return this.http.get<PublicidadDetail>(API_URL + editorials +"/"+ id);
  }

  createPublicidad(publicidad: PublicidadDetail): Observable<PublicidadDetail> {
    return this.http
      .post<PublicidadDetail>(API_URL + editorials, publicidad, this.httpOptions);
  }
}
