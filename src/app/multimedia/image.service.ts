import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient) {}


  public uploadImage(image: File, name: string): Observable<string> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/octet-stream',
        'X-Goog-Upload-File-Name': name,
        'X-Goog-Upload-Protocol': 'raw',
        'Authorization': 'my-auth-token'
      })
    };

    return this.http.post<string>('https://photoslibrary.googleapis.com/v1/uploads', image);
  }
}