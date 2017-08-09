package io.jgcarlson.grouplanguages2.repositories;

import org.springframework.data.repository.CrudRepository;

import io.jgcarlson.grouplanguages2.models.Language;

public interface LanguageRepository extends CrudRepository<Language, Long> {

}
