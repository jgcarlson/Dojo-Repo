package io.jgcarlson.dojooverflow.repositories;

import org.springframework.data.repository.CrudRepository;

import io.jgcarlson.dojooverflow.models.Question;

public interface QuestionRepository extends CrudRepository<Question, Long> {

}
