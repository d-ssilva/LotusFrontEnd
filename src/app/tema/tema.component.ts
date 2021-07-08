import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css']
})
export class TemaComponent implements OnInit {

  tema: Tema = new Tema()
  listaTemas: Tema[]

  constructor(
    private rota: Router,
    private temaService: TemaService
  ) { }

  ngOnInit() {
    if (environment.token == '') {
      alert('Sua seção expirou, faça o login novamente')
      // this.rota.navigate(['/login'])
    }

    console.log(environment.token)
    this.temaService.refreshToken()
    this.findAllTemas()
  }

  cadastrarTema() {
    this.temaService.postTema(this.tema).subscribe((resp: Tema) => {
      this.tema = resp
      alert('Tema cadastrado com sucesso')
      this.findAllTemas()
      this.tema = new Tema()
    })
  }

  findAllTemas() {
    this.temaService.getAllTema().subscribe((resp: Tema[]) => {
      this.listaTemas = resp
    })
  }
}
