import { Component, OnInit } from '@angular/core';
import { IDisciplina } from 'src/app/interfaces/disciplina';
import { DisciplinasService } from 'src/app/services/disciplinas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-disciplinas',
  templateUrl: './disciplinas.component.html',
  styleUrls: ['./disciplinas.component.css']
})
export class DisciplinasComponent implements OnInit {

  constructor(private disciplinaService:DisciplinasService) { }

  disciplinas : IDisciplina[] = [];

  ngOnInit(): void {
    this.listarDisciplinas();
  }

  listarDisciplinas(){
    this.disciplinaService.listarDisciplinas().subscribe((result:IDisciplina[])=>{
      this.disciplinas = result;
    });
  }

  remover(disciplina:IDisciplina){
    Swal.fire({
      title: 'Deseja realmente remover?',
      text: "Disciplina será removida dos registros",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, deletar!'
    }).then((result) => {
      if (result.isConfirmed) {

        this.disciplinaService.remover(disciplina).subscribe(result =>{
          Swal.fire(
            'Removido!',
            'Disciplina removida com sucesso.',
            'success'
          );
          this.listarDisciplinas();
        }, error => {
          console.error(error);
        });
      }
    })
  }

}
