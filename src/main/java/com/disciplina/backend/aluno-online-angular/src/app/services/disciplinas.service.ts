import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IDisciplina } from '../interfaces/disciplina';

@Injectable({
  providedIn: 'root'
})
export class DisciplinasService {

  api = environment.api;
  endpoint = 'disciplina';

  constructor(private http: HttpClient) { }

  listarDisciplinas(){
    return this.http.get<IDisciplina[]>(`${this.api}/${this.endpoint}/all/`);
  }

  buscarPorId(id:number){
    return this.http.get<IDisciplina>(`${this.api}/${this.endpoint}/${id}`);
  }

  criarEditar(disciplina:IDisciplina){
    if(disciplina.id){
      return this.http.put(`${this.api}/${this.endpoint}/editar/${disciplina.id}`, disciplina);
    }
    return this.http.post(`${this.api}/${this.endpoint}`, disciplina);
  }

  remover(disciplina:IDisciplina){
    console.log("Diciplina:", disciplina.id);
    return this.http.delete(`${this.api}/${this.endpoint}/delete/${disciplina.id}/`);
  }
}
