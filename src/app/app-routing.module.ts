import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';


//OBJETOS DE ROTAS
const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  /*{path: 'cadastrar', component: CadastrarComponent} NÃO PRECISA PORQUE O 'CADASTRAR' É UMA JANELA MODAL NO COMPONENTE LOGIN*/
  {path: 'inicio', component: InicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
