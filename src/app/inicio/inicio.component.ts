import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { TemaService } from '../service/tema.service';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  foto = environment.foto
  nome = environment.nome

  constructor(
    private rota: Router,
    private temaService: TemaService
    
  ) { }

  ngOnInit() {
    window.scroll(0, 0)
    if (environment.token == '') {
      alert('Sua seção expirou, faça o login novamente')
      this.rota.navigate(['/login'])
    }
  }

  
}
