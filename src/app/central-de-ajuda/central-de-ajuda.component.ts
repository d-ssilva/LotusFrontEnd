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

  ngOnInit() {
    window.scroll(0, 0)

    if (environment.token == '') {
      this.alert.showAlertInfo('Sua seção expirou, faça o login novamente')
      this.rota.navigate(['/login'])
    }
  }

  // método para pesquisar um tópico
  // filter() {

  //   const searchText = document.querySelector('#pesquisa')

  //   searchText?.addEventListener('keyup', function (e) {
  //     const searchFilter = e?.target.value.toLowerCase().trim();
  //     let cards = document.querySelectorAll('.divPai');

  //     //console.log(cards);
  //     cards.forEach(card => {
  //       if (card.id.toLowerCase().includes(searchFilter)) {
  //         card.style.display = 'inline-block';
  //       } else {
  //         card.style.display = 'none';
  //       }
  //     });
  //   }
  //   )
  // }
}
