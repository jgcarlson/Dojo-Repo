package io.jgcarlson.logreg.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import io.jgcarlson.logreg.models.Role;

@Repository
public interface RoleRepository extends CrudRepository<Role, Long> {
	
	 public List<Role> findAll();
	 public List<Role> findByName(String name);
	 
}
