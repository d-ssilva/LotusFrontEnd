import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { User } from '../model/User';
import { UserLogin } from '../model/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }



  entrar(userLogin: UserLogin): Observable<UserLogin> {
    return this.http.post<UserLogin>('https://apilotus.herokuapp.com/usuario/logar', userLogin)
  }

  cadastrar(user: User): Observable<User> {
    return this.http.post<User>('https://apilotus.herokuapp.com/usuario/cadastrar', user)
  }

  atualizar(user: User): Observable<User> {
    return this.http.put<User>('https://apilotus.herokuapp.com/usuario', user)
  }

  getByIdUser(id: number): Observable<User> {
    return this.http.get<User>(`https://apilotus.herokuapp.com/usuario/${id}`)
  }

  getAllUser(): Observable<User[]> {
    return this.http.get<User[]>('https://apilotus.herokuapp.com/usuario/')
  }

  getAllReclamacoes(): Observable<User[]> {
    return this.http.get<User[]>('https://apilotus.herokuapp.com/postagem/reclamacao')
  }

  getAllElogios(): Observable<User[]> {
    return this.http.get<User[]>('https://apilotus.herokuapp.com/postagem/elogio')
  }

  logado() {
    let logado = false

    if (environment.token != '') {
      logado = true
    }
    return logado
  }

  semFoto() {
    let semFoto = false 

    if (environment.foto === '' || environment.foto === null){
      semFoto = true
    }

    return semFoto
  }
}
