import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IAluno } from 'src/app/interfaces/aluno';
import { AlunosService } from 'src/app/services/alunos.service';

@Component({
  selector: 'app-alunos-cadastrar-editar',
  templateUrl: './alunos-cadastrar-editar.component.html',
  styleUrls: ['./alunos-cadastrar-editar.component.css']
})
export class AlunosCadastrarEditarComponent implements OnInit {

  formAluno: FormGroup = new FormGroup({
    id: new FormControl(null),
    nome: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email, Validators.required]),
    curso: new FormControl('', Validators.required)
  })


  constructor(private alunoService:AlunosService) { }

  ngOnInit(): void {
  }

  enviar(){
    const aluno: IAluno = this.formAluno.value;
    this.alunoService.criar(aluno).subscribe(result => {
      console.log(result);
    });
  }

}
