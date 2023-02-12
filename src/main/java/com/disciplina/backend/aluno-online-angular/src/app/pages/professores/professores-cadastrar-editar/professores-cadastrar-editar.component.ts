import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProfessoresService } from 'src/app/services/professores.service';
import { IProfessor } from 'src/app/interfaces/professor';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-professores-cadastrar-editar',
  templateUrl: './professores-cadastrar-editar.component.html',
  styleUrls: ['./professores-cadastrar-editar.component.css']
})
export class ProfessoresCadastrarEditarComponent implements OnInit {

  professor : IProfessor = {
    id:0,
    nome : '',
    email : ''
  }

  formProfessor: FormGroup = this.preencheFormGroup(this.professor);

  constructor(
    private professorService: ProfessoresService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    if(id){
      this.professorService.buscarPorId(id).subscribe((result : IProfessor) => {
        this.formProfessor = this.preencheFormGroup(result);
      }, error => {console.error(error)});
    }else{
      this.preencheFormGroup(this.professor);
    }
  }

  preencheFormGroup(professor:IProfessor): FormGroup{
    return new FormGroup({
      id: new FormControl(professor.id ? professor.id : null),
      nome: new FormControl(professor.nome, Validators.required),
      email: new FormControl(professor.email, [Validators.required, Validators.required])
    })

  }

  enviar(){
    const professor: IProfessor = this.formProfessor.value;
    this.professorService.criarEditar(professor).subscribe(result =>{
      Swal.fire('Sucesso', `${this.isEdit() ? 'Editado' : 'Cadastrado'} com sucesso`, 'success');
      this.router.navigate(['/professores']);
    })
  }

  isEdit(){
    return !!this.formProfessor.get("id")?.value;
  }

}
