import { HttpClient } from '@angular/common/http'; // Disponibiliza a criação de objetos que usem CRUD 
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
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
    private router: Router, 
    private http: HttpClient, // Disponibiliza os métodos HTTP get, post, put e delete)
    private temaService: TemaService
    ) { }
  

  ngOnInit() {
    if(environment.token == ''){
      this.router.navigate(['/entrar'])
    }

    // SEMPRE QUE ENTRAR NA PÁGINA TEMA, EXECULTE ESSE MÉTODO
    this.findAllTemas()
  }

  findAllTemas(){
    this.temaService.getAllTema().subscribe((resp: Tema[]) =>{
      this.listaTemas = resp
    })
  }

  cadastrar(){
    this.temaService.postTema(this.tema).subscribe((resp: Tema) =>
    this.tema = resp)
    alert('Tema cadastrado com sucesso')
    this.findAllTemas()
    this.tema = new Tema()
  }
}
