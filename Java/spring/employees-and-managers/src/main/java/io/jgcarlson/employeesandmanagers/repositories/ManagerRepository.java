package io.jgcarlson.employeesandmanagers.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import io.jgcarlson.employeesandmanagers.models.Employee;
import io.jgcarlson.employeesandmanagers.models.Manager;

@Repository
public interface ManagerRepository extends CrudRepository<Manager, Long> {
	
	@Query("SELECT e FROM Employee e JOIN e.manager WHERE e.manager.id = ?1")
	List<Employee> findEmployeesByManager(Long id);

}
