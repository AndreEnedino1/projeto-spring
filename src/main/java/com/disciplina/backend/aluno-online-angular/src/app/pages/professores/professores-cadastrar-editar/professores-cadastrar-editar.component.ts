import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProfessoresService } from 'src/app/services/professores.service';
import { IProfessor } from 'src/app/interfaces/professor';

@Component({
  selector: 'app-professores-cadastrar-editar',
  templateUrl: './professores-cadastrar-editar.component.html',
  styleUrls: ['./professores-cadastrar-editar.component.css']
})
export class ProfessoresCadastrarEditarComponent implements OnInit {

  formProfessor: FormGroup = new FormGroup({
    id: new FormControl(null),
    nome: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email, Validators.required])
  })

  constructor(private professorService: ProfessoresService) { }

  ngOnInit(): void {
  }

  enviar(){
    const professor: IProfessor = this.formProfessor.value;
    this.professorService.criar(professor).subscribe(result =>{
      console.log(result);
    })
  }

}
