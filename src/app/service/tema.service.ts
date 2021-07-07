import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(private http: HttpClient) { }

  // o objeto 'TOKEN' faz a validação de crud relacionado a conta especifica que esta logada
  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  refreshToken(){
    this.token = {
      headers: new HttpHeaders().set('Authorization', environment.token)
    }
  }

  /* ---------- CRUD ---------------------- */

  getAllTema(): Observable<Tema[]> {
    return this.http.get<Tema[]>('https://apilotus.herokuapp.com/tema', this.token)
  }

  postTema(tema: Tema): Observable<Tema>{
    return this.http.post<Tema>('https://apilotus.herokuapp.com/tema', tema, this.token)
  }
}
