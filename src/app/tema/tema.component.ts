import { HttpClient } from '@angular/common/http'; // Disponibiliza a criação de objetos que usem CRUD 
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { Tema } from '../model/Tema';

@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css']
})
export class TemaComponent implements OnInit {

  constructor( 
    // private route: RouterLink, 
    private http: HttpClient // Disponibiliza os métodos HTTP get, post, put e delete)
    ) { }
  

  ngOnInit() {}
}
