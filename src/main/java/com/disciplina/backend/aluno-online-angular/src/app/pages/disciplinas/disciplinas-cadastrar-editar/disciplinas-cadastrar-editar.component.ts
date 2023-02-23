
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IDisciplina } from 'src/app/interfaces/disciplina';
import { IProfessor } from 'src/app/interfaces/professor';
import { DisciplinasService } from 'src/app/services/disciplinas.service';
import { ProfessoresService } from 'src/app/services/professores.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-disciplinas-cadastrar-editar',
  templateUrl: './disciplinas-cadastrar-editar.component.html',
  styleUrls: ['./disciplinas-cadastrar-editar.component.css']
})
export class DisciplinasCadastrarEditarComponent implements OnInit {

  disciplina:IDisciplina = {
    id:0,
    nome:''
  }

  formDiscipina: FormGroup = this.preencheFormGroup(this.disciplina);
  professores: IProfessor[] = [];

  constructor(
    private disciplinaService: DisciplinasService,
    private professorService: ProfessoresService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    if(id){
      this.disciplinaService.buscarPorId(id).subscribe((result:IDisciplina)=>{
        this.buscarProfessores();
        this.formDiscipina = this.preencheFormGroup(result);
      },error => {
        console.error(error);
      });
    }else{
      this.buscarProfessores();
    }

  }

  buscarProfessores(){
    this.professorService.listarProfessores().subscribe(result => {
      this.professores = result;
    });
  }

  preencheFormGroup(disciplina:IDisciplina): FormGroup{
    return new FormGroup({
      id: new FormControl(disciplina.id ? disciplina.id : null),
      nome: new FormControl(disciplina.nome ? disciplina.nome : '', Validators.required),
      idProfessor: new FormControl(null, Validators.required)
    });
  }

  enviar(){

    const disciplina: IDisciplina = {
      id: this.formDiscipina.get('id')?.value,
      nome: this.formDiscipina.get('nome')?.value,
      professor: { id: this.formDiscipina.get('idProfessor')?.value } as IProfessor
    }

    this.disciplinaService.criarEditar(disciplina).subscribe(result => {

      Swal.fire(
        'Sucesso',
        'Disciplina salva com sucesso',
        'success'
      );
      this.router.navigate(['/disciplinas']);
    })

  }

}
