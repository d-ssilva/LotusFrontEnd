import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { Tema } from '../model/Tema';
import { User } from '../model/User';
import { AuthService } from '../service/auth.service';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  postagem: Postagem = new Postagem()
  listaPostagens: Postagem[]

  tema: Tema = new Tema()
  listasTemas: Tema[]
  idTema: number

  user: User = new User()
  idUser = environment.id

  foto = environment.foto 
  nome = environment.nome

  constructor(
    private rota: Router,
    private postagemService: PostagemService,
    private temaService: TemaService,
    private authService: AuthService

  ) { }

  ngOnInit() {
    window.scroll(0, 0)

    if (environment.token == '') {
      alert('Sua seção expirou, faça o login novamente')
      this.rota.navigate(['/login'])
    }

    this.temaService.refreshToken()
    this.postagemService.refreshToken()
    this.getAllTema()
    this.getAllPostagens()
    this.findByIdUser()
  }

  getAllTema() {
    this.temaService.getAllTema().subscribe((resp: Tema[]) => {
      this.listasTemas = resp
    })
  }

  findByIdTema() {
    this.temaService.getByIdTema(this.idTema).subscribe((resp: Tema) => {
      this.tema = resp
    })
  }

  getAllPostagens() {
    this.postagemService.getAllPostagens().subscribe((resp: Postagem[]) => {
      this.listaPostagens = resp
    })
  }

  findByIdUser(){
    this.authService.getByIdUser(this.idUser).subscribe((resp: User) => {
      this.user = resp
    })
  }

  publicar() {
    this.tema.id = this.idTema
    this.postagem.tema = this.tema
    this.user.id = this.idUser
    this.postagem.usuario = this.user
    this.postagem.usuario.foto = this.foto

    this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem) => {
    this.postagem = resp
    alert('Postagem realizada com sucesso!')
    this.getAllPostagens()
    this.postagem = new Postagem()

    })
  }
}
