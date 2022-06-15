import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroComponent } from './components/view/cadastro/cadastro.component'

const routes: Routes = [ 
{
  path:"cadastro",
  component: CadastroComponent
},
{
  path:"",
  component: CadastroComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
