import { Component, OnInit } from '@angular/core';
import { IAluno } from 'src/app/interfaces/aluno';
import { AlunosService } from 'src/app/services/alunos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  constructor(private alunosService: AlunosService) { }
  alunos: IAluno[] = [];

  ngOnInit(): void {
    this.listarTodos();
  }

  listarTodos(){
    this.alunosService.listarAlunos().subscribe((result: IAluno[]) => {
      this.alunos = result;
      console.log(this.alunos);
    });
  }

  remover(id:number){
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

        this.alunosService.remover(id).subscribe(result =>{
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
