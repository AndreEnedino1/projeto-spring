package com.disciplina.backend.secretaria.repositories;

import com.disciplina.backend.secretaria.models.Professor;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProfessorRepository extends JpaRepository<Professor, Long> {


}
