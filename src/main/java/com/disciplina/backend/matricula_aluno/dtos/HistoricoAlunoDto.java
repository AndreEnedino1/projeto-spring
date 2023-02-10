package com.disciplina.backend.matricula_aluno.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class HistoricoAlunoDto {

    private String nome;
    private String curso;
    private List<DisciplinasAlunoDto> disciplinasAluno;
}
