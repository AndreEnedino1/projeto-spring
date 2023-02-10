package com.disciplina.backend.matricula_aluno.contorllers;

import com.disciplina.backend.matricula_aluno.dtos.HistoricoAlunoDto;
import com.disciplina.backend.matricula_aluno.dtos.MatriculaAlunoNotasDto;
import com.disciplina.backend.matricula_aluno.models.MatriculaAluno;
import com.disciplina.backend.matricula_aluno.services.MatriculaAlunoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/matricula-aluno")
public class MatriculaAlunoController {

    @Autowired
    MatriculaAlunoService service;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<MatriculaAluno> create(@RequestBody MatriculaAluno matriculaAluno){

        MatriculaAluno matriculaAlunoCreated = service.create(matriculaAluno);

        return ResponseEntity.status(201).body(matriculaAlunoCreated);
    }

    @GetMapping("/all")
    @ResponseStatus(HttpStatus.OK)
    public List<MatriculaAluno> findAll(){

        return service.findAll();
    }

    @PatchMapping("/updateGrades/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void patchGrades(@RequestBody MatriculaAlunoNotasDto matriculaAlunoNotasDto, @PathVariable Long id){

        service.updateGrades(matriculaAlunoNotasDto, id);
    }

    @PatchMapping("/updateStatusToBreak/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void patchStatus(@PathVariable Long id){
        service.updateStatusToBreak(id);
    }

    @GetMapping("/historico-aluno/{id}")
    @ResponseStatus(HttpStatus.OK)
    public HistoricoAlunoDto studentGrades(@PathVariable Long id){
        return service.getHistoricoFromAluno(id);
    }
}
