package io.jgcarlson.employeesandmanagers.repositories;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import io.jgcarlson.employeesandmanagers.models.Employee;
import io.jgcarlson.employeesandmanagers.models.Manager;

@Repository
public interface EmployeeRepository extends CrudRepository<Employee, Long> {
	
	@Query("SELECT m FROM Employee e JOIN e.manager m WHERE e.id = ?1")
	Manager findManagerByEmployee(Long id);

}
