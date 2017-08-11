package io.jgcarlson.dojooverflow.repositories;

import org.springframework.data.repository.CrudRepository;

import io.jgcarlson.dojooverflow.models.Answer;

public interface AnswerRepository extends CrudRepository<Answer, Long> {

}
