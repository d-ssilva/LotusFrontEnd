import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-central-de-ajuda',
  templateUrl: './central-de-ajuda.component.html',
  styleUrls: ['./central-de-ajuda.component.css']
})
export class CentralDeAjudaComponent implements OnInit {

  nome = environment.nome

  constructor(
    private rota: Router
  ) { }

  ngOnInit(){
    window.scroll(0, 0)

    if (environment.token == '') {
      alert('Sua seção expirou, faça o login novamente')
      this.rota.navigate(['/login'])
    }
  }

}
