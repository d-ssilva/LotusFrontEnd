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

  nome = environment.nome


  constructor(
    private router: Router,
    private temaService: TemaService
  ) { }

  ngOnInit() {
    if (environment.token == '') {
      alert('Sua seção expirou, faça o login novamente')
      this.router.navigate(['/entrar'])
    }

    // SEMPRE QUE ENTRAR NA PÁGINA TEMA, EXECULTE ESSE MÉTODO
    this.findAllTemas()
    this.temaService.refreshToken()
  }

  findAllTemas(){
    this.temaService.getAllTema().subscribe((resp: Tema[]) => {
      this.listaTemas = resp
    })
  }

  cadastrarTema(){
    this.temaService.postTema(this.tema).subscribe((resp: Tema)=>{
      this.tema = resp
      alert('Tema cadastrado com sucesso')
      this.tema = new Tema()
      this.findAllTemas()

      console.log(this.tema.descricao)
      console.log(this.tema.id)
    })
  }
}
