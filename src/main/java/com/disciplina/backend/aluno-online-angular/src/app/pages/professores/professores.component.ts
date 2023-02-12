import { Component, OnInit } from '@angular/core';
import { IProfessor } from 'src/app/interfaces/professor';
import { ProfessoresService } from 'src/app/services/professores.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  constructor(private professorService: ProfessoresService) { }
  professores: IProfessor[] = [];

  ngOnInit(): void {
    this.listarTodos();
  }

  listarTodos(){
    this.professorService.listarProfessores().subscribe((result:IProfessor[]) => {
      this.professores = result;
      console.log(this.professores);
    });
  }

  removerProfessor(id:number){

    Swal.fire({
      title: 'Deseja realmente remover?',
      text: "Aluno será removido dos registros",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, deletar!'
    }).then((result) => {
      if (result.isConfirmed) {

        this.professorService.removerProfessor(id).subscribe(result =>{
          Swal.fire(
            'Removido!',
            'Aluno removido com sucesso.',
            'success'
          );
          this.listarTodos();
        }, error => {
          console.error(error);
        });
      }
    })

  }

}


