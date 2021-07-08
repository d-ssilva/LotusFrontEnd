import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
  {path: 'tema', component: TemaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
