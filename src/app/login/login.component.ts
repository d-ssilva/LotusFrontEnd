import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { User } from '../model/User';
import { UserLogin } from '../model/UserLogin';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLogin: UserLogin = new UserLogin()
  user: User = new User()

  confirmarSenha: string
  tipoUsuario: string
  fotoPadrao = "https://imgur.com/ZNP9l16.png"


  constructor(
    private router: Router,
    private auth: AuthService,
    private alert: AlertasService
  ) { }

  ngOnInit() {
    window.scroll(0, 0)
    this.cadastroButton();

    this.cadastrar();
  }

  confirmSenha(event: any) {
    this.confirmarSenha = event.target.value
  }

  tipoUser(event: any) {
    this.tipoUsuario = event.target.value
  }

  cadastroButton() {
    let loginBtn = document.querySelector('.loginBtn');
    let cadastroBtn = document.querySelector('.cadastroBtn');
    cadastroBtn?.addEventListener('click', () => {
      let formBx = document.querySelector('.formBx');
      let tud = document.querySelector('.tud');
      formBx?.classList.add('active')
      tud?.classList.add('active') 
    })

    loginBtn?.addEventListener('click', () => {
      let formBx = document.querySelector('.formBx');
      let tud = document.querySelector('.tud');
      formBx?.classList.remove('active')
      tud?.classList.remove('active') 
    })
  }

  mudarParaLogin() {
    let formBx = document.querySelector('.formBx');
    formBx?.classList.remove('active')
  }
  
  cadastrar() {
    this.user.tipo = this.tipoUsuario

    if(this.user.foto == null || this.user.foto == "" ) {
      this.user.foto = this.fotoPadrao
    }

    if (this.user.senha != this.confirmarSenha) {
      this.alert.showAlertDanger('As senhas est??o incorretas')
    } else {
      this.auth.cadastrar(this.user).subscribe((resp: User) => {
        this.user = resp
        this.router.navigate(['/login'])
        this.mudarParaLogin();
        this.alert.showAlertSuccess('Usu??rio cadastrado com sucesso!')
      })
    }
  }

  // Fun????es usadas para logar
  entrar() {
    this.auth.entrar(this.userLogin).subscribe((resp: UserLogin) => {
      this.userLogin = resp
      environment.token = this.userLogin.token
      environment.nome = this.userLogin.nome
      environment.foto = this.userLogin.foto
      environment.id = this.userLogin.id
      environment.email = this.userLogin.email
      environment.tipo = this.userLogin.tipo
      environment.user = this.userLogin.usuario
      this.router.navigate(['/inicio'])
    }, erro => {
      if (erro.status == 500) {
        this.alert.showAlertDanger('Usuario ou senha incorretos!')
      }
    })
  }
}
