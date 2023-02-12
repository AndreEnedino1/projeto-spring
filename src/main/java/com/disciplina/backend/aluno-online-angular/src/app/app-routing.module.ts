import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunosCadastrarEditarComponent } from './pages/alunos/alunos-cadastrar-editar/alunos-cadastrar-editar.component';
import { AlunosComponent } from './pages/alunos/alunos.component';
import { DisciplinasCadastrarEditarComponent } from './pages/disciplinas/disciplinas-cadastrar-editar/disciplinas-cadastrar-editar.component';
import { DisciplinasComponent } from './pages/disciplinas/disciplinas.component';
import { ProfessoresCadastrarEditarComponent } from './pages/professores/professores-cadastrar-editar/professores-cadastrar-editar.component';
import { ProfessoresComponent } from './pages/professores/professores.component';

const routes: Routes = [
  {path:'alunos', component: AlunosComponent},
  {path:'alunos/cadastrar', component: AlunosCadastrarEditarComponent},
  {path:'disciplinas', component: DisciplinasComponent},
  {path: 'disciplinas/cadastrar', component: DisciplinasCadastrarEditarComponent},
  {path:'professores', component: ProfessoresComponent},
  {path: 'professores/cadastrar', component: ProfessoresCadastrarEditarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
