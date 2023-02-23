package com.disciplina.backend.secretaria.service;

import com.disciplina.backend.secretaria.models.Disciplina;
import com.disciplina.backend.secretaria.repositories.DisciplinaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DisciplinaService {

    @Autowired
    DisciplinaRepository repository;

    public Disciplina create(Disciplina disciplina){

        return repository.save(disciplina);

    }

    public List<Disciplina> findAll(){

        return repository.findAll();
    }

    public Optional<Disciplina> findById(Long id){

        return repository.findById(id);
    }



    public void delete(Long id){
        repository.deleteById(id);
    }
}
