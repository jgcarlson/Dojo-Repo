package io.jgcarlson.dojoandninjas.repositories;

import org.springframework.data.repository.CrudRepository;

import io.jgcarlson.dojoandninjas.models.Ninja;

public interface NinjaRepo extends CrudRepository<Ninja, Long> {
	
	public Iterable<Ninja> findNinjaByDojoId(Long id);

}
