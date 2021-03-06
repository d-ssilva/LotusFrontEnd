import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CentralDeAjudaComponent } from './central-de-ajuda/central-de-ajuda.component';
import { PostagemDeleteComponent } from './delete/postagem-delete/postagem-delete.component';
import { TemaDeleteComponent } from './delete/tema-delete/tema-delete.component';
import { PostagemEditComponent } from './edit/postagem-edit/postagem-edit.component';
import { TemaEditComponent } from './edit/tema-edit/tema-edit.component';
import { UserEditComponent } from './edit/user-edit/user-edit.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { SobreComponent } from './sobre/sobre.component';
import { TemaComponent } from './tema/tema.component';



//OBJETOS DE ROTAS
const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  
  {path: 'login', component: LoginComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'sobre', component: SobreComponent},
  {path: 'tema', component: TemaComponent},
  {path: 'central-de-ajuda', component: CentralDeAjudaComponent},
  {path: 'tema-edit/:id', component: TemaEditComponent},
  {path: 'tema-delete/:id', component: TemaDeleteComponent},
  {path: 'postagem-delete/:id', component: PostagemDeleteComponent},
  {path: 'postagem-edit/:id', component: PostagemEditComponent},
  {path: 'user-edit/:id', component: UserEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
