package io.jgcarlson.employeesandmanagers.services;

import org.springframework.stereotype.Service;

import io.jgcarlson.employeesandmanagers.models.Manager;
import io.jgcarlson.employeesandmanagers.repositories.EmployeeRepository;

@Service
public class EmployeeService {
	
	private EmployeeRepository employeeRepository;
	
	public EmployeeService(EmployeeRepository employeeRepository) {
		this.employeeRepository = employeeRepository;
	}
	
	public Manager findManagerByEmployee(Long id) {
		return employeeRepository.findManagerByEmployee(id);
	}

}
