import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IAluno } from 'src/app/interfaces/aluno';
import { AlunosService } from 'src/app/services/alunos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-alunos-cadastrar-editar',
  templateUrl: './alunos-cadastrar-editar.component.html',
  styleUrls: ['./alunos-cadastrar-editar.component.css']
})
export class AlunosCadastrarEditarComponent implements OnInit {

  aluno: IAluno = {
    id: 0,
    nome:'',
    email: '',
    curso: ''
  }

  formAluno: FormGroup = this.preencheFormGroup(this.aluno);


  constructor(
    private alunoService:AlunosService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    if (id){
      this.alunoService.buscarPorId(id).subscribe((result: IAluno) => {
        this.formAluno = this.preencheFormGroup(result);
      }, error => {
        console.error(error);
      });
    }else{
      this.preencheFormGroup(this.aluno);
    }
  }

  preencheFormGroup(aluno:IAluno): FormGroup{

    return new FormGroup({
      id: new FormControl(aluno.id ? aluno.id : null),
      nome: new FormControl(aluno.nome, Validators.required),
      email: new FormControl(aluno.email, [Validators.required, Validators.email]),
      curso: new FormControl(aluno.curso, Validators.required)
    })

  }

  enviar(){
    const aluno: IAluno = this.formAluno.value;
    this.alunoService.criarEditar(aluno).subscribe(result => {
      Swal.fire('Sucesso', `${this.isEdit() ? 'Editado' : 'Cadastrado'} com sucesso`, 'success');
      this.router.navigate(['/alunos']);
    });
  }

  isEdit(){
    return !!this.formAluno.get("id")?.value;
  }

}
