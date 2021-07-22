import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tema } from 'src/app/model/Tema';
import { TemaService } from 'src/app/service/tema.service';
import { environment } from 'src/environments/environment.prod';
import { Subscriber } from 'rxjs';
import { AlertasService } from 'src/app/service/alertas.service';

@Component({
  selector: 'app-tema-edit',
  templateUrl: './tema-edit.component.html',
  styleUrls: ['./tema-edit.component.css']
})
export class TemaEditComponent implements OnInit {

  tema: Tema = new Tema()

  constructor(
    private temaService: TemaService,
    private router: Router,
    private pegarRota: ActivatedRoute,
    private alert: AlertasService
  ) { }

  ngOnInit() {
    window.scroll(0, 0)
    if (environment.token == '') {
      this.alert.showAlertInfo('Sua seção expirou, faça o login novamente')
      this.router.navigate(['/entrar'])
    }

    console.log(this.tema.nome)

    let id = this.pegarRota.snapshot.params['id']
    this.findByIdTema(id)
  }

  findByIdTema(id: number) {
    this.temaService.getByIdTema(id).subscribe((resp: Tema) => {
      this.tema = resp
    })
  }

  atualizar() {
    this.temaService.putTema(this.tema).subscribe((resp: Tema) => {
      this.tema = resp
      this.alert.showAlertSuccess('Tema atualizado com sucesso')
      this.router.navigate(['/tema'])
    })
  }
}