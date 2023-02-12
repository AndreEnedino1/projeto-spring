import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AlunosComponent } from './pages/alunos/alunos.component';
import { DisciplinasComponent } from './pages/disciplinas/disciplinas.component';
import { ProfessoresComponent } from './pages/professores/professores.component';
import {HttpClientModule} from '@angular/common/http';
import { AlunosCadastrarEditarComponent } from './pages/alunos/alunos-cadastrar-editar/alunos-cadastrar-editar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfessoresCadastrarEditarComponent } from './pages/professores/professores-cadastrar-editar/professores-cadastrar-editar.component';
import { DisciplinasCadastrarEditarComponent } from './pages/disciplinas/disciplinas-cadastrar-editar/disciplinas-cadastrar-editar.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AlunosComponent,
    DisciplinasComponent,
    ProfessoresComponent,
    AlunosCadastrarEditarComponent,
    ProfessoresCadastrarEditarComponent,
    DisciplinasCadastrarEditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
