import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IAluno } from '../interfaces/aluno';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {
  api = environment.api;
  endpoint = 'alunos';
  constructor(private http: HttpClient) { }

  listarAlunos(){
    return this.http.get<IAluno[]>(`${this.api}/${this.endpoint}/all/`);
  }

  criarEditar(aluno:IAluno){
    if(aluno.id){
      return this.http.put(`${this.api}/${this.endpoint}/${aluno.id}`, aluno)
    }
    return this.http.post(`${this.api}/${this.endpoint}/`, aluno);
  }

  remover(id:number){
    return this.http.delete(`${this.api}/${this.endpoint}/${id}`);
  }

  buscarPorId(id:number){
    return this.http.get<IAluno>(`${this.api}/${this.endpoint}/${id}`);
  }
}
