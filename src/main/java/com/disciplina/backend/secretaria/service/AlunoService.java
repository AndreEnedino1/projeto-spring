package com.disciplina.backend.secretaria.service;

import com.disciplina.backend.secretaria.models.Aluno;
import com.disciplina.backend.secretaria.repositories.AlunoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AlunoService {

    @Autowired
    AlunoRepository repository;

    public Aluno create(Aluno aluno){

        return repository.save(aluno);
    }

    public List<Aluno> findAll(){

        return repository.findAll();
    }

    public Optional<Aluno> findById(Long id){

        return repository.findById(id);
    }

    public Aluno edit(Aluno aluno, Long id){
        Optional<Aluno> alunoToUpdate = repository.findById(id);
        alunoToUpdate.ifPresent(alunoBanco -> alunoBanco.setNome(aluno.getNome()));
        alunoToUpdate.ifPresent(alunoBanco -> alunoBanco.setCurso(aluno.getCurso()));
        alunoToUpdate.ifPresent(alunoBanco -> alunoBanco.setEmail(aluno.getEmail()));
        return repository.save(alunoToUpdate.get());
    }

    public void delete(Long id){

        repository.deleteById(id);
    }
}
