package io.jgcarlson.dojoandninjas.repositories;

import org.springframework.data.repository.CrudRepository;

import io.jgcarlson.dojoandninjas.models.Dojo;

public interface DojoRepo extends CrudRepository<Dojo, Long> {
	
	public Dojo findDojoByName(String name);

}
