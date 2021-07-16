import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { AlertasService } from '../service/alertas.service';

@Component({
  selector: 'app-central-de-ajuda',
  templateUrl: './central-de-ajuda.component.html',
  styleUrls: ['./central-de-ajuda.component.css']
})
export class CentralDeAjudaComponent implements OnInit {

  nome = environment.nome

  constructor(
    private rota: Router,
    private alert: AlertasService
  ) { }

  ngOnInit(){
    window.scroll(0, 0)

    if (environment.token == '') {
      this.alert.showAlertInfo('Sua seção expirou, faça o login novamente')
      this.rota.navigate(['/login'])
    }
  }

  // método para pesquisar um tópico
  // findByTopico(){if( this.findByTopico() != ''){}}
}
