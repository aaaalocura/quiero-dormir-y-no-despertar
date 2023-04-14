import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { comentarios } from './comentarios';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ComentariosService {
  APP_URL = 'http://localhost:4600/api/mensajes/';
  
  
  constructor(private http: HttpClient) {}

  getComentarios():Observable<any> {


    return this.http.get(this.APP_URL);
  }
}
