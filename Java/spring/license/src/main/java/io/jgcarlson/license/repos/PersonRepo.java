package io.jgcarlson.license.repos;

import org.springframework.data.repository.CrudRepository;

import io.jgcarlson.license.models.Person;

public interface PersonRepo extends CrudRepository<Person, Long> {

}
