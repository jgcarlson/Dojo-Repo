package io.jgcarlson.admindashboard.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import io.jgcarlson.admindashboard.models.Role;

@Repository
public interface RoleRepository extends CrudRepository<Role, Long> {
	 public List<Role> findAll();
	 public List<Role> findByName(String name);
}
