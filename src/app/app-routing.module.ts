import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { TemaComponent } from './tema/tema.component';


//OBJETOS DE ROTAS
const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'}, // Como default é a página inicial
  {path: 'login', component: LoginComponent},
  /*{path: 'cadastrar', component: CadastrarComponent} NÃO PRECISA PORQUE O 'CADASTRAR' É UMA JANELA MODAL NO COMPONENTE LOGIN*/
  {path: 'inicio', component: InicioComponent}, // página de inicio ou Home
  {path: 'tema', component: TemaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
