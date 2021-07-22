import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/User';
import { AlertasService } from 'src/app/service/alertas.service';
import { AuthService } from 'src/app/service/auth.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})

export class UserEditComponent implements OnInit {

  user: User = new User()
  idUser: number

  tipoUsuario: string
  confirmarSenha: string
  generoUsuario: string

  constructor(

    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private alert: AlertasService
  ) { }

  ngOnInit() {
    window.scroll(0, 0)
    if (environment.token == '') {
      alert('Sua seção expirou, faça o login novamente')
      this.router.navigate(['/login'])
    }

    this.idUser = this.route.snapshot.params['id']
    this.findByIdUser(this.idUser)
  }

  confirmSenha(event: any) {
    this.confirmarSenha = event.target.value
  }

  tipoUser(event: any) {
    this.tipoUsuario = event.target.value
  }

  generoUser(event: any) {
    this.generoUsuario = event.target.value
  }

  atualizar() {
    this.user.tipo = this.tipoUsuario

    if (this.user.senha != this.confirmarSenha) {
      this.alert.showAlertDanger('As senhas estão incorretas')
    } else {
      this.authService.atualizar(this.user).subscribe((resp: User) => {
        this.user = resp
        this.router.navigate(['/login'])
        this.alert.showAlertSuccess('Alterações salvas com sucesso!')

        // Apagando tokens para deslogar - (são os mesmos environments usados em menu.component.ts)
        environment.token = ''
        environment.foto = ''
        environment.nome = ''
        environment.id = 0
        this.router.navigate(['/login'])
      })
    }
  }

  findByIdUser(id: number) {
    this.authService.getByIdUser(id).subscribe((resp: User) => {
      this.user = resp
    })
  }

}
