import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/User';
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

  constructor(

    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
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

  atualizar() {
    this.user.tipo = this.tipoUsuario

    if (this.user.senha != this.confirmarSenha) {
      alert('As senhas estão incorretas')
    } else {
      this.authService.atualizar(this.user).subscribe((resp: User) => {
        this.user = resp
        this.router.navigate(['/login'])
        alert('Alterações salvas com sucesso!')

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
