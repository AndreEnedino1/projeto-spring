package com.disciplina.backend.matricula_aluno.services;

import com.disciplina.backend.matricula_aluno.dtos.DisciplinasAlunoDto;
import com.disciplina.backend.matricula_aluno.dtos.HistoricoAlunoDto;
import com.disciplina.backend.matricula_aluno.dtos.MatriculaAlunoNotasDto;
import com.disciplina.backend.matricula_aluno.models.MatriculaAluno;
import com.disciplina.backend.matricula_aluno.repositories.MatriculaAlunoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class MatriculaAlunoService {

    @Autowired
    MatriculaAlunoRepository repository;

    public MatriculaAluno create(MatriculaAluno matriculaAluno){

        matriculaAluno.setStatus("Matriculado");

        return repository.save(matriculaAluno);
    }

    public List<MatriculaAluno> findAll(){
        return repository.findAll();
    }

    public void updateGrades(MatriculaAlunoNotasDto matriculaAlunoNotasDto, Long id){
        Optional<MatriculaAluno> matriculaAlunoToUpdate = repository.findById(id);

        boolean needUpdate = false;

        if(StringUtils.hasLength(matriculaAlunoNotasDto.getNota1().toString())){
            matriculaAlunoToUpdate.ifPresent(matriculaAluno -> matriculaAluno.setNota1(matriculaAlunoNotasDto.getNota1()));
            needUpdate = true;
        }

        if(StringUtils.hasLength(matriculaAlunoNotasDto.getNota2().toString())){
            matriculaAlunoToUpdate.ifPresent(matriculaAluno -> matriculaAluno.setNota2(matriculaAlunoNotasDto.getNota2()));
            needUpdate = true;
        }

        if(needUpdate){
            if(matriculaAlunoToUpdate.get().getNota1() != null && matriculaAlunoToUpdate.get().getNota2() != null){
                if((matriculaAlunoToUpdate.get().getNota1() + matriculaAlunoToUpdate.get().getNota2()) / 2 >= 7){
                    matriculaAlunoToUpdate.ifPresent(matriculaAluno -> matriculaAluno.setStatus("Aprovado"));
                }
                else {
                    matriculaAlunoToUpdate.ifPresent(matriculaAluno -> matriculaAluno.setStatus("Reprovado"));
                }
            }

            repository.save(matriculaAlunoToUpdate.get());
        }
    }

    public void updateStatusToBreak(Long matriculaAlunoId){
        Optional<MatriculaAluno> matriculaAlunoToUpdate = repository.findById(matriculaAlunoId);

        if(matriculaAlunoToUpdate.isPresent()){
            if(Objects.equals(matriculaAlunoToUpdate.get().getStatus(), "Matriculado")){
                matriculaAlunoToUpdate.ifPresent(matriculaAluno -> matriculaAluno.setStatus("Trancado"));
            } else{
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Só é possível trancar com status matriculado");
            }
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Matrícula não existe");
        }

        repository.save(matriculaAlunoToUpdate.get());
    }

    public HistoricoAlunoDto getHistoricoFromAluno(Long alunoId){
        List<MatriculaAluno> matriculasDoAluno = repository.findByAlunoId(alunoId);

        if (!matriculasDoAluno.isEmpty()){
            HistoricoAlunoDto historico = new HistoricoAlunoDto();

            historico.setNome(matriculasDoAluno.get(0).getAluno().getNome());
            historico.setCurso(matriculasDoAluno.get(0).getAluno().getCurso());
            List<DisciplinasAlunoDto> disciplinasList = new ArrayList<>();

            for (MatriculaAluno matricula : matriculasDoAluno) {
                DisciplinasAlunoDto disciplinasAlunoDto = new DisciplinasAlunoDto();

                disciplinasAlunoDto.setNomeDisciplina(matricula.getDisciplina().getNome());
                disciplinasAlunoDto.setProfessorDisciplina(matricula.getDisciplina().getProfessor().getNome());
                disciplinasAlunoDto.setNota1(matricula.getNota1());
                disciplinasAlunoDto.setNota2(matricula.getNota2());
                if(matricula.getNota2() != null && matricula.getNota2() != null){
                    disciplinasAlunoDto.setMedia((matricula.getNota1() + matricula.getNota2()) / 2);
                } else {
                    disciplinasAlunoDto.setMedia(null);
                }
                disciplinasAlunoDto.setStatus(matricula.getStatus());

                disciplinasList.add(disciplinasAlunoDto);
            }

            historico.setDisciplinasAluno(disciplinasList);

            return historico;
        }

        throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Esse aluno não possui matrícula");
    }
}
