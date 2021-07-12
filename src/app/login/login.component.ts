import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { User } from '../model/User';
import { UserLogin } from '../model/UserLogin';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLogin: UserLogin = new UserLogin()
  user: User = new User

  confirmarSenha: string
  tipoUsuario: string

  constructor(
    private router: Router,
    private auth: AuthService,
  ) { }

  ngOnInit() {
    window.scroll(0, 0)
    this.cadastroButton();
  }

  confirmSenha(event: any) {
    this.confirmarSenha = event.target.value
  }

  tipoUser(event: any) {
    this.tipoUsuario = event.target.value
  }

  cadastroButton(){

    let loginBtn = document.querySelector('.loginBtn');
    let cadastroBtn = document.querySelector('.cadastroBtn');
    
    cadastroBtn?.addEventListener('click', ()=>{
      let formBx = document.querySelector('.formBx');
      formBx?.classList.add('active')
    })

    loginBtn?.addEventListener('click', ()=>{
      let formBx = document.querySelector('.formBx');
      formBx?.classList.remove('active')
    })
  
    }

  cadastrar() {
    this.user.tipo = this.tipoUsuario

    if (this.user.senha != this.confirmarSenha) {
      alert('As senhas estão incorretas')
    } else {
      this.auth.cadastrar(this.user).subscribe((resp: User) => {
        this.user = resp
        this.router.navigate(['/login'])
        alert('Usuário cadastrado com sucesso!')
      })
    }
  }

  // Funções usadas para logar
  entrar() {
    this.auth.entrar(this.userLogin).subscribe((resp: UserLogin) => {
      this.userLogin = resp

      environment.token = this.userLogin.token
      environment.nome = this.userLogin.nome
      environment.foto = this.userLogin.foto
      environment.id = this.userLogin.id
    
      this.router.navigate(['/inicio'])

    }, erro => {
      if (erro.status == 500) {
        alert('Usuario ou senha incorretos!')
      }
    })
  }
}
