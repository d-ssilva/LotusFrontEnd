import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { Tema } from '../model/Tema';
import { User } from '../model/User';
import { UserLogin } from '../model/UserLogin';
import { AlertasService } from '../service/alertas.service';
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
  tituloPost: string

  listaUsuarios: User[]

  tema: Tema = new Tema()
  listasTemas: Tema[]
  idTema: number

  user: User = new User()
  idUser = environment.id

  foto = environment.foto
  nome = environment.nome

  // ESSAS VARIÁVEIS AJUDAM A SEPARAR AS POSTAGENS POR DATA EM ORDEM DESCRESCENTE
  key = 'data'
  reverse = true

  constructor(
    private rota: Router,
    private postagemService: PostagemService,
    private temaService: TemaService,
    private authService: AuthService,
    private alert: AlertasService

  ) { }

  ngOnInit() {
    window.scroll(0, 0)

    if (environment.token == '') {
      this.alert.showAlertInfo('Sua seção expirou, faça o login novamente')
      this.rota.navigate(['/login'])
    }

    this.getAllUsuario() 
    this.temaService.refreshToken()
    this.postagemService.refreshToken()
    this.getAllTema()
    this.getAllPostagens()
    this.findByIdUser()
    this.menuLateral()
    this.botaoLateral()
    
  }

  menuLateral(){
    let list = document.querySelectorAll('.list');
    for (let i = 0; i < list.length; i++){
      list[i].addEventListener('click', function(){
        let j = 0;
        while(j < list.length){
          list[j++].className = 'list';
        }
        list[i].className = 'list active';
      }
      )}
  }

  botaoLateral(){
    let menuToggle = document.querySelector('.toggle');
    let navigation = document.querySelector('.navigation');
    menuToggle?.addEventListener('click', function(){
      menuToggle?.classList.toggle('active');
      navigation?.classList.toggle('active');
    })
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

  getAllUsuario() {
    this.authService.getAllUser().subscribe((resp: User[]) => {
      this.listaUsuarios = resp
    })
  }

  findByIdUser() {
    this.authService.getByIdUser(this.idUser).subscribe((resp: User) => {
      this.user = resp
    })
  }

  findByTituloPostagem() {
    if (this.tituloPost == '') {
      this.getAllPostagens()
    } else {
      this.postagemService.getbyTituloPostagem(this.tituloPost).subscribe((resp: Postagem[]) => {
        this.listaPostagens = resp
      })
    }
  }

  publicar() {
    this.tema.id = this.idTema
    this.postagem.tema = this.tema
    this.user.id = this.idUser
    this.postagem.usuario = this.user // relacionando a tabela de usuario relacionando com seu id
    this.postagem.usuario.foto = this.foto // colocar a foto do usuário que fez a postagem
    this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem) => {
      this.postagem = resp
      this.alert.showAlertSuccess('Postagem realizada com sucesso!')
      this.postagem = new Postagem()
      this.getAllPostagens()
    })    
  }
}
