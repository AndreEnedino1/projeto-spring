package com.disciplina.backend.secretaria.service;

import com.disciplina.backend.secretaria.models.Professor;
import com.disciplina.backend.secretaria.repositories.ProfessorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProfessorService {

    @Autowired
    ProfessorRepository repository;

    public Professor create(Professor professor){

        return repository.save(professor);
    }

    public List<Professor> findAll(){
        return repository.findAll();
    }

    public Optional<Professor> findById(Long id){
        return repository.findById(id);
    }

    public void edit(Professor professor, Long id){
        Optional<Professor> professorToUpdate = repository.findById(id);
        professorToUpdate.ifPresent(professorBanco -> professorBanco.setNome(professor.getNome()));
        professorToUpdate.ifPresent(professorBanco -> professorBanco.setEmail(professor.getEmail()));

        repository.save(professorToUpdate.get());
    }

    public void delete(Long id){
        repository.deleteById(id);
    }
}
