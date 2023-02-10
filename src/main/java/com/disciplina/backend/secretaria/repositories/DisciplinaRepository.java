package com.disciplina.backend.secretaria.repositories;

import com.disciplina.backend.secretaria.models.Disciplina;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DisciplinaRepository extends JpaRepository<Disciplina, Long> {
}
