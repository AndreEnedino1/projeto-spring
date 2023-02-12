import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IProfessor } from '../interfaces/professor';

@Injectable({
  providedIn: 'root'
})
export class ProfessoresService {
  api = environment.api;
  endpoint = 'professor';
  constructor(private http: HttpClient) { }

  listarProfessores(){
    return this.http.get<IProfessor[]>(`${this.api}/${this.endpoint}/all/`);
  }

  buscarPorId(id:number){
    return this.http.get<IProfessor>(`${this.api}/${this.endpoint}/${id}`);
  }

  criarEditar(professor: IProfessor){
    if(professor.id){
      return this.http.put(`${this.api}/${this.endpoint}/editar/${professor.id}`, professor)
    }
    return this.http.post(`${this.api}/${this.endpoint}/`, professor);
  }

  removerProfessor(id:number){
    return this.http.delete(`${this.api}/${this.endpoint}/delete/${id}`);
  }


}
